import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight, Target, Megaphone, BarChart3, ShoppingBag,
  FlaskConical, LineChart, Check, Sparkles, HelpCircle, ChevronDown,
} from "lucide-react";
import { services, faqs, whatsappLink } from "@/content/site";
import { LiveStatsTicker } from "@/components/common/LiveStatsTicker";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Meta Ads Performance Services & Retainers — MetaHaus by Farah" },
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
      <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(186,151,88,0.22),rgba(255,255,255,0))]" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl reveal">
            <span className="eyebrow text-gold">Tailored Growth Engagements</span>
            <h1 className="mt-4 text-4xl sm:text-6xl font-serif leading-[1.1] text-white">
              Performance Advertising Engineered For High-Ticket Conversions
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed max-w-2xl">
              We don't offer generic social media management or boost buttons. Every engagement is a rigorous, scientific marketing engine designed to deliver profitable customer acquisition and packed booking diaries.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-sm bg-gold px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-primary shadow-soft transition-all hover:bg-gold-soft hover:shadow-gold"
              >
                <span>Request Custom Service Proposal</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/process"
                className="inline-flex items-center gap-2 rounded-sm border border-primary-foreground/20 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-primary-foreground transition-all hover:border-gold hover:text-gold"
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
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <span className="eyebrow">Service Capabilities</span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-foreground">
              Everything Your Meta Ad Account Needs To Win In 2026
            </h2>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
              From technical Conversions API deployment to scroll-stopping aesthetic creative briefing and daily bid adjustments.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {services.map((service, index) => {
              const Icon = serviceIcons[service.icon] ?? Target;
              return (
                <article
                  key={service.slug}
                  id={service.slug}
                  className="group flex flex-col justify-between rounded-sm border border-border bg-card p-8 shadow-xs transition-all duration-300 hover:border-gold hover:shadow-soft"
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

      {/* Engagement Models & Retainers */}
      <section className="border-t border-border bg-card py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="eyebrow">Collaboration Framework</span>
            <h2 className="mt-3 font-serif text-3xl sm:text-5xl text-foreground">
              Structured Retainers & Growth Tiers
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              We work on capped client rosters to ensure obsessive attention to your ad metrics and daily performance adjustments.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {/* Tier 1 */}
            <div className="rounded-sm border border-border bg-background p-8 flex flex-col justify-between shadow-xs">
              <div>
                <span className="eyebrow">Diagnostic Phase</span>
                <h3 className="mt-2 font-serif text-2xl text-foreground">The Growth Audit & Roadmap</h3>
                <p className="mt-2 text-xs text-muted-foreground">One-time deep dive into your account.</p>
                <div className="mt-6 border-t border-border pt-6">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    A comprehensive 30+ point diagnostic of your past campaigns, pixel health, tracking discrepancies, creative bottlenecks, and competitor positioning.
                  </p>
                  <ul className="mt-6 space-y-2.5 text-xs text-foreground">
                    <li className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-gold" /> Full Meta Ad Account Audit
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-gold" /> Competitor Ad Intelligence
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-gold" /> 90-Day Scaling Blueprint
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-gold" /> 60-Min Strategy Presentation
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-border">
                <Link
                  to="/contact"
                  className="block w-full text-center rounded-sm border border-border bg-card py-3 text-xs font-bold uppercase tracking-wider text-foreground hover:border-gold hover:text-gold transition-colors"
                >
                  Book Growth Audit
                </Link>
              </div>
            </div>

            {/* Tier 2 - Featured */}
            <div className="rounded-sm border-2 border-gold bg-primary p-8 text-primary-foreground flex flex-col justify-between shadow-gold relative">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
                Most Popular Engagement
              </div>
              <div>
                <span className="eyebrow text-gold">Full Execution</span>
                <h3 className="mt-2 font-serif text-2xl text-white">Full-Funnel Growth Retainer</h3>
                <p className="mt-2 text-xs text-primary-foreground/70">Hands-off daily performance scaling.</p>
                <div className="mt-6 border-t border-primary-foreground/15 pt-6">
                  <p className="text-xs text-primary-foreground/80 leading-relaxed">
                    End-to-end management of your Meta Ads Manager. We design the funnels, write the copy, direct creative angles, optimize daily bids, and scale qualified enquiries.
                  </p>
                  <ul className="mt-6 space-y-2.5 text-xs text-white">
                    <li className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-gold" /> Daily Bid & Audience Optimization
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-gold" /> Bi-Weekly Creative Scripting Briefs
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-gold" /> Lead Qualification Funnel Setup
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-gold" /> Direct WhatsApp & Slack Sync
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-gold" /> Live Real-Time Dashboard
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-primary-foreground/15">
                <Link
                  to="/contact"
                  className="block w-full text-center rounded-sm bg-gold py-3 text-xs font-bold uppercase tracking-wider text-primary hover:bg-gold-soft transition-colors shadow-soft"
                >
                  Apply For Retainer
                </Link>
              </div>
            </div>

            {/* Tier 3 */}
            <div className="rounded-sm border border-border bg-background p-8 flex flex-col justify-between shadow-xs">
              <div>
                <span className="eyebrow">Enterprise & Academy</span>
                <h3 className="mt-2 font-serif text-2xl text-foreground">Multi-Region & Cohort Scale</h3>
                <p className="mt-2 text-xs text-muted-foreground">For international chains & academies.</p>
                <div className="mt-6 border-t border-border pt-6">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Designed for multi-location clinic chains, regional cosmetic brands, or beauty academies requiring cross-border multi-lingual campaigns across Europe, UK, and GCC.
                  </p>
                  <ul className="mt-6 space-y-2.5 text-xs text-foreground">
                    <li className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-gold" /> Multi-Market Targeting (UK / GCC)
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-gold" /> Bilingual Arabic/English Copywriting
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-gold" /> High-Volume Creative Batching
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-gold" /> Priority Executive Slack Access
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-border">
                <a
                  href={whatsappLink("Hello Farah, I'd like to discuss an enterprise multi-region Meta Ads engagement.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center rounded-sm border border-border bg-card py-3 text-xs font-bold uppercase tracking-wider text-foreground hover:border-gold hover:text-gold transition-colors"
                >
                  Contact For Custom Scope
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services FAQ */}
      <section className="py-20 bg-background border-t border-border">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div className="text-center">
            <span className="eyebrow">Got Questions?</span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-foreground">
              Frequently Asked Questions About Our Services
            </h2>
          </div>

          <div className="mt-12 space-y-4">
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
                    className="flex w-full items-center justify-between p-6 text-left"
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
