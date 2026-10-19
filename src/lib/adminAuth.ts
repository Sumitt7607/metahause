// Admin Authentication & Security Layer for METAHAUS_BYFARAH

const SESSION_KEY = "metahaus_admin_session";
const CUSTOM_HASH_KEY = "metahaus_admin_pass_hash";
const ATTEMPTS_KEY = "metahaus_admin_attempts";
const LAST_LOGIN_KEY = "metahaus_admin_last_login";

// Default factory password
export const DEFAULT_ADMIN_PASS = "metahaus2026";
const MAX_ATTEMPTS = 5;
const LOCKOUT_DURATION_MS = 15 * 60 * 1000; // 15 minutes
const DEFAULT_SESSION_HOURS = 8;
const REMEMBER_SESSION_DAYS = 7;

export interface SessionData {
  token: string;
  expiresAt: number;
  remember: boolean;
  createdAt: number;
}

export interface LockoutStatus {
  isLocked: boolean;
  remainingSeconds: number;
  attemptsLeft: number;
}

// SHA-256 Hashing helper using Web Crypto API
export async function hashPassword(plain: string): Promise<string> {
  const normalized = plain.trim();
  if (typeof window !== "undefined" && window.crypto && window.crypto.subtle) {
    const encoder = new TextEncoder();
    const data = encoder.encode(normalized);
    const hashBuffer = await window.crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  }
  // Simple fallback string hashing in non-subtle environments
  let hash = 0;
  for (let i = 0; i < normalized.length; i++) {
    hash = (hash << 5) - hash + normalized.charCodeAt(i);
    hash |= 0;
  }
  return `fallback_${Math.abs(hash)}`;
}

// Get lockout status
export function getLockoutStatus(): LockoutStatus {
  if (typeof window === "undefined") {
    return { isLocked: false, remainingSeconds: 0, attemptsLeft: MAX_ATTEMPTS };
  }

  try {
    const record = localStorage.getItem(ATTEMPTS_KEY);
    if (!record) {
      return { isLocked: false, remainingSeconds: 0, attemptsLeft: MAX_ATTEMPTS };
    }
    const data = JSON.parse(record);
    const now = Date.now();

    if (data.lockedUntil && data.lockedUntil > now) {
      const remainingSeconds = Math.ceil((data.lockedUntil - now) / 1000);
      return { isLocked: true, remainingSeconds, attemptsLeft: 0 };
    }

    // If lock period has expired, reset attempts
    if (data.lockedUntil && data.lockedUntil <= now) {
      localStorage.removeItem(ATTEMPTS_KEY);
      return { isLocked: false, remainingSeconds: 0, attemptsLeft: MAX_ATTEMPTS };
    }

    const count = typeof data.count === "number" ? data.count : 0;
    const attemptsLeft = Math.max(0, MAX_ATTEMPTS - count);
    return { isLocked: false, remainingSeconds: 0, attemptsLeft };
  } catch {
    return { isLocked: false, remainingSeconds: 0, attemptsLeft: MAX_ATTEMPTS };
  }
}

// Record a failed attempt
function recordFailedAttempt(): LockoutStatus {
  if (typeof window === "undefined") {
    return { isLocked: false, remainingSeconds: 0, attemptsLeft: MAX_ATTEMPTS - 1 };
  }

  try {
    const record = localStorage.getItem(ATTEMPTS_KEY);
    const now = Date.now();
    let count = 1;

    if (record) {
      const data = JSON.parse(record);
      count = (data.count || 0) + 1;
    }

    if (count >= MAX_ATTEMPTS) {
      const lockedUntil = now + LOCKOUT_DURATION_MS;
      localStorage.setItem(ATTEMPTS_KEY, JSON.stringify({ count, lockedUntil }));
      return {
        isLocked: true,
        remainingSeconds: Math.ceil(LOCKOUT_DURATION_MS / 1000),
        attemptsLeft: 0,
      };
    } else {
      localStorage.setItem(ATTEMPTS_KEY, JSON.stringify({ count, lockedUntil: null }));
      return {
        isLocked: false,
        remainingSeconds: 0,
        attemptsLeft: MAX_ATTEMPTS - count,
      };
    }
  } catch {
    return { isLocked: false, remainingSeconds: 0, attemptsLeft: MAX_ATTEMPTS - 1 };
  }
}

