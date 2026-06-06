import type { JSX } from "react";

interface IconProps {
  name: string;
  className?: string;
}

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const paths: Record<string, JSX.Element> = {
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v4l3 2" />
    </>
  ),
  book: <path d="M4 19V5l8-2 8 2v14M4 19h16M9 19v-6h6v6" />,
  flame: (
    <>
      <path d="M12 21c-4-3-7-6-7-10a7 7 0 0114 0c0 4-3 7-7 10z" />
      <path d="M12 3v8M9 7l3 3 3-3" />
    </>
  ),
  star: <path d="M12 2l2.4 7.4H22l-6 4.4 2.3 7.2L12 16.6 5.7 21l2.3-7.2-6-4.4h7.6z" />,
  children: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3 3-5 6-5s6 2 6 5M16 4a3 3 0 010 6M18 15c2 0 3 2 3 5" />
    </>
  ),
  youth: <path d="M3 18l9-14 9 14M7 18v-3M12 18v-5M17 18v-3" />,
  women: (
    <>
      <circle cx="12" cy="7" r="4" />
      <path d="M5 21c0-4 3-7 7-7s7 3 7 7M9 7l3-3 3 3" />
    </>
  ),
  men: (
    <>
      <circle cx="12" cy="7" r="4" />
      <path d="M5 21c0-4 3-7 7-7s7 3 7 7" />
    </>
  ),
  worship: (
    <>
      <path d="M9 18V5l11-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="17" cy="16" r="3" />
    </>
  ),
  outreach: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 010 18M12 3a15 15 0 000 18" />
    </>
  ),
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  listen: <path d="M11 5L6 9H2v6h4l5 4zM15 9a4 4 0 010 6" />,
  send: <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />,
  check: <path d="M5 13l4 4L19 7" />,
  lock: (
    <>
      <rect x="4" y="10" width="16" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 018 0v3" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-7-5.5-7-11a7 7 0 0114 0c0 5.5-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  phone: <path d="M4 5h4l2 5-3 2a12 12 0 005 5l2-3 5 2v4a2 2 0 01-2 2A16 16 0 014 7a2 2 0 010-2z" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l8 4v6c0 5-3.5 7.5-8 8-4.5-.5-8-3-8-8V7l8-4z" />
      <path d="M12 8v6M9 11h6" />
    </>
  ),
};

export default function Icon({ name, className }: IconProps) {
  const d = paths[name];
  if (!d) return null;
  return (
    <svg className={className} viewBox="0 0 24 24" {...stroke} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {d}
    </svg>
  );
}

export function PlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}
