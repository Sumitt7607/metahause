import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useLocation,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, useRef, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { FloatingLiveWidget } from "../components/common/FloatingLiveWidget";
import { SocialSidebar } from "../components/common/SocialSidebar";
import { trackPageView, GA_MEASUREMENT_ID, META_PIXEL_ID, GTM_ID } from "../lib/tracking";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4 py-20">
      <div className="max-w-md text-center">
        <span className="eyebrow">Error 404</span>
        <h1 className="mt-4 text-7xl font-bold font-serif text-foreground">404</h1>
        <h2 className="mt-4 text-2xl font-semibold font-serif text-foreground">Page Not Found</h2>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          The requested page doesn't exist or has moved. Return home to explore our performance Meta Ads results and services.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-sm bg-primary px-6 py-3 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-soft transition-all hover:bg-gold hover:text-primary"
          >
            Return Home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-sm border border-border bg-card px-6 py-3 text-xs font-bold uppercase tracking-wider text-foreground transition-all hover:border-gold hover:text-gold"
          >
            Contact Farah
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4 py-20">
      <div className="max-w-md text-center">
        <span className="eyebrow">System Notification</span>
        <h1 className="mt-4 text-2xl font-semibold font-serif text-foreground">
          Something went wrong
        </h1>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          We encountered an unexpected issue. You can try refreshing or heading back to the home page.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-sm bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-primary-foreground transition-all hover:bg-gold hover:text-primary"
          >
            Try again
          </button>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-sm border border-border bg-card px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-foreground transition-all hover:bg-accent"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "METAHAUS_BYFARAH — Meta Ads Specialist for Beauty & Bridal Brands" },
      {
        name: "description",
        content:
          "Strategic Meta Ads, high-intent lead generation and campaign scaling for luxury beauty, bridal artists, aesthetic clinics and EdTech brands across Europe, UK, UAE and GCC.",
      },
      { name: "author", content: "METAHAUS_BYFARAH" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Manrope:wght@400;500;600;700;800&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />

        {/* Google Analytics 4 (gtag.js) */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: true });`,
          }}
        />

        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');`,
          }}
        />

        <HeadContent />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-gold selection:text-primary">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Meta Pixel (noscript) */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>

        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const location = useLocation();
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    trackPageView(location.pathname + location.search);
  }, [location.pathname, location.search]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <SocialSidebar />
        <FloatingLiveWidget />
      </div>
    </QueryClientProvider>
  );
}
