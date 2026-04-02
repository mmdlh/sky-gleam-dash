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
  textStyle: { color: "rgba(255,255,255,0.7)", fontFamily: "Rajdhani" },
  legend: { textStyle: { color: "rgba(255,255,255,0.7)" } },
  xAxis: { axisLabel: { color: "rgba(255,255,255,0.7)" }, nameTextStyle: { color: "rgba(255,255,255,0.7)" } },
  yAxis: { axisLabel: { color: "rgba(255,255,255,0.7)" }, nameTextStyle: { color: "rgba(255,255,255,0.7)" } },
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
