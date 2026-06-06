interface CrestProps {
  className?: string;
}

/**
 * SVG re-creation of the ECWA crest (globe + gold cross on an open book).
 * Swap this for the official logo PNG/SVG in /public when available.
 */
export default function Crest({ className }: CrestProps) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="50" cy="50" r="48" fill="#0a1c52" stroke="#c9a23f" strokeWidth="2.5" />
      <circle cx="50" cy="50" r="40" fill="none" stroke="#e6c873" strokeWidth="1" />
      <circle cx="50" cy="46" r="20" fill="#102a78" />
      <path d="M30 46a20 20 0 0140 0" stroke="#3a5bbf" strokeWidth="1" fill="none" />
      <ellipse cx="50" cy="46" rx="8" ry="20" stroke="#3a5bbf" strokeWidth="1" fill="none" />
      <path d="M50 26v40M30 46h40" stroke="#3a5bbf" strokeWidth="1" />
      <rect x="47.5" y="38" width="5" height="16" rx="1" fill="#e6c873" />
      <rect x="44" y="42.5" width="12" height="4" rx="1" fill="#e6c873" />
      <text x="50" y="82" textAnchor="middle" fill="#e6c873" fontFamily="Georgia,serif" fontSize="15" fontWeight="700" letterSpacing="1">
        ECWA
      </text>
    </svg>
  );
}
