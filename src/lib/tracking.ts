declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
    _fbq?: any;
  }
}

export const GA_MEASUREMENT_ID = "G-SSM13D0V5D";
export const META_PIXEL_ID = "1768088455319114";
export const GTM_ID = "GTM-P64LZRVS";

/**
 * Tracks client-side SPA page views in Meta Pixel, GA4, and GTM
 */
export function trackPageView(url: string) {
  if (typeof window === "undefined") return;

  // Track in Meta Pixel
  if (typeof window.fbq === "function") {
    window.fbq("track", "PageView");
  }

  // Track in Google Analytics 4
  if (typeof window.gtag === "function") {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }

  // Push to GTM dataLayer
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: "page_view",
      page_path: url,
    });
  }
}

/**
 * Tracks lead form conversions in Meta Pixel, GA4, and GTM
 */
export function trackLead(details?: {
  content_name?: string;
  content_category?: string;
  value?: number;
  currency?: string;
}) {
  if (typeof window === "undefined") return;

  if (typeof window.fbq === "function") {
    window.fbq("track", "Lead", details);
  }

  if (typeof window.gtag === "function") {
    window.gtag("event", "generate_lead", details);
  }

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: "generate_lead",
      ...details,
    });
  }
}
