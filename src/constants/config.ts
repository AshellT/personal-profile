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
    role: string;
    support: string;
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
    credentials: TSection;
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
    name: "Ashell Tinotenda Gonese",
    role: "Full-Stack Systems Engineer",
    support:
      "Founder of ATG Digital Agency. I design and ship enterprise web platforms, automation systems, and conversion-focused digital products.",
  },
  contact: {
    p: "Start a project",
    h2: "Request a website.",
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
      p: "About",
      h2: "I build systems teams can trust — and products customers can use.",
      content: `I'm a Full-Stack Systems Engineer with 4+ years shipping enterprise applications, internal platforms, and cloud-aware products. My work sits at the intersection of product engineering and operations: clean architecture, secure role-based access, automation that removes busywork, and interfaces that make complex workflows feel simple.

Through ATG Digital Agency, I help businesses across Zimbabwe and the region launch conversion-focused websites and digital systems — from hospitality and education platforms to AI tools, Microsoft 365 workflows, and reliable infrastructure.`,
    },
    experience: {
      p: "Career",
      h2: "Experience.",
      content:
        "From support floors to shipping enterprise systems — a path built on delivery, reliability, and ownership.",
    },
    credentials: {
      p: "Proof",
      h2: "Credentials.",
      content:
        "Professional certificates and course credentials across AI, cloud, cybersecurity, IT support, and data — from Google, IBM, Oracle, and leading universities.",
    },
    works: {
      p: "Selected work",
      h2: "Projects that ship.",
      content: `Selected websites and products from ATG Digital Agency — AI platforms,
    enterprise systems, and conversion-focused sites built for real Zimbabwean
    and regional operators.`,
    },
  },
};
