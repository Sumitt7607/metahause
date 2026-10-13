import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, CheckCircle2, Award,
  Sparkles, MessageCircle, Heart,
} from "lucide-react";
import farahImg from "@/assets/farah.jpg";
import { contact, whatsappLink } from "@/content/site";
import { LiveStatsTicker } from "@/components/common/LiveStatsTicker";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Farah & MetaHaus — Boutique Meta Ads Consultancy" },
      {
        name: "description",
        content:
          "Meet Farah, founder of MetaHaus. Discover the methodology, philosophy, and boutique performance marketing approach driving luxury beauty and aesthetic brand growth.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const principles = [
    {
      title: "Radical Performance Transparency",
      desc: "No confusing reports hiding behind 'impressions', 'reach', or 'engagement'. You always have direct access to your Meta Ads Manager, and we evaluate every campaign by actual client appointments and bottom-line revenue.",
    },
    {
      title: "Luxury Brand Protection",
      desc: "Aggressive, discount-heavy marketing destroys a luxury beauty brand. We combine high-conversion direct response science with editorial aesthetics that elevate your prestige rather than cheapening it.",
    },
    {
      title: "The Boutique Principal Model",
      desc: "Unlike traditional agencies that pitch you with a senior partner and then hand your ad account to an inexperienced intern, Farah personally architects your strategy, monitors your bids, and guides your creatives.",
    },
    {
      title: "Strictly Capped Client Roster",
      desc: "To guarantee obsessive attention to detail and daily optimization, MetaHaus operates with a hard cap on active retainer brand partners. When you work with Farah, you get a dedicated growth partner.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative overflow-hidden bg-primary py-12 sm:py-20 text-primary-foreground">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(186,151,88,0.22),rgba(255,255,255,0))]" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl reveal">
            <span className="eyebrow text-gold">The Founder Behind The Growth</span>
            <h1 className="mt-4 text-3xl sm:text-5xl font-serif leading-[1.1] text-white">
              Bridging The Gap Between Luxury Aesthetics & Ruthless Performance
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed max-w-2xl">
              I founded MetaHaus by Farah with a clear premise: high-end beauty and aesthetic brands deserve a performance marketing partner who understands luxury buyer psychology as intimately as Meta's algorithmic bidding.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-sm bg-gold px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-primary shadow-soft transition-all hover:bg-gold-soft hover:shadow-gold"
              >
                <span>Book 1-on-1 Consultation With Farah</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={whatsappLink("Hello Farah, I'd like to chat directly about your background and how we might work together.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-primary-foreground/20 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-primary-foreground transition-all hover:border-gold hover:text-gold"
              >
                <MessageCircle className="h-4 w-4 text-gold" />
                <span>Chat On WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Live Ticker */}
      <LiveStatsTicker />

      {/* Founder Story Section */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2 items-center">
            <div className="mx-auto max-w-md lg:max-w-none">
              <div className="overflow-hidden rounded-sm border border-gold/40 shadow-soft bg-card">
                <img
                  src={farahImg}
                  alt="Farah — Founder & Principal Performance Strategist"
                  className="aspect-[4/5] w-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="space-y-6">
              <span className="eyebrow">The Origin Story</span>
              <h2 className="font-serif text-2xl sm:text-4xl text-foreground">
                Why Generic Marketing Agencies Fail Beauty Brands
              </h2>
              <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  Having observed countless talented makeup artists, clinic owners, and cosmetic brand founders waste thousands on vanity agencies, I noticed an alarming recurring pattern:
                </p>
                <p>
                  Generalist agencies treat a high-end bridal booking or a £1,500 aesthetic treatment package like a £10 pair of socks. They throw together slapdash stock photos, target broad generic interests, and deliver leads who ghost or argue over prices.
                </p>
                <p>
                  High-ticket beauty clients require <strong className="text-foreground">emotional conviction, proof of prestige, and seamless booking friction</strong>. They need to feel that booking with your brand is a luxury privilege, not a bargain hunt.
                </p>
                <p>
                  At MetaHaus, we engineer that entire psychological journey through Meta Ads — turning casual Instagram scrollers into committed, high-paying clients.
                </p>
              </div>

              <div className="border-t border-border pt-6">
                <p className="font-serif text-2xl italic text-gold">— Farah</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                  Founder & Principal Performance Strategist
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles Grid */}
      <section className="border-t border-border bg-card py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="eyebrow">Guiding Methodology</span>
            <h2 className="mt-3 font-serif text-2xl sm:text-4xl text-foreground">
              The Principles That Govern Every Campaign We Run
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              We operate on standards of excellence that prioritize your brand's integrity and long-term financial health above all else.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {principles.map((pr, idx) => (
              <div
                key={idx}
                className="rounded-sm border border-border bg-background p-5 sm:p-8 shadow-xs hover:border-gold transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-gold/15 text-gold font-serif font-bold text-sm">
                    0{idx + 1}
                  </div>
                  <h3 className="font-serif text-2xl text-foreground">{pr.title}</h3>
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{pr.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Boutique vs Big Agency Comparison */}
      <section className="border-t border-border bg-background py-12 sm:py-20">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="text-center mb-8 sm:mb-14">
            <span className="eyebrow">The Difference</span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-foreground">
              MetaHaus by Farah vs Traditional Large Agencies
            </h2>
          </div>

          <div className="overflow-x-auto rounded-sm border border-border bg-card shadow-soft">
            <table className="w-full text-left text-xs">
              <thead className="bg-secondary/70 border-b border-border text-foreground font-serif uppercase tracking-wider text-xs">
                <tr>
                  <th className="p-4 sm:p-5">Dimension</th>
                  <th className="p-4 sm:p-5 text-gold font-bold">MetaHaus by Farah</th>
                  <th className="p-4 sm:p-5 text-muted-foreground">Generic Large Agency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-muted-foreground">
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-foreground">Account Strategist</td>
                  <td className="p-4 sm:p-5 text-foreground font-medium">Farah directly manages your account</td>
                  <td className="p-4 sm:p-5">Delegated to junior interns or account managers</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-foreground">Domain Expertise</td>
                  <td className="p-4 sm:p-5 text-foreground font-medium">100% focused on luxury beauty & aesthetics</td>
                  <td className="p-4 sm:p-5">Manages dentists, plumbers, dropshippers indiscriminately</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-foreground">Reporting Metrics</td>
                  <td className="p-4 sm:p-5 text-foreground font-medium">Qualified consultations, CPL, real revenue</td>
                  <td className="p-4 sm:p-5">Vanity reach, impressions, post likes</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-foreground">Communication Rhythm</td>
                  <td className="p-4 sm:p-5 text-foreground font-medium">Direct WhatsApp sync + bi-weekly video strategy calls</td>
                  <td className="p-4 sm:p-5">Slow ticket queues and automated monthly PDF dumps</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-foreground">Client Capacity</td>
                  <td className="p-4 sm:p-5 text-foreground font-medium">Capped at 5 active retainers</td>
                  <td className="p-4 sm:p-5">Overloaded with 40+ accounts per manager</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-8 py-4 text-xs font-bold uppercase tracking-wider text-primary-foreground hover:bg-gold hover:text-primary transition-colors shadow-soft"
            >
              <span>Speak With Farah Directly</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
