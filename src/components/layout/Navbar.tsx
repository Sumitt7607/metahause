import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, ArrowRight, Sparkles, MessageCircle, PhoneCall } from "lucide-react";
import { contact, whatsappLink } from "@/content/site";
import { useAnnouncement } from "@/lib/announcementStore";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const announcement = useAnnouncement();
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Results", to: "/results" },
    { label: "Services", to: "/services" },
    { label: "Industries", to: "/industries" },
    { label: "About", to: "/about" },
    { label: "Process", to: "/process" },
    { label: "Contact", to: "/contact" },
  ] as const;

  const isActive = (to: string) => {
    if (to === "/") return currentPath === "/";
    return currentPath.startsWith(to);
  };

  return (
    <>
      {/* Live Announcement Ribbon */}
      {announcement.enabled && (
        <div className="relative z-50 bg-primary px-4 py-1.5 text-primary-foreground text-xs">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
            <div className="flex items-center gap-2 min-w-0">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              <span className="font-medium text-emerald-300 shrink-0 hidden sm:inline">{announcement.badge}</span>
              <span className="text-primary-foreground/90 truncate text-[11px] sm:text-xs">
                {announcement.message}
              </span>
            </div>
            <a
              href={whatsappLink(announcement.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-1 text-[11px] text-emerald-400 hover:text-emerald-300 hover:underline font-semibold"
            >
              <MessageCircle className="h-3 w-3" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      )}

      {/* Main Luxury Header */}
      <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-md transition-all">
        <div className="mx-auto flex h-14 sm:h-16 max-w-7xl items-center justify-between gap-4 px-4 lg:px-8">
          {/* Logo / Wordmark */}
          <Link to="/" className="group flex flex-col">
            <span className="font-serif text-xl sm:text-2xl tracking-wider font-semibold text-foreground transition-colors group-hover:text-gold">
              METAHAUS_BYFARAH
            </span>
            <span className="font-sans text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Performance Meta Ads
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main Navigation">
            {navLinks.map((item) => {
              const active = isActive(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`relative rounded-md px-3.5 py-2 text-sm font-medium transition-all duration-200 ${
                    active
                      ? "text-foreground font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute inset-x-3.5 bottom-0 h-[2px] rounded-full bg-gold" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-sm bg-rose-600 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-soft transition-all duration-300 hover:bg-rose-700 hover:shadow-lg"
            >
              <span>Book Strategy Call</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-sm border border-border p-2 text-foreground transition-colors hover:bg-secondary lg:hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="border-t border-border bg-background px-5 py-6 shadow-xl lg:hidden">
            <div className="mb-4 flex items-center justify-between border-b border-border pb-3">
              <span className="text-xs uppercase tracking-widest text-gold font-semibold">Navigation</span>
              <span className="text-xs text-muted-foreground">Europe · UK · UAE · GCC</span>
            </div>
            <nav className="flex flex-col space-y-1">
              {navLinks.map((item) => {
                const active = isActive(item.to);
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between rounded-sm px-3 py-2.5 text-base font-serif transition-colors ${
                      active ? "bg-secondary text-gold font-medium" : "text-foreground hover:bg-secondary/50"
                    }`}
                  >
                    <span>{item.label}</span>
                    {active && <span className="h-1.5 w-1.5 rounded-full bg-gold" />}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-6 border-t border-border pt-5 space-y-3">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-sm bg-rose-600 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-rose-700 shadow-soft"
              >
                <PhoneCall className="h-4 w-4" />
                <span>Book Strategy Session</span>
              </Link>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-sm bg-emerald-600 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-emerald-700 shadow-soft"
              >
                <MessageCircle className="h-4 w-4 text-white" />
                <span>Chat on WhatsApp Directly</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
