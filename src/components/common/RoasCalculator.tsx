import { useState, useId } from "react";
import { Link } from "@tanstack/react-router";
import { Calculator, Sparkles, ArrowRight, CheckCircle2, TrendingUp, DollarSign } from "lucide-react";
import { whatsappLink } from "@/content/site";

type IndustryKey = "bridal" | "aesthetic" | "skincare" | "salon" | "academy";

interface IndustryConfig {
  name: string;
  defaultSpend: number;
  defaultTicket: number;
  estimatedCpl: number;
  closeRate: number; // percentage
  currency: string;
}

const industries: Record<IndustryKey, IndustryConfig> = {
  bridal: {
    name: "Bridal Makeup Artist / Team",
    defaultSpend: 1800,
    defaultTicket: 1100,
    estimatedCpl: 7.5,
    closeRate: 0.28,
    currency: "$",
  },
  aesthetic: {
    name: "Medical Aesthetics / Clinic",
    defaultSpend: 3500,
    defaultTicket: 1600,
    estimatedCpl: 16.0,
    closeRate: 0.32,
    currency: "$",
  },
  skincare: {
    name: "D2C Luxury Skincare Brand",
    defaultSpend: 5000,
    defaultTicket: 120,
    estimatedCpl: 18.0,
    closeRate: 0.85,
    currency: "$",
  },
  salon: {
    name: "High-End Salon & Spa",
    defaultSpend: 2000,
    defaultTicket: 320,
    estimatedCpl: 9.0,
    closeRate: 0.35,
    currency: "$",
  },
  academy: {
    name: "Beauty Academy / Masterclass",
    defaultSpend: 2500,
    defaultTicket: 1800,
    estimatedCpl: 9.5,
    closeRate: 0.22,
    currency: "$",
  },
};