// Clear failed attempts upon successful login
function clearFailedAttempts() {
  if (typeof window !== "undefined") {
    localStorage.removeItem(ATTEMPTS_KEY);
  }
}

// Verify entered password
export async function verifyAdminPassword(inputPass: string): Promise<boolean> {
  const entered = inputPass.trim();
  if (!entered) return false;

  const inputHash = await hashPassword(entered);

  if (typeof window !== "undefined") {
    const customHash = localStorage.getItem(CUSTOM_HASH_KEY);
    if (customHash) {
      return inputHash === customHash;
    }
  }

  // Fallback to default password hash
  const defaultHash = await hashPassword(DEFAULT_ADMIN_PASS);
  return inputHash === defaultHash;
}

// Check if currently authenticated
export function isSessionActive(): boolean {
  if (typeof window === "undefined") return false;

  try {
    // Check localStorage (for remember me) or sessionStorage
    let raw = sessionStorage.getItem(SESSION_KEY);
    if (!raw) {
      raw = localStorage.getItem(SESSION_KEY);
    }
    if (!raw) return false;

    const session: SessionData = JSON.parse(raw);
    const now = Date.now();

    if (session.expiresAt && session.expiresAt > now) {
      return true;
    }

    // Expired
    logoutAdmin();
    return false;
  } catch {
    return false;
  }
}

// Sign in with password
export async function loginAdmin(
  password: string,
  rememberDevice: boolean = false
): Promise<{ success: boolean; error?: string; lockout?: LockoutStatus }> {
  const lock = getLockoutStatus();
  if (lock.isLocked) {
    const mins = Math.ceil(lock.remainingSeconds / 60);
    return {
      success: false,
      error: `Too many failed attempts. Security lock active for ${mins} more minute(s).`,
      lockout: lock,
    };
  }

  const isValid = await verifyAdminPassword(password);
  if (!isValid) {
    const updatedLock = recordFailedAttempt();
    if (updatedLock.isLocked) {
      return {
        success: false,
        error: `Account locked for 15 minutes due to 5 consecutive failed attempts.`,
        lockout: updatedLock,
      };
    }
    return {
      success: false,
      error: `Incorrect security passkey. ${updatedLock.attemptsLeft} attempt(s) remaining before security lockout.`,
      lockout: updatedLock,
    };
  }

  // Successful login
  clearFailedAttempts();

  const now = Date.now();
  const durationMs = rememberDevice
    ? REMEMBER_SESSION_DAYS * 24 * 60 * 60 * 1000
    : DEFAULT_SESSION_HOURS * 60 * 60 * 1000;

  const session: SessionData = {
    token: `mh_auth_${Math.random().toString(36).substring(2)}_${now}`,
    expiresAt: now + durationMs,
    remember: rememberDevice,
    createdAt: now,
  };

  const serialized = JSON.stringify(session);
  if (rememberDevice) {
    localStorage.setItem(SESSION_KEY, serialized);
  } else {
    sessionStorage.setItem(SESSION_KEY, serialized);
  }

  // Record timestamp
  localStorage.setItem(LAST_LOGIN_KEY, new Date().toISOString());

  return { success: true };
}

// Terminate session
export function logoutAdmin() {
  if (typeof window !== "undefined") {
    sessionStorage.removeItem(SESSION_KEY);
    localStorage.removeItem(SESSION_KEY);
  }
}

// Change password
export async function changeAdminPassword(
  currentPass: string,
  newPass: string
): Promise<{ success: boolean; error?: string }> {
  const isCurrentValid = await verifyAdminPassword(currentPass);
  if (!isCurrentValid) {
    return { success: false, error: "Current password is incorrect." };
  }

  if (newPass.trim().length < 8) {
    return {
      success: false,
      error: "New password must be at least 8 characters long for security.",
    };
  }

  const newHash = await hashPassword(newPass.trim());
  localStorage.setItem(CUSTOM_HASH_KEY, newHash);
  return { success: true };
}

// Reset password to default
export function resetAdminPasswordToDefault() {
  if (typeof window !== "undefined") {
    localStorage.removeItem(CUSTOM_HASH_KEY);
  }
}

// Check if using default password
export function isUsingDefaultPassword(): boolean {
  if (typeof window === "undefined") return true;
  return !localStorage.getItem(CUSTOM_HASH_KEY);
}

// Get last login ISO string
export function getLastLoginTimestamp(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(LAST_LOGIN_KEY);
}
