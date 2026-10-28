import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Sparkles, Save, RotateCcw, CheckCircle2, MessageCircle,
  Eye, EyeOff, ShieldCheck, ArrowRight, Settings2, Lock,
  Unlock, LogOut, KeyRound, AlertTriangle, ShieldAlert,
  Clock, Shield, RefreshCw, Globe, Check
} from "lucide-react";
import {
  deployAnnouncementUniversal,
  GITHUB_TOKEN_KEY,
} from "@/lib/announcementFn";
import {
  getStoredAnnouncement,
  saveAnnouncement,
  resetAnnouncement,
  type AnnouncementConfig,
} from "@/lib/announcementStore";
import {
  isSessionActive,
  loginAdmin,
  logoutAdmin,
  changeAdminPassword,
  resetAdminPasswordToDefault,
  isUsingDefaultPassword,
  getLockoutStatus,
  getLastLoginTimestamp,
  type LockoutStatus,
  DEFAULT_ADMIN_PASS,
} from "@/lib/adminAuth";
import { whatsappLink } from "@/content/site";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Client Announcement Manager — METAHAUS_BYFARAH" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminPage,
});

const PRESET_MONTHS = [
  "October – November 2026",
  "November – December 2026",
  "December 2026 – January 2027",
  "January – February 2027",
  "Q1 2027",
  "Q2 2027",
  "Summer 2027",
];

// Parse slots and period from the saved config message so they survive page reloads.
// Message format: "Now accepting <slots> new brand partners for <period>."
function parseSlotsAndPeriod(message: string): { slots: string; period: string } {
  const match = message.match(/^Now accepting (.+?) new brand partners for (.+?)\.?$/);
  if (match && match[1] && match[2]) {
    return { slots: match[1], period: match[2] };
  }
  return { slots: "2", period: "October \u2013 November 2026" };
}

