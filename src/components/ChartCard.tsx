import ReactEChartsCore from "echarts-for-react";
import GlassCard from "./GlassCard";
import type { EChartsOption } from "echarts";

interface ChartCardProps {
  title: string;
  option: EChartsOption;
  height?: string;
  className?: string;
}

const WHITE70 = "rgba(255,255,255,0.7)";

const patchAxis = (axis: any) => {
  if (!axis) return axis;
  if (Array.isArray(axis)) return axis.map(patchAxis);
  return {
    ...axis,
    axisLabel: { color: WHITE70, ...axis.axisLabel },
    nameTextStyle: { color: WHITE70, ...axis.nameTextStyle },
  };
};

const buildOption = (option: EChartsOption): EChartsOption => ({
  backgroundColor: "transparent",
  textStyle: { color: WHITE70, fontFamily: "Rajdhani" },
  ...option,
  legend: {
    ...(option.legend as any),
    textStyle: { color: WHITE70, ...(option.legend as any)?.textStyle },
  },
  ...(option.xAxis ? { xAxis: patchAxis(option.xAxis) } : {}),
  ...(option.yAxis ? { yAxis: patchAxis(option.yAxis) } : {}),
  ...(option.radar ? {
    radar: {
      ...(option.radar as any),
      axisName: { color: WHITE70, ...(option.radar as any).axisName },
    },
  } : {}),
  ...(option.series ? {
    series: (Array.isArray(option.series) ? option.series : [option.series]).map((s: any) => ({
      ...s,
      ...(s.type === "pie" ? { label: { color: WHITE70, ...s.label } } : {}),
    })),
  } : {}),
});

const ChartCard = ({ title, option, height = "300px", className = "" }: ChartCardProps) => (
  <GlassCard className={className}>
    <h3 className="font-display text-sm font-semibold text-primary mb-3">{title}</h3>
    <ReactEChartsCore
      option={buildOption(option)}
      style={{ height }}
      opts={{ renderer: "canvas" }}
    />
  </GlassCard>
);

export default ChartCard;
