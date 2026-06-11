import Image from "next/image";

interface CrestProps {
  className?: string;
}

export default function Crest({ className }: CrestProps) {
  return (
    <div className={className} style={{ position: "relative", flexShrink: 0 }}>
      <Image
        src="/egcc-logo.png"
        alt="ECWA Gospel Church Pyakasa"
        fill
        style={{ objectFit: "contain" }}
        priority
      />
    </div>
  );
}
