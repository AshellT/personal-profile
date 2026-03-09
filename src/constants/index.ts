import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Frontend Engineering",
    icon: web,
  },
  {
    title: "Backend & APIs",
    icon: backend,
  },
  {
    title: "Cloud & Infrastructure",
    icon: mobile,
  },
  {
    title: "Business AI Automation",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "REST APIs",
    icon: nodejs,
  },
];

const experiences: TExperience[] = [
  {
    title: "Projects System Developer",
    companyName: "OmniContact [ECONET] - Harare",
    icon: web,
    iconBg: "#DBEAFE",
    date: "Mar 2025 - Present",
    points: [
      "Delivered commercial websites, web apps, and internal automation systems used as revenue-generating digital products.",
      "Built custom project management platforms with real-time KPI dashboards for timelines, resources, and budgets.",
      "Automated approvals, scheduling, and allocation workflows, reducing approval cycle times by 30%.",
      "Owned end-to-end delivery from requirements through deployment and post-launch optimization.",
    ],
  },
  {
    title: "HR System Developer",
    companyName: "OmniContact [ECONET] - Harare",
    icon: backend,
    iconBg: "#E0E7FF",
    date: "Mar 2024 - Feb 2025",
    points: [
      "Developed and maintained a tailored HR management platform to improve employee data accessibility and accuracy.",
      "Integrated payroll and benefits modules with compliance-aware processing workflows.",
      "Partnered with HR and IT stakeholders to improve usability and streamline critical operations.",
      "Reduced downtime by 15% through testing, debugging, and reliability improvements.",
    ],
  },
  {
    title: "Technical Support (Part-Time)",
    companyName: "Prometric - Harare",
    icon: mobile,
    iconBg: "#DCFCE7",
    date: "Aug 2023 - Jul 2024",
    points: [
      "Resolved hardware, software, and network issues while meeting SLA response requirements.",
      "Configured systems and peripherals and maintained support documentation and FAQ resources.",
      "Delivered user training sessions that improved software competency and reduced recurring incidents.",
      "Collaborated with IT escalation teams for long-term system improvements.",
    ],
  },
  {
    title: "Technical Support Engineer",
    companyName: "OmniContact [ECONET] - Harare",
    icon: backend,
    iconBg: "#E0F2FE",
    date: "Apr 2024 - Mar 2024",
    points: [
      "Provided support for inbound and outbound systems to minimize downtime and improve reliability.",
      "Delivered training and documentation for support teams and end-users.",
      "Implemented issue resolution workflows that reduced recurring incidents and resolution time.",
      "Managed laptop software updates and maintenance for operational continuity across teams.",
    ],
  },
  {
    title: "Call Centre Agent",
    companyName: "OmniContact [ECONET] - Harare",
    icon: creator,
    iconBg: "#FEF3C7",
    date: "Aug 2022 - Mar 2023",
    points: [
      "Handled high volumes of inbound customer calls while maintaining service quality.",
      "Logged detailed account notes and follow-ups in CRM systems for continuity.",
      "Managed escalations with empathy and practical resolution pathways.",
      "Supported process improvement through feedback and performance insights.",
    ],
  },
  {
    title: "Technical Support",
    companyName: "Liquid Intelligent Technologies - Harare",
    icon: mobile,
    iconBg: "#EDE9FE",
    date: "May 2022 - Jul 2022",
    points: [
      "Provided real-time troubleshooting for network and connectivity issues across Zimbabwe.",
      "Supported sales engagements with technical explanations and customer guidance.",
      "Managed multi-channel support inquiries and improved customer experience response quality.",
      "Maintained logs that strengthened knowledge sharing and faster incident resolution.",
    ],
  },
  {
    title: "Technical Support",
    companyName: "Wicresoft - Shanghai, China",
    icon: mobile,
    iconBg: "#FFEDD5",
    date: "Jul 2021 - Dec 2021",
    points: [
      "Delivered remote and on-site technical support for software and hardware incidents.",
      "Diagnosed connectivity issues and coordinated with ISPs and internal teams.",
      "Built support documentation and FAQ knowledge assets for user self-service.",
      "Worked with product teams to surface recurring defects and propose improvements.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Oracle Cloud Infrastructure Certified AI Foundations Associate (2025).",
    name: "OCI AI Foundations",
    designation: "Certification",
    company: "Oracle",
    image:
      "https://ui-avatars.com/api/?name=Oracle+AI&background=0f766e&color=ffffff&size=128",
  },
  {
    testimonial:
      "Oracle Cloud Infrastructure Certified Generative AI Professional (2025).",
    name: "OCI Generative AI",
    designation: "Certification",
    company: "Oracle",
    image:
      "https://ui-avatars.com/api/?name=GenAI&background=0b3b66&color=ffffff&size=128",
  },
  {
    testimonial:
      "Oracle Cloud Infrastructure Certified Foundations Associate (2025).",
    name: "OCI Foundations",
    designation: "Certification",
    company: "Oracle",
    image:
      "https://ui-avatars.com/api/?name=OCI+Foundations&background=155e75&color=ffffff&size=128",
  },
  {
    testimonial:
      "Oracle Data Platform Certified Foundations Associate (2025).",
    name: "Oracle Data Platform",
    designation: "Certification",
    company: "Oracle",
    image:
      "https://ui-avatars.com/api/?name=Data+Platform&background=1d4ed8&color=ffffff&size=128",
  },
  {
    testimonial:
      "Oracle Fusion AI Agent Studio Foundations Associate (2025).",
    name: "Fusion AI Agent Studio",
    designation: "Certification",
    company: "Oracle",
    image:
      "https://ui-avatars.com/api/?name=Fusion+AI&background=7c3aed&color=ffffff&size=128",
  },
  {
    testimonial: "Cisco Networking Academy - Network Basics.",
    name: "Cisco Network Basics",
    designation: "Certification",
    company: "Cisco Networking Academy",
    image:
      "https://ui-avatars.com/api/?name=Cisco+Network&background=0f766e&color=ffffff&size=128",
  },
  {
    testimonial:
      "Awarded Certificate of Recognition for exceptional hard work and dedication during 2024.",
    name: "Recognition Award",
    designation: "Achievement",
    company: "OmniContact",
    image:
      "https://ui-avatars.com/api/?name=Award&background=9a3412&color=ffffff&size=128",
  },
];

const projects: TProject[] = [
  {
    name: "Hospitality Management System",
    description:
      "Enterprise platform covering accommodations, rooms, restaurants, shuttles, bookings, KYC, campaigns, payments, and reporting.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "sql",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/AshellT?tab=repositories",
  },
  {
    name: "Employee Management System",
    description:
      "Secure HR operations platform with onboarding/offboarding, role management, document controls, and audit logs.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "rbac",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/AshellT?tab=repositories",
  },
  {
    name: "School Management System",
    description:
      "Training and LMS platform for internal staff with course creation, progress tracking, assessments, and analytics.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "analytics",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/AshellT?tab=repositories",
  },
  {
    name: "Yamurai Business Finder",
    description:
      "Business discovery platform with category filters, location search, and profile pages for small businesses.",
    tags: [
      {
        name: "vite",
        color: "blue-text-gradient",
      },
      {
        name: "maps",
        color: "green-text-gradient",
      },
      {
        name: "search",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/AshellT?tab=repositories",
  },
  {
    name: "Accommodation Booking Website",
    description:
      "Property listing and booking system with availability management, booking requests, and payment integration.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "payments",
        color: "green-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/AshellT?tab=repositories",
  },
  {
    name: "Church CRM",
    description:
      "Church relationship management system for member profiles, attendance, event scheduling, giving records, and communication workflows.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "crm",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/AshellT?tab=repositories",
  },
  {
    name: "Asset Management System",
    description:
      "Operations platform for tracking organizational assets, assignments, maintenance cycles, procurement records, and audit-ready reports.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "inventory",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/AshellT?tab=repositories",
  },
  {
    name: "E-Commerce Platforms",
    description:
      "Multi-store online platforms with product catalogs, checkout, order management, and administration dashboards.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "automation",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/AshellT?tab=repositories",
  },
];

export { services, technologies, experiences, testimonials, projects };
