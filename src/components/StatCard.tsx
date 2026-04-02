import { LucideIcon } from "lucide-react";
import GlassCard from "./GlassCard";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  trendUp?: boolean;
}

const StatCard = ({ title, value, icon: Icon, trend, trendUp }: StatCardProps) => (
  <GlassCard shimmer>
    <div className="flex items-start justify-between">
      <div>
        <p className="text-sm font-body text-foreground/70 mb-1">{title}</p>
        <p className="stat-value text-3xl font-bold">{value}</p>
        {trend && (
          <p className={`text-xs mt-1 font-body ${trendUp ? "text-success" : "text-destructive"}`}>
            {trendUp ? "↑" : "↓"} {trend}
          </p>
        )}
      </div>
      <div className="p-2.5 rounded-lg bg-primary/10">
        <Icon size={22} className="text-primary" />
      </div>
    </div>
  </GlassCard>
);

export default StatCard;
