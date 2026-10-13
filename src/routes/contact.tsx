import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight, MessageCircle, Mail, Instagram,
  Linkedin, CheckCircle2, ShieldCheck, Clock, MapPin, Phone,
} from "lucide-react";
import { contact, whatsappLink, services } from "@/content/site";
import { LiveStatsTicker } from "@/components/common/LiveStatsTicker";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book a Strategy Session — METAHAUS_BYFARAH" },
      {
        name: "description",
        content:
          "Schedule a 1-on-1 Meta Ads strategy consultation with Farah. Discuss your beauty brand, aesthetic clinic, or bridal diary growth goals.",
      },
    ],
  }),
  component: ContactPage,
});

const industriesList = [
  "Bridal & Luxury Makeup Artist",
  "Medical Aesthetic & Laser Clinic",
  "Luxury Skincare & Cosmetics Brand",
  "High-End Hair & Beauty Salon",
  "EdTech & Creative Academy",
  "Fine Jewellery & Haute Couture",
  "Other High-Ticket Consumer",
];

const budgetRanges = [
  "$1,200 – $2,500 / month (£1k – £2k)",
  "$2,500 – $5,000 / month (£2k – £4k)",
  "$5,000 – $10,000 / month (£4k – £8k)",
  "$10,000+ / month (£8k+)",
  "Not sure yet / Need guidance",
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    instagram: "",
    industry: "",
    budget: "",
    market: "",
    goals: "",
  });
  type FormErrors = {
    name?: string;
    email?: string;
    market?: string;
    goals?: string;
  };
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = () => {
    const errs: FormErrors = {};
    if (!formData.name.trim()) errs.name = "Please provide your full name.";
    if (!/^\S+@\S+\.\S+$/.test(formData.email.trim()))
      errs.email = "Please provide a valid business email address.";
    if (!formData.market.trim()) errs.market = "Please specify your target market or location.";
    if (formData.goals.trim().length < 10)
      errs.goals = "Please share a brief overview of your business goals (at least 10 characters).";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative overflow-hidden bg-primary py-12 sm:py-20 text-primary-foreground">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(186,151,88,0.22),rgba(255,255,255,0))]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl reveal">
            <span className="eyebrow text-gold">Direct Consultation</span>
            <h1 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-serif leading-[1.1] text-white">
              Let's Discuss Scaling Your Brand With Strategic Meta Ads
            </h1>
            <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-primary-foreground/80 leading-relaxed max-w-2xl">
              Tell us about your brand, current challenges, and growth objectives. Farah personally reviews every submission and responds within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Live Ticker */}
      <LiveStatsTicker />

      {/* Main Form and Direct Contact Cards */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            {/* Left Column: Direct Fast-Track & Info */}
            <div className="space-y-8 lg:col-span-5">
              <div>
                <span className="eyebrow">Immediate Contact</span>
                <h2 className="mt-2 font-serif text-3xl text-foreground">
                  Prefer An Instant Conversation?
                </h2>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  For quick inquiries or urgent campaign turnaround dates, connect with Farah directly on WhatsApp.
                </p>
              </div>

              {/* WhatsApp Card */}
              <div className="rounded-sm border border-emerald-600/30 bg-emerald-50/50 p-6 shadow-xs">
                <div className="flex items-center gap-3 text-emerald-800">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white shadow-xs">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold">Fast-Track WhatsApp</h3>
                    <p className="text-xs text-emerald-700">Average response: 15–30 minutes</p>
                  </div>
                </div>
                <p className="mt-3 text-xs text-emerald-900/80 leading-relaxed">
                  Send a voice note or message directly to Farah. We can review your Instagram profile and discuss preliminary feasibility immediately.
                </p>
                <a
                  href={whatsappLink("Hello Farah, I'd like to discuss a Meta Ads campaign for my business.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-emerald-700 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-xs hover:bg-emerald-800 transition-colors"
                >
                  <span>Open WhatsApp Direct Chat</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              {/* Contact Channels */}
              <div className="rounded-sm border border-border bg-card p-6 space-y-4 text-xs text-muted-foreground">
                <h4 className="font-serif text-base text-foreground font-semibold">
                  Official Agency Channels
                </h4>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-gold shrink-0" />
                  <div>
                    <span className="text-foreground font-medium block">Email Inquiries:</span>
                    <a href={`mailto:${contact.email}`} className="hover:text-gold transition-colors">
                      {contact.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Instagram className="h-4 w-4 text-gold shrink-0" />
                  <div>
                    <span className="text-foreground font-medium block">Instagram:</span>
                    <a
                      href={contact.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gold transition-colors"
                    >
                      {contact.instagramHandle}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-gold shrink-0" />
                  <div>
                    <span className="text-foreground font-medium block">Phone / WhatsApp:</span>
                    <a href={`tel:${contact.phoneRaw}`} className="hover:text-gold transition-colors font-mono">
                      {contact.phoneDisplay}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-4 w-4 text-gold shrink-0" />
                  <div>
                    <span className="text-foreground font-medium block">LinkedIn:</span>
                    <a
                      href={contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gold transition-colors"
                    >
                      {contact.linkedinDisplay}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-2 border-t border-border">
                  <MapPin className="h-4 w-4 text-gold shrink-0" />
                  <div>
                    <span className="text-foreground font-medium block">Operating Hubs:</span>
                    <span>Dubai (UAE) & London (UK)</span>
                  </div>
                </div>
              </div>

              <div className="rounded-sm bg-secondary/50 p-5 border border-border text-xs text-muted-foreground space-y-2">
                <div className="flex items-center gap-2 text-foreground font-semibold">
                  <ShieldCheck className="h-4 w-4 text-gold" />
                  <span>Confidentiality & Privacy Assurance</span>
                </div>
                <p className="leading-relaxed">
                  Your ad spend, creative assets, and client metrics are protected under strict NDA and will never be shared without explicit written consent.
                </p>
              </div>
            </div>

            {/* Right Column: Detailed Inquiry Form */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="rounded-sm border border-gold/40 bg-card p-10 text-center shadow-soft reveal">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="mt-4 font-serif text-3xl text-foreground">
                    Enquiry Received Successfully
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
                    Thank you, <strong className="text-foreground">{formData.name}</strong>. Farah has received your submission and will review your brand details within 24 business hours.
                  </p>
                  <div className="mt-8 rounded-sm bg-secondary/60 p-5 border border-border text-xs text-left max-w-md mx-auto space-y-2">
                    <span className="font-semibold text-foreground block">Next Steps:</span>
                    <p className="text-muted-foreground">
                      1. Farah will personally review your website/Instagram and ad account viability.
                    </p>
                    <p className="text-muted-foreground">
                      2. You will receive an invitation to select a convenient 30-min strategy Zoom call.
                    </p>
                  </div>
                  <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
                    <a
                      href={whatsappLink(`Hello Farah, I just submitted an inquiry on your website for ${formData.business || formData.name}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-6 py-3 text-xs font-bold uppercase tracking-wider text-primary-foreground hover:bg-gold hover:text-primary transition-colors"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Notify Farah On WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="rounded-sm border border-border px-5 py-3 text-xs text-muted-foreground hover:bg-secondary transition-colors"
                    >
                      Submit Another Query
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="rounded-sm border border-border bg-card p-5 sm:p-10 shadow-soft"
                >
                  <div>
                    <span className="eyebrow">Strategy Intake</span>
                    <h3 className="mt-2 font-serif text-2xl sm:text-3xl text-foreground">
                      Tell Us About Your Brand
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Fill out this brief application to check campaign viability and current calendar availability.
                    </p>
                  </div>

                  <div className="mt-8 grid gap-5 sm:grid-cols-2">
                    {/* Full Name */}
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
                      />
                      {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-1.5">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. sarah@studio.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
                      />
                      {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                    </div>

                    {/* Business Name */}
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-1.5">
                        Business / Clinic Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Aura Aesthetics Clinic"
                        value={formData.business}
                        onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                        className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
                      />
                    </div>

                    {/* Instagram or Website */}
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-1.5">
                        Instagram Handle or Website
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. @aura.aesthetics"
                        value={formData.instagram}
                        onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                        className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
                      />
                    </div>

                    {/* Industry */}
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-1.5">
                        Industry Vertical
                      </label>
                      <select
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                        className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
                      >
                        <option value="">Select industry…</option>
                        {industriesList.map((i) => (
                          <option key={i} value={i}>
                            {i}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Planned Monthly Ad Budget */}
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-1.5">
                        Planned Monthly Meta Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
                      >
                        <option value="">Select budget tier…</option>
                        {budgetRanges.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Target Market */}
                    <div className="sm:col-span-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-1.5">
                        Primary Target City / Market *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Dubai & Abu Dhabi, London Mayfair, or Nationwide UK"
                        value={formData.market}
                        onChange={(e) => setFormData({ ...formData, market: e.target.value })}
                        className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
                      />
                      {errors.market && <p className="mt-1 text-xs text-destructive">{errors.market}</p>}
                    </div>

                    {/* Business Goals */}
                    <div className="sm:col-span-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-1.5">
                        What Are Your Growth Goals & Current Bottlenecks? *
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Tell Farah about your current lead flow, booking targets, previous agency experience, and timeline..."
                        value={formData.goals}
                        onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                        className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
                      />
                      {errors.goals && <p className="mt-1 text-xs text-destructive">{errors.goals}</p>}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border">
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-primary py-4 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-soft transition-all hover:bg-gold hover:text-primary hover:shadow-gold"
                    >
                      <span>Submit Application To Farah</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <p className="mt-3 text-center text-[11px] text-muted-foreground">
                      We respect your privacy. No spam. You will only be contacted regarding your inquiry.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
