export type CTAButton = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
};

export type FeatureItem = {
  title: string;
  icon: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type ComparisonItem = {
  text: string;
};

export type BonusItem = {
  title: string;
  subtitle?: string;
  price?: string;
};