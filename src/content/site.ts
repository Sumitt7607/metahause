// Real Meta Ads Manager Dashboard Captures
import proofBridalCourseOct from "@/assets/proof/proof-bridal-course-oct.png";
import proofGccArabicTutoring from "@/assets/proof/proof-gcc-arabic-tutoring.png";
import proofBridalPreetiLeads from "@/assets/proof/proof-bridal-preeti-leads.png";
import proofBridalLeadSep from "@/assets/proof/proof-bridal-lead-sep.png";
import proofGccIndianExpats from "@/assets/proof/proof-gcc-indian-expats.png";
import proofUkLuxuryLeadsSep from "@/assets/proof/proof-uk-luxury-leads-sep.png";
import proofUkBridalLeadsAug from "@/assets/proof/proof-uk-bridal-leads-aug.png";
import proofUaeGccLeadsOct from "@/assets/proof/proof-uae-gcc-leads-oct.png";
import proofUaeGccConvSep from "@/assets/proof/proof-uae-gcc-conv-sep.png";

export {
  proofBridalCourseOct,
  proofGccArabicTutoring,
  proofBridalPreetiLeads,
  proofBridalLeadSep,
  proofGccIndianExpats,
  proofUkLuxuryLeadsSep,
  proofUkBridalLeadsAug,
  proofUaeGccLeadsOct,
  proofUaeGccConvSep,
};

// Contact details
export const contact = {
  whatsapp: "919899966384",
  whatsappDisplay: "+91 98999 66384",
  phone: "+91 98999 66384",
  phoneDisplay: "+91 98999 66384",
  phoneRaw: "9899966384",
  email: "hello@metahausbyfarah.com",
  instagram: "https://instagram.com/metahaus_byfarah?cplk=MWFzbGFmNXlzaTAxZw%3D%3D",
  instagramHandle: "@metahaus_byfarah",
  linkedin: "https://www.linkedin.com/in/farah-ansari-537278202?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  linkedinDisplay: "Farah Ansari",
  locationPrimary: "Dubai, United Arab Emirates",
  locationSecondary: "London, United Kingdom",
  hours: "Mon – Fri: 9:00 AM – 6:00 PM (GST / BST / IST)",
};

export const whatsappLink = (customMessage?: string) =>
  `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
    customMessage || "Hello Farah, I'd like to discuss scaling our brand with strategic Meta Ads.",
  )}`;

export type CaseStudy = {
  id: string;
  industry: string;
  market: string;
  campaign: string;
  period: string;
  highlightMetric: string;
  result: string;
  resultLabel: string;
  costPerResult: string;
  reach: string;
  overview: string;
  actualCampaigns: string[];
  screenshot: string;
  screenshotCaption: string;
  tags: string[];
};

export type ProofScreenshot = {
  id: string;
  title: string;
  period: string;
  metric: string;
  image: string;
  campaigns: string[];
  notes: string;
  currency: string;
};

