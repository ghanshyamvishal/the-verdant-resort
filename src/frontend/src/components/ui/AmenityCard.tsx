import type { LucideIcon } from "lucide-react";

interface AmenityCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function AmenityCard({
  icon: Icon,
  title,
  description,
}: AmenityCardProps) {
  return (
    <div className="card-3d card-shimmer flex gap-4 p-5 rounded-resort-lg group">
      <div
        className="icon-glow-ring w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-smooth group-hover:scale-110"
        style={{ backgroundColor: "rgba(45,90,39,0.10)" }}
      >
        <Icon size={20} style={{ color: "var(--color-primary)" }} />
      </div>
      <div className="min-w-0">
        <h4
          className="font-heading font-semibold text-base mb-1"
          style={{ color: "var(--color-text-primary)" }}
        >
          {title}
        </h4>
        <p
          className="font-body text-sm leading-relaxed"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
