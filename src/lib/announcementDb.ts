import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { announcement as defaultAnnouncement } from "@/content/site";
import { getMongoDb } from "./mongodb";

export type AnnouncementConfig = {
  enabled: boolean;
  badge: string;
  message: string;
  whatsappMessage: string;
};

interface AnnouncementDoc {
  _id: string;
  enabled: boolean;
  badge: string;
  message: string;
  whatsappMessage: string;
  updatedAt?: Date;
}

const AnnouncementSchema = z.object({
  enabled: z.boolean(),
  badge: z.string(),
  message: z.string(),
  whatsappMessage: z.string(),
});

const COLLECTION = "announcements";
const DOC_ID = "active_ribbon";

/**
 * Fetch the active announcement from MongoDB.
 * Falls back to default site configuration if not found or on network error.
 */
export const getLiveAnnouncementFn = createServerFn({ method: "GET" }).handler(
  async (): Promise<AnnouncementConfig> => {
    try {
      const db = await getMongoDb();
      const doc = await db
        .collection<AnnouncementDoc>(COLLECTION)
        .findOne({ _id: DOC_ID });
      if (doc) {
        return {
          enabled: Boolean(doc.enabled),
          badge: String(doc.badge || defaultAnnouncement.badge),
          message: String(doc.message || defaultAnnouncement.message),
          whatsappMessage: String(
            doc.whatsappMessage || defaultAnnouncement.whatsappMessage
          ),
        };
      }
    } catch (err) {
      console.warn("[MongoDB] Using fallback announcement:", err);
    }
    return defaultAnnouncement;
  }
);

/**
 * Save updated announcement into MongoDB.
 */
export const saveLiveAnnouncementFn = createServerFn({ method: "POST" })
  .validator((d: unknown) => AnnouncementSchema.parse(d))
  .handler(async ({ data }): Promise<{ success: boolean; error?: string }> => {
    try {
      const db = await getMongoDb();
      await db.collection<AnnouncementDoc>(COLLECTION).updateOne(
        { _id: DOC_ID },
        {
          $set: {
            enabled: data.enabled,
            badge: data.badge,
            message: data.message,
            whatsappMessage: data.whatsappMessage,
            updatedAt: new Date(),
          },
        },
        { upsert: true }
      );
      return { success: true };
    } catch (err) {
      console.error("[MongoDB] Failed to save announcement:", err);
      return {
        success: false,
        error: err instanceof Error ? err.message : String(err),
      };
    }
  });

/**
 * Reset announcement in MongoDB back to code default.
 */
export const resetLiveAnnouncementFn = createServerFn({ method: "POST" }).handler(
  async (): Promise<{ success: boolean; config: AnnouncementConfig }> => {
    try {
      const db = await getMongoDb();
      await db.collection<AnnouncementDoc>(COLLECTION).updateOne(
        { _id: DOC_ID },
        {
          $set: {
            enabled: defaultAnnouncement.enabled,
            badge: defaultAnnouncement.badge,
            message: defaultAnnouncement.message,
            whatsappMessage: defaultAnnouncement.whatsappMessage,
            updatedAt: new Date(),
          },
        },
        { upsert: true }
      );
    } catch (err) {
      console.error("[MongoDB] Failed to reset announcement:", err);
    }
    return { success: true, config: defaultAnnouncement };
  }
);
