import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { MessageCircle, X, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import farahImg from "@/assets/farah.jpg";
import { whatsappLink } from "@/content/site";

export function FloatingLiveWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-50 flex flex-col items-end max-w-[calc(100vw-2rem)]">
      {/* Expanded Quick Action Card */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-2rem)] max-w-sm sm:w-96 rounded-sm border border-gold/40 bg-card p-4 sm:p-5 shadow-2xl backdrop-blur-md reveal">
          <div className="flex items-start justify-between border-b border-border pb-3">
            <div className="flex items-center gap-2.5">
              <div className="relative shrink-0">
                <img
                  src={farahImg}
                  alt="Farah"
                  className="h-10 w-10 sm:h-11 sm:w-11 rounded-full object-cover object-top border border-gold/50 shadow-xs"
                />
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-card bg-emerald-500 animate-pulse-dot" />
              </div>
              <div>
                <h4 className="font-serif text-sm sm:text-base font-medium text-foreground">Farah</h4>
                <p className="text-[11px] sm:text-xs text-emerald-600 font-semibold flex items-center gap-1">
                  <span>Available Now</span> · <span>Reply: ~15m</span>
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-foreground p-1 transition-colors"
              aria-label="Close widget"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="py-3 sm:py-4 space-y-2.5 sm:space-y-3">
            <p className="text-xs text-muted-foreground leading-relaxed">
              Have questions about your Meta ad account or looking to scale your beauty brand? Let's talk directly.
            </p>

            <div className="space-y-2">
              <a
                href={whatsappLink("Hello Farah, I'm reaching out from your website to ask about Meta Ads management.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-sm border border-emerald-600/30 bg-emerald-50/60 p-2.5 sm:p-3 text-xs font-semibold text-emerald-900 transition-all hover:bg-emerald-100"
              >
                <div className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Start WhatsApp Chat</span>
                </div>
                <ArrowRight className="h-3.5 w-3.5 text-emerald-700 shrink-0" />
              </a>

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between rounded-sm bg-primary p-2.5 sm:p-3 text-xs font-semibold text-primary-foreground transition-all hover:bg-gold hover:text-primary"
              >
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-gold shrink-0" />
                  <span>Book Strategy Call</span>
                </div>
                <ArrowRight className="h-3.5 w-3.5 shrink-0" />
              </Link>
            </div>
          </div>

          <div className="border-t border-border pt-2 flex items-center justify-between text-[10px] sm:text-[11px] text-muted-foreground">
            <span className="flex items-center gap-1">
              <ShieldCheck className="h-3 w-3 text-gold" /> Meta Certified Partner
            </span>
            <span className="text-gold font-medium">Boutique Agency</span>
          </div>
        </div>
      )}

      {/* Floating Pill Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2 sm:gap-3 rounded-full border border-gold/40 bg-primary px-3.5 py-2 sm:px-4 sm:py-2.5 text-primary-foreground shadow-gold transition-all duration-300 hover:scale-105 hover:bg-gold hover:text-primary"
        aria-label="Open live chat and consultation options"
      >
        <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex h-full w-full rounded-full bg-emerald-500"></span>
        </span>
        <span className="font-serif text-xs sm:text-sm font-medium tracking-wide">
          {isOpen ? "Close" : <><span className="hidden sm:inline">Live Strategy · </span>Chat with Farah</>}
        </span>
        <div className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-gold/20 text-gold group-hover:bg-primary/20 group-hover:text-primary shrink-0">
          <MessageCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
        </div>
      </button>
    </div>
  );
}