// 100% REAL VERIFIED META ADS MANAGER DASHBOARD SCREENSHOTS
export const proofScreenshots: ProofScreenshot[] = [
  {
    id: "uk-luxury-leads-sep",
    title: "UK Luxury Interest Instant Forms & Retargeting",
    period: "Sep 1 – Sep 30, 2026",
    metric: "34 Leads (Form) at £8.28 · 227 Clicks at £0.10",
    image: proofUkLuxuryLeadsSep,
    currency: "GBP (£)",
    campaigns: [
      "Instan form| luxury interest | 2sep (34 Leads at £8.28, Reach: 7,260, Freq: 2.99)",
      "retargeting | UK location | 18sep (227 Link Clicks at £0.10, Reach: 3,742)",
      "Instan form (2 Leads at £7.60, Reach: 642)",
    ],
    notes:
      "Targeted UK luxury consumer interest segments generating qualified form submissions under £8.30 per lead with hyper-efficient £0.10 retargeting clicks.",
  },
  {
    id: "uk-bridal-leads-aug",
    title: "UK Instant Form Lead Generation (August)",
    period: "Aug 1 – Aug 31, 2026",
    metric: "26 Leads (Form) at £8.42 · 5,307 Reach",
    image: proofUkBridalLeadsAug,
    currency: "GBP (£)",
    campaigns: [
      "Lead | instant form |13aug (26 Leads at £8.42, Reach: 5,307, Freq: 2.82)",
      "Afshan | engagement | 7aug (63 Link Clicks at £0.12, Reach: 1,972)",
    ],
    notes:
      "Consistent high-intent UK lead capture via Meta Instant Forms, delivering ready-to-book bridal inquiries directly into client CRM.",
  },
  {
    id: "bridal-leads-aug",
    title: "Dubai & Regional Bridal Inquiries (August)",
    period: "Aug 1 – Aug 31, 2026",
    metric: "36 Leads/Conversations · 16,133 Reach",
    image: proofBridalPreetiLeads,
    currency: "USD / Regional",
    campaigns: [
      "Preeti | Lead | Instant form | 17aug (17 Leads Form, Reach: 8,947)",
      "Preeti | Makeup | 16july (15 Messaging Conversations, Reach: 4,660)",
      "Youniq | Leads form | 29aug (4 Leads Form, Reach: 2,526)",
    ],
    notes:
      "36 total inquiries generated across instant forms and direct messaging for professional bridal makeup bookings.",
  },
  {
    id: "lead-gen-sep",
    title: "Bridal & Course Engagement ($1.24 / Result)",
    period: "Sep 1 – Sep 30, 2026",
    metric: "64 Conversions & Results · $1.24 Avg Cost",
    image: proofBridalLeadSep,
    currency: "USD ($)",
    campaigns: [
      "Engagement | bridal & course | 23sep (60 Messaging Convs at $1.24, Reach: 5,612)",
      "lead | 50%off | 10sep (2 Leads at $12.76, Reach: 809)",
      "Preeti Lead Form | 6sep (2 Leads at $21.09, Reach: 2,509)",
    ],
    notes:
      "Direct messaging and lead capture funnel driving client inquiries at an exceptional $1.24 per conversation.",
  },
  {
    id: "bridal-course-oct",
    title: "Bridal & Academy Inquiries ($1.59 / Conv)",
    period: "Oct 1 – Oct 11, 2026",
    metric: "70 Conversations · 7,781 Reach · $1.59 CPL",
    image: proofBridalCourseOct,
    currency: "USD ($)",
    campaigns: [
      "Engagement | bridal & course | 23sep (70 Messaging Convs at $1.59, Reach: 7,781, Freq: 2.20)",
    ],
    notes:
      "Sustained October campaign scaling client conversations while maintaining cost per result strictly under $1.60.",
  },
  {
    id: "gcc-expats-scaling",
    title: "GCC Expat Audience Scaling (74 Conversations)",
    period: "Aug 1 – Aug 31, 2026",
    metric: "74 Conversations · 14,202 Accounts Reached · ₹219.67 Avg",
    image: proofGccIndianExpats,
    currency: "INR (₹) / GCC",
    campaigns: [
      "GCC | Indian Expats | 23july (Ad Set 1: 30 Messaging Convs at ₹285.93, Reach: 7,889)",
      "GCC | Indian Expats | 23july (Ad Set 2: 44 Messaging Convs at ₹174.50, Reach: 7,288)",
    ],
    notes:
      "Two dedicated diaspora and expat targeting ad sets across the GCC delivering 74 high-intent conversations.",
  },
  {
    id: "gcc-arabic-education",
    title: "GCC Multi-Market Masterclasses & Tutoring",
    period: "Sep 1 – Oct 11, 2026",
    metric: "77 Conversations · 50,173 Accounts Reached",
    image: proofGccArabicTutoring,
    currency: "INR (₹) / GCC",
    campaigns: [
      "GCC copy of last - 10sep (53 Messaging Convs at ₹358.85, Reach: 37,529)",
      "GCC | school tutoring | 7oct (9 Messaging Convs at ₹220.29, Reach: 2,959)",
      "Arabic | copy of 18aug | 8oc (6 Messaging Convs at ₹254.73, Reach: 4,687)",
      "GCC | copy of aug | 18aug (9 Messaging Convs at ₹468.97, Reach: 4,998)",
    ],
    notes:
      "Cross-border bilingual educational campaigns reaching over 50,000 targeted accounts across the Gulf region.",
  },
  {
    id: "uae-gcc-leads-oct",
    title: "UAE & Cross-Location Form Leads (October)",
    period: "Oct 1 – Oct 11, 2026",
    metric: "30 Total Leads · Multi-Channel Testing",
    image: proofUaeGccLeadsOct,
    currency: "INR (₹) / UAE",
    campaigns: [
      "instant form | South india | 10oct (10 Leads at ₹7.45 per lead, Reach: 503)",
      "Form N website |Uae Location| 9oct (4 Leads at ₹562.91, Reach: 726)",
      "Web n Instant | 7oct (5 Leads at ₹450.72, Reach: 7,530)",
      "UAE | Targeting | 28sep (11 Leads at ₹781.11, Reach: 2,996)",
    ],
    notes:
      "Testing instant forms vs landing page submissions across UAE and regional target segments.",
  },
  {
    id: "uae-gcc-conv-sep",
    title: "GCC Messaging Sprint (September)",
    period: "Sep 1 – Sep 30, 2026",
    metric: "41 Conversations & 2 Leads · 9,320 Reach",
    image: proofUaeGccConvSep,
    currency: "INR (₹) / GCC",
    campaigns: [
      "GCC | 15sep (39 Messaging Convs at ₹331.27, Reach: 6,318)",
      "UAE | Targeting | 28sep (2 Messaging Convs at ₹1,242.60, Reach: 696)",
      "CC (2 Leads at ₹2,271.14, Reach: 2,020)",
    ],
    notes:
      "Direct WhatsApp and messaging conversations generated through optimized GCC targeted ad sets.",
  },
];

