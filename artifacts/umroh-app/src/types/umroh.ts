export type PrepItem = {
  id: number;
  title: string;
  badge: string;
  tips: string[];
  links?: {
    url: string;
    icon: string;
    label: string;
    outline?: boolean;
  }[];
};

export type PrepSection = {
  section: string;
  items: PrepItem[];
};

export type TutItem = {
  emoji: string;
  title: string;
  subtitle: string;
  gold: boolean;
  defaultSubTab?: string | null; // Tanda ? membuat ini jadi opsional (Error Fix)
  content: (props: {
    D: Record<string, boolean>;
    T: (k: string) => void;
    subTab: string;
    setSubTab: (t: string) => void;
  }) => React.ReactNode;
};