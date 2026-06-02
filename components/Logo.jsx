import Image from "next/image";

export default function Logo({ className = "h-12 w-[176px]", priority = false }) {
  return (
    <span
      className={`relative inline-flex shrink-0 overflow-hidden ${className}`}
    >
      <Image
        className="object-contain"
        src="/logo-light.png"
        alt="Vedadi Legal Logo"
        fill
        sizes="220px"
        priority={priority}
      />
    </span>
  );
}
