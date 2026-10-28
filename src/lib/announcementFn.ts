/**
 * GitHub API Commit Helper for Announcement Ribbon
 * Commits updated announcement config to GitHub repository (Sumitt7607/metahause).
 * Triggers a Lovable auto-deployment so ALL visitors see the changes worldwide.
 */
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const GITHUB_OWNER = "Sumitt7607";
const GITHUB_REPO = "metahause";
const GITHUB_FILE = "src/content/site.ts";
const API = "https://api.github.com";

export const GITHUB_TOKEN_KEY = "metahaus_github_token";

export const AnnouncementSchema = z.object({
  enabled: z.boolean(),
  badge: z.string(),
  message: z.string(),
  whatsappMessage: z.string(),
  githubToken: z.string().optional(),
});

export type AnnouncementPayload = z.infer<typeof AnnouncementSchema>;

export type DeployResult =
  | { success: true }
  | { success: false; error: string };

/**
 * Core function that performs the GitHub API GET SHA -> replace block -> PUT commit.
 * Works both in Node/Cloudflare server and in browser client.
 */
export async function commitToGitHub(
  data: AnnouncementPayload,
  token: string
): Promise<DeployResult> {
  const headers = {
    Authorization: `Bearer ${token.trim()}`,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "metahaus-admin/1.0",
  };

  try {
    // 1. Fetch the current file to get its current SHA and content
    const getRes = await fetch(
      `${API}/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${GITHUB_FILE}?t=${Date.now()}`,
      { headers, cache: "no-store" }
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

    // 2. Decode current content (base64 -> UTF-8)
    const rawBase64 = fileData.content.replace(/\n/g, "");
    let currentContent: string;
    if (typeof Buffer !== "undefined") {
      currentContent = Buffer.from(rawBase64, "base64").toString("utf-8");
    } else {
      const binaryStr = atob(rawBase64);
      const bytes = new Uint8Array(binaryStr.length);
      for (let i = 0; i < binaryStr.length; i++) {
        bytes[i] = binaryStr.charCodeAt(i);
      }
      currentContent = new TextDecoder().decode(bytes);
    }

    // 3. Build replacement announcement block
    const newBlock = `// Live Announcement Ribbon configuration (Edit this anytime to change months or availability)
export const announcement = {
  enabled: ${data.enabled},
  badge: ${JSON.stringify(data.badge)},
  message: ${JSON.stringify(data.message)},
  whatsappMessage:
    ${JSON.stringify(data.whatsappMessage)},
};`;

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
        error: "Could not locate the announcement block in src/content/site.ts.",
      };
    }

    // 4. Re-encode updated content to base64
    let newBase64: string;
    if (typeof Buffer !== "undefined") {
      newBase64 = Buffer.from(updatedContent, "utf-8").toString("base64");
    } else {
      const encoded = new TextEncoder().encode(updatedContent);
      let binary = "";
      encoded.forEach((b) => (binary += String.fromCharCode(b)));
      newBase64 = btoa(binary);
    }

    // 5. Commit updated file to GitHub repo
    const putRes = await fetch(
      `${API}/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${GITHUB_FILE}`,
      {
        method: "PUT",
        headers: { ...headers, "Content-Type": "application/json" },
        body: JSON.stringify({
          message: `chore(ribbon): update availability to "${data.message}" via admin`,
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
}

/**
 * Server Function handler
 */
export const deployAnnouncementFn = createServerFn({ method: "POST" })
  .validator((d: unknown) => AnnouncementSchema.parse(d))
  .handler(async ({ data }): Promise<DeployResult> => {
    const token = data.githubToken || process.env["GITHUB_TOKEN"];
    if (!token) {
      return {
        success: false,
        error: "GITHUB_TOKEN is not set.",
      };
    }
    return await commitToGitHub(data, token);
  });

/**
 * Universal deploy runner: tries server function first, then falls back to direct browser commit.
 */
export async function deployAnnouncementUniversal(
  data: AnnouncementPayload
): Promise<DeployResult> {
  let explicitToken = data.githubToken;
  if (!explicitToken && typeof window !== "undefined") {
    explicitToken = localStorage.getItem(GITHUB_TOKEN_KEY) || undefined;
  }

  // 1. Try server function
  try {
    const res = await deployAnnouncementFn({ data: { ...data, githubToken: explicitToken } });
    if (res.success) return res;
    // If it failed because token was missing on server, fall back to direct browser call
    if (res.error && !res.error.includes("is not set")) {
      return res;
    }
  } catch (err) {
    console.warn("Server deploy function unavailable, falling back to direct browser sync:", err);
  }

  // 2. Browser fallback
  if (!explicitToken) {
    return {
      success: false,
      error: "GitHub Personal Access Token is required to deploy live to all visitors.",
    };
  }

  return await commitToGitHub(data, explicitToken);
}
