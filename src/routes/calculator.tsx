import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, MessageCircle } from "lucide-react";
import { RoasCalculator } from "@/components/common/RoasCalculator";
import { LiveStatsTicker } from "@/components/common/LiveStatsTicker";
import { whatsappLink } from "@/content/site";

export const Route = createFileRoute("/calculator")({
  head: () => ({
    meta: [
      { title: "Meta Ads ROAS & Revenue Calculator — METAHAUS_BYFARAH" },
      {
        name: "description",
        content:
          "Calculate your projected return on ad spend (ROAS), cost per qualified lead, and gross monthly revenue with our interactive Meta Ads beauty marketing forecaster.",
      },
    ],
  }),
  component: CalculatorPage,
});

function CalculatorPage() {
  const benchmarkHighlights = [
    {
      industry: "UK Instant Form Campaigns",
      avgCpl: "£8.28 – £8.42 / Lead",
      closeRate: "Direct Instant Form Leads",
      benchmarkRoas: "£0.10 Retargeting Clicks",
      insight: "Observed in active UK luxury interest campaigns with 34+ verified form leads.",
    },
    {
      industry: "Bridal & Academy Messaging",
      avgCpl: "$1.24 – $1.59 / Conv",
      closeRate: "Direct 1-on-1 Consultations",
      benchmarkRoas: "60–70 Convs / Sprint",
      insight: "Observed in active engagement campaigns generating 60–70 conversations in short sprints.",
    },
    {
      industry: "GCC Expat Audience Scaling",
      avgCpl: "₹174.50 – ₹285.93 / Conv",
      closeRate: "Direct WhatsApp Inquiries",
      benchmarkRoas: "₹219.67 Average Cost",
      insight: "Observed in active GCC diaspora campaigns with 74 conversations across 14,202 reach.",
    },
    {
      industry: "Multi-Market Academy & Tutoring",
      avgCpl: "₹220.29 – ₹358.85 / Conv",
      closeRate: "Student Registrations",
      benchmarkRoas: "50,173 Accounts Reached",
      insight: "Observed in active cross-border campaigns across Saudi Arabia, UAE, and GCC.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative overflow-hidden bg-primary py-12 sm:py-20 text-primary-foreground">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(186,151,88,0.22),rgba(255,255,255,0))]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl reveal">
            <span className="eyebrow text-gold">Interactive Financial Forecasting</span>
            <h1 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-serif leading-[1.1] text-white">
              Simulate Your Revenue Growth With Precision
            </h1>
            <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-primary-foreground/80 leading-relaxed max-w-2xl">
              Before investing in advertising, test your unit economics. Use our real-time Meta Ads model to forecast projected client enquiries, lead costs, and revenue upside.
            </p>
          </div>
        </div>
      </section>

      {/* Live Ticker */}
      <LiveStatsTicker />

      {/* Interactive Tool Section */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RoasCalculator />

          {/* Industry Benchmarks Table */}
          <div className="mt-12 sm:mt-20 border-t border-border pt-10 sm:pt-16">
            <div className="max-w-2xl">
              <span className="eyebrow">Data Transparency</span>
              <h3 className="mt-2 font-serif text-3xl text-foreground">
                How We Calculate These Forecasts
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                These calculations are grounded in actual client data from verified Meta Ads Manager campaigns in Dubai, London, and internationally.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {benchmarkHighlights.map((b, idx) => (
                <div
                  key={idx}
                  className="rounded-sm border border-border bg-card p-6 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <span className="eyebrow">{b.industry}</span>
                    <div className="mt-4 space-y-2 text-xs">
                      <div>
                        <span className="text-muted-foreground">Est. Cost Per Lead:</span>
                        <p className="font-semibold text-foreground text-sm">{b.avgCpl}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Expected Close Rate:</span>
                        <p className="font-semibold text-foreground text-sm">{b.closeRate}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Target ROAS Multiplier:</span>
                        <p className="font-semibold text-gold text-base font-serif">{b.benchmarkRoas}</p>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 border-t border-border pt-3 text-[11px] text-muted-foreground leading-relaxed">
                    {b.insight}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-sm border border-border bg-card p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="h-4 w-4 text-gold shrink-0" />
                <span>
                  Unit economics vary depending on creative quality, local competition, and seasonal demand. Book a tailored session to get an exact custom audit.
                </span>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider text-gold hover:underline shrink-0"
              >
                <span>Book 1-on-1 Feasibility Review</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