// 100% REAL CASE STUDIES TIED DIRECTLY TO THESE SCREENSHOTS
export const caseStudies: CaseStudy[] = [
  {
    id: "uk-luxury-leads",
    industry: "Luxury Beauty & Bridal",
    market: "United Kingdom",
    campaign: "UK Luxury Interest Instant Forms & Retargeting",
    period: "September 2026",
    highlightMetric: "34 Leads at £8.28",
    result: "34",
    resultLabel: "Verified Meta Instant Form Leads",
    costPerResult: "£8.28 per qualified lead",
    reach: "7,260 targeted accounts",
    overview:
      "A laser-targeted UK campaign targeting luxury interest audiences to capture high-intent bridal bookings while driving 227 warm retargeting clicks at just £0.10 each.",
    actualCampaigns: [
      "Instan form| luxury interest | 2sep — 34 Leads (Form) at £8.28",
      "retargeting | UK location | 18sep — 227 Link Clicks at £0.10",
      "Instan form — 2 Leads at £7.60",
    ],
    screenshot: proofUkLuxuryLeadsSep,
    screenshotCaption: "Meta Ads Manager: 34 Leads at £8.28 / lead & 227 Retargeting Clicks at £0.10",
    tags: ["UK", "Bridal", "Instant Forms", "Luxury"],
  },
  {
    id: "uk-bridal-forms",
    industry: "Bridal Makeup Artistry",
    market: "United Kingdom",
    campaign: "High-Intent UK Bridal Form Generation",
    period: "August 2026",
    highlightMetric: "26 Leads at £8.42",
    result: "26",
    resultLabel: "Direct Bridal Instant Form Submissions",
    costPerResult: "£8.42 avg. cost per lead",
    reach: "5,307 accounts (Frequency: 2.82)",
    overview:
      "Focused bridal lead generation campaign utilizing Meta instant forms to collect wedding dates and contact details without sending traffic to leaky external landing pages.",
    actualCampaigns: [
      "Lead | instant form |13aug — 26 Leads (Form) at £8.42",
      "Afshan | engagement | 7aug — 63 Link Clicks at £0.12",
    ],
    screenshot: proofUkBridalLeadsAug,
    screenshotCaption: "Meta Ads Manager: 26 Leads at £8.42 per lead & 5,307 Reach",
    tags: ["UK", "Bridal", "Lead Gen", "Instant Forms"],
  },
  {
    id: "dubai-bridal-preeti",
    industry: "Bridal Makeup & Services",
    market: "Dubai & UAE",
    campaign: "Dubai Makeup Artist Enquiries Engine",
    period: "August 2026",
    highlightMetric: "36 Inquiries in 30 Days",
    result: "36",
    resultLabel: "Verified Leads & Messaging Conversations",
    costPerResult: "Multi-campaign verified efficiency",
    reach: "16,133 targeted accounts",
    overview:
      "Full-funnel campaign combining Meta Instant Forms and direct messaging conversations for bridal makeup client bookings across Dubai and regional UAE audiences.",
    actualCampaigns: [
      "Preeti | Lead | Instant form | 17aug — 17 Leads (Form)",
      "Preeti | Makeup | 16july — 15 Messaging Conversations",
      "Youniq | Leads form | 29aug — 4 Leads (Form)",
    ],
    screenshot: proofBridalPreetiLeads,
    screenshotCaption: "Meta Ads Manager: 36 Verified Inquiries across Instant Forms & Messaging",
    tags: ["Dubai", "Bridal", "UAE", "Lead Gen"],
  },
  {
    id: "bridal-course-engagement-sep",
    industry: "Bridal & Makeup Academy",
    market: "UAE & International",
    campaign: "High-Volume Engagement & Direct Conversations",
    period: "September 2026",
    highlightMetric: "60 Conversations at $1.24",
    result: "64",
    resultLabel: "Total Enquiries & Lead Conversions",
    costPerResult: "$1.24 per messaging conversation",
    reach: "8,930 accounts",
    overview:
      "High-velocity messaging engagement campaign driving prospective bridal clients and course applicants straight into direct 1-on-1 consultations at only $1.24 per conversation.",
    actualCampaigns: [
      "Engagement | bridal & course | 23sep — 60 Messaging Convs at $1.24",
      "lead | 50%off | 10sep — 2 Leads at $12.76",
      "Preeti Lead Form | 6sep — 2 Leads at $21.09",
    ],
    screenshot: proofBridalLeadSep,
    screenshotCaption: "Meta Ads Manager: 60 Messaging Conversations at $1.24 / conversation",
    tags: ["UAE", "Academy", "Messaging", "Cost Efficiency"],
  },
  {
    id: "bridal-course-oct",
    industry: "Bridal & Professional Course",
    market: "UAE & Middle East",
    campaign: "October Bridal & Course Scaling",
    period: "October 1 – 11, 2026",
    highlightMetric: "70 Conversations in 10 Days",
    result: "70",
    resultLabel: "Direct Messaging Enquiries",
    costPerResult: "$1.59 per messaging inquiry",
    reach: "7,781 accounts (Frequency: 2.20)",
    overview:
      "Rapid 10-day October sprint generating 70 client conversations for wedding bookings and upcoming professional course enrollment at under $1.60 per lead.",
    actualCampaigns: [
      "Engagement | bridal & course | 23sep — 70 Messaging Convs at $1.59",
    ],
    screenshot: proofBridalCourseOct,
    screenshotCaption: "Meta Ads Manager: 70 Conversations at $1.59 per result",
    tags: ["Bridal", "Academy", "October Sprint"],
  },
  {
    id: "gcc-expats-scaling",
    industry: "Beauty & High-Ticket Services",
    market: "GCC & Middle East",
    campaign: "GCC Expat Audience Scaling",
    period: "August 2026",
    highlightMetric: "74 Conversations at ₹219 Avg",
    result: "74",
    resultLabel: "Verified Messaging Conversations",
    costPerResult: "₹174.50 – ₹285.93 per conversation",
    reach: "14,202 accounts reached",
    overview:
      "Audience segmentation targeting affluent diaspora and expatriate demographics across the GCC (Dubai, Abu Dhabi, Saudi Arabia) to fill booking diaries.",
    actualCampaigns: [
      "GCC | Indian Expats | 23july (Ad Set 1) — 30 Convs at ₹285.93",
      "GCC | Indian Expats | 23july (Ad Set 2) — 44 Convs at ₹174.50",
    ],
    screenshot: proofGccIndianExpats,
    screenshotCaption: "Meta Ads Manager: 74 Qualified Conversations across 2 Ad Sets",
    tags: ["GCC", "Expat Scaling", "High-Volume"],
  },
  {
    id: "gcc-arabic-tutoring",
    industry: "EdTech & Masterclass Academies",
    market: "GCC (UAE, Saudi Arabia, Qatar)",
    campaign: "Bilingual GCC Tutoring & Masterclass Enrollments",
    period: "Sep 1 – Oct 11, 2026",
    highlightMetric: "77 Conversations (50k+ Reach)",
    result: "77",
    resultLabel: "Student & Client Enquiries",
    costPerResult: "₹220.29 – ₹358.85 per inquiry",
    reach: "50,173 accounts reached",
    overview:
      "Large-scale educational acquisition campaign across Gulf countries utilizing bilingual ad angles (Arabic and regional English) to fill cohort spots.",
    actualCampaigns: [
      "GCC copy of last - 10sep — 53 Convs at ₹358.85 (37,529 Reach)",
      "GCC | school tutoring | 7oct — 9 Convs at ₹220.29 (2,959 Reach)",
      "Arabic | copy of 18aug | 8oc — 6 Convs at ₹254.73 (4,687 Reach)",
      "GCC | copy of aug | 18aug — 9 Convs at ₹468.97 (4,998 Reach)",
    ],
    screenshot: proofGccArabicTutoring,
    screenshotCaption: "Meta Ads Manager: Multi-campaign GCC scaling reaching 50k+ accounts",
    tags: ["EdTech", "GCC", "Arabic", "Multi-Market"],
  },
  {
    id: "gcc-sep-messaging",
    industry: "Consultation & Services",
    market: "UAE & GCC",
    campaign: "September GCC Messaging Sprint",
    period: "September 2026",
    highlightMetric: "39 Convs at ₹331",
    result: "41",
    resultLabel: "Direct Conversations & Leads",
    costPerResult: "₹331.27 per messaging result",
    reach: "9,320 accounts reached",
    overview:
      "Targeted ad sets deployed across Middle East markets driving immediate 1-on-1 inquiries with real-time budget scaling.",
    actualCampaigns: [
      "GCC | 15sep — 39 Messaging Convs at ₹331.27 (6,318 Reach)",
      "UAE | Targeting | 28sep — 2 Convs at ₹1,242.60",
      "CC — 2 Leads at ₹2,271.14",
    ],
    screenshot: proofUaeGccConvSep,
    screenshotCaption: "Meta Ads Manager: 39 Messaging Conversations at ₹331 / conv",
    tags: ["GCC", "UAE", "September"],
  },
];