export function RoasCalculator() {
  const [selectedKey, setSelectedKey] = useState<IndustryKey>("bridal");
  const config = industries[selectedKey] ?? industries.bridal;

  const [monthlySpend, setMonthlySpend] = useState<number>(config.defaultSpend);
  const [avgTicket, setAvgTicket] = useState<number>(config.defaultTicket);

  const spendInputId = useId();
  const ticketInputId = useId();

  const handleIndustryChange = (key: IndustryKey) => {
    setSelectedKey(key);
    const newConfig = industries[key];
    setMonthlySpend(newConfig.defaultSpend);
    setAvgTicket(newConfig.defaultTicket);
  };

  // Live Math calculations
  const estimatedLeads = Math.max(1, Math.round(monthlySpend / config.estimatedCpl));
  const estimatedBookings = Math.max(1, Math.round(estimatedLeads * config.closeRate));
  const estimatedRevenue = estimatedBookings * avgTicket;
  const estimatedRoas = (estimatedRevenue / monthlySpend).toFixed(1);

  return (
    <div className="rounded-sm border border-border bg-card p-6 sm:p-10 shadow-soft">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-6">
        <div>
          <div className="eyebrow">
            <Calculator className="h-3.5 w-3.5" />
            <span>Interactive Growth Tool</span>
          </div>
          <h3 className="mt-2 text-2xl sm:text-3xl font-serif text-foreground">
            Meta Ads ROAS & Revenue Forecaster
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Adjust your monthly marketing budget and average client value to see real-time projected returns.
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-gold/40 bg-gold-soft/30 px-3.5 py-1 text-xs font-semibold text-accent-foreground shrink-0 self-start sm:self-auto">
          <Sparkles className="h-3.5 w-3.5 text-gold" />
          <span>Real Benchmarked Data</span>
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        {/* Left Inputs */}
        <div className="space-y-6 lg:col-span-7">
          {/* Industry Selector Tabs */}
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-2.5">
              Select Your Industry Model:
            </label>
            <div className="flex flex-wrap gap-2">
              {Object.entries(industries).map(([key, item]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => handleIndustryChange(key as IndustryKey)}
                  className={`rounded-sm px-3.5 py-2 text-xs font-medium transition-all ${
                    selectedKey === key
                      ? "bg-primary text-primary-foreground shadow-xs font-semibold"
                      : "bg-secondary text-muted-foreground hover:bg-border/60 hover:text-foreground"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Monthly Spend Slider */}
          <div className="space-y-2 rounded-sm border border-border/80 bg-background/50 p-4">
            <div className="flex items-center justify-between">
              <label htmlFor={spendInputId} className="text-sm font-medium text-foreground">
                Planned Monthly Meta Ad Spend
              </label>
              <span className="font-serif text-xl font-semibold text-foreground">
                ${monthlySpend.toLocaleString()}
              </span>
            </div>
            <input
              id={spendInputId}
              type="range"
              min={1000}
              max={25000}
              step={250}
              value={monthlySpend}
              onChange={(e) => setMonthlySpend(Number(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-secondary accent-gold"
            />
            <div className="flex justify-between text-[11px] text-muted-foreground">
              <span>$1,000/mo (Starter)</span>
              <span>$10,000/mo (Scale)</span>
              <span>$25,000/mo (Dominance)</span>
            </div>
          </div>

          {/* Average Ticket Value */}
          <div className="space-y-2 rounded-sm border border-border/80 bg-background/50 p-4">
            <div className="flex items-center justify-between">
              <label htmlFor={ticketInputId} className="text-sm font-medium text-foreground">
                Average Client Booking / Order Value
              </label>
              <span className="font-serif text-xl font-semibold text-foreground">
                ${avgTicket.toLocaleString()}
              </span>
            </div>
            <input
              id={ticketInputId}
              type="range"
              min={selectedKey === "skincare" ? 40 : 200}
              max={selectedKey === "skincare" ? 350 : 3500}
              step={selectedKey === "skincare" ? 10 : 50}
              value={avgTicket}
              onChange={(e) => setAvgTicket(Number(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-secondary accent-gold"
            />
            <div className="flex justify-between text-[11px] text-muted-foreground">
              <span>{selectedKey === "skincare" ? "$40" : "$200"}</span>
              <span>Standard Baseline</span>
              <span>{selectedKey === "skincare" ? "$350" : "$3,500"}</span>
            </div>
          </div>

          <div className="flex items-start gap-2.5 text-xs text-muted-foreground pt-1">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-gold" />
            <span>
              Calculations reflect authentic Meta Ads Manager campaign costs (UK instant forms at £8.28, messaging leads at $1.24–$1.59, and GCC diaspora funnels at ₹174–₹358).
            </span>
          </div>
        </div>

        {/* Right Live Results Card */}
        <div className="flex flex-col justify-between rounded-sm border border-gold/30 bg-primary p-6 sm:p-8 text-primary-foreground shadow-gold lg:col-span-5">
          <div>
            <div className="flex items-center justify-between border-b border-primary-foreground/15 pb-4">
              <span className="text-xs uppercase tracking-widest text-gold font-bold">
                Projected Monthly Growth
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                <TrendingUp className="h-3 w-3" /> Live Forecast
              </span>
            </div>

            <div className="mt-6 space-y-6">
              {/* Estimated ROAS */}
              <div>
                <span className="text-xs text-primary-foreground/70 uppercase tracking-wider block">
                  Estimated Campaign Return (ROAS)
                </span>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="font-serif text-5xl font-light text-gold">
                    {estimatedRoas}x
                  </span>
                  <span className="text-xs text-primary-foreground/80">return multiplier</span>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 border-t border-primary-foreground/15 pt-5">
                <div>
                  <span className="text-xs text-primary-foreground/60 block">Qualified Leads</span>
                  <span className="mt-1 font-serif text-2xl text-white">
                    ~{estimatedLeads.toLocaleString()}
                  </span>
                  <span className="text-[11px] text-primary-foreground/50 block">
                    at ~${config.estimatedCpl.toFixed(2)} / lead
                  </span>
                </div>
                <div>
                  <span className="text-xs text-primary-foreground/60 block">Closed Clients</span>
                  <span className="mt-1 font-serif text-2xl text-white">
                    ~{estimatedBookings.toLocaleString()}
                  </span>
                  <span className="text-[11px] text-primary-foreground/50 block">
                    ~{(config.closeRate * 100).toFixed(0)}% conversion
                  </span>
                </div>
              </div>

              {/* Estimated Gross Revenue */}
              <div className="rounded-sm bg-primary-foreground/5 p-4 border border-primary-foreground/10">
                <span className="text-xs text-primary-foreground/70 block uppercase tracking-wider">
                  Estimated Monthly Pipeline Revenue
                </span>
                <span className="mt-1 font-serif text-3xl font-bold text-white block">
                  ${estimatedRevenue.toLocaleString()}
                </span>
                <span className="text-[11px] text-emerald-300 mt-1 block">
                  +${(estimatedRevenue - monthlySpend).toLocaleString()} estimated net marketing margin
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-primary-foreground/15 space-y-2.5">
            <Link
              to="/contact"
              className="flex w-full items-center justify-center gap-2 rounded-sm bg-gold py-3.5 text-center text-xs font-bold uppercase tracking-wider text-primary shadow-soft transition-all duration-300 hover:bg-gold-soft hover:shadow-gold"
            >
              <span>Validate This Strategy With Farah</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={whatsappLink(
                `Hello Farah, I used your ROAS calculator for ${config.name} with a monthly budget of $${monthlySpend.toLocaleString()} and estimated return of ${estimatedRoas}x. I'd like to discuss launching this strategy.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-xs text-primary-foreground/75 hover:text-gold hover:underline transition-colors"
            >
              Or share this forecast directly via WhatsApp →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
