import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
} from "../types";

export { projects, agencyPortfolioUrl, projectSlug, getProjectBySlug, projectPath } from "./projects";
export { credentials } from "./credentials";
export type { TCredential } from "./credentials";
export { clientQuotes, deliveryStats } from "./proof";
export { faqs } from "./faq";
export type { TFaqItem } from "./faq";

export const navLinks: TNavLink[] = [
  { id: "about", title: "About" },
  { id: "projects", title: "Work" },
  { id: "proof", title: "Proof" },
  { id: "work", title: "Experience" },
  { id: "credentials", title: "Credentials" },
  { id: "faq", title: "FAQ" },
  { id: "contact", title: "Contact" },
];


const services: TService[] = [
  { title: "Full-Stack Product Engineering", icon: "" },
  { title: "Cloud & Systems Delivery", icon: "" },
  { title: "AI & Business Automation", icon: "" },
  { title: "Networking & Cybersecurity", icon: "" },
];

const technologies: TTechnology[] = [
  { name: "TypeScript", icon: "Frontend" },
  { name: "JavaScript", icon: "Frontend" },
  { name: "React", icon: "Frontend" },
  { name: "Next.js", icon: "Frontend" },
  { name: "Tailwind CSS", icon: "Frontend" },
  { name: "HTML / CSS", icon: "Frontend" },
  { name: "Node.js", icon: "Backend" },
  { name: "REST APIs", icon: "Backend" },
  { name: "PostgreSQL", icon: "Backend" },
  { name: "MongoDB", icon: "Backend" },
  { name: "MySQL", icon: "Backend" },
  { name: "Oracle Cloud", icon: "Cloud" },
  { name: "Vercel", icon: "Cloud" },
  { name: "Railway", icon: "Cloud" },
  { name: "Git / GitHub", icon: "Tools" },
  { name: "Vite", icon: "Tools" },
  { name: "Framer Motion", icon: "Tools" },
  { name: "WhatsApp APIs", icon: "AI" },
  { name: "Generative AI", icon: "AI" },
  { name: "Automation Workflows", icon: "AI" },
];

const stackGroups = [
  {
    label: "Frontend",
    items: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Vite",
      "Tailwind CSS",
      "HTML5 / CSS3",
      "Responsive UI",
      "Framer Motion",
      "React Router",
      "Component design systems",
      "Dashboard & KPI UIs",
      "Forms & validation",
      "SEO / Core Web Vitals",
      "Accessibility (a11y)",
      "PWA fundamentals",
      "Three.js / WebGL",
      "Figma handoff",
    ],
  },
  {
    label: "Backend & Data",
    items: [
      "Node.js",
      "NestJS",
      "Express",
      "REST APIs",
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "SQL",
      "Python",
      "Payment integrations",
      "Auth & RBAC",
      "Webhooks",
    ],
  },
  {
    label: "Cloud & Delivery",
    items: [
      "Oracle Cloud",
      "IBM Cloud fundamentals",
      "Vercel",
      "Railway",
      "Microsoft 365",
      "SharePoint",
      "Microsoft Lists",
      "Microsoft Teams",
      "Power Apps",
      "Power BI",
      "Excel",
      "Microsoft Forms",
      "DevOps basics",
      "CI / CD awareness",
      "Git / GitHub",
      "Linux",
      "Docker basics",
    ],
  },
  {
    label: "AI, Security & Networking",
    items: [
      "Generative AI",
      "TensorFlow",
      "Machine learning basics",
      "Cybersecurity",
      "Network fundamentals",
      "Network security",
      "Firewalls & access control",
      "TCP / IP & routing basics",
      "VPN & remote access",
      "Storage & infrastructure basics",
      "Threats & vulnerabilities",
      "Detection & response",
      "ISO 27001 awareness",
      "GRC fundamentals",
      "Linux security basics",
      "n8n automation",
      "WhatsApp APIs",
      "Business process automation",
      "UX research basics",
    ],
  },
] as const;

const experiences: TExperience[] = [
  {
    title: "Projects System Developer",
    companyName: "OmniContact [ECONET] — Harare",
    icon: "",
    iconBg: "#DBEAFE",
    date: "Mar 2025 — Present",
    points: [
      "Delivered commercial websites, web apps, and internal automation systems used as revenue-generating digital products.",
      "Built custom project management platforms with real-time KPI dashboards for timelines, resources, and budgets.",
      "Automated approvals, scheduling, and allocation workflows, reducing approval cycle times by 30%.",
      "Owned end-to-end delivery from requirements through deployment and post-launch optimization.",
    ],
  },
  {
    title: "HR System Developer",
    companyName: "OmniContact [ECONET] — Harare",
    icon: "",
    iconBg: "#E0E7FF",
    date: "Mar 2024 — Feb 2025",
    points: [
      "Developed and maintained a tailored HR management platform to improve employee data accessibility and accuracy.",
      "Integrated payroll and benefits modules with compliance-aware processing workflows.",
      "Partnered with HR and IT stakeholders to improve usability and streamline critical operations.",
      "Reduced downtime by 15% through testing, debugging, and reliability improvements.",
    ],
  },
  {
    title: "Technical Support (Part-Time)",
    companyName: "Prometric — Harare",
    icon: "",
    iconBg: "#DCFCE7",
    date: "Aug 2023 — Jul 2024",
    points: [
      "Resolved hardware, software, and network issues while meeting SLA response requirements.",
      "Configured systems and peripherals and maintained support documentation and FAQ resources.",
      "Delivered user training sessions that improved software competency and reduced recurring incidents.",
    ],
  },
  {
    title: "Technical Support Engineer",
    companyName: "OmniContact [ECONET] — Harare",
    icon: "",
    iconBg: "#E0F2FE",
    date: "Apr 2023 — Mar 2024",
    points: [
      "Provided support for inbound and outbound systems to minimize downtime and improve reliability.",
      "Implemented issue resolution workflows that reduced recurring incidents and resolution time.",
      "Managed laptop software updates and maintenance for operational continuity across teams.",
    ],
  },
  {
    title: "Call Centre Agent",
    companyName: "OmniContact [ECONET] — Harare",
    icon: "",
    iconBg: "#FEF3C7",
    date: "Aug 2022 — Mar 2023",
    points: [
      "Handled high volumes of inbound customer calls while maintaining service quality.",
      "Logged detailed account notes and follow-ups in CRM systems for continuity.",
      "Managed escalations with empathy and practical resolution pathways.",
    ],
  },
  {
    title: "Technical Support",
    companyName: "Liquid Intelligent Technologies — Harare",
    icon: "",
    iconBg: "#EDE9FE",
    date: "May 2022 — Jul 2022",
    points: [
      "Provided real-time troubleshooting for network and connectivity issues across Zimbabwe.",
      "Supported sales engagements with technical explanations and customer guidance.",
      "Managed multi-channel support inquiries and improved customer experience response quality.",
    ],
  },
  {
    title: "Technical Support",
    companyName: "Wicresoft — Shanghai, China",
    icon: "",
    iconBg: "#FFEDD5",
    date: "Jul 2021 — Dec 2021",
    points: [
      "Delivered remote and on-site technical support for software and hardware incidents.",
      "Diagnosed connectivity issues and coordinated with ISPs and internal teams.",
      "Built support documentation and FAQ knowledge assets for user self-service.",
    ],
  },
];

export { services, technologies, experiences, stackGroups };