// Core service offerings
export const services = [
  {
    title: "Meta Ads Strategy & Funnel Roadmap",
    slug: "meta-ads-strategy",
    tagline: "The Blueprint for Predictable Scaling",
    icon: "Target",
    desc: "Comprehensive campaign planning, conversion funnel architecture, audience segmentation, and budget allocation models designed for your revenue targets.",
    deliverables: [
      "Target audience & customer avatar profiling",
      "Competitor ad library analysis & teardown",
      "Full-funnel architecture (Cold TOFU → Nurture MOFU → Conversion BOFU)",
      "Budget allocation & cost-per-lead forecasting",
      "Attribution & tracking plan",
    ],
    timeline: "5–7 business days",
  },
  {
    title: "Facebook & Instagram Campaign Management",
    slug: "campaign-management",
    tagline: "End-to-End Hands-Off Execution",
    icon: "Megaphone",
    desc: "Complete daily management of your Meta Ads Manager. Audience sculpting, creative batch testing, placement controls, and daily bid optimizations.",
    deliverables: [
      "Complete Meta Business Manager & Ads Manager configuration",
      "Audience creation (Broad, Advantage+, Custom, Lookalikes)",
      "A/B creative testing (hooks, video cuts, copy angles)",
      "Daily bid management & negative spend pruning",
      "Bi-weekly live video strategy sync & WhatsApp updates",
    ],
    timeline: "Monthly management",
  },
  {
    title: "High-Intent Lead Generation & Instant Forms",
    slug: "lead-generation",
    tagline: "Filling Your Appointment Book With Ready-To-Buy Clients",
    icon: "BarChart3",
    desc: "Direct booking funnels utilizing optimized Meta Instant Forms and direct WhatsApp conversation triggers to connect businesses with serious prospects.",
    deliverables: [
      "Instant Meta Lead Forms with qualifying questions",
      "Direct WhatsApp Business automated lead triggers",
      "Instant notification dispatch to your team",
      "Lead qualification & CRM integration",
      "Real-time cost-per-lead monitoring",
    ],
    timeline: "Setup within 5–7 days",
  },
  {
    title: "Creative Strategy & Hook Briefings",
    slug: "creative-strategy",
    tagline: "Creative is the Primary Targeting Lever",
    icon: "FlaskConical",
    desc: "We script, design, and direct ad creative angles. Storyboard briefs and shot-lists tailored for beauty and luxury conversions.",
    deliverables: [
      "Bi-weekly creative briefs & hook concepts",
      "Winning angle frameworks (transformation proof, aesthetic reels)",
      "Ad copywriting (short punchy, storytelling, carousel cards)",
      "Video editing guidelines for maximum retention",
      "Creative fatigue prevention rotation",
    ],
    timeline: "Ongoing creative batch drops",
  },
  {
    title: "Conversions API (CAPI) & Pixel Setup",
    slug: "tracking-analytics",
    tagline: "Accurate Data in the Post-iOS14 Era",
    icon: "LineChart",
    desc: "Server-side tracking implementation ensuring 100% data visibility, proper event deduplication, and accurate conversion attribution.",
    deliverables: [
      "Server-side Meta Conversions API (CAPI) deployment",
      "Event deduplication & domain verification",
      "Custom conversion event setup",
      "Real-time dashboard reporting",
      "Account health and attribution audit",
    ],
    timeline: "One-time setup or bundled with retainer",
  },
  {
    title: "Account Health & Waste Auditing",
    slug: "account-audit",
    tagline: "Diagnosing Where Your Budget Is Leaking",
    icon: "ShoppingBag",
    desc: "A rigorous 30+ point diagnostic of your past campaigns, identifying wasted budget, poor audience overlap, and creative fatigue.",
    deliverables: [
      "Full account structure & budget audit",
      "Creative performance & hook rate review",
      "Tracking integrity & event match quality check",
      "Detailed written recommendations report",
    ],
    timeline: "3–5 business days",
  },
];

