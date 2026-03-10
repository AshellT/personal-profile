type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      whatsapp: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Ashell Tinotenda Gonese | Full-Stack Systems Engineer",
    fullName: "Ashell Tinotenda Gonese",
    email: "ashell.gonese@outlook.com",
  },
  hero: {
    name: "Ashell",
    p: [
      "Full-Stack Systems Engineer building enterprise web platforms,",
      "automation systems, and cloud-integrated products that scale.",
    ],
  },
  contact: {
    p: "Need a website for your business?",
    h2: "Request a Website.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "Tell me your name",
      },
      email: { span: "Your Email", placeholder: "Where can I reach you?" },
      whatsapp: {
        span: "WhatsApp Number",
        placeholder: "e.g. +263 77 123 4567",
      },
      message: {
        span: "Project Brief",
        placeholder: "Describe your project, goals, and timeline",
      },
    },
  },
  sections: {
    about: {
      p: "Profile",
      h2: "Overview.",
      content: `I am a Full-Stack Systems Engineer with 3+ years of experience building
      enterprise-grade applications, internal automation tools, and cloud-aware
      digital systems. I focus on production-ready engineering that improves
      operations, visibility, and reliability through thoughtful architecture,
      clean delivery workflows, and secure role-based platforms.`,
    },
    experience: {
      p: "Career timeline",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "Proof of growth",
      h2: "Certifications & Impact.",
    },
    works: {
      p: "Selected delivery",
      h2: "Projects.",
      content: `These projects represent platforms and systems I have designed or delivered
    for business operations, staff performance, customer-facing workflows, and
    revenue generation. They highlight strong execution across product design,
    backend architecture, process automation, and deployment readiness.`,
    },
  },
};
