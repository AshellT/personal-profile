import type { TProject, TProjectMetric } from "../types";

export type { TProject, TProjectMetric };

export const agencyPortfolioUrl = "https://www.atgdigitalagency.co.zw/portfolio";

export const projects: TProject[] = [
  {
    name: "TenderAI — PRAZ Proposals in Minutes",
    category: "AI Procurement SaaS",
    description:
      "Zimbabwe-first AI platform that turns a pasted government or corporate tender notice into a submission-ready PRAZ proposal in minutes — Tax Clearance checks, PRAZ registration, and multi-section generation.",
    tags: ["AI", "SaaS", "Procurement"],
    image: "/portfolio/tenderai-hero.webp",
    secondaryImage: "/portfolio/tenderai-secondary.webp",
    liveUrl: "https://www.tenderai.co.zw",
    caseStudyUrl: "https://www.atgdigitalagency.co.zw/portfolio/tenderai",
    metrics: [
      { label: "Focus", value: "PRAZ proposals" },
      { label: "Speed", value: "~3 min draft" },
      { label: "Market", value: "Zimbabwe" },
    ],
    featured: true,
  },
  {
    name: "ICD — Institute for Capacity Development",
    category: "Education & Training",
    description:
      "Multi-country short-course platform for Windhoek, Pretoria, Harare, and Kigali — catalogues, calendars, centre pages, online registration, and WhatsApp-led conversion.",
    tags: ["Education", "Multi-country", "Conversion"],
    image: "/portfolio/icd-hero.webp",
    secondaryImage: "/portfolio/icd-secondary.webp",
    liveUrl: "https://just-encouragement-production-743b.up.railway.app/",
    caseStudyUrl:
      "https://www.atgdigitalagency.co.zw/portfolio/icd-institute-for-capacity-development",
    outcome:
      "Applicants move from course discovery to apply / WhatsApp coordinator in a few taps.",
    featured: true,
  },
  {
    name: "GRATEHCARE — All-in-One Care Management",
    category: "Healthcare Operations SaaS",
    description:
      "Care management platform for scheduling, billing, compliance, and care delivery — replacing clipboards, spreadsheets, and disconnected apps for modern care providers.",
    tags: ["Healthcare", "SaaS", "Operations"],
    image: "/portfolio/gratehcare-hero.webp",
    secondaryImage: "/portfolio/gratehcare-secondary.webp",
    liveUrl: "https://gratehcare.vercel.app/",
    caseStudyUrl: "https://www.atgdigitalagency.co.zw/portfolio/gratehcare",
    featured: true,
  },
  {
    name: "Slate Environmental — Waste & Infrastructure",
    category: "Corporate Website",
    description:
      "Premium corporate site for industrial waste management, skip bin hiring, and infrastructure maintenance — quote-led conversion with an enterprise-ready brand system.",
    tags: ["Corporate", "Brand", "Lead gen"],
    image: "/portfolio/slate-hero.webp",
    secondaryImage: "/portfolio/slate-secondary.webp",
    liveUrl:
      "https://slate-environment-git-main-ashellts-projects.vercel.app/",
    caseStudyUrl:
      "https://www.atgdigitalagency.co.zw/portfolio/slate-environmental",
    featured: true,
  },
  {
    name: "Hospitality Management System",
    category: "Enterprise Platform",
    description:
      "Eight-module hotel and resort OS — rooms, restaurant, shuttle, bookings, payments, KYC, campaigns, and executive reporting in one system.",
    tags: ["Hospitality", "Enterprise", "Dashboards"],
    image: "/portfolio/hospitality-hero.webp",
    caseStudyUrl:
      "https://www.atgdigitalagency.co.zw/portfolio/hospitality-management-system",
    metrics: [
      { label: "Modules", value: "8" },
      { label: "Manual tasks", value: "−70%" },
      { label: "Check-in", value: "8m → 2m" },
      { label: "Reports", value: "60 sec" },
    ],
    outcome:
      "Manual daily tasks dropped sharply; double bookings disappeared; managers export departmental revenue in under a minute.",
    featured: true,
  },
  {
    name: "Business Website Agent — Design & Growth Hub",
    category: "AI Agency Platform",
    description:
      "AI-powered hub that helps SMEs create websites, craft marketing assets, generate logos, and launch digital presence faster.",
    tags: ["AI", "Agency", "SME"],
    image: "/portfolio/business-website-agent-hero.webp",
    caseStudyUrl:
      "https://www.atgdigitalagency.co.zw/portfolio/business-website-agent",
  },
  {
    name: "IVAR — WhatsApp Receptionist",
    category: "WhatsApp AI Assistant",
    description:
      "Always-on WhatsApp receptionist that answers FAQs, books appointments, qualifies leads, and escalates to humans after hours.",
    tags: ["WhatsApp", "AI", "Reception"],
    image: "/portfolio/ivar-hero.webp",
    caseStudyUrl:
      "https://www.atgdigitalagency.co.zw/portfolio/ivar-whatsapp-receptionist",
    metrics: [
      { label: "Coverage", value: "24 / 7" },
      { label: "Channel", value: "WhatsApp" },
    ],
  },
  {
    name: "CVIUM.AI — CV, Cover Letter & Job Hunt OS",
    category: "Career AI Platform",
    description:
      "ATS-ready CVs, tailored cover letters, LinkedIn SEO profiles, and structured job-hunt workflows in one career operating system.",
    tags: ["AI", "Career", "ATS"],
    image: "/portfolio/cvium-hero.webp",
    caseStudyUrl: "https://www.atgdigitalagency.co.zw/portfolio/cvium-ai",
  },
  {
    name: "Insurelone — WhatsApp Mukando Savings Circles",
    category: "WhatsApp Fintech",
    description:
      "Mukando-style group savings and contribution tracking on WhatsApp — balances, rounds, payouts, and reminders in chat.",
    tags: ["Fintech", "WhatsApp", "Trust"],
    image: "/portfolio/insurelone-hero.webp",
    caseStudyUrl: "https://www.atgdigitalagency.co.zw/portfolio/insurelone",
  },
  {
    name: "InvoiceAI — Invoices, Receipts & Quotes on WhatsApp",
    category: "WhatsApp Documents AI",
    description:
      "Generates professional invoices, receipts, and quotations and sends them on WhatsApp — branded, trackable documents from chat.",
    tags: ["AI", "Documents", "SMB"],
    image: "/portfolio/invoiceai-hero.webp",
    caseStudyUrl: "https://www.atgdigitalagency.co.zw/portfolio/invoiceai",
  },
  {
    name: "Payment Gateway",
    category: "Payments Platform",
    description:
      "Payment integration surface for checkout and collections — giving products a reliable path from order to confirmed payment.",
    tags: ["Payments", "API", "Checkout"],
    image: "/portfolio/payment-gateway-hero.webp",
    caseStudyUrl:
      "https://www.atgdigitalagency.co.zw/portfolio/payment-gateway",
  },
  {
    name: "ERP Platform",
    category: "Enterprise ERP",
    description:
      "Operations ERP covering core business modules for inventory, finance visibility, and day-to-day organisational control.",
    tags: ["ERP", "Operations", "Enterprise"],
    image: "/portfolio/erp-hero.webp",
    caseStudyUrl: "https://www.atgdigitalagency.co.zw/portfolio/erp-platform",
  },
  {
    name: "Employee Management System",
    category: "HR Platform",
    description:
      "Secure HR operations with onboarding/offboarding, role management, document controls, and audit-ready employee records.",
    tags: ["HR", "RBAC", "Operations"],
    image: "/portfolio/employee-hero.webp",
    caseStudyUrl:
      "https://www.atgdigitalagency.co.zw/portfolio/employee-management-system",
  },
  {
    name: "Ticketing System for Managers & COO",
    category: "Executive Ops Platform",
    description:
      "Internal ticketing and escalation with priority queues, SLA timers, ownership, and executive overview.",
    tags: ["Ops", "SLA", "Executive"],
    image: "/portfolio/ticketing-hero.webp",
    caseStudyUrl:
      "https://www.atgdigitalagency.co.zw/portfolio/ticketing-system-coo",
  },
  {
    name: "ARAMS — School Management System",
    category: "School Operations",
    description:
      "Enrolment, classes, attendance, assessments, fees visibility, and parent/learner portals for live academic operations.",
    tags: ["Education", "Admin", "Portals"],
    image: "/portfolio/school-arams-hero.webp",
    caseStudyUrl:
      "https://www.atgdigitalagency.co.zw/portfolio/school-management-system",
    metrics: [
      { label: "Completion", value: "40% → 85%" },
      { label: "Admin load", value: "−65%" },
      { label: "Learners", value: "200+" },
    ],
  },
  {
    name: "EcoBank Africa Redesign",
    category: "Fintech Platform",
    description:
      "Cross-border operations redesign unifying multi-currency transfers, compliance checks, and treasury visibility across African markets.",
    tags: ["Fintech", "Dashboard", "Compliance"],
    image: "/portfolio/ecobank-hero.webp",
    caseStudyUrl:
      "https://www.atgdigitalagency.co.zw/portfolio/ecobank-africa-redesign",
    metrics: [
      { label: "Engagement", value: "+45%" },
      { label: "Processing", value: "−60%" },
      { label: "Markets", value: "14" },
    ],
  },
  {
    name: "Yamurai — AI Virtual Assistant for Econet Zimbabwe",
    category: "AI Chatbot & Virtual Assistant",
    description:
      "Multilingual AI assistant for Econet Zimbabwe — PIN/PUK, airtime reversals, and account queries across WhatsApp, USSD, SMS, and web.",
    tags: ["AI", "Telecom", "Omnichannel"],
    image: "/portfolio/yamurai-hero.webp",
    caseStudyUrl:
      "https://www.atgdigitalagency.co.zw/portfolio/yamurai-business-finder",
    metrics: [
      { label: "Channels", value: "4" },
      { label: "Languages", value: "EN + Shona" },
      { label: "Availability", value: "24 / 7" },
    ],
  },
  {
    name: "RentRight Zimbabwe — Rental Marketplace",
    category: "PropTech Platform",
    description:
      "Connects renters with KYC-verified landlords and agents — freemium browse, premium unlock for contacts, and admin oversight.",
    tags: ["PropTech", "KYC", "Marketplace"],
    image: "/portfolio/rentright-hero.webp",
    caseStudyUrl:
      "https://www.atgdigitalagency.co.zw/portfolio/accommodation-booking-website",
    metrics: [
      { label: "Renter unlock", value: "$5 once" },
      { label: "Trust", value: "KYC gated" },
    ],
  },
  {
    name: "E-Commerce Websites",
    category: "Multi-Store Platforms",
    description:
      "Multi-store online platforms with catalogues, checkout, order management, and administration dashboards for SME retail.",
    tags: ["E-commerce", "Checkout", "Admin"],
    image: "/portfolio/ecommerce-hero.webp",
    caseStudyUrl:
      "https://www.atgdigitalagency.co.zw/portfolio/ecommerce-websites",
    metrics: [{ label: "Stores", value: "5+" }],
  },
  {
    name: "Ramangwana Mining — Property & Land Marketplace",
    category: "Mining Marketplace",
    description:
      "Marketplace for mining land and claims with geological detail, title docs, GPS, and KYC-verified agents.",
    tags: ["Mining", "KYC", "Marketplace"],
    image: "/portfolio/mining-hero.webp",
    caseStudyUrl:
      "https://www.atgdigitalagency.co.zw/portfolio/mining-company-website",
  },
  {
    name: "Car Sale Website",
    category: "Automotive Platform",
    description:
      "Car listing and sales platform for dealers and buyers — search, inventory presentation, and enquiry paths beyond the yard.",
    tags: ["Automotive", "Listings", "Search"],
    image: "/portfolio/car-hero.webp",
    caseStudyUrl:
      "https://www.atgdigitalagency.co.zw/portfolio/car-sale-website",
  },
  {
    name: "Church CRM",
    category: "CRM Platform",
    description:
      "Church relationship management for members, attendance, events, giving records, and communication workflows.",
    tags: ["CRM", "Nonprofit", "Events"],
    image: "/portfolio/church-hero.webp",
    caseStudyUrl: "https://www.atgdigitalagency.co.zw/portfolio/church-crm",
  },
  {
    name: "Shipping Website",
    category: "Logistics Platform",
    description:
      "Shipping and logistics web platform with parcel tracking, rate tools, and customer dashboards.",
    tags: ["Logistics", "Tracking", "Quotes"],
    image: "/portfolio/shipping-hero.webp",
    caseStudyUrl:
      "https://www.atgdigitalagency.co.zw/portfolio/shipping-website",
  },
  {
    name: "AI Farming Daily News",
    category: "AgriTech News",
    description:
      "AI-assisted daily news and insights for farmers and agri-businesses — relevant headlines and actionable summaries.",
    tags: ["AgriTech", "AI", "News"],
    image: "/portfolio/farming-hero.webp",
    caseStudyUrl:
      "https://www.atgdigitalagency.co.zw/portfolio/ai-farming-daily-news",
  },
];