export const primaryIndustries = [
  {
    name: "Bridal & Luxury Makeup Artists",
    slug: "bridal-makeup",
    tagline: "Booking Out High-Ticket Diaries Months in Advance",
    desc: "Brides buy from emotional certainty and artistry prestige. We craft campaigns that showcase artistry transformations, establish luxury pricing authority, and fill your weekend diary.",
    keyMetrics: "Observed Benchmark: £8.28 – £8.42 CPL (UK) / $1.24 – $1.59 / Conv",
    idealAngle: "Transformation video reels, bride relief testimonials, scarcity of available weekend dates.",
  },
  {
    name: "Medical Aesthetics & Skin Clinics",
    slug: "aesthetic-clinics",
    tagline: "Qualified Patients for High-Value Clinical Consultations",
    desc: "Strict policy compliance with doctor authority positioning. We construct compliant educational funnels that attract high-intent patients seeking premium treatments.",
    keyMetrics: "Observed Benchmark: $14 – $21 CPL / Compliant medical funnels",
    idealAngle: "Doctor credentialing, skin concern educational hooks, consultation qualification forms.",
  },
  {
    name: "Beauty & Creative Academies",
    slug: "beauty-academies",
    tagline: "Filling Student Masterclass & Certification Cohorts",
    desc: "Attracting aspiring professionals for certification courses and masterclasses through bilingual international campaigns across UK and GCC.",
    keyMetrics: "Observed Benchmark: ₹220 – ₹358 per student inquiry / 50k+ reach",
    idealAngle: "Student success stories, curriculum breakdowns, cohort seat urgency.",
  },
  {
    name: "High-End Salons & Spas",
    slug: "beauty-salons",
    tagline: "Consistent Weekly Client Appointments",
    desc: "Hyper-local geo-targeting connecting salons with affluent local radius communities to drive repeat weekly clients.",
    keyMetrics: "Observed Benchmark: Local radius targeting / £0.10 – £0.12 link clicks",
    idealAngle: "Treatment showcases, new client luxury welcome packages, stylist chair availability.",
  },
];

