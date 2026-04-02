import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  shimmer?: boolean;
}

const GlassCard = ({ children, className = "", shimmer = false }: GlassCardProps) => (
  <div className={`glass-card p-5 ${shimmer ? "shimmer-border" : ""} ${className}`}>
    {children}
  </div>
);

export default GlassCard;
