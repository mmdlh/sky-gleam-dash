import ReactEChartsCore from "echarts-for-react";
import GlassCard from "./GlassCard";
import type { EChartsOption } from "echarts";

interface ChartCardProps {
  title: string;
  option: EChartsOption;
  height?: string;
  className?: string;
}

const AXIS_LABEL = { color: "rgba(255,255,255,0.7)" };
const AXIS_NAME = { color: "rgba(255,255,255,0.7)" };

const injectAxisColors = (opt: EChartsOption): EChartsOption => {
  const patch = (axis: any) => {
    if (!axis) return axis;
    if (Array.isArray(axis)) return axis.map(patch);
    return {
      ...axis,
      axisLabel: { ...AXIS_LABEL, ...axis.axisLabel },
      nameTextStyle: { ...AXIS_NAME, ...axis.nameTextStyle },
    };
  };
  return {
    ...opt,
    ...(opt.xAxis ? { xAxis: patch(opt.xAxis) } : {}),
    ...(opt.yAxis ? { yAxis: patch(opt.yAxis) } : {}),
    ...(opt.radar ? {
      radar: {
        ...(opt.radar as any),
        axisName: { ...AXIS_LABEL, ...(opt.radar as any).axisName },
      },
    } : {}),
  };
};

const baseTheme = {
  backgroundColor: "transparent",
  textStyle: { color: "rgba(255,255,255,0.7)", fontFamily: "Rajdhani" },
  legend: { textStyle: { color: "rgba(255,255,255,0.7)" } },
};

const ChartCard = ({ title, option, height = "300px", className = "" }: ChartCardProps) => (
  <GlassCard className={className}>
    <h3 className="font-display text-sm font-semibold text-primary mb-3">{title}</h3>
    <ReactEChartsCore
      option={{ ...baseTheme, ...injectAxisColors(option) }}
      style={{ height }}
      opts={{ renderer: "canvas" }}
    />
  </GlassCard>
);

export default ChartCard;