export const otherIndustries = [
  {
    name: "EdTech & Creative Academies",
    desc: "Attracting aspiring professionals for certification masterclasses and tutoring cohorts with bilingual funnels.",
  },
  {
    name: "High-Ticket Client Services",
    desc: "Private consultation bookings and premium client acquisition funnels across regional and expat segments.",
  },
  {
    name: "Medical Aesthetics & Laser Clinics",
    desc: "Compliant healthcare advertising capturing high-intent patient consultations for premium treatment plans.",
  },
  {
    name: "Luxury Beauty Salons & Spas",
    desc: "Hyper-local geo-targeted campaigns filling mid-week chairs and luxury treatment packages.",
  },
];

export const steps = [
  {
    number: "01",
    title: "Deep-Dive Discovery & Account Audit",
    phase: "Week 1",
    desc: "We analyze your past ad account structure, pixel event health, audience overlap, and competitor ad libraries. We find exactly where spend was leaking.",
    deliverable: "Comprehensive Growth Audit & Strategy Brief",
  },
  {
    number: "02",
    title: "Funnel & Creative Architecture",
    phase: "Week 1–2",
    desc: "We engineer your conversion path: high-converting Meta Instant Forms, WhatsApp triggers, and bespoke creative scripts.",
    deliverable: "Approved Ad Scripts, Copywriting & Shot-Lists",
  },
  {
    number: "03",
    title: "Tracking & Technical Foundation",
    phase: "Week 2",
    desc: "Server-side Conversions API (CAPI) setup, custom conversion events, audience segmentation, and lead notification triggers.",
    deliverable: "Verified Pixel / CAPI Health Score",
  },
  {
    number: "04",
    title: "Campaign Launch & Creative Testing",
    phase: "Week 2–3",
    desc: "We deploy multiple creative variations simultaneously, testing video hooks, headlines, and audience segments to identify winning ads.",
    deliverable: "Live Campaign Delivery & Real-Time Reporting",
  },
  {
    number: "05",
    title: "Optimization & Spend Scaling",
    phase: "Week 3–6+",
    desc: "We pause underperforming ads daily, scale budget into proven winners, expand lookalike audiences, and optimize cost-per-lead.",
    deliverable: "Decreased Cost Per Lead & Predictable Booking Flow",
  },
  {
    number: "06",
    title: "Transparent Reporting & Evolution",
    phase: "Ongoing",
    desc: "No confusing reports hiding behind vanity impressions. We report actual lead volume, cost per result, and next-sprint opportunities.",
    deliverable: "Bi-Weekly Video Insights & Live KPI Dashboard",
  },
];

