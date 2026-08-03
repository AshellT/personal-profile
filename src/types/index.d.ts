export type TCommonProps = {
  title?: string;
  name?: string;
  icon?: string;
};

export type TExperience = {
  companyName: string;
  iconBg: string;
  date: string;
  points: string[];
} & Required<Omit<TCommonProps, "name">>;

export type TTestimonial = {
  testimonial: string;
  designation: string;
  company: string;
  image: string;
  issued?: string;
  credentialId?: string;
  credentialUrl?: string;
  featured?: boolean;
} & Required<Pick<TCommonProps, "name">>;

export type TClientQuote = {
  quote: string;
  role: string;
  context: string;
};

export type TProjectMetric = {
  label: string;
  value: string;
};

export type TProject = {
  name: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
  secondaryImage?: string;
  liveUrl?: string;
  caseStudyUrl: string;
  metrics?: TProjectMetric[];
  outcome?: string;
  featured?: boolean;
};

export type TTechnology = Required<Omit<TCommonProps, "title">>;

export type TNavLink = {
  id: string;
} & Required<Pick<TCommonProps, "title">>;

export type TService = Required<Omit<TCommonProps, "name">>;

export type TMotion = {
  direction: "up" | "down" | "left" | "right" | "";
  type: "tween" | "spring" | "just" | "";
  delay: number;
  duration: number;
};
