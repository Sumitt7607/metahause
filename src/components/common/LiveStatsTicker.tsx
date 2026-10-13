import { TrendingUp, ShieldCheck, Award, Zap, Users, Sparkles, Target, MousePointerClick } from "lucide-react";

export function LiveStatsTicker() {
  const tickerItems = [
    { icon: Award, label: "UK Instant Form Leads", value: "£8.28 – £8.42 CPL" },
    { icon: TrendingUp, label: "Bridal Messaging Inquiries", value: "$1.24 – $1.59 / Result" },
    { icon: Users, label: "Accounts Reached in GCC & UK", value: "50,000+ Targeted" },
    { icon: Zap, label: "GCC Targeted Conversations", value: "₹174 – ₹358 / Result" },
    { icon: MousePointerClick, label: "UK Warm Retargeting", value: "£0.10 Per Link Click" },
    { icon: ShieldCheck, label: "Meta Ads Reporting", value: "100% Verified Dashboards" },
    { icon: Target, label: "Conversion Funnels", value: "Instant Forms & Direct WhatsApp" },
  ];

  // Repeat twice for seamless infinite marquee loop
  const duplicatedItems = [...tickerItems, ...tickerItems];

  return (
    <div className="relative overflow-hidden border-y border-border bg-card/90 py-3.5 backdrop-blur">
      {/* Subtle edge fades for luxury depth */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-card to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-card to-transparent" />

      <div className="animate-marquee flex items-center gap-8">
        {duplicatedItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex shrink-0 items-center gap-3 rounded-full border border-border/80 bg-background/80 px-4 py-1.5 shadow-xs transition-colors hover:border-gold"
            >
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gold/15 text-gold">
                <Icon className="h-3 w-3" />
              </div>
              <span className="text-xs text-muted-foreground">{item.label}:</span>
              <span className="font-serif text-sm font-semibold tracking-tight text-foreground">
                {item.value}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
