import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, ArrowLeft, Lock, Eye, FileText, CheckCircle2, MessageCircle } from "lucide-react";
import { contact, whatsappLink } from "@/content/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — METAHAUS_BYFARAH" },
      {
        name: "description",
        content:
          "Privacy Policy for METAHAUS_BYFARAH. Learn how we collect, protect, and handle client data, Meta Ads tracking, and confidentiality.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
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
          <span className="eyebrow text-gold">Legal & Trust</span>
          <h1 className="mt-3 text-3xl sm:text-5xl font-serif text-white">
            Privacy Policy
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
              <ShieldCheck className="h-5 w-5 text-gold shrink-0 mt-0.5" />
              <div>
                <strong className="block text-foreground font-semibold">Our Commitment to Client Privacy:</strong>
                At METAHAUS_BYFARAH, we operate on strict confidentiality. We treat your brand data, proprietary client acquisition metrics, ad spend figures, and business records with absolute professional discretion.
              </div>
            </div>

            <div>
              <h2 className="font-serif text-xl sm:text-2xl text-foreground font-semibold mb-3">
                1. Information We Collect
              </h2>
              <p className="mb-3">
                When you interact with our website, request a strategy consultation, or engage our Meta Ads management services, we may collect the following information:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li><strong className="text-foreground">Contact & Identification Data:</strong> Full name, business email address, phone/WhatsApp number, and country of operation.</li>
                <li><strong className="text-foreground">Business & Brand Information:</strong> Business or clinic name, Instagram profile handle, website URL, estimated monthly ad spend budget, target market, and campaign objectives.</li>
                <li><strong className="text-foreground">Communication Records:</strong> Correspondence via WhatsApp, email, intake form submissions, and video consultation notes.</li>
                <li><strong className="text-foreground">Technical & Usage Analytics:</strong> Anonymized device information, IP address, browser type, and interaction timestamps collected via standard web server cookies.</li>
              </ul>
            </div>

            <div className="border-t border-border pt-6">
              <h2 className="font-serif text-xl sm:text-2xl text-foreground font-semibold mb-3">
                2. How We Use Your Information
              </h2>
              <p className="mb-3">
                We use collected information solely for genuine business operations and service delivery:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li>To evaluate account feasibility and prepare custom Meta Ads audit blueprints.</li>
                <li>To communicate directly regarding strategy consultation bookings and follow-ups.</li>
                <li>To manage, calibrate, and report on active advertising campaigns inside your Meta Ads Manager.</li>
                <li>To uphold client contracts, billing administration, and legal compliance.</li>
              </ul>
              <p className="mt-3 font-medium text-foreground">
                We do NOT sell, rent, lease, or monetize your personal or business data to third parties under any circumstances.
              </p>
            </div>

            <div className="border-t border-border pt-6">
              <h2 className="font-serif text-xl sm:text-2xl text-foreground font-semibold mb-3">
                3. Meta Advertising Platform & Tracking
              </h2>
              <p className="mb-3">
                As a performance Meta Ads consultancy, our client work involves Meta Platforms, Inc. (Facebook, Instagram, Messenger, WhatsApp):
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li>We access client advertising assets strictly via Meta Business Manager partner handshake access. You retain 100% legal ownership of your accounts and assets at all times.</li>
                <li>Implementation of Meta Pixel and Conversions API (CAPI) complies with Meta's Commercial Terms and applicable international privacy regulations (GDPR, UK GDPR, and CCPA).</li>
                <li>Aggregated case study performance figures displayed on our website are anonymized unless explicit written permission is granted by the client brand partner.</li>
              </ul>
            </div>

            <div className="border-t border-border pt-6">
              <h2 className="font-serif text-xl sm:text-2xl text-foreground font-semibold mb-3">
                4. Data Security & Confidentiality
              </h2>
              <p>
                We implement industry-standard administrative and technical safeguards to secure your information against unauthorized access, loss, or alteration. All client records are handled under strict confidentiality protocols.
              </p>
            </div>

            <div className="border-t border-border pt-6">
              <h2 className="font-serif text-xl sm:text-2xl text-foreground font-semibold mb-3">
                5. Your Data Protection Rights
              </h2>
              <p className="mb-3">
                Depending on your geographic jurisdiction (including UK, EU, UAE, and India), you have the right to:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li>Request access to the personal data we hold about you.</li>
                <li>Request correction of any inaccurate or incomplete details.</li>
                <li>Request deletion of your data when no longer needed for legitimate contractual purposes.</li>
                <li>Opt out of marketing communications or newsletters at any time with a single click.</li>
              </ul>
            </div>

            <div className="border-t border-border pt-6">
              <h2 className="font-serif text-xl sm:text-2xl text-foreground font-semibold mb-3">
                6. Contact Our Privacy Office
              </h2>
              <p className="mb-4">
                If you have any questions or wish to exercise your data rights, contact us directly:
              </p>
              <div className="rounded-sm bg-secondary/60 p-4 border border-border text-xs space-y-1.5 text-foreground">
                <p><strong>Entity:</strong> METAHAUS_BYFARAH</p>
                <p><strong>Email:</strong> <a href={`mailto:${contact.email}`} className="text-gold hover:underline">{contact.email}</a></p>
                <p><strong>Phone / WhatsApp:</strong> <a href={`tel:${contact.phoneRaw}`} className="text-gold hover:underline">{contact.phoneDisplay}</a></p>
                <p><strong>Primary Hubs:</strong> Dubai, United Arab Emirates & London, United Kingdom</p>
              </div>
            </div>

            <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link
                to="/terms"
                className="text-xs font-semibold text-gold hover:underline"
              >
                Review Terms of Service →
              </Link>
              <a
                href={whatsappLink("Hello Farah, I have a question regarding your Privacy Policy.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm bg-emerald-600 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-emerald-700 transition-colors shadow-soft"
              >
                <MessageCircle className="h-3.5 w-3.5 text-white" />
                <span>Contact via WhatsApp</span>
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
