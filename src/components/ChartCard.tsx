import ReactEChartsCore from "echarts-for-react";
import GlassCard from "./GlassCard";
import type { EChartsOption } from "echarts";

interface ChartCardProps {
  title: string;
  option: EChartsOption;
  height?: string;
  className?: string;
}

const baseTheme = {
  backgroundColor: "transparent",
  textStyle: { color: "rgba(200,225,255,0.9)", fontFamily: "Rajdhani" },
  legend: { textStyle: { color: "rgba(200,225,255,0.85)" } },
};

const ChartCard = ({ title, option, height = "300px", className = "" }: ChartCardProps) => (
  <GlassCard className={className}>
    <h3 className="font-display text-sm font-semibold text-primary mb-3">{title}</h3>
    <ReactEChartsCore
      option={{ ...baseTheme, ...option }}
      style={{ height }}
      opts={{ renderer: "canvas" }}
    />
  </GlassCard>
);

export default ChartCard;
