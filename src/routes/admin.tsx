import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Sparkles, Save, RotateCcw, CheckCircle2, MessageCircle,
  Eye, ShieldCheck, ArrowRight, Settings2, Sliders, Check
} from "lucide-react";
import {
  getStoredAnnouncement,
  saveAnnouncement,
  resetAnnouncement,
  type AnnouncementConfig
} from "@/lib/announcementStore";
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

function AdminPage() {
  const [config, setConfig] = useState<AnnouncementConfig>(() => getStoredAnnouncement());
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [slots, setSlots] = useState("2");
  const [period, setPeriod] = useState("October – November 2026");

  // Keep local state in sync on mount
  useEffect(() => {
    const current = getStoredAnnouncement();
    setConfig(current);
  }, []);

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

  const handleSave = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    saveAnnouncement(config);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
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

  return (
    <div className="min-h-screen bg-background py-10 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Breadcrumb & Title */}
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

          <Link
            to="/"
            className="inline-flex items-center gap-1.5 self-start sm:self-auto rounded-sm border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground hover:border-gold hover:text-gold transition-colors shadow-xs"
          >
            <span>View Live Website</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
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
        <form onSubmit={handleSave} className="mt-8 space-y-6 rounded-sm border border-border bg-card p-6 sm:p-8 shadow-xs">
          
          {/* Toggle Banner */}
          <div className="flex items-center justify-between border-b border-border pb-5">
            <div>
              <label htmlFor="banner-enabled" className="font-serif text-lg font-medium text-foreground block cursor-pointer">
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
          <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="submit"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-sm bg-primary px-6 py-3 text-xs font-bold uppercase tracking-wider text-primary-foreground hover:bg-gold hover:text-primary transition-all shadow-soft"
              >
                <Save className="h-4 w-4" />
                <span>Save Live Changes</span>
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center justify-center gap-1.5 rounded-sm border border-border px-4 py-3 text-xs font-semibold text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                title="Reset to code defaults"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Reset</span>
              </button>
            </div>

            {savedSuccess && (
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-3.5 py-2 rounded-sm animate-in fade-in slide-in-from-bottom-1">
                <CheckCircle2 className="h-4 w-4" />
                <span>Changes saved! Banner is updated across the site.</span>
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
            Changes saved here are active immediately in the browser. If you ever want to permanently bake your new months into source code, simply copy this into <code className="bg-card px-1.5 py-0.5 rounded border border-border font-mono text-[11px] text-foreground">src/content/site.ts</code>:
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
