import type { ContentClusterId } from "@/types/content";

export type MenuIconKey = ContentClusterId | "home" | "infoHub";

type MenuIconProps = {
  iconKey: MenuIconKey;
  size?: number;
  className?: string;
};

const stroke = "currentColor";
const sw = 1.75;

export function MenuIcon({ iconKey, size = 20, className }: MenuIconProps) {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke,
    strokeWidth: sw,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    className,
  };

  switch (iconKey) {
    case "home":
      return (
        <svg {...props}>
          <path d="M3 11.5L12 4l9 7.5" />
          <path d="M6 10.5V20h12V10.5" />
        </svg>
      );
    case "cost":
      return (
        <svg {...props}>
          <path d="M6 3h12v18H6z" />
          <path d="M9 7h6M9 11h6M9 15h4" />
        </svg>
      );
    case "recovery":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v4l3 2" />
        </svg>
      );
    case "precautions":
      return (
        <svg {...props}>
          <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z" />
          <path d="M12 8v5M12 16h.01" />
        </svg>
      );
    case "hospital":
      return (
        <svg {...props}>
          <path d="M4 20V8l8-5 8 5v12" />
          <path d="M9 20v-6h6v6M12 7v4M10 9h4" />
        </svg>
      );
    case "reviews":
      return (
        <svg {...props}>
          <path d="M6 4h12v14H8l-2 2V4z" />
          <path d="M9 9h6M9 13h4" />
        </svg>
      );
    case "faq":
    case "faqHub":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M9.5 9a2.5 2.5 0 0 1 4.5 1.5c0 1.5-2 2-2 3.5" />
          <path d="M12 17h.01" strokeWidth={2.2} />
        </svg>
      );
    case "infoHub":
      return (
        <svg {...props}>
          <path d="M6 4h9l3 3v13H6z" />
          <path d="M9 9h6M9 13h6M9 17h4" />
        </svg>
      );
    default:
      return null;
  }
}
