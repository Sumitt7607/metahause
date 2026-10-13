import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, CheckCircle2, Clock, Calendar,
  ShieldCheck, FileText, Zap, Sparkles, MessageCircle,
} from "lucide-react";
import { steps, whatsappLink } from "@/content/site";
import { LiveStatsTicker } from "@/components/common/LiveStatsTicker";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our 6-Step Scaling Process & Roadmap — METAHAUS_BYFARAH" },
      {
        name: "description",
        content:
          "Discover our proven 6-stage Meta Ads framework: from technical CAPI tracking and creative script briefings to daily algorithmic bid optimization.",
      },
    ],
  }),
  component: ProcessPage,
});

function ProcessPage() {
  const onboardingSteps = [
    {
      day: "Day 1",
      title: "Kickoff & Asset Access Handshake",
      desc: "Secure Meta Business Manager access setup, brand asset transfer, and ideal client avatar intake questionnaire.",
    },
    {
      day: "Day 3",
      title: "Technical Tracking & CAPI Audit",
      desc: "We verify pixel firing, server-side Conversions API, domain verification, and custom conversion events.",
    },
    {
      day: "Day 5",
      title: "Creative Script Briefs Delivered",
      desc: "You receive exact shot-lists and hook concepts for simple smartphone video recordings.",
    },
    {
      day: "Day 7",
      title: "Campaign Architecture Review",
      desc: "We review the completed funnel, audience segments, ad copy, and qualification forms before going live.",
    },
    {
      day: "Day 10",
      title: "Live Campaign Launch",
      desc: "Ads begin delivering to high-intent audiences. Live conversion tracking starts immediately.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative overflow-hidden bg-primary py-12 sm:py-20 text-primary-foreground">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(186,151,88,0.22),rgba(255,255,255,0))]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl reveal">
            <span className="eyebrow text-gold">Structured Scientific Scaling</span>
            <h1 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-serif leading-[1.1] text-white">
              A Clear 6-Stage Process. Zero Guesswork.
            </h1>
            <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-primary-foreground/80 leading-relaxed max-w-2xl">
              We don't 'throw spaghetti at the wall'. Every campaign follows a battle-tested roadmap designed to validate creative hooks quickly, eliminate wasted budget, and scale profitable client bookings.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-primary shadow-soft transition-all hover:bg-gold-soft hover:shadow-gold text-center"
              >
                <span>Initiate Your Growth Sprint</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/results"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-primary-foreground/20 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-primary-foreground transition-all hover:border-gold hover:text-gold text-center"
              >
                <span>Review Verified Results</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Live Ticker */}
      <LiveStatsTicker />

      {/* The 6-Stage Roadmap Timeline */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="eyebrow">The Framework</span>
            <h2 className="mt-3 font-serif text-2xl sm:text-4xl text-foreground">
              The 6 Stages of Meta Ads Dominance
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Here is exactly what happens when you partner with METAHAUS_BYFARAH.
            </p>
          </div>

          <div className="mt-10 sm:mt-16 space-y-6 sm:space-y-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative grid gap-6 sm:gap-8 rounded-sm border border-border bg-card p-5 sm:p-8 shadow-xs md:grid-cols-12 items-center hover:border-gold transition-colors"
              >
                <div className="md:col-span-3 border-b border-border md:border-b-0 md:border-r md:pr-8 pb-6 md:pb-0">
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-5xl font-light text-gold">
                      {step.number}
                    </span>
                    <span className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">
                      Stage
                    </span>
                  </div>
                  <span className="mt-2 inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-foreground">
                    {step.phase}
                  </span>
                </div>

                <div className="md:col-span-5 space-y-2">
                  <h3 className="font-serif text-2xl text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="md:col-span-4 rounded-sm bg-secondary/50 p-5 border border-border">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gold block mb-1">
                    Tangible Deliverable:
                  </span>
                  <p className="text-xs font-medium text-foreground flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-gold mt-0.5" />
                    <span>{step.deliverable}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* First 10 Days Onboarding Roadmap */}
      <section className="border-t border-border bg-card py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="eyebrow">Seamless Execution</span>
            <h2 className="mt-3 font-serif text-2xl sm:text-5xl text-foreground">
              What Your First 10 Days Look Like
            </h2>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              We take the friction out of onboarding. No messy email chains or endless forms — just a streamlined, rapid launch pipeline.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {onboardingSteps.map((s, idx) => (
              <div
                key={idx}
                className="relative rounded-sm border border-border bg-background p-6 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-gold text-xs font-bold uppercase tracking-wider">
                    <span>{s.day}</span>
                    <Clock className="h-3.5 w-3.5" />
                  </div>
                  <h4 className="mt-3 font-serif text-lg text-foreground">{s.title}</h4>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-border text-[11px] text-muted-foreground flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-gold" />
                  <span>Quality checked by Farah</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reporting & Communication Protocol */}
      <section className="border-t border-border bg-background py-12 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-sm border border-gold/40 bg-primary p-5 sm:p-12 text-primary-foreground shadow-gold">
            <div className="max-w-2xl">
              <span className="eyebrow text-gold">Communication Protocol</span>
              <h3 className="mt-2 font-serif text-2xl sm:text-4xl text-white">
                How We Stay Connected With You
              </h3>
              <p className="mt-3 text-sm text-primary-foreground/80 leading-relaxed">
                As a boutique client, you never feel out of the loop. We maintain a high-touch, transparent communication rhythm:
              </p>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-3 border-t border-primary-foreground/15 pt-8">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-wider text-gold font-bold block">
                  1. Direct WhatsApp VIP Sync
                </span>
                <p className="text-xs text-primary-foreground/80 leading-relaxed">
                  Real-time direct chat with Farah for immediate questions, ad creative feedback, and booking celebration notifications.
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-wider text-gold font-bold block">
                  2. Bi-Weekly Video Strategy Call
                </span>
                <p className="text-xs text-primary-foreground/80 leading-relaxed">
                  30-minute structured Zoom reviews dissecting lead quality, close rates, creative fatigue, and next-sprint initiatives.
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-wider text-gold font-bold block">
                  3. 24/7 Live Looker Dashboard
                </span>
                <p className="text-xs text-primary-foreground/80 leading-relaxed">
                  Private real-time dashboard displaying verified leads, spend, cost per booking, and ROAS updated automatically.
                </p>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-primary-foreground/15 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-primary-foreground/80">
                Ready to experience a truly professional performance marketing partnership?
              </span>
              <Link
                to="/contact"
                className="w-full sm:w-auto text-center rounded-sm bg-gold px-6 py-3 text-xs font-bold uppercase tracking-wider text-primary hover:bg-gold-soft transition-colors shadow-soft"
              >
                Schedule Strategy Session
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
