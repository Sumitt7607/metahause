import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight, ArrowUpRight, CheckCircle2,
  Sparkles, X, ChevronRight, Eye, ShieldCheck,
  TrendingUp, Calendar, Maximize2, Users, Coins,
} from "lucide-react";
import {
  caseStudies, proofScreenshots,
  type CaseStudy, type ProofScreenshot, whatsappLink,
} from "@/content/site";
import { LiveStatsTicker } from "@/components/common/LiveStatsTicker";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: "Campaign Results & Verified Proof — METAHAUS_BYFARAH" },
      {
        name: "description",
        content:
          "Explore 100% verified performance marketing results and authentic Meta Ads Manager dashboard screenshots for beauty, bridal artists, aesthetic clinics and luxury brands.",
      },
    ],
  }),
  component: ResultsPage,
});

function ResultsPage() {
  const [selectedTag, setSelectedTag] = useState<string>("All");
  const [activeModalStudy, setActiveModalStudy] = useState<CaseStudy | null>(null);
  const [activeLightbox, setActiveLightbox] = useState<{
    src: string;
    title: string;
    caption?: string | undefined;
  } | null>(null);

  const filterTags = ["All", "UK", "Dubai", "Bridal", "Instant Forms", "GCC", "EdTech"];

  const filteredStudies =
    selectedTag === "All"
      ? caseStudies
      : caseStudies.filter((c) =>
          c.tags.some((t) => t.toLowerCase().includes(selectedTag.toLowerCase())),
        );

  return (
    <div className="min-h-screen">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-primary py-12 sm:py-20 text-primary-foreground">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(186,151,88,0.25),rgba(255,255,255,0))]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl reveal">
            <span className="eyebrow text-gold">100% Verified Platform Proof</span>
            <h1 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-serif leading-[1.1] text-white">
              Real Meta Ads Manager Reporting. Zero Fabricated Data.
            </h1>
            <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-primary-foreground/80 leading-relaxed max-w-2xl">
              Every metric, lead count, and cost per result on this page is backed by direct captures from active client accounts across the UK, UAE, and GCC.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#proof-gallery"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-primary shadow-soft transition-all hover:bg-gold-soft hover:shadow-gold text-center"
              >
                <span>Inspect 9 Live Dashboards</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={whatsappLink("Hello Farah, I'm reviewing your Meta Ads Manager dashboards and would like to discuss similar results.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-emerald-600 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-soft transition-all hover:bg-emerald-700 hover:shadow-lg text-center"
              >
                Discuss Real Data on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Live Ticker */}
      <LiveStatsTicker />

      {/* 1. DEDICATED META ADS MANAGER PROOF GALLERY */}
      <section id="proof-gallery" className="py-12 sm:py-20 bg-background border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border pb-8">
            <div>
              <span className="eyebrow">
                <ShieldCheck className="h-3.5 w-3.5 text-gold" />
                <span>Direct Meta Ads Manager Captures</span>
              </span>
              <h2 className="mt-3 font-serif text-3xl sm:text-5xl text-foreground">
                Authentic Dashboard Gallery
              </h2>
              <p className="mt-3 text-sm text-muted-foreground max-w-2xl leading-relaxed">
                Click any dashboard screenshot to open the high-resolution lightbox inspector. Inspect live campaign line items, ad sets, reach, frequency, and exact cost per result.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-sm border border-emerald-200 shrink-0 self-start md:self-auto">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse-dot" />
              <span>9 Verified Live Captures</span>
            </div>
          </div>

          {/* Screenshot Showcase Grid */}
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {proofScreenshots.map((item) => (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-sm border border-border bg-card p-6 shadow-xs transition-all duration-300 hover:border-gold hover:shadow-soft"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-gold">
                          {item.period}
                        </span>
                        <span className="text-[10px] bg-secondary text-foreground px-2 py-0.5 rounded-sm font-semibold">
                          {item.currency}
                        </span>
                      </div>
                      <h3 className="mt-1.5 font-serif text-xl sm:text-2xl text-foreground group-hover:text-gold transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-foreground shrink-0">
                      {item.metric}
                    </span>
                  </div>

                  {/* Screenshot Container with Click to Expand */}
                  <div
                    onClick={() =>
                      setActiveLightbox({
                        src: item.image,
                        title: item.title,
                        caption: item.notes,
                      })
                    }
                    className="mt-5 relative cursor-pointer overflow-hidden rounded-sm border border-border bg-slate-950 shadow-inner group/img"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full object-contain transition-transform duration-300 group-hover/img:scale-[1.02]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-semibold backdrop-blur-2xs">
                      <Maximize2 className="h-4 w-4 text-gold" />
                      <span>Click to view full-resolution dashboard</span>
                    </div>
                  </div>

                  {/* Included Campaigns Breakdown */}
                  <div className="mt-4 rounded-sm bg-secondary/60 p-3.5 border border-border/70 text-xs">
                    <span className="font-semibold text-foreground text-[11px] uppercase tracking-wider block mb-1">
                      Active Campaign Line Items in Capture:
                    </span>
                    <ul className="space-y-1 text-muted-foreground font-mono text-[11px]">
                      {item.campaigns.map((c, i) => (
                        <li key={i} className="truncate">
                          • {c}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                    {item.notes}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-border flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Source: Meta Ads Manager</span>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveLightbox({
                        src: item.image,
                        title: item.title,
                        caption: item.notes,
                      })
                    }
                    className="inline-flex items-center gap-1 font-bold text-foreground hover:text-gold transition-colors"
                  >
                    <Eye className="h-3.5 w-3.5 text-gold" />
                    <span>Expand Dashboard</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. CASE STUDY CARDS WITH EMBEDDED DASHBOARD THUMBNAILS */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-6">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground">Verified Case Study Breakdowns</h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                Showing {filteredStudies.length} real campaign studies
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {filterTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setSelectedTag(tag)}
                  className={`rounded-sm px-3.5 py-1.5 text-xs font-medium transition-all ${
                    selectedTag === tag
                      ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                      : "bg-secondary text-muted-foreground hover:bg-border/60 hover:text-foreground"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredStudies.map((study) => (
              <article
                key={study.id}
                className="group flex flex-col justify-between rounded-sm border border-border bg-card p-7 shadow-xs transition-all duration-300 hover:border-gold hover:shadow-soft"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <span className="eyebrow">{study.industry}</span>
                    <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                      {study.market}
                    </span>
                  </div>

                  <h3 className="mt-3 font-serif text-2xl text-foreground group-hover:text-gold transition-colors">
                    {study.campaign}
                  </h3>

                  <p className="mt-2 text-xs text-muted-foreground">
                    Timeframe: {study.period}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {study.overview}
                  </p>

                  {/* Embedded Screenshot Thumbnail */}
                  <div
                    onClick={() => setActiveModalStudy(study)}
                    className="mt-5 cursor-pointer overflow-hidden rounded-sm border border-border bg-secondary/50 transition-all hover:border-gold group/shot"
                  >
                    <div className="flex items-center justify-between bg-card/90 px-3 py-1.5 border-b border-border text-[11px]">
                      <span className="flex items-center gap-1 font-semibold text-foreground">
                        <Sparkles className="h-3 w-3 text-gold" /> Ads Manager Proof
                      </span>
                      <span className="text-[10px] text-gold uppercase tracking-wider group-hover/shot:underline">
                        Inspect Proof →
                      </span>
                    </div>
                    <div className="relative aspect-[16/7] overflow-hidden bg-background">
                      <img
                        src={study.screenshot}
                        alt={`${study.campaign} proof`}
                        className="h-full w-full object-cover object-top transition-transform duration-300 group-hover/shot:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Highlight KPI Box */}
                  <div className="mt-5 rounded-sm border border-gold/30 bg-gold-soft/10 p-4">
                    <div className="flex items-baseline justify-between">
                      <span className="font-serif text-3xl font-light text-foreground">
                        {study.result}
                      </span>
                      <span className="text-xs font-bold text-gold">
                        {study.costPerResult}
                      </span>
                    </div>
                    <p className="mt-1 text-xs font-medium text-muted-foreground">
                      {study.resultLabel}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Reach: <span className="font-semibold text-foreground">{study.reach}</span>
                    </p>
                  </div>

                  {/* Line Items Checklist */}
                  <div className="mt-5 border-t border-border pt-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-foreground block mb-2">
                      Verified Campaign Elements:
                    </span>
                    <ul className="space-y-1.5 text-xs text-muted-foreground font-mono text-[11px]">
                      {study.actualCampaigns.slice(0, 2).map((item, idx) => (
                        <li key={idx} className="truncate">
                          ✓ {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setActiveModalStudy(study)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-foreground transition-colors hover:text-gold"
                  >
                    <span>Full Case Analysis</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-gold" />
                  </button>
                  <div className="flex gap-1.5">
                    {study.tags.slice(0, 2).map((t) => (
                      <span key={t} className="text-[10px] bg-secondary text-muted-foreground px-2 py-0.5 rounded-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Compliance & Verification Note */}
          <div className="mt-14 rounded-sm border border-border bg-card p-6 text-xs text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-gold shrink-0" />
              <span>
                All numbers shown represent actual performance data recorded by Meta Ads Manager for the stated campaign periods.
              </span>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold hover:underline shrink-0"
            >
              <span>Discuss Campaign Viability</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-card py-20">
        <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
          <span className="eyebrow">Ready For Real Results?</span>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl text-foreground">
            Let's Replicate These Results For Your Business
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground leading-relaxed">
            Stop burning ad spend on boosted posts that yield zero bookings. Let's design a proven Meta Ads funnel backed by verified platform data.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-rose-600 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-soft transition-all hover:bg-rose-700 hover:shadow-lg"
            >
              <span>Schedule 1-on-1 Strategy Session</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-emerald-600 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-soft transition-all hover:bg-emerald-700 hover:shadow-lg"
            >
              <span>Chat Directly on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Detailed Case Study Modal with Full Screenshot */}
      {activeModalStudy && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-xs"
          onClick={() => setActiveModalStudy(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-sm border border-gold/40 bg-card p-6 sm:p-10 shadow-2xl reveal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between border-b border-border pb-5">
              <div>
                <span className="eyebrow">{activeModalStudy.industry}</span>
                <h3 className="mt-2 font-serif text-3xl text-foreground">
                  {activeModalStudy.campaign}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Market: {activeModalStudy.market} · Period: {activeModalStudy.period}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalStudy(null)}
                className="rounded-sm border border-border p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Metrics Ribbon */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 rounded-sm bg-secondary/50 p-4 border border-border text-center">
              <div>
                <span className="text-[11px] text-muted-foreground uppercase tracking-wider block">
                  Total Results
                </span>
                <span className="font-serif text-3xl text-foreground mt-0.5 block">
                  {activeModalStudy.result}
                </span>
                <span className="text-[11px] text-muted-foreground">
                  {activeModalStudy.resultLabel}
                </span>
              </div>
              <div>
                <span className="text-[11px] text-muted-foreground uppercase tracking-wider block">
                  Cost Efficiency
                </span>
                <span className="font-serif text-2xl text-gold mt-1 block">
                  {activeModalStudy.costPerResult}
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-[11px] text-muted-foreground uppercase tracking-wider block">
                  Total Reach
                </span>
                <span className="font-serif text-2xl text-foreground mt-1 block">
                  {activeModalStudy.reach}
                </span>
              </div>
            </div>

            {/* Real Dashboard Screenshot in Modal */}
            <div className="mt-6 rounded-sm border border-border overflow-hidden bg-slate-950">
              <div className="bg-card px-4 py-2 border-b border-border flex items-center justify-between text-xs">
                <span className="font-semibold text-foreground flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-gold" />
                  <span>{activeModalStudy.screenshotCaption}</span>
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setActiveLightbox({
                      src: activeModalStudy.screenshot,
                      title: activeModalStudy.campaign,
                      caption: activeModalStudy.screenshotCaption,
                    })
                  }
                  className="text-gold hover:underline text-[11px] flex items-center gap-1"
                >
                  <Maximize2 className="h-3 w-3" /> Click to enlarge
                </button>
              </div>
              <img
                src={activeModalStudy.screenshot}
                alt={`${activeModalStudy.campaign} dashboard`}
                className="w-full object-contain cursor-pointer"
                onClick={() =>
                  setActiveLightbox({
                    src: activeModalStudy.screenshot,
                    title: activeModalStudy.campaign,
                    caption: activeModalStudy.screenshotCaption,
                  })
                }
              />
            </div>

            {/* Active Campaign Line Items */}
            <div className="mt-6 rounded-sm bg-secondary/50 p-4 border border-border text-xs">
              <span className="font-bold text-foreground uppercase tracking-wider block mb-2">
                Documented Ad Manager Campaign Line Items:
              </span>
              <ul className="space-y-1.5 font-mono text-[11px] text-muted-foreground">
                {activeModalStudy.actualCampaigns.map((c, i) => (
                  <li key={i} className="text-foreground/90">
                    • {c}
                  </li>
                ))}
              </ul>
            </div>

            {/* Deep Dive Breakdown */}
            <div className="mt-6 space-y-4 text-sm">
              <h4 className="font-serif text-lg text-foreground font-semibold">Campaign Overview</h4>
              <p className="text-muted-foreground leading-relaxed">{activeModalStudy.overview}</p>
            </div>

            <div className="mt-8 border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-muted-foreground">
                Want similar verified results for your business?
              </span>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href={whatsappLink(`Hello Farah, I'm interested in achieving results similar to your ${activeModalStudy.campaign} case study.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-center rounded-sm bg-emerald-600 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-emerald-700 shadow-xs transition-colors"
                >
                  Discuss On WhatsApp
                </a>
                <button
                  type="button"
                  onClick={() => setActiveModalStudy(null)}
                  className="rounded-sm border border-border px-4 py-2.5 text-xs text-muted-foreground hover:bg-secondary transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Modal for High-Resolution Screenshot Inspection */}
      {activeLightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          onClick={() => setActiveLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-h-[95vh] w-full max-w-5xl overflow-hidden rounded-sm border border-gold/50 bg-slate-950 p-4 shadow-2xl reveal flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-border/40 pb-3 text-white">
              <div>
                <h4 className="font-serif text-lg text-white font-semibold">{activeLightbox.title}</h4>
                {activeLightbox.caption && (
                  <p className="text-xs text-slate-400 mt-0.5">{activeLightbox.caption}</p>
                )}
              </div>
              <button
                type="button"
                onClick={() => setActiveLightbox(null)}
                className="rounded-sm border border-slate-700 bg-slate-900 p-2 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close lightbox"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-4 flex-1 overflow-auto flex items-center justify-center max-h-[80vh]">
              <img
                src={activeLightbox.src}
                alt={activeLightbox.title}
                className="max-h-full max-w-full object-contain rounded-sm shadow-2xl"
              />
            </div>

            <div className="mt-3 border-t border-slate-800 pt-2.5 flex items-center justify-between text-xs text-slate-400">
              <span>Verified Meta Ads Manager Interface Capture</span>
              <a
                href={whatsappLink(`Hello Farah, I'm inspecting your campaign proof (${activeLightbox.title}) and would like to discuss a similar campaign.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline font-semibold"
              >
                Inquire about this campaign →
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
