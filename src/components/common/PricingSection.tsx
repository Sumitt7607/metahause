import { Link } from "@tanstack/react-router";
import { MessageCircle, ArrowRight, Sparkles, Check, ShieldCheck, Tag } from "lucide-react";
import { whatsappLink } from "@/content/site";

export function PricingSection({ className = "" }: { className?: string }) {
  return (
    <section id="pricing" className={`border-t border-border bg-background py-16 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-card px-3.5 py-1 text-xs text-gold font-semibold uppercase tracking-widest shadow-xs">
            <Sparkles className="h-3 w-3 text-gold" />
            <span>Transparent Investment</span>
          </div>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl text-foreground">
            Pricing Tailored To Your Niche
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            No bloated agency retainers. Choose transparent monthly management designed for your business model and target geography.
          </p>
        </div>

        {/* 4 Niche Pricing Cards */}
        <div className="mt-12 sm:mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          
          {/* 1. Bridal Makeup Artists - Highlighted Tier */}
          <div className="relative rounded-sm border-2 border-gold bg-card p-6 shadow-gold flex flex-col justify-between transition-all hover:-translate-y-1">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-3.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary whitespace-nowrap shadow-xs">
              Most Established Niche
            </div>

            <div>
              <div className="flex items-center justify-between text-[11px] font-bold text-gold uppercase tracking-wider">
                <span>Bridal Specialist</span>
                <span className="bg-gold/15 text-gold-dark px-2 py-0.5 rounded-sm">Starting Price</span>
              </div>

              <h3 className="mt-3 font-serif text-xl sm:text-2xl text-foreground font-semibold">
                Bridal Makeup Artists
              </h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Our most established niche with a dedicated pricing option engineered specifically for bridal booking cycles and seasonal inquiries.
              </p>

              {/* Dedicated Pricing Rates */}
              <div className="mt-5 space-y-2.5 rounded-sm bg-secondary/60 p-4 border border-border">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs font-semibold text-foreground">UAE:</span>
                  <span className="font-serif text-lg font-bold text-foreground">AED 1,300 <span className="text-xs font-sans font-normal text-muted-foreground">/mo</span></span>
                </div>
                <div className="flex items-baseline justify-between border-t border-border/70 pt-2">
                  <span className="text-xs font-semibold text-foreground">UK:</span>
                  <span className="font-serif text-lg font-bold text-foreground">£220 <span className="text-xs font-sans font-normal text-muted-foreground">/mo</span></span>
                </div>
                <div className="mt-3 rounded-sm bg-emerald-50 border border-emerald-300/50 p-2 text-[11px] text-emerald-900 font-medium leading-tight">
                  <span className="font-bold block text-emerald-800 mb-0.5">✨ UAE Intro Offer:</span>
                  AED 1,000 for your first month
                </div>
              </div>

              <ul className="mt-5 space-y-2 text-xs text-foreground">
                <li className="flex items-start gap-2">
                  <Check className="h-3.5 w-3.5 text-gold shrink-0 mt-0.5" />
                  <span>Meta Instant Forms & WhatsApp lead flow</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-3.5 w-3.5 text-gold shrink-0 mt-0.5" />
                  <span>Wedding date & budget qualification checkpoints</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-3.5 w-3.5 text-gold shrink-0 mt-0.5" />
                  <span>Daily bid calibration & creative rotation</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-border">
              <Link
                to="/contact"
                className="flex w-full items-center justify-center gap-1.5 rounded-sm bg-rose-600 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-soft transition-all hover:bg-rose-700 hover:shadow-lg"
              >
                <span>Book Strategy Call</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* 2. Salons & Aesthetic Clinics */}
          <div className="rounded-sm border border-border bg-card p-6 shadow-xs flex flex-col justify-between transition-all hover:-translate-y-1">
            <div>
              <div className="flex items-center justify-between text-[11px] font-bold text-muted-foreground uppercase tracking-wider">
                <span>Multi-Treatment</span>
                <span className="bg-secondary px-2 py-0.5 rounded-sm text-foreground">Custom Quote</span>
              </div>

              <h3 className="mt-3 font-serif text-xl sm:text-2xl text-foreground font-semibold">
                Salons & Aesthetic Clinics
              </h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                These businesses may need multiple service campaigns, location-based radius targeting, high-ticket treatment offers, and aggressive creative testing.
              </p>

              <div className="mt-5 rounded-sm bg-secondary/40 p-4 border border-border">
                <span className="text-xs text-muted-foreground block">Investment Model:</span>
                <span className="font-serif text-lg font-bold text-foreground">Custom Quote</span>
                <p className="text-[11px] text-muted-foreground mt-1">
                  Priced by treatment volume, branches, and geographic radius.
                </p>
              </div>

              <ul className="mt-5 space-y-2 text-xs text-foreground">
                <li className="flex items-start gap-2">
                  <Check className="h-3.5 w-3.5 text-gold shrink-0 mt-0.5" />
                  <span>Local geo-radius radius mapping (UK / UAE / GCC)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-3.5 w-3.5 text-gold shrink-0 mt-0.5" />
                  <span>Multi-treatment angle & offer testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-3.5 w-3.5 text-gold shrink-0 mt-0.5" />
                  <span>Direct booking integration & lead pipeline</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-border">
              <Link
                to="/contact"
                className="flex w-full items-center justify-center gap-1.5 rounded-sm bg-black py-3 text-xs font-bold uppercase tracking-wider text-white shadow-xs transition-all hover:bg-zinc-800"
              >
                <span>Request a Custom Quote</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* 3. EdTech & Online Education */}
          <div className="rounded-sm border border-border bg-card p-6 shadow-xs flex flex-col justify-between transition-all hover:-translate-y-1">
            <div>
              <div className="flex items-center justify-between text-[11px] font-bold text-muted-foreground uppercase tracking-wider">
                <span>Academies & Courses</span>
                <span className="bg-secondary px-2 py-0.5 rounded-sm text-foreground">Custom Quote</span>
              </div>

              <h3 className="mt-3 font-serif text-xl sm:text-2xl text-foreground font-semibold">
                EdTech & Online Education
              </h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Lead-generation campaigns for tutoring, academies, masterclasses, coding and STEM programs with specific cohort funnels and qualification criteria.
              </p>

              <div className="mt-5 rounded-sm bg-secondary/40 p-4 border border-border">
                <span className="text-xs text-muted-foreground block">Investment Model:</span>
                <span className="font-serif text-lg font-bold text-foreground">Custom Quote</span>
                <p className="text-[11px] text-muted-foreground mt-1">
                  Aligned to cohort launch dates, seats, and webinar funnels.
                </p>
              </div>

              <ul className="mt-5 space-y-2 text-xs text-foreground">
                <li className="flex items-start gap-2">
                  <Check className="h-3.5 w-3.5 text-gold shrink-0 mt-0.5" />
                  <span>Cohort enrolment funnels & webinar lead gen</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-3.5 w-3.5 text-gold shrink-0 mt-0.5" />
                  <span>Parent & student demographic segmenting</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-3.5 w-3.5 text-gold shrink-0 mt-0.5" />
                  <span>Automated WhatsApp CRM nurturing flows</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-border">
              <Link
                to="/contact"
                className="flex w-full items-center justify-center gap-1.5 rounded-sm bg-black py-3 text-xs font-bold uppercase tracking-wider text-white shadow-xs transition-all hover:bg-zinc-800"
              >
                <span>Discuss Your Campaign</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* 4. Jewellery, Fashion & Other Brands */}
          <div className="rounded-sm border border-border bg-card p-6 shadow-xs flex flex-col justify-between transition-all hover:-translate-y-1">
            <div>
              <div className="flex items-center justify-between text-[11px] font-bold text-muted-foreground uppercase tracking-wider">
                <span>E-Commerce & Luxury</span>
                <span className="bg-secondary px-2 py-0.5 rounded-sm text-foreground">Tailored Proposal</span>
              </div>

              <h3 className="mt-3 font-serif text-xl sm:text-2xl text-foreground font-semibold">
                Jewellery, Fashion & Brands
              </h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                A consultation-based option for brands that need direct sales campaigns, Advantage+ catalogue ads, high-intent retargeting, or a broader multi-channel strategy.
              </p>

              <div className="mt-5 rounded-sm bg-secondary/40 p-4 border border-border">
                <span className="text-xs text-muted-foreground block">Investment Model:</span>
                <span className="font-serif text-lg font-bold text-foreground">Tailored Proposal</span>
                <p className="text-[11px] text-muted-foreground mt-1">
                  Built around SKU depth, ROAS benchmarks, and catalog scale.
                </p>
              </div>

              <ul className="mt-5 space-y-2 text-xs text-foreground">
                <li className="flex items-start gap-2">
                  <Check className="h-3.5 w-3.5 text-gold shrink-0 mt-0.5" />
                  <span>Advantage+ Catalog & Dynamic Product Ads</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-3.5 w-3.5 text-gold shrink-0 mt-0.5" />
                  <span>High-ticket retargeting & VIP custom audiences</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-3.5 w-3.5 text-gold shrink-0 mt-0.5" />
                  <span>Creative asset guidance & hook testing</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-border">
              <Link
                to="/contact"
                className="flex w-full items-center justify-center gap-1.5 rounded-sm bg-black py-3 text-xs font-bold uppercase tracking-wider text-white shadow-xs transition-all hover:bg-zinc-800"
              >
                <span>Let's Plan Your Ads</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* Management Fee Notice */}
        <div className="mt-10 rounded-sm border border-border bg-card p-4 text-center max-w-2xl mx-auto text-xs text-muted-foreground">
          <span className="font-semibold text-foreground">Important Note:</span> All management fees are separate from advertising spend, which is billed directly by Meta to your ad account.
        </div>

        {/* Footer Question & WhatsApp CTA */}
        <div className="mt-10 border-t border-border pt-10 text-center max-w-xl mx-auto space-y-4">
          <p className="font-serif text-xl sm:text-2xl text-foreground font-medium">
            Not sure which service fits your business?
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Farah can review your current ad performance or website and recommend the most effective structure.
          </p>
          <div className="pt-2">
            <a
              href={whatsappLink("Hello Farah, I'm reviewing your pricing options and would like to discuss which service fits my business.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-emerald-600 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-soft transition-all hover:bg-emerald-700 hover:shadow-lg"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Discuss Your Business on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
