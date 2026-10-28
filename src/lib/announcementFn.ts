/**
 * Server function: commits updated announcement config to GitHub.
 * Triggers a Lovable auto-deployment so ALL visitors see the change.
 *
 * Requires env var: GITHUB_TOKEN (Personal Access Token with `repo` scope)
 * Set it in: Lovable → Project Settings → Environment Variables
 */
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

// ─── GitHub repo coordinates ────────────────────────────────────────────────
const GITHUB_OWNER = "Sumitt7607";
const GITHUB_REPO = "metahause";
const GITHUB_FILE = "src/content/site.ts";
const API = "https://api.github.com";

// ─── Input schema ────────────────────────────────────────────────────────────
const AnnouncementSchema = z.object({
  enabled: z.boolean(),
  badge: z.string(),
  message: z.string(),
  whatsappMessage: z.string(),
});

type DeployResult =
  | { success: true }
  | { success: false; error: string };

// ─── Server function ─────────────────────────────────────────────────────────
export const deployAnnouncementFn = createServerFn({ method: "POST" })
  .validator((d: unknown) => AnnouncementSchema.parse(d))
  .handler(async ({ data }): Promise<DeployResult> => {
    const token = process.env["GITHUB_TOKEN"];
    if (!token) {
      return {
        success: false,
        error:
          "GITHUB_TOKEN is not set. Add it in Lovable → Project Settings → Environment Variables.",
      };
    }

    const headers = {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      "User-Agent": "metahaus-admin/1.0",
    };

    try {
      // ── 1. Fetch the current file (we need its SHA for the PUT) ────────────
      const getRes = await fetch(
        `${API}/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${GITHUB_FILE}`,
        { headers }
      );

      if (!getRes.ok) {
        const body = await getRes.text();
        return {
          success: false,
          error: `GitHub fetch failed (${getRes.status}): ${body}`,
        };
      }

      const fileData = (await getRes.json()) as {
        sha: string;
        content: string;
      };

      // ── 2. Decode current content (base64 → UTF-8) ─────────────────────────
      const rawBase64 = fileData.content.replace(/\n/g, "");
      const binaryStr = atob(rawBase64);
      const bytes = new Uint8Array(binaryStr.length);
      for (let i = 0; i < binaryStr.length; i++) {
        bytes[i] = binaryStr.charCodeAt(i);
      }
      const currentContent = new TextDecoder().decode(bytes);

      // ── 3. Build replacement announcement block ────────────────────────────
      const newBlock = `// Live Announcement Ribbon configuration (Edit this anytime to change months or availability)
export const announcement = {
  enabled: ${data.enabled},
  badge: ${JSON.stringify(data.badge)},
  message: ${JSON.stringify(data.message)},
  whatsappMessage:
    ${JSON.stringify(data.whatsappMessage)},
};`;

      // Try with the comment prefix first, then fall back to without it
      let updatedContent = currentContent.replace(
        /\/\/ Live Announcement Ribbon[\s\S]*?export const announcement = \{[\s\S]*?\};/,
        newBlock
      );

      if (updatedContent === currentContent) {
        updatedContent = currentContent.replace(
          /export const announcement = \{[\s\S]*?\};/,
          `export const announcement = {\n  enabled: ${data.enabled},\n  badge: ${JSON.stringify(data.badge)},\n  message: ${JSON.stringify(data.message)},\n  whatsappMessage:\n    ${JSON.stringify(data.whatsappMessage)},\n};`
        );
      }

      if (updatedContent === currentContent) {
        return {
          success: false,
          error: "Could not locate the announcement block in site.ts.",
        };
      }

      // ── 4. Re-encode to base64 (UTF-8 safe) ────────────────────────────────
      const encoded = new TextEncoder().encode(updatedContent);
      let binary = "";
      encoded.forEach((b) => (binary += String.fromCharCode(b)));
      const newBase64 = btoa(binary);

      // ── 5. Commit the updated file ──────────────────────────────────────────
      const putRes = await fetch(
        `${API}/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${GITHUB_FILE}`,
        {
          method: "PUT",
          headers: { ...headers, "Content-Type": "application/json" },
          body: JSON.stringify({
            message: "chore: update announcement ribbon via admin panel",
            content: newBase64,
            sha: fileData.sha,
          }),
        }
      );

      if (!putRes.ok) {
        const body = await putRes.text();
        return {
          success: false,
          error: `GitHub commit failed (${putRes.status}): ${body}`,
        };
      }

      return { success: true };
    } catch (err) {
      return {
        success: false,
        error: `Unexpected error: ${err instanceof Error ? err.message : String(err)}`,
      };
    }
  });
