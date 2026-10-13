import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Check, Sparkles, MapPin,
  TrendingUp, Award,
} from "lucide-react";
import bridalImg from "@/assets/bridal.jpg";
import { primaryIndustries, otherIndustries, whatsappLink } from "@/content/site";
import { LiveStatsTicker } from "@/components/common/LiveStatsTicker";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Specialised Industries — Meta Ads for Beauty & Aesthetic Brands" },
      {
        name: "description",
        content:
          "Domain-specific Meta advertising strategies for bridal makeup artists, medical aesthetic clinics, skincare brands and beauty academies across Europe and the GCC.",
      },
    ],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  const regions = [
    {
      name: "Dubai & UAE",
      description: "Affluent local & expat communities with high disposable income and rapid decision cycles.",
      tactics: "High aesthetic production values, direct VIP WhatsApp friction, English/Arabic consideration.",
    },
    {
      name: "London & United Kingdom",
      description: "Discerning luxury consumers valuing credentialed artistry and transparent clinical authority.",
      tactics: "Subtle editorial tone, seasonality date scacity, postcode & commuter radius targeting.",
    },
    {
      name: "Saudi Arabia & GCC",
      description: "Surging demand for professional beauty academies and luxury bridal makeup transformations.",
      tactics: "Culturally resonant video storytelling, high mobile reel engagement, localized payment proof.",
    },
    {
      name: "Switzerland & Central Europe",
      description: "High-value D2C organic skincare and exclusive medical spa client appointments.",
      tactics: "Ingredient purity proofs, doctor endorsements, multi-lingual targeting.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative overflow-hidden bg-primary py-12 sm:py-20 text-primary-foreground">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(186,151,88,0.22),rgba(255,255,255,0))]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl reveal">
            <span className="eyebrow text-gold">Domain Specialization</span>
            <h1 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-serif leading-[1.1] text-white">
              We Speak The Language of Luxury Beauty & Aesthetics
            </h1>
            <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-primary-foreground/80 leading-relaxed max-w-2xl">
              Generic agencies treat aesthetic clinics and bridal artists like plumbers or e-commerce dropshippers. We understand the emotional nuance, trust barriers, and high-ticket purchase psychology unique to beauty.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                to="/calculator"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-primary shadow-soft transition-all hover:bg-gold-soft hover:shadow-gold text-center"
              >
                <span>Check Your Industry Forecast</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/results"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-primary-foreground/20 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-primary-foreground transition-all hover:border-gold hover:text-gold text-center"
              >
                <span>View Industry Case Studies</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Live Ticker */}
      <LiveStatsTicker />

      {/* Primary Sectors Deep-Dive */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 items-center mb-12 sm:mb-20 border-b border-border pb-10 sm:pb-16">
            <div>
              <span className="eyebrow">Flagship Focus</span>
              <h2 className="mt-3 font-serif text-2xl sm:text-5xl text-foreground">
                Bridal & Luxury Aesthetics: Our Core Arena
              </h2>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Brides do not hire makeup artists based on discounts. Aesthetic patients do not trust their skin to the cheapest practitioner. We construct high-trust, aspirational Meta Ads funnels that command premium price authority and filter out bargain-hunters.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <Award className="h-4 w-4 text-gold shrink-0 mt-1" />
                  <p className="text-xs text-foreground">
                    <strong>Prestige Positioning:</strong> Showcasing bridal transformations and clinical precision with editorial lighting and cinematic video reels.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="h-4 w-4 text-gold shrink-0 mt-1" />
                  <p className="text-xs text-foreground">
                    <strong>Intent Qualification:</strong> Requiring budget selections and event dates before inquiries arrive, guaranteeing high conversion.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-sm border border-border shadow-soft">
              <img
                src={bridalImg}
                alt="Luxury bridal makeup artistry"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <span className="text-xs uppercase tracking-widest text-gold font-bold">
                    Dubai & London Wedding Seasons
                  </span>
                  <p className="font-serif text-xl mt-1">
                    Booking Out Diaries 4–6 Months in Advance
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Primary Industries Grid */}
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            {primaryIndustries.map((ind) => (
              <div
                key={ind.slug}
                className="rounded-sm border border-border bg-card p-5 sm:p-8 shadow-xs flex flex-col justify-between hover:border-gold transition-colors"
              >
                <div>
                  <span className="eyebrow">{ind.tagline}</span>
                  <h3 className="mt-3 font-serif text-2xl text-foreground">{ind.name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{ind.desc}</p>

                  <div className="mt-6 rounded-sm bg-secondary/50 p-4 border border-border space-y-2 text-xs">
                    <div>
                      <strong className="text-foreground">Key Benchmark Metrics:</strong>{" "}
                      <span className="text-gold font-medium">{ind.keyMetrics}</span>
                    </div>
                    <div>
                      <strong className="text-foreground">Optimal Creative Hook:</strong>{" "}
                      <span className="text-muted-foreground">{ind.idealAngle}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-border flex items-center justify-between">
                  <Link
                    to="/calculator"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-foreground hover:text-gold transition-colors"
                  >
                    <span>Simulate Ad ROI</span>
                    <ArrowRight className="h-3.5 w-3.5 text-gold" />
                  </Link>
                  <Link
                    to="/contact"
                    className="text-xs text-muted-foreground hover:text-foreground"
                  >
                    Discuss Campaign →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Specialized Industries */}
      <section className="border-t border-border bg-card py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="eyebrow">Additional Sectors</span>
            <h2 className="mt-3 font-serif text-2xl sm:text-4xl text-foreground">
              Proven Performance Across Selected Consumer Verticals
            </h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              While beauty is our primary passion, our conversion-focused methodology achieves extraordinary results across high-ticket consumer education and luxury lifestyle brands.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {otherIndustries.map((item, index) => (
              <div
                key={index}
                className="rounded-sm border border-border bg-background p-6 shadow-xs"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-gold/15 text-gold font-serif font-bold text-sm">
                  0{index + 1}
                </div>
                <h3 className="mt-4 font-serif text-xl text-foreground">{item.name}</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Market Intelligence */}
      <section className="border-t border-border bg-background py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="eyebrow">Geographic Footprint</span>
            <h2 className="mt-3 font-serif text-2xl sm:text-5xl text-foreground">
              Targeted Strategies Tailored To Local Market Realities
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Consumer behavior in Dubai Marina differs vastly from Mayfair London or Zurich. We adapt bidding parameters, platform placements, and creative angles to the regional market.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {regions.map((reg) => (
              <div
                key={reg.name}
                className="rounded-sm border border-border bg-card p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-gold">
                    <MapPin className="h-4 w-4" />
                    <span className="text-xs uppercase tracking-wider font-bold">{reg.name}</span>
                  </div>
                  <p className="mt-4 text-xs text-foreground/90 leading-relaxed">
                    {reg.description}
                  </p>
                  <div className="mt-4 rounded-sm bg-secondary/50 p-3 text-[11px] text-muted-foreground border border-border">
                    <strong className="text-foreground block mb-1">Key Strategy:</strong>
                    {reg.tactics}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href={whatsappLink("Hello Farah, I'd like to ask about targeting our beauty brand in specific regions.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-8 py-4 text-xs font-bold uppercase tracking-wider text-primary-foreground hover:bg-gold hover:text-primary transition-colors shadow-soft"
            >
              <span>Consult On Your Regional Strategy</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
