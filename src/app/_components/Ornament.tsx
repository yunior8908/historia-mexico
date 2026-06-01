type OrnamentProps = {
  className?: string;
  variant?: "divider" | "small";
};

export function Ornament({ className = "", variant = "divider" }: OrnamentProps) {
  if (variant === "small") {
    return (
      <svg
        viewBox="0 0 60 12"
        aria-hidden
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
      >
        <path d="M0 6 L24 6" />
        <path d="M36 6 L60 6" />
        <circle cx="30" cy="6" r="2.5" />
        <circle cx="30" cy="6" r="0.8" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 320 28"
      aria-hidden
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.9"
    >
      <path d="M0 14 L120 14" />
      <path d="M200 14 L320 14" />
      <path d="M150 14 C 152 9, 156 7, 160 7 C 164 7, 168 9, 170 14 C 168 19, 164 21, 160 21 C 156 21, 152 19, 150 14 Z" />
      <circle cx="160" cy="14" r="2.2" />
      <circle cx="160" cy="14" r="0.9" fill="currentColor" />
      <path d="M138 14 C 142 12, 146 12, 148 14" />
      <path d="M172 14 C 174 12, 178 12, 182 14" />
      <circle cx="135" cy="14" r="1.4" />
      <circle cx="185" cy="14" r="1.4" />
    </svg>
  );
}