export const faqs = [
  {
    q: "Are the results and screenshots on this website real?",
    a: "Yes, 100%. Every single screenshot and figure shown on this site is an authentic capture exported directly from Meta Ads Manager across active campaigns managed by Farah in the UK, UAE, and GCC.",
  },
  {
    q: "How quickly do we start seeing inquiries from Meta Ads?",
    a: "Initial campaign testing begins generating leads within 48 to 72 hours of launch. The first 14 days focus on creative testing and algorithmic learning. By weeks 3–4, we establish consistent cost-per-lead benchmarks.",
  },
  {
    q: "What ad budget do I need to get started?",
    a: "For local service providers (bridal artists, aesthetic clinics, salons), we recommend a minimum ad budget of £1,000 – £2,000 / month ($1,200 – $2,500 / month) to give Meta's algorithm sufficient data to optimize efficiently.",
  },
  {
    q: "Why work with Farah directly rather than a large generalist agency?",
    a: "Large agencies often hand client accounts to junior account managers who apply generic templates. At MetaHaus, Farah personally designs your strategy, oversees daily campaign bid adjustments, and guides your creatives.",
  },
  {
    q: "How do you ensure leads are actually qualified?",
    a: "We engineer qualifying friction into our funnels: price checkpoints, date selection requirements, budget minimums, and instant WhatsApp qualification questions before inquiries ever reach your phone.",
  },
];
