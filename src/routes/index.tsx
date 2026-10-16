import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight, ArrowUpRight, Check, CheckCircle2,
  Sparkles, ChevronRight, Eye, ShieldCheck,
  TrendingUp, MessageCircle, PhoneCall, Award,
} from "lucide-react";
import heroImg from "@/assets/hero-beauty.jpg";
import bridalImg from "@/assets/bridal.jpg";
import farahImg from "@/assets/farah.jpg";
import {
  caseStudies, proofScreenshots, services, primaryIndustries,
  whatsappLink, type CaseStudy,
} from "@/content/site";
import { LiveStatsTicker } from "@/components/common/LiveStatsTicker";
import { PricingSection } from "@/components/common/PricingSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "METAHAUS_BYFARAH — Meta Ads Specialist for Beauty & Bridal Brands" },
      {
        name: "description",
        content:
          "Strategic Meta Ads, high-intent lead generation, and performance marketing for luxury beauty, bridal artists, aesthetic clinics, and EdTech brands across Europe, UK, UAE, and GCC.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const [activeModalStudy, setActiveModalStudy] = useState<CaseStudy | null>(null);

  return (
    <div className="min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-background pt-8 pb-12 sm:pt-10 sm:pb-20 lg:pt-16 lg:pb-28">
        {/* Background Grid & Ambient Glows (matching geometric grid + soft light wash) */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          {/* Ethereal sky-blue ambient gradient glow on the right (matches user reference) */}
          <div className="absolute -top-32 -right-16 h-[700px] w-[700px] rounded-full bg-gradient-to-bl from-sky-200/50 via-blue-100/30 to-transparent blur-3xl" />
          {/* Soft warm luxury ambient glow on the bottom-left */}
          <div className="absolute top-1/2 -left-20 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
          {/* Precision Geometric Grid Overlay */}
          <div className="absolute inset-0 hero-grid-pattern" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 px-4 lg:gap-14 lg:grid-cols-[1.1fr_1fr] lg:px-8">
          {/* Left Column: Copy & Actions */}
          <div className="reveal space-y-6">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-gold/40 bg-card px-4 py-1.5 text-xs shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              <span className="font-semibold text-foreground">Verified Performance Marketing</span>
              <span className="text-muted-foreground">·</span>
              <span className="text-gold font-medium">UK · UAE · GCC</span>
            </div>

            <h1 className="text-3xl leading-[1.1] sm:text-5xl lg:text-[4.2rem] font-serif text-foreground">
              Meta Ads that generate{" "}
              <span className="gold-gradient-text italic font-serif">better Enquiries</span> for Beauty & Bridal Brands.
            </h1>

            <p className="max-w-xl text-sm sm:text-base leading-relaxed text-muted-foreground">
              We help beauty artists and aesthetic practitioners scale bookings through data-led Meta Ads management and transparent reporting.
            </p>

            <div className="flex flex-col gap-3.5 sm:flex-row pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-rose-600 px-7 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-soft transition-all duration-300 hover:bg-rose-700 hover:shadow-lg"
              >
                <span>Book 1-on-1 Strategy Session</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/results"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-border bg-card px-7 py-4 text-xs font-bold uppercase tracking-wider text-foreground transition-all duration-300 hover:border-gold hover:text-gold shadow-xs"
              >
                <ShieldCheck className="h-3.5 w-3.5 text-gold" />
                <span>Inspect 9 Live Dashboards</span>
              </Link>
            </div>

            {/* Quick Proof Pills */}
            <div className="border-t border-border pt-4 grid grid-cols-3 gap-3 text-left">
              <div>
                <span className="font-serif text-xl sm:text-3xl font-light text-foreground block">£8.28</span>
                <span className="text-[10px] sm:text-xs text-muted-foreground">UK CPL</span>
              </div>
              <div>
                <span className="font-serif text-xl sm:text-3xl font-light text-foreground block">$1.24</span>
                <span className="text-[10px] sm:text-xs text-muted-foreground">Msg Lead Cost</span>
              </div>
              <div>
                <span className="font-serif text-xl sm:text-3xl font-light text-foreground block">50k+</span>
                <span className="text-[10px] sm:text-xs text-muted-foreground">Accounts Reached</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual — visible on phone & desktop */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none mt-2 sm:mt-0">
            <div className="relative overflow-hidden rounded-sm border border-border shadow-soft bg-card">
              <img
                src={heroImg}
                alt="Luxury bridal makeup and beauty artistry"
                width={1024}
                height={1280}
                className="aspect-[4/5] max-h-[400px] sm:max-h-none w-full object-cover object-center"
              />

              {/* Top Floating Badge */}
              <div className="absolute top-3 left-2 sm:top-6 sm:-left-6 max-w-[85%] sm:max-w-none rounded-sm border border-gold/40 bg-card/95 p-2.5 sm:p-3.5 shadow-soft backdrop-blur-md animate-float">
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <div className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-600 shrink-0">
                    <TrendingUp className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </div>
                  <div>
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-muted-foreground block font-bold">
                      Verified Campaign Status
                    </span>
                    <span className="font-serif text-xs sm:text-sm font-semibold text-foreground">
                      34 UK Leads at £8.28 / Lead
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Floating Stats Box */}
              <div className="absolute bottom-3 right-2 sm:bottom-6 sm:-right-6 w-48 sm:w-64 rounded-sm border border-border bg-card/95 p-2.5 sm:p-4 shadow-soft backdrop-blur-md">
                <div className="flex items-center justify-between border-b border-border pb-1.5 sm:pb-2">
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-gold font-bold">
                    Campaign Velocity
                  </span>
                  <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse-dot" />
                </div>
                <div className="mt-2 sm:mt-3 flex items-baseline justify-between">
                  <span className="font-serif text-lg sm:text-2xl text-foreground">70 Convs</span>
                  <span className="text-[10px] sm:text-[11px] text-muted-foreground">$1.59 / result</span>
                </div>
                <div className="mt-2 sm:mt-2.5 flex h-7 sm:h-10 items-end gap-1" aria-hidden>
                  {[35, 48, 42, 65, 58, 80, 95].map((h, i) => (
                    <span
                      key={i}
                      className="flex-1 rounded-t-xs bg-gold transition-all duration-500 hover:bg-gold-dark"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
                <span className="mt-1.5 sm:mt-2 block text-[9px] sm:text-[10px] text-muted-foreground">
                  Direct Meta Ads Manager Export
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INFINITE LIVE STATS TICKER */}
      <LiveStatsTicker />

      {/* 3. FEATURED RESULTS PREVIEW */}
      <section className="border-t border-border bg-card py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border pb-8">
            <div>
              <span className="eyebrow">Direct Platform Proof</span>
              <h2 className="mt-3 font-serif text-3xl sm:text-5xl text-foreground">
                Verified Campaign Case Studies
              </h2>
              <p className="mt-3 text-sm text-muted-foreground max-w-xl leading-relaxed">
                Directly connected to real Meta Ads Manager dashboard captures. Inspect actual lead counts, ad sets, and cost efficiencies.
              </p>
            </div>
            <Link
              to="/results"
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-xs font-bold uppercase tracking-wider text-primary-foreground hover:bg-gold hover:text-primary transition-colors shrink-0"
            >
              <span>View All 9 Verified Case Studies</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {caseStudies.slice(0, 3).map((study) => (
              <article
                key={study.id}
                className="group flex flex-col justify-between rounded-sm border border-border bg-background p-7 shadow-xs hover:border-gold hover:shadow-soft transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="eyebrow">{study.industry}</span>
                    <span>{study.market}</span>
                  </div>
                  <h3 className="mt-3 font-serif text-2xl text-foreground group-hover:text-gold transition-colors">
                    {study.campaign}
                  </h3>
                  <p className="mt-3 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {study.overview}
                  </p>

                  {/* Screenshot Thumbnail */}
                  <div
                    onClick={() => setActiveModalStudy(study)}
                    className="mt-4 cursor-pointer overflow-hidden rounded-sm border border-border bg-secondary/50 transition-all hover:border-gold group/shot"
                  >
                    <div className="flex items-center justify-between bg-card/90 px-3 py-1 border-b border-border text-[10px]">
                      <span className="flex items-center gap-1 font-semibold text-foreground">
                        <ShieldCheck className="h-3 w-3 text-gold" /> Ads Manager Proof
                      </span>
                      <span className="text-[10px] text-gold uppercase tracking-wider group-hover/shot:underline">
                        View Dashboard →
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

                  <div className="mt-5 rounded-sm bg-card p-4 border border-border">
                    <div className="flex items-baseline justify-between">
                      <span className="font-serif text-4xl text-foreground">{study.result}</span>
                      <span className="text-xs font-bold text-gold">
                        {study.costPerResult}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground block mt-1">
                      {study.resultLabel}
                    </span>
                    <span className="text-xs text-muted-foreground block mt-0.5">
                      Reach: <strong className="text-foreground">{study.reach}</strong>
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setActiveModalStudy(study)}
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-foreground hover:text-gold transition-colors"
                  >
                    <span>Inspect Line Items</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-gold" />
                  </button>
                  <span className="text-[10px] text-muted-foreground">{study.period}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVICES OVERVIEW */}
      <section className="border-t border-border bg-card py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border pb-8">
            <div>
              <span className="eyebrow">Strategic Capabilities</span>
              <h2 className="mt-3 font-serif text-3xl sm:text-5xl text-foreground">
                Performance Advertising Built Around Your Goals
              </h2>
              <p className="mt-3 text-sm text-muted-foreground max-w-xl leading-relaxed">
                Strategic campaign management, creative scripting, and Conversion API tracking — never just mindless post boosting.
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-sm border border-border bg-background px-6 py-3 text-xs font-bold uppercase tracking-wider text-foreground hover:border-gold hover:text-gold transition-colors shrink-0"
            >
              <span>Explore All 6 Services</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => (
              <div
                key={service.slug}
                className="group rounded-sm border border-border bg-background p-5 sm:p-7 shadow-xs hover:border-gold transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="font-serif text-2xl text-border group-hover:text-gold transition-colors">
                    0{idx + 1}
                  </span>
                  <h3 className="mt-4 font-serif text-2xl text-foreground group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-gold">
                    {service.tagline}
                  </p>
                  <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">{service.timeline}</span>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1.5 rounded-sm bg-black px-4 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-zinc-800 transition-all shadow-xs"
                  >
                    <span>Details</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WEBSITE DEVELOPMENT */}
      <section
        className="relative overflow-hidden border-t border-border py-14 sm:py-20"
        style={{ background: "linear-gradient(135deg, #0c0a10 0%, #100c1a 100%)" }}
      >
        {/* Ambient glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/3 h-72 w-72 rounded-full bg-gold/10 blur-[80px]" />
          <div className="absolute bottom-0 right-1/4 h-56 w-56 rounded-full bg-purple-500/10 blur-[70px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">

            {/* LEFT */}
            <div>
              {/* Label */}
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/5 px-4 py-1.5 mb-6">
                <Sparkles className="h-3 w-3 text-gold" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-gold">Service Overview</span>
              </div>

              {/* Headline */}
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
                Website{" "}
                <span className="gold-gradient-text italic">Development</span>
              </h2>
              <p className="mt-4 text-sm text-white/50 leading-relaxed max-w-md">
                High-performance custom websites built to convert beauty brand traffic into real bookings.
              </p>

              {/* Services list box */}
              <div className="mt-7 rounded-xl border border-white/10 bg-white/4 p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold mb-4">Our Services</p>
                <div className="grid grid-cols-2 gap-y-3 gap-x-6">
                  {[
                    "Website Development",
                    "E-Commerce Development",
                    "Website Maintenance",
                    "Custom Web Applications",
                    "High-Converting Landing Pages",
                    "and much more...",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-white/70">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-gold" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-lg bg-gold px-5 py-3 text-xs font-bold uppercase tracking-wider text-primary shadow-lg shadow-gold/25 hover:bg-gold-soft hover:scale-[1.02] transition-all duration-200"
                >
                  See Pricing Plans
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-5 py-3 text-xs font-bold uppercase tracking-wider text-emerald-400 hover:bg-emerald-500/20 transition-all duration-200"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  WhatsApp Now
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white/60 hover:border-gold/40 hover:text-gold transition-all duration-200"
                >
                  <PhoneCall className="h-3.5 w-3.5" />
                  Book a Call
                </Link>
              </div>
            </div>

            {/* RIGHT — 4 feature cards */}
            <div className="grid grid-cols-1 gap-3">
              {[
                {
                  icon: TrendingUp,
                  title: "Fast Execution",
                  desc: "Rapid deployment with clean strategy & engineering",
                },
                {
                  icon: ShieldCheck,
                  title: "Transparent Pricing",
                  desc: "No hidden fees, simple upfront packages",
                },
                {
                  icon: Award,
                  title: "Dedicated Support",
                  desc: "Ongoing care & maintenance included",
                },
                {
                  icon: Sparkles,
                  title: "High Conversions",
                  desc: "Designed & optimised for maximum ROI",
                },
              ].map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="flex items-center gap-4 rounded-xl border border-white/8 bg-white/4 px-5 py-4 hover:border-gold/30 hover:bg-white/6 transition-all duration-200"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gold/20 bg-gold/10">
                      <Icon className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">{card.title}</p>
                      <p className="text-xs text-white/45 mt-0.5">{card.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>


      <section className="border-t border-border bg-background py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="eyebrow">Industry Focus</span>
              <h2 className="mt-3 font-serif text-3xl sm:text-5xl text-foreground">
                Specialised in Beauty. Proven Across High-Ticket Verticals.
              </h2>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                From luxury UK bridal artists capturing £8.28 leads to Middle East academies filling student masterclasses, we tailor funnels to the psychological decision-making of your target buyers.
              </p>

              <div className="mt-8 space-y-4">
                {primaryIndustries.slice(0, 3).map((ind) => (
                  <div key={ind.slug} className="rounded-sm border border-border bg-card p-4.5">
                    <h4 className="font-serif text-lg text-foreground">{ind.name}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{ind.desc}</p>
                    <div className="mt-2 text-xs font-semibold text-gold">{ind.keyMetrics}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  to="/industries"
                  className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-primary-foreground hover:bg-gold hover:text-primary transition-colors"
                >
                  <span>Explore Industry Blueprints</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-sm border border-border shadow-soft">
              <img
                src={bridalImg}
                alt="Luxury bridal makeup"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex items-end p-8 text-white">
                <div>
                  <span className="eyebrow text-gold">Primary Specialisation</span>
                  <h3 className="font-serif text-3xl mt-1">Bridal & Aesthetic Clinics</h3>
                  <p className="text-xs text-white/80 mt-2 max-w-md">
                    Targeting high-intent bridal clients across London, Dubai, and regional GCC.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. MEET FARAH (ABOUT TEASER) */}
      <section className="border-t border-border bg-card py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="relative">
              <img
                src={farahImg}
                alt="Farah — Founder & Principal Performance Strategist"
                className="aspect-[4/5] w-full rounded-sm object-cover object-top shadow-soft max-w-md mx-auto border border-gold/40"
                loading="lazy"
              />
            </div>

            <div className="space-y-6">
              <span className="eyebrow">Meet The Founder</span>
              <h2 className="font-serif text-3xl sm:text-5xl text-foreground">
                Hi, I'm Farah — Founder of METAHAUS_BYFARAH
              </h2>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  I partner directly with beauty founders, clinical doctors, and academy directors to architect strategic Meta Ads campaigns that attract serious, ready-to-book clientele.
                </p>
                <p>
                  My approach fuses psychology, creative testing, and ruthless data analysis to help brands stop wasting budget on vanity metrics and start scaling actual booked revenue.
                </p>
                <p>
                  We operate with a strictly capped client roster to ensure every ad account receives obsessive daily calibration.
                </p>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-primary-foreground hover:bg-gold hover:text-primary transition-colors"
                >
                  <span>Read My Story & Principles</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/process"
                  className="text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
                >
                  See How We Work →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. DIRECT PLATFORM PROOF SUMMARY (NO FABRICATED TESTIMONIALS) - COMMENTED OUT FOR NOW */}
      {/*
      <section className="border-t border-border bg-background py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">Verified Proof Highlights</span>
            <h2 className="mt-3 font-serif text-3xl sm:text-5xl text-foreground">
              Direct From Meta Ads Manager
            </h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Real metrics from active campaigns across the UK, UAE, and GCC.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {proofScreenshots.slice(0, 4).map((proof) => (
              <div
                key={proof.id}
                className="rounded-sm border border-border bg-card p-6 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-bold text-gold uppercase tracking-wider mb-2">
                    <span>{proof.period}</span>
                    <span className="bg-secondary px-2 py-0.5 rounded-sm text-foreground">
                      {proof.currency}
                    </span>
                  </div>
                  <h4 className="font-serif text-lg text-foreground font-semibold">
                    {proof.title}
                  </h4>
                  <div className="mt-3 font-serif text-2xl text-foreground font-light">
                    {proof.metric}
                  </div>
                  <p className="mt-3 text-xs text-muted-foreground leading-relaxed line-clamp-3">
                    {proof.notes}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border">
                  <Link
                    to="/results"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-foreground hover:text-gold transition-colors"
                  >
                    <span>Inspect Full Dashboard</span>
                    <ArrowRight className="h-3.5 w-3.5 text-gold" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 8. TRANSPARENT PRICING & INVESTMENT OPTIONS */}
      <PricingSection />

      {/* 9. READY TO SCALE CTA STRIP */}
      <section className="border-t border-border bg-primary py-12 sm:py-20 text-primary-foreground">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center lg:px-8">
          <span className="eyebrow text-gold">Ready For Predictable Bookings?</span>
          <h2 className="mt-3 font-serif text-3xl sm:text-5xl text-white">
            Let's Build Your Meta Ads Engine
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-primary-foreground/80 leading-relaxed">
            Stop guessing with social media algorithms. Partner with a dedicated specialist who delivers real platform-verified conversions.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-rose-600 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-soft transition-all hover:bg-rose-700 hover:shadow-lg"
            >
              <span>Schedule Strategy Call With Farah</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-emerald-600 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-soft transition-all hover:bg-emerald-700 hover:shadow-lg"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Direct WhatsApp Inquiry</span>
            </a>
          </div>
        </div>
      </section>

      {/* Case Study Modal with Full Screenshot */}
      {activeModalStudy && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs"
          onClick={() => setActiveModalStudy(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-sm border border-gold/40 bg-card p-5 sm:p-8 shadow-2xl reveal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between border-b border-border pb-4">
              <div>
                <span className="eyebrow">{activeModalStudy.industry}</span>
                <h3 className="mt-2 font-serif text-3xl text-foreground">
                  {activeModalStudy.campaign}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalStudy(null)}
                className="text-muted-foreground hover:text-foreground p-1"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-muted-foreground block">Market:</span>
                <span className="font-semibold text-foreground text-sm">
                  {activeModalStudy.market}
                </span>
              </div>
              <div>
                <span className="text-muted-foreground block">Period:</span>
                <span className="font-semibold text-foreground text-sm">
                  {activeModalStudy.period}
                </span>
              </div>
              <div>
                <span className="text-muted-foreground block">Key Result:</span>
                <span className="font-serif text-2xl text-foreground">
                  {activeModalStudy.result} ({activeModalStudy.resultLabel})
                </span>
              </div>
              <div>
                <span className="text-muted-foreground block">Cost Efficiency:</span>
                <span className="font-serif text-xl text-gold">
                  {activeModalStudy.costPerResult}
                </span>
              </div>
            </div>

            {/* Real Dashboard Screenshot in Modal */}
            <div className="mt-5 rounded-sm border border-border overflow-hidden bg-slate-950">
              <div className="bg-card px-3 py-1.5 border-b border-border flex items-center justify-between text-[11px]">
                <span className="font-semibold text-foreground flex items-center gap-1.5">
                  <ShieldCheck className="h-3 w-3 text-gold" />
                  <span>{activeModalStudy.screenshotCaption}</span>
                </span>
                <span className="text-[10px] text-muted-foreground uppercase">Meta Ads Manager</span>
              </div>
              <img
                src={activeModalStudy.screenshot}
                alt={`${activeModalStudy.campaign} dashboard`}
                className="w-full object-contain"
              />
            </div>

            {/* Campaign line items */}
            <div className="mt-4 rounded-sm bg-secondary/50 p-3.5 border border-border text-xs">
              <span className="font-semibold text-foreground block mb-1">
                Active Campaign Line Items:
              </span>
              <ul className="space-y-1 font-mono text-[11px] text-muted-foreground">
                {activeModalStudy.actualCampaigns.map((c, i) => (
                  <li key={i}>• {c}</li>
                ))}
              </ul>
            </div>

            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              {activeModalStudy.overview}
            </p>

            <div className="mt-8 pt-5 border-t border-border flex items-center justify-between gap-3">
              <Link
                to="/results"
                className="text-xs font-semibold text-gold hover:underline"
              >
                View All 9 Dashboards in Results →
              </Link>
              <Link
                to="/contact"
                className="rounded-sm bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-primary-foreground hover:bg-gold hover:text-primary transition-colors"
              >
                Discuss Campaign With Farah
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
