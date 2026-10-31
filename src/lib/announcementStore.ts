import { useState, useEffect } from "react";
import { announcement as defaultAnnouncement } from "@/content/site";
import { getLiveAnnouncementFn, type AnnouncementConfig } from "./announcementDb";

export type { AnnouncementConfig };

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
  const [config, setConfig] = useState<AnnouncementConfig>(() => getStoredAnnouncement());

  useEffect(() => {
    // 1. Sync with local cache first
    const cached = getStoredAnnouncement();
    setConfig(cached);

    // 2. Fetch fresh live announcement from MongoDB
    getLiveAnnouncementFn()
      .then((live) => {
        if (live && live.message) {
          saveAnnouncement(live);
          setConfig(live);
        }
      })
      .catch((err) => {
        console.warn("[Announcement] Using cached config:", err);
      });

    // 3. Listen to local changes across components or browser tabs
    const handleUpdate = () => {
      setConfig(getStoredAnnouncement());
    };

    window.addEventListener(EVENT_NAME, handleUpdate);
    window.addEventListener("storage", handleUpdate);

    return () => {
      window.removeEventListener(EVENT_NAME, handleUpdate);
      window.removeEventListener("storage", handleUpdate);
    };
  }, []);

  return config;
}
