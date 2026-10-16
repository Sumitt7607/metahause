import { createFileRoute, Link } from "@tanstack/react-router";
import { Scale, ArrowLeft, ShieldCheck, FileCheck, AlertCircle, MessageCircle } from "lucide-react";
import { contact, whatsappLink } from "@/content/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — METAHAUS_BYFARAH" },
      {
        name: "description",
        content:
          "Terms of Service governing Meta Ads management, consultation retainers, and performance marketing engagements with METAHAUS_BYFARAH.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  const lastUpdated = "April 2026";

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative overflow-hidden bg-primary py-12 sm:py-16 text-primary-foreground">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(186,151,88,0.22),rgba(255,255,255,0))]" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold hover:underline mb-6"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Home
          </Link>
          <span className="eyebrow text-gold">Legal Agreement</span>
          <h1 className="mt-3 text-3xl sm:text-5xl font-serif text-white">
            Terms of Service
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-primary-foreground/80">
            Last Updated: {lastUpdated} · Governed by METAHAUS_BYFARAH
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-sm border border-border bg-card p-6 sm:p-12 shadow-soft space-y-8 text-sm leading-relaxed text-muted-foreground">

            <div className="rounded-sm border border-gold/30 bg-gold-soft/10 p-4 sm:p-5 text-xs text-foreground flex items-start gap-3">
              <Scale className="h-5 w-5 text-gold shrink-0 mt-0.5" />
              <div>
                <strong className="block text-foreground font-semibold">Terms Overview:</strong>
                These Terms of Service govern your access to and use of services provided by METAHAUS_BYFARAH ("we", "us", or "our"), including consulting sessions, account audits, and monthly Meta Ads management retainers.
              </div>
            </div>

            <div>
              <h2 className="font-serif text-xl sm:text-2xl text-foreground font-semibold mb-3">
                1. Scope of Services
              </h2>
              <p className="mb-3">
                METAHAUS_BYFARAH provides specialized, performance-driven advertising consulting and campaign execution services, specifically:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li>Meta Ads Manager account architecture, bid calibration, audience research, and budget allocation.</li>
                <li>Creative scripting briefs, aesthetic hook curation, and copy direct-response tailoring.</li>
                <li>Conversions API (CAPI) and technical pixel setup verification.</li>
                <li>Lead generation qualification funnels (Instant Forms, WhatsApp message funnels, and consultation calendar integrations).</li>
              </ul>
            </div>

            <div className="border-t border-border pt-6">
              <h2 className="font-serif text-xl sm:text-2xl text-foreground font-semibold mb-3">
                2. Client Obligations & Account Access
              </h2>
              <p className="mb-3">
                To enable successful campaign calibration, the Client agrees to:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li>Grant appropriate partner access permissions via Meta Business Manager without transferring account ownership.</li>
                <li>Maintain active, valid billing payment methods directly funded inside their own Meta Ads Manager ad account for all platform advertising spend.</li>
                <li>Provide accurate, high-resolution brand photography, video assets, and product/service pricing details in a timely manner.</li>
                <li>Review and provide approval for ad scripts and creative angles within agreed sprint timelines.</li>
              </ul>
            </div>

            <div className="border-t border-border pt-6">
              <h2 className="font-serif text-xl sm:text-2xl text-foreground font-semibold mb-3">
                3. Advertising Spend & Platform Disclaimers
              </h2>
              <p className="mb-3">
                All advertising budget spend is paid directly by the Client to Meta Platforms, Inc. Management retainers paid to METAHAUS_BYFARAH cover strategic consultancy and campaign execution only, not media spend.
              </p>
              <div className="rounded-sm bg-secondary/60 p-4 border border-border text-xs space-y-2">
                <p className="font-semibold text-foreground flex items-center gap-1.5">
                  <AlertCircle className="h-4 w-4 text-gold" /> Performance Reality Notice:
                </p>
                <p>
                  While METAHAUS_BYFARAH utilizes battle-tested, data-led strategies to consistently optimize for the lowest cost-per-lead and highest conversion quality, advertising outcomes naturally fluctuate based on market competition, ad auction dynamics, seasonality, client sales close rates, and external economic conditions. Past campaign benchmarks displayed on this website do not guarantee future returns.
                </p>
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <h2 className="font-serif text-xl sm:text-2xl text-foreground font-semibold mb-3">
                4. Intellectual Property & Confidentiality
              </h2>
              <p className="mb-3">
                <strong className="text-foreground">Client Assets:</strong> You retain full, exclusive ownership of all logos, brand imagery, trademarks, and customer lists provided to us.
              </p>
              <p className="mb-3">
                <strong className="text-foreground">Agency Methodology:</strong> Proprietary media-buying frameworks, tracking architectures, and internal optimization workflows developed by METAHAUS_BYFARAH remain our intellectual property.
              </p>
              <p>
                <strong className="text-foreground">Mutual NDA:</strong> Both parties agree to maintain strict commercial confidentiality regarding business financials, client leads, and proprietary ad copy.
              </p>
            </div>

            <div className="border-t border-border pt-6">
              <h2 className="font-serif text-xl sm:text-2xl text-foreground font-semibold mb-3">
                5. Retainer Billing & Termination
              </h2>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li>Monthly management retainers are billed in advance of each 30-day service cycle.</li>
                <li>Because we operate with a strictly capped client roster, cancellation requires written notice at least 14 days prior to the next billing cycle.</li>
                <li>Upon termination, partner access to your ad account is cleanly relinquished, and all active campaign structures remain permanently in your ad account.</li>
              </ul>
            </div>

            <div className="border-t border-border pt-6">
              <h2 className="font-serif text-xl sm:text-2xl text-foreground font-semibold mb-3">
                6. Governing Law & Jurisdiction
              </h2>
              <p>
                These Terms are governed by and construed in accordance with applicable commercial laws. Any dispute arising from these terms will be settled amicably through direct negotiation or standard commercial arbitration.
              </p>
            </div>

            <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link
                to="/privacy"
                className="text-xs font-semibold text-gold hover:underline"
              >
                ← Read Privacy Policy
              </Link>
              <a
                href={whatsappLink("Hello Farah, I have a question regarding your Terms of Service.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm bg-emerald-600 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-emerald-700 transition-colors shadow-soft"
              >
                <MessageCircle className="h-3.5 w-3.5 text-white" />
                <span>Discuss Terms on WhatsApp</span>
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
