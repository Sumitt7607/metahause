import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight, Target, Megaphone, BarChart3, ShoppingBag,
  FlaskConical, LineChart, Check, Sparkles, HelpCircle, ChevronDown,
} from "lucide-react";
import { services, faqs, whatsappLink } from "@/content/site";
import { LiveStatsTicker } from "@/components/common/LiveStatsTicker";
import { PricingSection } from "@/components/common/PricingSection";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Meta Ads Performance Services & Retainers — METAHAUS_BYFARAH" },
      {
        name: "description",
        content:
          "Full-funnel Meta advertising management, high-ticket lead generation, creative testing, and tracking setups for beauty, clinic, and luxury brand scaling.",
      },
    ],
  }),
  component: ServicesPage,
});

const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Target,
  Megaphone,
  BarChart3,
  ShoppingBag,
  FlaskConical,
  LineChart,
};

function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative overflow-hidden bg-primary py-12 sm:py-20 text-primary-foreground">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(186,151,88,0.22),rgba(255,255,255,0))]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl reveal">
            <span className="eyebrow text-gold">Tailored Growth Engagements</span>
            <h1 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-serif leading-[1.1] text-white">
              Performance Advertising Engineered For High-Ticket Conversions
            </h1>
            <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-primary-foreground/80 leading-relaxed max-w-2xl">
              We don't offer generic social media management or boost buttons. Every engagement is a rigorous, scientific marketing engine designed to deliver profitable customer acquisition and packed booking diaries.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-primary shadow-soft transition-all hover:bg-gold-soft hover:shadow-gold text-center"
              >
                <span>Request Custom Service Proposal</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/process"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-primary-foreground/20 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-primary-foreground transition-all hover:border-gold hover:text-gold text-center"
              >
                <span>View Our 6-Step Process</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Live Ticker */}
      <LiveStatsTicker />

      {/* Comprehensive Services Breakdown */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="eyebrow">Service Capabilities</span>
            <h2 className="mt-3 font-serif text-2xl sm:text-4xl text-foreground">
              Everything Your Meta Ad Account Needs To Win In 2026
            </h2>
            <p className="mt-3 text-muted-foreground text-xs sm:text-sm leading-relaxed">
              From technical Conversions API deployment to scroll-stopping aesthetic creative briefing and daily bid adjustments.
            </p>
          </div>

          <div className="mt-10 sm:mt-14 grid gap-6 sm:gap-8 lg:grid-cols-2">
            {services.map((service, index) => {
              const Icon = serviceIcons[service.icon] ?? Target;
              return (
                <article
                  key={service.slug}
                  id={service.slug}
                  className="group flex flex-col justify-between rounded-sm border border-border bg-card p-5 sm:p-8 shadow-xs transition-all duration-300 hover:border-gold hover:shadow-soft"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-primary text-gold shadow-xs">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="font-serif text-3xl text-border group-hover:text-gold/40 transition-colors">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-6 font-serif text-2xl text-foreground group-hover:text-gold transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-gold">
                      {service.tagline}
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {service.desc}
                    </p>

                    {/* Deliverables */}
                    <div className="mt-6 rounded-sm bg-secondary/50 p-5 border border-border">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-3">
                        Key Deliverables & Inclusions:
                      </h4>
                      <ul className="space-y-2 text-xs text-muted-foreground">
                        {service.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-foreground/90">
                            <Check className="h-3.5 w-3.5 shrink-0 text-gold mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-muted-foreground">
                    <div>
                      <span className="font-semibold text-foreground">Timeline:</span> {service.timeline}
                    </div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1 font-bold text-foreground group-hover:text-gold transition-colors"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Website Development Section */}
      <section className="py-12 sm:py-20 bg-card border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border pb-8">
            <div>
              <span className="eyebrow">New Service</span>
              <h2 className="mt-3 font-serif text-2xl sm:text-4xl text-foreground">
                Website & Landing Page Development
              </h2>
              <p className="mt-3 text-sm text-muted-foreground max-w-xl leading-relaxed">
                Performance-first websites built to complement your Meta Ads strategy. We create bespoke, luxury-feel digital presences that convert paid traffic into real bookings for beauty, bridal, and aesthetic brands.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-xs font-bold uppercase tracking-wider text-primary-foreground hover:bg-gold hover:text-primary transition-colors shrink-0"
            >
              <span>Get a Web Development Quote</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {/* Package 1 */}
            <article className="group flex flex-col justify-between rounded-sm border border-border bg-background p-6 sm:p-8 shadow-xs hover:border-gold hover:shadow-soft transition-all duration-300">
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-primary text-gold shadow-xs text-xl">
                    🎯
                  </div>
                  <span className="font-serif text-3xl text-border group-hover:text-gold/40 transition-colors">01</span>
                </div>
                <h3 className="mt-6 font-serif text-xl text-foreground group-hover:text-gold transition-colors">
                  High-Converting Landing Page
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-gold">
                  Built for Paid Ad Traffic
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  A singular, focused landing page engineered for one goal — converting your Meta Ad clicks into bookings or enquiries. No distractions, no bloat.
                </p>
                <div className="mt-6 rounded-sm bg-secondary/50 p-5 border border-border">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-3">Inclusions:</h4>
                  <ul className="space-y-2 text-xs">
                    {[
                      "Custom designed single-page layout",
                      "Mobile-first responsive build",
                      "Meta Pixel & CAPI event integration",
                      "Lead form or WhatsApp CTA integration",
                      "Core Web Vitals optimised",
                      "GDPR cookie consent setup",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-foreground/90">
                        <Check className="h-3.5 w-3.5 shrink-0 text-gold mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-6 pt-5 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                <span><span className="font-semibold text-foreground">Timeline:</span> 5–7 business days</span>
                <Link to="/contact" className="inline-flex items-center gap-1 font-bold text-foreground group-hover:text-gold transition-colors">
                  <span>Enquire</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>

            {/* Package 2 */}
            <article className="group flex flex-col justify-between rounded-sm border border-gold/50 bg-background p-6 sm:p-8 shadow-soft hover:border-gold transition-all duration-300 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-[10px] font-bold uppercase tracking-wider text-primary whitespace-nowrap">
                Most Popular
              </div>
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-primary text-gold shadow-xs text-xl">
                    ✨
                  </div>
                  <span className="font-serif text-3xl text-gold/40 transition-colors">02</span>
                </div>
                <h3 className="mt-6 font-serif text-xl text-foreground group-hover:text-gold transition-colors">
                  Full Brand Website
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-gold">
                  Your Complete Digital Presence
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  A full multi-page website that establishes your brand authority, showcases your portfolio, and drives enquiries — perfectly paired with your Meta Ads ecosystem.
                </p>
                <div className="mt-6 rounded-sm bg-secondary/50 p-5 border border-border">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-3">Inclusions:</h4>
                  <ul className="space-y-2 text-xs">
                    {[
                      "Up to 8 custom pages (Home, About, Services, Gallery, Contact etc.)",
                      "Luxury brand-aligned UI design system",
                      "Portfolio / before & after gallery module",
                      "Blog / content section for SEO",
                      "Full Meta Pixel & CAPI integration",
                      "WhatsApp & booking widget integration",
                      "SEO foundations (meta, schema, sitemap)",
                      "1 month post-launch support",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-foreground/90">
                        <Check className="h-3.5 w-3.5 shrink-0 text-gold mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-6 pt-5 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                <span><span className="font-semibold text-foreground">Timeline:</span> 2–4 weeks</span>
                <Link to="/contact" className="inline-flex items-center gap-1 font-bold text-gold hover:text-gold/80 transition-colors">
                  <span>Enquire</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>

            {/* Package 3 */}
            <article className="group flex flex-col justify-between rounded-sm border border-border bg-background p-6 sm:p-8 shadow-xs hover:border-gold hover:shadow-soft transition-all duration-300">
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-primary text-gold shadow-xs text-xl">
                    🚀
                  </div>
                  <span className="font-serif text-3xl text-border group-hover:text-gold/40 transition-colors">03</span>
                </div>
                <h3 className="mt-6 font-serif text-xl text-foreground group-hover:text-gold transition-colors">
                  Ads + Web Bundle
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-gold">
                  The Complete Growth Stack
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Website development bundled with Meta Ads management. The most cohesive, high-performance growth solution — your entire digital acquisition engine under one roof.
                </p>
                <div className="mt-6 rounded-sm bg-secondary/50 p-5 border border-border">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-3">Everything included, plus:</h4>
                  <ul className="space-y-2 text-xs">
                    {[
                      "Full Brand Website (as above)",
                      "Ongoing Meta Ads management retainer",
                      "Unified tracking — website & ads perfectly synced",
                      "Landing page A/B split testing",
                      "Monthly CRO (Conversion Rate Optimisation) review",
                      "Priority support & strategy calls",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-foreground/90">
                        <Check className="h-3.5 w-3.5 shrink-0 text-gold mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-6 pt-5 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                <span><span className="font-semibold text-foreground">Timeline:</span> Custom</span>
                <Link to="/contact" className="inline-flex items-center gap-1 font-bold text-foreground group-hover:text-gold transition-colors">
                  <span>Enquire</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 4 Niche Pricing & Investment Options */}

      <PricingSection />

      {/* Services FAQ */}
      <section className="py-12 sm:py-20 bg-background border-t border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="eyebrow">Got Questions?</span>
            <h2 className="mt-3 font-serif text-2xl sm:text-4xl text-foreground">
              Frequently Asked Questions About Our Services
            </h2>
          </div>

          <div className="mt-8 sm:mt-12 space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-sm border border-border bg-card transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between p-4 sm:p-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-lg text-foreground pr-4">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 text-gold shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground border-t border-border/50 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              Have a specific question not covered here?{" "}
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold font-semibold hover:underline"
              >
                Ask Farah directly on WhatsApp →
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
