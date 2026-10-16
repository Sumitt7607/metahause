import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  MessageCircle, Mail, Instagram, Linkedin, ArrowRight,
  Clock, ShieldCheck, CheckCircle2,
} from "lucide-react";
import { contact, whatsappLink } from "@/content/site";

export function Footer() {
  const [times, setTimes] = useState({ dubai: "--:--", london: "--:--" });
  const [newsletterSent, setNewsletterSent] = useState(false);
  const [emailInput, setEmailInput] = useState("");

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      const fmt = (tz: string) =>
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit", minute: "2-digit", timeZone: tz, hour12: false,
        }).format(now);
      setTimes({ dubai: fmt("Asia/Dubai"), london: fmt("Europe/London") });
    };
    updateClocks();
    const timer = setInterval(updateClocks, 30000);
    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) return;
    try {
      await fetch("https://formsubmit.co/ajax/Farahansari0033@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: emailInput,
          _subject: "New Newsletter Subscriber (METAHAUS)",
          _captcha: "false",
        }),
      });
    } catch (err) {
      console.error(err);
    }
    setNewsletterSent(true);
    setEmailInput("");
  };

  return (
    <footer className="border-t border-border bg-card pt-10 pb-8 text-foreground">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">

        {/* Hub Clocks — compact on mobile */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3 rounded-sm border border-border bg-background/60 px-4 py-3 text-xs">
          <div className="flex items-center gap-1.5 font-semibold uppercase tracking-widest text-muted-foreground">
            <Clock className="h-3.5 w-3.5 text-gold" />
            <span className="hidden sm:inline">Active Hubs:</span>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span className="text-foreground font-medium">Dubai</span>
              <span className="font-mono text-gold font-semibold">{times.dubai}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span className="text-foreground font-medium">London</span>
              <span className="font-mono text-gold font-semibold">{times.london}</span>
            </div>
          </div>
        </div>

        {/* Grid: 2-col on sm, 4-col on lg */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 pb-10 border-b border-border">
          {/* Brand */}
          <div className="space-y-3">
            <Link to="/" className="inline-block font-serif text-xl tracking-wider font-semibold text-foreground hover:text-gold transition-colors">
              METAHAUS_BYFARAH
            </Link>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Boutique Meta Ads consultancy for luxury beauty, bridal artistry, aesthetic medicine, and creative academies.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-sm border border-border bg-background text-muted-foreground transition-all hover:border-gold hover:text-gold"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-3.5 w-3.5" />
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="flex h-8 w-8 items-center justify-center rounded-sm border border-border bg-background text-muted-foreground transition-all hover:border-gold hover:text-gold"
                aria-label="Email"
              >
                <Mail className="h-3.5 w-3.5" />
              </a>
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-sm border border-border bg-background text-muted-foreground transition-all hover:border-gold hover:text-gold"
                aria-label="Instagram"
              >
                <Instagram className="h-3.5 w-3.5" />
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-sm border border-border bg-background text-muted-foreground transition-all hover:border-gold hover:text-gold"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-serif text-base tracking-wide text-foreground">Pages</h4>
            <ul className="mt-3 space-y-2 text-xs">
              {[
                { to: "/", label: "Home" },
                { to: "/results", label: "Results & Proof" },
                { to: "/services", label: "Services & Retainers" },
                { to: "/industries", label: "Industries" },
                { to: "/about", label: "About Farah" },
                { to: "/process", label: "Our Process" },
                { to: "/contact", label: "Book a Session" },
              ].map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-muted-foreground transition-colors hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Access */}
          <div>
            <h4 className="font-serif text-base tracking-wide text-foreground">Direct Access</h4>
            <div className="mt-3 space-y-2.5 text-xs text-muted-foreground">
              <p>
                <strong className="block text-foreground uppercase tracking-wider">WhatsApp:</strong>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-gold hover:underline mt-0.5"
                >
                  <MessageCircle className="h-3 w-3" /> {contact.whatsappDisplay}
                </a>
              </p>
              <p>
                <strong className="block text-foreground uppercase tracking-wider">Email:</strong>
                <a href={`mailto:${contact.email}`} className="hover:text-gold transition-colors">
                  {contact.email}
                </a>
              </p>
              <p className="pt-1">
                <span className="inline-flex items-center gap-1 text-emerald-600 font-medium">
                  <ShieldCheck className="h-3 w-3" /> Meta Certified
                </span>
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-base tracking-wide text-foreground">Growth Dispatch</h4>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Monthly breakdown: what ad angles and budget tactics are working for luxury beauty brands right now.
            </p>
            {newsletterSent ? (
              <div className="mt-3 flex items-center gap-2 rounded-sm bg-emerald-50 p-2.5 text-xs text-emerald-800 border border-emerald-200">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                <span>You're subscribed!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-3 space-y-1.5">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Your business email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="w-full rounded-sm border border-input bg-background px-3 py-2 text-xs outline-none transition-colors focus:border-gold"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="absolute right-1 top-1 bottom-1 px-2.5 bg-primary text-primary-foreground rounded-sm hover:bg-gold hover:text-primary transition-colors text-xs flex items-center"
                  >
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
                <span className="text-[10px] text-muted-foreground">1 email/month · No spam · Unsubscribe anytime.</span>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Legal */}
        <div className="pt-6 border-t border-border flex flex-col items-center gap-3 text-[11px] text-muted-foreground sm:flex-row sm:justify-between">
          <div className="flex flex-col gap-1.5 text-center sm:text-left">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-2.5 gap-y-1">
              <p>© {new Date().getFullYear()} METAHAUS_BYFARAH. All rights reserved.</p>
              <span>·</span>
              <Link to="/privacy" className="text-muted-foreground hover:text-gold transition-colors underline-offset-2 hover:underline">
                Privacy Policy
              </Link>
              <span>·</span>
              <Link to="/terms" className="text-muted-foreground hover:text-gold transition-colors underline-offset-2 hover:underline">
                Terms of Service
              </Link>
            </div>

          </div>
          <p className="text-center sm:text-right max-w-xs">
            Instagram® is a trademark of Meta Platforms, Inc. Past results do not guarantee future returns.
          </p>
        </div>
      </div>
    </footer>
  );
}
