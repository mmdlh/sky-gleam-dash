import ChartCard from "@/components/ChartCard";
import DataTable from "@/components/DataTable";
import GlassCard from "@/components/GlassCard";
import { Database, Cpu, Eye, FileText } from "lucide-react";

const DataAnalysis = () => (
  <div className="space-y-6">
    {/* Top: Two charts side by side */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <ChartCard
        title="巡检数据质量评分"
        height="350px"
        option={{
          tooltip: {},
          radar: {
            indicator: [
              { name: "图像清晰度", max: 100 },
              { name: "数据完整性", max: 100 },
              { name: "定位精度", max: 100 },
              { name: "时效性", max: 100 },
              { name: "异常检出率", max: 100 },
              { name: "覆盖完整度", max: 100 },
            ],
            shape: "polygon",
            splitNumber: 4,
            axisName: { color: "rgba(180,210,240,0.7)", fontSize: 11 },
            axisLine: { lineStyle: { color: "rgba(0,180,255,0.2)" } },
            splitLine: { lineStyle: { color: "rgba(0,180,255,0.1)" } },
            splitArea: { areaStyle: { color: ["rgba(0,180,255,0.02)","rgba(0,180,255,0.05)"] } },
          },
          series: [{
            type: "radar",
            data: [
              { value: [95,88,92,78,85,90], name: "本季度", areaStyle: { color: "rgba(0,180,255,0.15)" }, lineStyle: { color: "#00b4ff", width: 2 }, itemStyle: { color: "#00b4ff" } },
              { value: [88,82,85,72,80,84], name: "上季度", areaStyle: { color: "rgba(0,229,160,0.1)" }, lineStyle: { color: "#00e5a0", type: "dashed" }, itemStyle: { color: "#00e5a0" } },
            ],
          }],
        }}
      />
      <ChartCard
        title="各区域异常检出数量"
        height="350px"
        option={{
          tooltip: { trigger: "axis" },
          legend: { data: ["一级异常","二级异常","三级异常"], right: 10, top: 0 },
          grid: { top: 35, bottom: 25, left: 50, right: 15 },
          xAxis: { type: "category", data: ["城区","工业区","河道","电力","交通","山区"], axisLine: { lineStyle: { color: "rgba(0,180,255,0.3)" } } },
          yAxis: { type: "value", splitLine: { lineStyle: { color: "rgba(0,180,255,0.08)" } } },
          series: [
            { name: "一级异常", type: "bar", stack: "total", data: [3,8,2,5,4,1], itemStyle: { color: "#ff6b6b" } },
            { name: "二级异常", type: "bar", stack: "total", data: [12,15,8,10,7,3], itemStyle: { color: "#ffd93d" } },
            { name: "三级异常", type: "bar", stack: "total", data: [25,30,15,20,12,8], itemStyle: { color: "#00b4ff", borderRadius: [4,4,0,0] } },
          ],
        }}
      />
    </div>

    {/* Summary cards */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {[
        { icon: Database, label: "总数据量", value: "12.8 TB", sub: "本年度累计", color: "text-primary", bg: "bg-primary/10" },
        { icon: Cpu, label: "处理速度", value: "2.4 GB/h", sub: "较上月 +15%", color: "text-success", bg: "bg-success/10" },
        { icon: Eye, label: "AI识别率", value: "97.3%", sub: "目标检测精度", color: "text-warning", bg: "bg-warning/10" },
        { icon: FileText, label: "报告生成", value: "1,856", sub: "自动分析报告", color: "text-destructive", bg: "bg-destructive/10" },
      ].map((item, i) => (
        <GlassCard key={i} shimmer>
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${item.bg}`}><item.icon size={18} className={item.color} /></div>
            <div>
              <p className="text-xs text-muted-foreground font-body">{item.label}</p>
              <p className="stat-value text-xl font-bold">{item.value}</p>
              <p className="text-xs text-muted-foreground">{item.sub}</p>
            </div>
          </div>
        </GlassCard>
      ))}
    </div>

    {/* Large trend chart */}
    <ChartCard
      title="月度数据采集量趋势"
      height="320px"
      option={{
        tooltip: { trigger: "axis" },
        legend: { data: ["图像(GB)","点云(GB)","视频(GB)"], textStyle: { color: "rgba(180,210,240,0.7)" } },
        grid: { top: 35, bottom: 25, left: 50, right: 15 },
        xAxis: { type: "category", data: ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"], axisLine: { lineStyle: { color: "rgba(0,180,255,0.3)" } } },
        yAxis: { type: "value", name: "GB", splitLine: { lineStyle: { color: "rgba(0,180,255,0.08)" } } },
        series: [
          { name: "图像(GB)", type: "line", smooth: true, data: [120,150,180,200,230,260,280,310,290,320,350,380], lineStyle: { color: "#00b4ff", width: 2 }, itemStyle: { color: "#00b4ff" }, areaStyle: { color: { type: "linear", x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: "rgba(0,180,255,0.2)" },{ offset: 1, color: "transparent" }] } } },
          { name: "点云(GB)", type: "line", smooth: true, data: [80,95,110,130,150,170,190,210,200,220,240,260], lineStyle: { color: "#00e5a0", width: 2 }, itemStyle: { color: "#00e5a0" }, areaStyle: { color: { type: "linear", x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: "rgba(0,229,160,0.15)" },{ offset: 1, color: "transparent" }] } } },
          { name: "视频(GB)", type: "bar", data: [50,60,70,85,95,110,120,130,125,140,155,170], itemStyle: { color: "rgba(255,217,61,0.6)", borderRadius: [2,2,0,0] } },
        ],
      }}
    />

    {/* Bottom: Heatmap-style chart + AI analysis table */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <ChartCard
        title="各航线数据完整度评分"
        height="280px"
        option={{
          tooltip: { trigger: "axis" },
          grid: { top: 15, bottom: 25, left: 75, right: 15 },
          yAxis: { type: "category", data: ["城区A线","工业B线","河道C线","电力D线","交通E线","水库G线"], axisLine: { lineStyle: { color: "rgba(0,180,255,0.3)" } } },
          xAxis: { type: "value", max: 100, splitLine: { lineStyle: { color: "rgba(0,180,255,0.08)" } } },
          series: [
            { type: "bar", data: [96,92,78,98,85,88], itemStyle: { color: (p: any) => p.value >= 90 ? "#00e5a0" : p.value >= 80 ? "#00b4ff" : "#ffd93d", borderRadius: [0,4,4,0] }, barWidth: 16, label: { show: true, position: "right", color: "rgba(180,210,240,0.8)", fontSize: 11, formatter: "{c}%" } },
          ],
        }}
      />
      <DataTable
        title="AI分析报告（最近）"
        columns={[
          { key: "id", title: "报告ID" },
          { key: "route", title: "航线" },
          { key: "type", title: "分析类型" },
          { key: "findings", title: "发现数" },
          { key: "time", title: "生成时间" },
        ]}
        data={[
          { id: "RPT-1856", route: "城区A线", type: "裂缝检测", findings: "3处", time: "14:30" },
          { id: "RPT-1855", route: "电力D线", type: "设备识别", findings: "12处", time: "13:20" },
          { id: "RPT-1854", route: "河道C线", type: "水质分析", findings: "2处", time: "11:45" },
          { id: "RPT-1853", route: "工业B线", type: "安全隐患", findings: "5处", time: "10:10" },
          { id: "RPT-1852", route: "交通E线", type: "交通流量", findings: "—", time: "09:00" },
          { id: "RPT-1851", route: "水库G线", type: "堤坝检测", findings: "1处", time: "昨日" },
        ]}
      />
    </div>
  </div>
);

export default DataAnalysis;
