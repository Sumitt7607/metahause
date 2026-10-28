import { useState, useEffect } from "react";
import { announcement as defaultAnnouncement } from "@/content/site";

export type AnnouncementConfig = {
  enabled: boolean;
  badge: string;
  message: string;
  whatsappMessage: string;
};

const STORAGE_KEY = "metahaus_announcement_config";
const EVENT_NAME = "metahaus_announcement_change";

export function getStoredAnnouncement(): AnnouncementConfig {
  if (typeof window === "undefined") return defaultAnnouncement;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return { ...defaultAnnouncement, ...parsed };
    }
  } catch {
    // fallback to defaults on error
  }
  return defaultAnnouncement;
}

export function saveAnnouncement(config: AnnouncementConfig) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
    window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: config }));
  } catch (err) {
    console.error("Failed to save announcement to localStorage:", err);
  }
}

export function resetAnnouncement(): AnnouncementConfig {
  if (typeof window !== "undefined") {
    try {
      localStorage.removeItem(STORAGE_KEY);
      window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: defaultAnnouncement }));
    } catch (err) {
      console.error("Failed to reset announcement:", err);
    }
  }
  return defaultAnnouncement;
}

export function useAnnouncement(): AnnouncementConfig {
  // SSR-safe: start with defaults (server has no localStorage).
  // The useEffect below immediately reads localStorage on client mount,
  // which overwrites the SSR defaults with the saved config.
  const [config, setConfig] = useState<AnnouncementConfig>(defaultAnnouncement);

  useEffect(() => {
    const handleUpdate = () => {
      setConfig(getStoredAnnouncement());
    };

    // Read localStorage immediately on mount — this is what makes the saved
    // config appear after SSR hydration instead of the hardcoded defaults.
    handleUpdate();

    window.addEventListener(EVENT_NAME, handleUpdate);
    window.addEventListener("storage", handleUpdate);

    return () => {
      window.removeEventListener(EVENT_NAME, handleUpdate);
      window.removeEventListener("storage", handleUpdate);
    };
  }, []);

  return config;
}
