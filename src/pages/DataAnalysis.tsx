import ChartCard from "@/components/ChartCard";
import GlassCard from "@/components/GlassCard";

const DataAnalysis = () => (
  <div className="space-y-6">
    {/* Top: Two charts side by side */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <ChartCard
        title="巡检数据质量评分"
        height="350px"
        option={{
          radar: {
            indicator: [
              { name: "图像清晰度", max: 100 },
              { name: "数据完整性", max: 100 },
              { name: "定位精度", max: 100 },
              { name: "时效性", max: 100 },
              { name: "异常检出率", max: 100 },
              { name: "覆盖完整度", max: 100 },
            ],
            axisLine: { lineStyle: { color: "rgba(0,180,255,0.2)" } },
            splitLine: { lineStyle: { color: "rgba(0,180,255,0.1)" } },
            splitArea: { areaStyle: { color: ["rgba(0,180,255,0.02)","rgba(0,180,255,0.05)"] } },
          },
          series: [{
            type: "radar",
            data: [
              { value: [95,88,92,78,85,90], name: "本季度", areaStyle: { color: "rgba(0,180,255,0.15)" }, lineStyle: { color: "#00b4ff", width: 2 }, itemStyle: { color: "#00b4ff" } },
            ],
          }],
        }}
      />
      <ChartCard
        title="各区域异常检出数量"
        height="350px"
        option={{
          tooltip: { trigger: "axis" },
          xAxis: { type: "category", data: ["城区","工业区","河道","电力","交通","山区"], axisLine: { lineStyle: { color: "rgba(0,180,255,0.3)" } } },
          yAxis: { type: "value", splitLine: { lineStyle: { color: "rgba(0,180,255,0.1)" } } },
          series: [
            { name: "一级异常", type: "bar", stack: "total", data: [3,8,2,5,4,1], itemStyle: { color: "#ff6b6b" } },
            { name: "二级异常", type: "bar", stack: "total", data: [12,15,8,10,7,3], itemStyle: { color: "#ffd93d" } },
            { name: "三级异常", type: "bar", stack: "total", data: [25,30,15,20,12,8], itemStyle: { color: "#00b4ff" } },
          ],
        }}
      />
    </div>

    {/* Middle: Large trend chart */}
    <ChartCard
      title="月度数据采集量趋势"
      height="320px"
      option={{
        tooltip: { trigger: "axis" },
        legend: { data: ["图像(GB)","点云(GB)","视频(GB)"], textStyle: { color: "rgba(180,210,240,0.7)" } },
        xAxis: { type: "category", data: ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"], axisLine: { lineStyle: { color: "rgba(0,180,255,0.3)" } } },
        yAxis: { type: "value", name: "GB", splitLine: { lineStyle: { color: "rgba(0,180,255,0.1)" } } },
        series: [
          { name: "图像(GB)", type: "line", smooth: true, data: [120,150,180,200,230,260,280,310,290,320,350,380], lineStyle: { color: "#00b4ff", width: 2 }, itemStyle: { color: "#00b4ff" }, areaStyle: { color: { type: "linear", x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: "rgba(0,180,255,0.2)" },{ offset: 1, color: "transparent" }] } } },
          { name: "点云(GB)", type: "line", smooth: true, data: [80,95,110,130,150,170,190,210,200,220,240,260], lineStyle: { color: "#00e5a0", width: 2 }, itemStyle: { color: "#00e5a0" }, areaStyle: { color: { type: "linear", x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: "rgba(0,229,160,0.15)" },{ offset: 1, color: "transparent" }] } } },
          { name: "视频(GB)", type: "bar", data: [50,60,70,85,95,110,120,130,125,140,155,170], itemStyle: { color: "rgba(255,217,61,0.6)", borderRadius: [2,2,0,0] } },
        ],
      }}
    />

    {/* Bottom: Summary cards */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {[
        { label: "总数据量", value: "12.8 TB", sub: "本年度累计" },
        { label: "处理速度", value: "2.4 GB/h", sub: "较上月 +15%" },
        { label: "AI识别率", value: "97.3%", sub: "目标检测精度" },
        { label: "报告生成", value: "1,856", sub: "自动分析报告" },
      ].map((item, i) => (
        <GlassCard key={i} shimmer>
          <p className="text-xs text-muted-foreground font-body">{item.label}</p>
          <p className="stat-value text-2xl font-bold mt-1">{item.value}</p>
          <p className="text-xs text-muted-foreground mt-1">{item.sub}</p>
        </GlassCard>
      ))}
    </div>
  </div>
);

export default DataAnalysis;