function AdminPage() {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isInitializing, setIsInitializing] = useState<boolean>(true);
  const [passkeyInput, setPasskeyInput] = useState<string>("");
  const [showPasskey, setShowPasskey] = useState<boolean>(false);
  const [rememberDevice, setRememberDevice] = useState<boolean>(true);
  const [authError, setAuthError] = useState<string>("");
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);
  const [lockout, setLockout] = useState<LockoutStatus>({
    isLocked: false,
    remainingSeconds: 0,
    attemptsLeft: 5,
  });

  // Admin Panel Data State — config is read from localStorage on first render.
  // slots and period are parsed from the saved message so they match after a reload.
  const [config, setConfig] = useState<AnnouncementConfig>(() => getStoredAnnouncement());
  const [savedSuccess, setSavedSuccess] = useState<boolean>(false);
  const [slots, setSlots] = useState<string>(() => parseSlotsAndPeriod(getStoredAnnouncement().message).slots);
  const [period, setPeriod] = useState<string>(() => parseSlotsAndPeriod(getStoredAnnouncement().message).period);

  // Deploy state — tracks the GitHub API commit lifecycle
  type DeployStatus = "idle" | "deploying" | "success" | "error";
  const [deployStatus, setDeployStatus] = useState<DeployStatus>("idle");
  const [deployError, setDeployError] = useState<string>("");
  const [githubToken, setGithubToken] = useState<string>("");
  const [tokenSaveNotice, setTokenSaveNotice] = useState<boolean>(false);
  const [showTokenInput, setShowTokenInput] = useState<boolean>(false);

  // Security Settings Drawer / Modal
  const [showSecurityModal, setShowSecurityModal] = useState<boolean>(false);
  const [currentPass, setCurrentPass] = useState<string>("");
  const [newPass, setNewPass] = useState<string>("");
  const [confirmPass, setConfirmPass] = useState<string>("");
  const [passwordChangeMsg, setPasswordChangeMsg] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [isChangingPass, setIsChangingPass] = useState<boolean>(false);
  const [isDefaultPass, setIsDefaultPass] = useState<boolean>(true);
  const [lastLogin, setLastLogin] = useState<string | null>(null);

  // Check initial authentication and lockout
  useEffect(() => {
    setIsAuthenticated(isSessionActive());
    setLockout(getLockoutStatus());
    setIsDefaultPass(isUsingDefaultPassword());
    setLastLogin(getLastLoginTimestamp());
    if (typeof window !== "undefined") {
      const savedTok = localStorage.getItem(GITHUB_TOKEN_KEY) || "";
      setGithubToken(savedTok);
    }
    setIsInitializing(false);
  }, []);

  const handleSaveToken = (val: string) => {
    setGithubToken(val);
    if (typeof window !== "undefined") {
      if (val.trim()) {
        localStorage.setItem(GITHUB_TOKEN_KEY, val.trim());
      } else {
        localStorage.removeItem(GITHUB_TOKEN_KEY);
      }
      setTokenSaveNotice(true);
      setTimeout(() => setTokenSaveNotice(false), 3000);
    }
  };

  // Lockout live countdown timer
  useEffect(() => {
    if (!lockout.isLocked || lockout.remainingSeconds <= 0) return;

    const timer = setInterval(() => {
      setLockout((prev) => {
        if (prev.remainingSeconds <= 1) {
          return { isLocked: false, remainingSeconds: 0, attemptsLeft: 5 };
        }
        return { ...prev, remainingSeconds: prev.remainingSeconds - 1 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [lockout.isLocked, lockout.remainingSeconds]);

  // Keep local config in sync on mount, and re-parse slots/period from saved message
  useEffect(() => {
    if (isAuthenticated) {
      const current = getStoredAnnouncement();
      setConfig(current);
      const parsed = parseSlotsAndPeriod(current.message);
      setSlots(parsed.slots);
      setPeriod(parsed.period);
    }
  }, [isAuthenticated]);

  // Handle Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!passkeyInput.trim()) {
      setAuthError("Please enter your administrator passkey.");
      return;
    }

    setIsLoggingIn(true);
    setAuthError("");

    try {
      const res = await loginAdmin(passkeyInput, rememberDevice);
      if (res.success) {
        setIsAuthenticated(true);
        setPasskeyInput("");
        setIsDefaultPass(isUsingDefaultPassword());
        setLastLogin(getLastLoginTimestamp());
      } else {
        setAuthError(res.error || "Authentication failed.");
        if (res.lockout) {
          setLockout(res.lockout);
        }
      }
    } catch {
      setAuthError("An unexpected error occurred during authentication.");
    } finally {
      setIsLoggingIn(false);
    }
  };

  // Handle Logout
  const handleLogout = () => {
    logoutAdmin();
    setIsAuthenticated(false);
    setShowSecurityModal(false);
    setPasskeyInput("");
    setAuthError("");
  };

  // Handle Password Change
  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordChangeMsg(null);

    if (newPass !== confirmPass) {
      setPasswordChangeMsg({ type: "error", text: "New passkeys do not match." });
      return;
    }

    setIsChangingPass(true);
    try {
      const res = await changeAdminPassword(currentPass, newPass);
      if (res.success) {
        setPasswordChangeMsg({ type: "success", text: "Master passkey updated successfully!" });
        setCurrentPass("");
        setNewPass("");
        setConfirmPass("");
        setIsDefaultPass(isUsingDefaultPassword());
      } else {
        setPasswordChangeMsg({ type: "error", text: res.error || "Failed to update passkey." });
      }
    } catch {
      setPasswordChangeMsg({ type: "error", text: "Error updating passkey." });
    } finally {
      setIsChangingPass(false);
    }
  };

  // Handle Reset to Default Password
  const handleResetPassword = () => {
    if (confirm("Reset administrator passkey back to factory default ('metahaus2026')?")) {
      resetAdminPasswordToDefault();
      setIsDefaultPass(true);
      setPasswordChangeMsg({
        type: "success",
        text: "Passkey has been reset to default ('metahaus2026').",
      });
    }
  };

  // Quick apply helper
  const handleApplyPreset = (presetMonth: string) => {
    setPeriod(presetMonth);
    const newMsg = `Now accepting ${slots} new brand partners for ${presetMonth}.`;
    const newWa = `Hello Farah, I'd like to check your availability for ${presetMonth} campaign management.`;
    setConfig((prev) => ({
      ...prev,
      message: newMsg,
      whatsappMessage: newWa,
    }));
  };

  const handleUpdateSlots = (newSlots: string) => {
    setSlots(newSlots);
    const newMsg = `Now accepting ${newSlots} new brand partners for ${period}.`;
    setConfig((prev) => ({
      ...prev,
      message: newMsg,
    }));
  };

  const handleSave = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    // 1. Save to localStorage immediately (instant local preview)
    saveAnnouncement(config);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 4000);

    // 2. Commit to GitHub so ALL visitors see the change after deployment
    setDeployStatus("deploying");
    setDeployError("");

    try {
      const result = await deployAnnouncementUniversal({
        ...config,
        githubToken: githubToken.trim() || undefined,
      });

      if (result.success) {
        setDeployStatus("success");
        setTimeout(() => setDeployStatus("idle"), 10000);
      } else {
        setDeployStatus("error");
        setDeployError(result.error);
      }
    } catch (err) {
      setDeployStatus("error");
      setDeployError(err instanceof Error ? err.message : String(err));
    }
  };

  const handleReset = () => {
    if (confirm("Reset announcement banner back to original default?")) {
      const def = resetAnnouncement();
      setConfig(def);
      setPeriod("October – November 2026");
      setSlots("2");
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 3000);
    }
  };

  // Prevent flicker during initial state check
  if (isInitializing) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <RefreshCw className="h-4 w-4 animate-spin text-gold" />
          <span>Verifying security credentials…</span>
        </div>
      </div>
    );
  }

  // ============================================================
  // VIEW 1: SECURE LOGIN GATE (WHEN UNAUTHENTICATED)
  // ============================================================
  if (!isAuthenticated) {
    const minutes = Math.floor(lockout.remainingSeconds / 60);
    const seconds = lockout.remainingSeconds % 60;
    const formattedLockout = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

    return (
      <div className="min-h-screen bg-background flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          {/* Security Shield Icon */}
          <div className="flex justify-center">
            <div className="relative flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold/40 bg-card shadow-soft">
              <Shield className="h-8 w-8 text-gold" />
              <div className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary border border-gold/50 text-[10px] text-gold font-bold">
                <Lock className="h-2.5 w-2.5" />
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <span className="text-[11px] font-bold tracking-widest text-gold uppercase">
              METAHAUS_BYFARAH
            </span>
            <h1 className="mt-1 font-serif text-2xl sm:text-3xl text-foreground font-semibold">
              Restricted Admin Gateway
            </h1>
            <p className="mt-2 text-xs text-muted-foreground max-w-sm mx-auto leading-relaxed">
              Authorized agency management only. Enter your master passkey to access live controls.
            </p>
          </div>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="rounded-sm border border-border bg-card p-6 sm:p-8 shadow-soft">
            
            {/* Lockout Warning */}
            {lockout.isLocked ? (
              <div className="rounded-sm border border-rose-300 bg-rose-50/80 p-4 text-xs text-rose-800 mb-6">
                <div className="flex items-center gap-2 font-bold text-rose-900 mb-1">
                  <ShieldAlert className="h-4 w-4 shrink-0 text-rose-600" />
                  <span>Security Lockout Active</span>
                </div>
                <p>
                  Maximum consecutive failed attempts reached. Access is suspended for{" "}
                  <strong className="font-mono font-bold">{formattedLockout}</strong>.
                </p>
              </div>
            ) : null}

            {/* Error Message */}
            {authError && !lockout.isLocked && (
              <div className="rounded-sm border border-rose-200 bg-rose-50 p-3 text-xs text-rose-700 mb-5 flex items-start gap-2.5 animate-in fade-in">
                <AlertTriangle className="h-4 w-4 shrink-0 text-rose-600 mt-0.5" />
                <span className="leading-snug">{authError}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label
                  htmlFor="passkey"
                  className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5"
                >
                  Administrator Passkey
                </label>
                <div className="relative">
                  <input
                    id="passkey"
                    type={showPasskey ? "text" : "password"}
                    disabled={lockout.isLocked || isLoggingIn}
                    value={passkeyInput}
                    onChange={(e) => {
                      setPasskeyInput(e.target.value);
                      if (authError) setAuthError("");
                    }}
                    placeholder="Enter passkey…"
                    autoComplete="current-password"
                    autoFocus
                    className="w-full rounded-sm border border-input bg-background pl-4 pr-11 py-3 text-sm text-foreground outline-none transition-colors focus:border-gold disabled:opacity-50"
                  />
                  <button
                    type="button"
                    tabIndex={-1}
                    disabled={lockout.isLocked}
                    onClick={() => setShowPasskey(!showPasskey)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-1"
                    title={showPasskey ? "Hide passkey" : "Show passkey"}
                  >
                    {showPasskey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Remember device checkbox */}
              <div className="flex items-center justify-between text-xs">
                <label className="flex items-center gap-2 text-muted-foreground cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={rememberDevice}
                    onChange={(e) => setRememberDevice(e.target.checked)}
                    className="rounded border-border accent-gold h-4 w-4 cursor-pointer"
                  />
                  <span>Keep session active for 7 days</span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={lockout.isLocked || isLoggingIn}
                className="w-full inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-5 py-3 text-xs font-bold uppercase tracking-wider text-primary-foreground hover:bg-gold hover:text-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-soft"
              >
                {isLoggingIn ? (
                  <>
                    <RefreshCw className="h-4 w-4 animate-spin" />
                    <span>Verifying Credentials…</span>
                  </>
                ) : (
                  <>
                    <Unlock className="h-4 w-4" />
                    <span>Unlock Admin Panel</span>
                  </>
                )}
              </button>
            </form>

            {/* Default Passkey Info Card for Farah */}
            <div className="mt-6 border-t border-border pt-4">
              <div className="rounded-sm border border-gold/30 bg-gold/5 p-3 text-[11px] text-muted-foreground">
                <div className="flex items-center gap-1.5 font-semibold text-foreground mb-1">
                  <KeyRound className="h-3.5 w-3.5 text-gold" />
                  <span>First-Time Sign In Key</span>
                </div>
                <p className="leading-relaxed">
                  Default passkey is{" "}
                  <code className="font-mono font-bold text-foreground bg-background px-1.5 py-0.5 rounded border border-border">
                    {DEFAULT_ADMIN_PASS}
                  </code>
                  . You can change this to any private passkey after signing in.
                </p>
              </div>
            </div>

            {/* Return Link */}
            <div className="mt-5 text-center">
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-gold transition-colors font-medium"
              >
                <span>← Return to public website</span>
              </Link>
            </div>

          </div>
        </div>
      </div>
    );
  }

  // ============================================================
  // VIEW 2: AUTHENTICATED ADMIN DASHBOARD
  // ============================================================
  return (
    <div className="min-h-screen bg-background py-8 sm:py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

        {/* Top Security & Navigation Bar */}
        <div className="mb-6 rounded-sm border border-border bg-card p-4 sm:px-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
            </span>
            <div className="text-xs">
              <span className="font-bold text-foreground uppercase tracking-wider">
                Admin Session Active
              </span>
              <span className="text-muted-foreground ml-2 hidden sm:inline">
                {isDefaultPass ? (
                  <span className="text-amber-700 font-medium">· Using default passkey</span>
                ) : (
                  <span className="text-emerald-700 font-medium">· Custom encrypted passkey</span>
                )}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              type="button"
              onClick={() => {
                setShowSecurityModal(!showSecurityModal);
                setPasswordChangeMsg(null);
              }}
              className={`inline-flex items-center gap-1.5 rounded-sm border px-3 py-1.5 text-xs font-semibold transition-colors ${
                showSecurityModal
                  ? "border-gold bg-gold/15 text-gold-dark"
                  : "border-border bg-background text-foreground hover:border-gold hover:text-gold"
              }`}
            >
              <KeyRound className="h-3.5 w-3.5 text-gold" />
              <span>Security & Passkey</span>
            </button>

            <Link
              to="/"
              className="inline-flex items-center gap-1.5 rounded-sm border border-border bg-background px-3 py-1.5 text-xs font-semibold text-foreground hover:border-gold hover:text-gold transition-colors"
            >
              <span>Live Site</span>
              <ArrowRight className="h-3 w-3" />
            </Link>

            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 rounded-sm border border-rose-200 bg-rose-50/60 px-3 py-1.5 text-xs font-bold text-rose-700 hover:bg-rose-100 transition-colors"
              title="Terminate admin session"
            >
              <LogOut className="h-3.5 w-3.5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>

        {/* Security Settings Section (Toggleable) */}
        {showSecurityModal && (
          <div className="mb-8 rounded-sm border border-gold/40 bg-card p-6 shadow-soft animate-in fade-in slide-in-from-top-2">
            <div className="flex items-center justify-between border-b border-border pb-4 mb-5">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-gold" />
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  Security & Administrator Passkey Settings
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowSecurityModal(false)}
                className="text-xs text-muted-foreground hover:text-foreground font-semibold"
              >
                ✕ Close
              </button>
            </div>

            {isDefaultPass && (
              <div className="mb-5 rounded-sm border border-amber-300 bg-amber-50 p-3 text-xs text-amber-900 flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 shrink-0 text-amber-600 mt-0.5" />
                <div>
                  <strong className="font-semibold block">Security Recommendation:</strong>
                  Your account is currently using the factory default passkey (<code>{DEFAULT_ADMIN_PASS}</code>). For maximum security, we recommend setting a private passkey below.
                </div>
              </div>
            )}

            {passwordChangeMsg && (
              <div
                className={`mb-5 rounded-sm border p-3 text-xs flex items-center gap-2 ${
                  passwordChangeMsg.type === "success"
                    ? "border-emerald-300 bg-emerald-50 text-emerald-800"
                    : "border-rose-300 bg-rose-50 text-rose-800"
                }`}
              >
                {passwordChangeMsg.type === "success" ? (
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                ) : (
                  <AlertTriangle className="h-4 w-4 text-rose-600 shrink-0" />
                )}
                <span>{passwordChangeMsg.text}</span>
              </div>
            )}

            <form onSubmit={handleChangePassword} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block mb-1">
                    Current Passkey
                  </label>
                  <input
                    type="password"
                    value={currentPass}
                    onChange={(e) => setCurrentPass(e.target.value)}
                    placeholder="Current passkey"
                    required
                    className="w-full rounded-sm border border-input bg-background px-3 py-2 text-xs text-foreground outline-none focus:border-gold"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block mb-1">
                    New Passkey (min 8 chars)
                  </label>
                  <input
                    type="password"
                    value={newPass}
                    onChange={(e) => setNewPass(e.target.value)}
                    placeholder="New private passkey"
                    required
                    minLength={8}
                    className="w-full rounded-sm border border-input bg-background px-3 py-2 text-xs text-foreground outline-none focus:border-gold"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block mb-1">
                    Confirm New Passkey
                  </label>
                  <input
                    type="password"
                    value={confirmPass}
                    onChange={(e) => setConfirmPass(e.target.value)}
                    placeholder="Retype new passkey"
                    required
                    minLength={8}
                    className="w-full rounded-sm border border-input bg-background px-3 py-2 text-xs text-foreground outline-none focus:border-gold"
                  />
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <div className="flex items-center gap-2">
                  <button
                    type="submit"
                    disabled={isChangingPass}
                    className="inline-flex items-center gap-1.5 rounded-sm bg-primary px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary-foreground hover:bg-gold hover:text-primary transition-all disabled:opacity-50"
                  >
                    <Save className="h-3.5 w-3.5" />
                    <span>{isChangingPass ? "Updating…" : "Save New Passkey"}</span>
                  </button>

                  {!isDefaultPass && (
                    <button
                      type="button"
                      onClick={handleResetPassword}
                      className="inline-flex items-center gap-1.5 rounded-sm border border-border px-3 py-2 text-xs text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                    >
                      <RotateCcw className="h-3 w-3" />
                      <span>Reset to Factory Default</span>
                    </button>
                  )}
                </div>

                {lastLogin && (
                  <span className="text-[11px] text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    Last session initiated: {new Date(lastLogin).toLocaleString()}
                  </span>
                )}
              </div>
            </form>
          </div>
        )}

        {/* Dashboard Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-gold font-semibold">
              <Settings2 className="h-3.5 w-3.5" />
              <span>Agency Quick Controls</span>
            </div>
            <h1 className="mt-2 font-serif text-3xl sm:text-4xl text-foreground">
              Announcement Ribbon Manager
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
              Easily change the monthly availability banner on your header without touching code.
            </p>
          </div>
        </div>

        {/* Live Preview Bar */}
        <div className="mt-8 space-y-2">
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Eye className="h-3.5 w-3.5 text-gold" /> Live Header Banner Preview
            </span>
            <span className={config.enabled ? "text-emerald-600 font-bold" : "text-rose-600 font-bold"}>
              {config.enabled ? "● Currently Visible" : "○ Currently Hidden"}
            </span>
          </div>

          <div className="overflow-hidden rounded-sm border border-border shadow-soft">
            {config.enabled ? (
              <div className="bg-primary px-4 py-2 text-primary-foreground text-xs">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="relative flex h-2 w-2 shrink-0">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                    </span>
                    <span className="font-medium text-emerald-300 shrink-0">{config.badge}</span>
                    <span className="text-primary-foreground/90 truncate text-[11px] sm:text-xs">
                      {config.message}
                    </span>
                  </div>
                  <a
                    href={whatsappLink(config.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-1 text-[11px] text-emerald-400 hover:text-emerald-300 font-semibold underline"
                  >
                    <MessageCircle className="h-3 w-3" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              <div className="bg-secondary/60 p-4 text-center text-xs text-muted-foreground italic">
                Banner is currently disabled. Toggle "Enable Ribbon" below to turn it back on.
              </div>
            )}
          </div>
        </div>

        {/* Form Controls */}
        <form
          onSubmit={handleSave}
          className="mt-8 space-y-6 rounded-sm border border-border bg-card p-6 sm:p-8 shadow-xs"
        >
          {/* Toggle Banner */}
          <div className="flex items-center justify-between border-b border-border pb-5">
            <div>
              <label
                htmlFor="banner-enabled"
                className="font-serif text-lg font-medium text-foreground block cursor-pointer"
              >
                Enable Announcement Ribbon
              </label>
              <p className="text-xs text-muted-foreground">
                Turn the top black ribbon on or off on your header.
              </p>
            </div>
            <input
              id="banner-enabled"
              type="checkbox"
              checked={config.enabled}
              onChange={(e) => setConfig({ ...config, enabled: e.target.checked })}
              className="h-5 w-5 rounded border-border accent-gold cursor-pointer"
            />
          </div>

          {/* Quick Month Presets */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-gold block mb-2">
              ⚡ 1-Click Month Presets:
            </label>
            <div className="flex flex-wrap gap-2">
              {PRESET_MONTHS.map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => handleApplyPreset(m)}
                  className={`rounded-sm border px-3 py-1.5 text-xs font-medium transition-all ${
                    period === m
                      ? "border-gold bg-gold/15 text-gold-dark font-bold shadow-xs"
                      : "border-border bg-background text-foreground hover:border-gold hover:text-gold"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 pt-2">
            {/* Number of Slots */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-foreground block mb-1">
                Open Client Slots:
              </label>
              <input
                type="text"
                value={slots}
                onChange={(e) => handleUpdateSlots(e.target.value)}
                placeholder="2"
                className="w-full rounded-sm border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:border-gold focus:outline-none"
              />
              <span className="text-[11px] text-muted-foreground mt-1 block">
                E.g. 2, 3, or "strictly 2"
              </span>
            </div>

            {/* Custom Month or Period Text */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-foreground block mb-1">
                Active Month(s) / Quarter:
              </label>
              <input
                type="text"
                value={period}
                onChange={(e) => handleApplyPreset(e.target.value)}
                placeholder="November – December 2026"
                className="w-full rounded-sm border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:border-gold focus:outline-none"
              />
              <span className="text-[11px] text-muted-foreground mt-1 block">
                Type any custom month or date range.
              </span>
            </div>
          </div>

          {/* Full Custom Banner Text */}
          <div className="border-t border-border pt-4">
            <label className="text-xs font-bold uppercase tracking-wider text-foreground block mb-1">
              Full Banner Message Text:
            </label>
            <textarea
              rows={2}
              value={config.message}
              onChange={(e) => setConfig({ ...config, message: e.target.value })}
              className="w-full rounded-sm border border-border bg-background p-3 text-sm text-foreground focus:border-gold focus:outline-none leading-relaxed"
            />
            <span className="text-[11px] text-muted-foreground mt-1 block">
              This text displays inside the top ribbon on desktop & mobile.
            </span>
          </div>

          {/* Pre-filled WhatsApp Inquiry Message */}
          <div className="border-t border-border pt-4">
            <label className="text-xs font-bold uppercase tracking-wider text-foreground block mb-1">
              WhatsApp Pre-filled Inquire Message:
            </label>
            <textarea
              rows={2}
              value={config.whatsappMessage}
              onChange={(e) => setConfig({ ...config, whatsappMessage: e.target.value })}
              className="w-full rounded-sm border border-border bg-background p-3 text-sm text-foreground focus:border-gold focus:outline-none leading-relaxed"
            />
            <span className="text-[11px] text-muted-foreground mt-1 block">
              When a visitor clicks "WhatsApp" on the banner, this text will be pre-typed into WhatsApp for them.
            </span>
          </div>

          {/* Action Buttons */}
          <div className="border-t border-border pt-6 flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="submit"
                  disabled={deployStatus === "deploying"}
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-sm bg-primary px-6 py-3 text-xs font-bold uppercase tracking-wider text-primary-foreground hover:bg-gold hover:text-primary transition-all shadow-soft disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {deployStatus === "deploying" ? (
                    <>
                      <RefreshCw className="h-4 w-4 animate-spin" />
                      <span>Saving & Deploying…</span>
                    </>
                  ) : (
                    <>
                      <Globe className="h-4 w-4" />
                      <span>Save & Deploy to Live Site</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  disabled={deployStatus === "deploying"}
                  className="inline-flex items-center justify-center gap-1.5 rounded-sm border border-border px-4 py-3 text-xs font-semibold text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors disabled:opacity-50"
                  title="Reset to code defaults"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span>Reset</span>
                </button>
              </div>

              {/* Status feedback */}
              <div className="flex flex-col items-end gap-1.5 w-full sm:w-auto">
                {savedSuccess && (
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-3.5 py-2 rounded-sm animate-in fade-in">
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    <span>Saved locally! Deploying to all visitors…</span>
                  </div>
                )}
                {deployStatus === "success" && (
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-300 px-3.5 py-2 rounded-sm animate-in fade-in">
                    <Globe className="h-4 w-4 shrink-0" />
                    <span>✓ Deployed to GitHub! Goes live for everyone in ~1–2 min.</span>
                  </div>
                )}
                {deployStatus === "error" && (
                  <div className="flex flex-col gap-1 text-xs font-semibold text-rose-700 bg-rose-50 border border-rose-200 px-3.5 py-2 rounded-sm animate-in fade-in max-w-sm">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 shrink-0 text-rose-500" />
                      <span className="font-bold">Deploy failed — changes saved locally only.</span>
                    </div>
                    <span className="text-rose-600 font-normal pl-6">{deployError}</span>
                  </div>
                )}
              </div>
            </div>

            {/* GitHub Deployment Integration Card */}
            <div className="mt-2 rounded-sm border border-border bg-secondary/40 p-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className={`h-2.5 w-2.5 rounded-full ${githubToken ? "bg-emerald-500 animate-pulse" : "bg-amber-500"}`} />
                  <span className="text-xs font-semibold text-foreground">
                    {githubToken ? "GitHub Live Auto-Deploy: Connected" : "GitHub Live Auto-Deploy: Token Needed"}
                  </span>
                  <span className="text-[11px] text-muted-foreground hidden sm:inline">
                    (Repo: Sumitt7607/metahause)
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setShowTokenInput(!showTokenInput)}
                  className="text-xs text-gold hover:underline font-medium text-left sm:text-right"
                >
                  {showTokenInput ? "Hide Token Settings" : githubToken ? "Manage / Change Token" : "Enter GitHub Token"}
                </button>
              </div>

              {(!githubToken || showTokenInput) && (
                <div className="mt-3 pt-3 border-t border-border/60 space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block">
                    GitHub Personal Access Token (PAT):
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="password"
                      value={githubToken}
                      onChange={(e) => setGithubToken(e.target.value)}
                      placeholder="github_pat_..."
                      className="flex-1 rounded-sm border border-input bg-background px-3 py-2 text-xs font-mono text-foreground focus:border-gold focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => handleSaveToken(githubToken)}
                      className="rounded-sm bg-primary px-3 py-2 text-xs font-bold text-primary-foreground hover:bg-gold hover:text-primary transition-colors flex items-center gap-1.5"
                    >
                      <Check className="h-3.5 w-3.5" />
                      <span>Save Token</span>
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] text-muted-foreground">
                      Stored privately in your browser. Enables clicking "Save & Deploy" to publish directly to your live domain.
                    </p>
                    {tokenSaveNotice && (
                      <span className="text-[11px] text-emerald-600 font-bold flex items-center gap-1">
                        <CheckCircle2 className="h-3 w-3" /> Saved!
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* GitHub token setup hint */}
            {deployStatus === "error" && !githubToken && (
              <div className="rounded-sm border border-amber-200 bg-amber-50 p-4 text-xs text-amber-900">
                <p className="font-bold mb-1">⚡ Connect your token above to deploy live:</p>
                <p className="text-amber-800 leading-relaxed">
                  Paste your GitHub token in the box above and click <strong>Save Token</strong>. Once saved, clicking <strong>Save & Deploy to Live Site</strong> will automatically update the live banner for every visitor worldwide in 1–2 minutes!
                </p>
              </div>
            )}
          </div>
        </form>

        {/* Permanent Code Snippet (Optional Reference) */}
        <div className="mt-8 rounded-sm border border-border bg-secondary/30 p-5 text-xs text-muted-foreground">
          <div className="flex items-center gap-2 font-semibold text-foreground mb-1">
            <ShieldCheck className="h-4 w-4 text-gold" />
            <span>Permanent Code Location (Optional)</span>
          </div>
          <p className="leading-relaxed">
            Changes saved here are active immediately in the browser. If you ever want to permanently bake your new months into source code, simply copy this into{" "}
            <code className="bg-card px-1.5 py-0.5 rounded border border-border font-mono text-[11px] text-foreground">
              src/content/site.ts
            </code>
            :
          </p>
          <pre className="mt-3 overflow-x-auto rounded-sm bg-slate-950 p-3.5 font-mono text-[11px] text-slate-200 border border-slate-800">
{`export const announcement = {
  enabled: ${config.enabled},
  badge: "Live:",
  message: "${config.message}",
  whatsappMessage: "${config.whatsappMessage}",
};`}
          </pre>
        </div>

      </div>
    </div>
  );
}
