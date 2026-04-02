import ChartCard from "@/components/ChartCard";
import DataTable from "@/components/DataTable";
import GlassCard from "@/components/GlassCard";
import StatusIndicator from "@/components/StatusIndicator";

const RouteManagement = () => (
  <div className="space-y-6">
    {/* Top: Map placeholder + route stats */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2">
        <GlassCard shimmer className="h-[320px] flex items-center justify-center">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center animate-pulse-glow">
              <span className="text-4xl">🗺️</span>
            </div>
            <p className="font-display text-primary text-sm">航线地图可视化</p>
            <p className="text-xs text-muted-foreground mt-1">56 条活跃航线 · 12 个巡检区域</p>
          </div>
        </GlassCard>
      </div>
      <div className="space-y-4">
        <GlassCard>
          <h3 className="font-display text-sm font-semibold text-primary mb-3">航线状态</h3>
          <div className="space-y-2.5">
            <StatusIndicator status="online" label="城区A线 - 运行中" />
            <StatusIndicator status="online" label="工业B线 - 运行中" />
            <StatusIndicator status="warning" label="河道C线 - 待审批" />
            <StatusIndicator status="offline" label="山区F线 - 已关闭" />
            <StatusIndicator status="online" label="电力D线 - 运行中" />
          </div>
        </GlassCard>
        <GlassCard>
          <h3 className="font-display text-sm font-semibold text-primary mb-2">航线概况</h3>
          <div className="grid grid-cols-2 gap-3 text-center">
            <div><p className="stat-value text-2xl font-bold">56</p><p className="text-xs text-muted-foreground">总航线</p></div>
            <div><p className="stat-value text-2xl font-bold">1,240</p><p className="text-xs text-muted-foreground">总里程(km)</p></div>
            <div><p className="stat-value text-2xl font-bold">98.5%</p><p className="text-xs text-muted-foreground">完成率</p></div>
            <div><p className="stat-value text-2xl font-bold">12</p><p className="text-xs text-muted-foreground">覆盖区域</p></div>
          </div>
        </GlassCard>
      </div>
    </div>

    {/* Charts */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <ChartCard
        title="航线使用频率"
        option={{
          tooltip: { trigger: "axis" },
          xAxis: { type: "category", data: ["城区A","工业B","河道C","电力D","交通E","山区F"], axisLine: { lineStyle: { color: "rgba(0,180,255,0.3)" } } },
          yAxis: { type: "value", splitLine: { lineStyle: { color: "rgba(0,180,255,0.1)" } } },
          series: [{ type: "bar", data: [85,72,45,90,60,30], itemStyle: { color: { type: "linear", x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: "#00b4ff" },{ offset: 1, color: "#0055aa" }] }, borderRadius: [4,4,0,0] } }],
        }}
      />
      <ChartCard
        title="航线里程分布"
        option={{
          tooltip: { trigger: "item" },
          radar: { indicator: [{ name: "城区", max: 100 },{ name: "工业", max: 100 },{ name: "河道", max: 100 },{ name: "电力", max: 100 },{ name: "交通", max: 100 },{ name: "山区", max: 100 }], axisLine: { lineStyle: { color: "rgba(0,180,255,0.2)" } }, splitLine: { lineStyle: { color: "rgba(0,180,255,0.1)" } } },
          series: [{ type: "radar", data: [{ value: [85,70,55,92,65,40], name: "里程(km)", areaStyle: { color: "rgba(0,180,255,0.15)" }, lineStyle: { color: "#00b4ff" }, itemStyle: { color: "#00b4ff" } }] }],
        }}
      />
    </div>

    {/* Table */}
    <DataTable
      title="航线详情列表"
      columns={[
        { key: "name", title: "航线名称" },
        { key: "length", title: "长度(km)" },
        { key: "points", title: "巡检点" },
        { key: "freq", title: "频率" },
        { key: "status", title: "状态" },
      ]}
      data={[
        { name: "城区A线", length: "28.5", points: 12, freq: "每日", status: "🟢 运行中" },
        { name: "工业B线", length: "35.2", points: 18, freq: "每日", status: "🟢 运行中" },
        { name: "河道C线", length: "22.8", points: 8, freq: "每周", status: "🟡 待审批" },
        { name: "电力D线", length: "41.0", points: 24, freq: "每日", status: "🟢 运行中" },
        { name: "交通E线", length: "18.6", points: 10, freq: "每周", status: "🟢 运行中" },
        { name: "山区F线", length: "55.3", points: 6, freq: "每月", status: "⚫ 已关闭" },
      ]}
    />
  </div>
);

export default RouteManagement;
