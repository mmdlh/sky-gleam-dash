import ChartCard from "@/components/ChartCard";
import DataTable from "@/components/DataTable";
import GlassCard from "@/components/GlassCard";
import StatusIndicator from "@/components/StatusIndicator";

const AirspaceManagement = () => (
  <div className="space-y-6">
    {/* Top: Airspace map + zones */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <GlassCard shimmer className="h-[360px] flex items-center justify-center">
        <div className="text-center">
          <div className="relative w-32 h-32 mx-auto mb-4">
            <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse-glow" />
            <div className="absolute inset-3 rounded-full border border-accent/20" />
            <div className="absolute inset-6 rounded-full border border-primary/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl">📡</span>
            </div>
          </div>
          <p className="font-display text-primary text-sm">空域态势感知</p>
          <p className="text-xs text-muted-foreground mt-1">实时监控 · 冲突检测 · 协调管理</p>
        </div>
      </GlassCard>
      <div className="space-y-4">
        <GlassCard>
          <h3 className="font-display text-sm font-semibold text-primary mb-3">空域区块状态</h3>
          <div className="space-y-2">
            <StatusIndicator status="online" label="A区 - 低空开放 (0-120m)" />
            <StatusIndicator status="online" label="B区 - 低空开放 (0-120m)" />
            <StatusIndicator status="warning" label="C区 - 受限空域 (需审批)" />
            <StatusIndicator status="error" label="D区 - 临时禁飞 (军事活动)" />
            <StatusIndicator status="online" label="E区 - 低空开放 (0-80m)" />
            <StatusIndicator status="warning" label="F区 - 气象限制 (大风)" />
          </div>
        </GlassCard>
        <GlassCard>
          <div className="grid grid-cols-3 gap-3 text-center">
            <div><p className="stat-value text-xl font-bold">6</p><p className="text-xs text-muted-foreground">管控区域</p></div>
            <div><p className="stat-value text-xl font-bold">4</p><p className="text-xs text-muted-foreground">开放区域</p></div>
            <div><p className="stat-value text-xl font-bold">2</p><p className="text-xs text-muted-foreground">限制区域</p></div>
          </div>
        </GlassCard>
      </div>
    </div>

    {/* Charts */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <ChartCard
        title="空域使用率"
        option={{
          tooltip: { trigger: "axis" },
          xAxis: { type: "category", data: ["A区","B区","C区","D区","E区","F区"], axisLine: { lineStyle: { color: "rgba(0,180,255,0.3)" } } },
          yAxis: { type: "value", max: 100, splitLine: { lineStyle: { color: "rgba(0,180,255,0.1)" } } },
          series: [{ type: "bar", data: [78,65,30,0,55,15], itemStyle: { color: (p: any) => p.value > 60 ? "#00b4ff" : p.value > 30 ? "#ffd93d" : "#ff6b6b", borderRadius: [4,4,0,0] } }],
        }}
      />
      <ChartCard
        title="飞行密度时段分布"
        option={{
          tooltip: { trigger: "axis" },
          xAxis: { type: "category", data: ["06","08","10","12","14","16","18","20"], axisLine: { lineStyle: { color: "rgba(0,180,255,0.3)" } } },
          yAxis: { type: "value", splitLine: { lineStyle: { color: "rgba(0,180,255,0.1)" } } },
          series: [{ type: "line", smooth: true, data: [5,25,40,30,45,50,35,10], lineStyle: { color: "#00b4ff", width: 2 }, areaStyle: { color: { type: "linear", x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: "rgba(0,180,255,0.3)" },{ offset: 1, color: "transparent" }] } }, itemStyle: { color: "#00b4ff" } }],
        }}
      />
      <ChartCard
        title="空域申请审批"
        option={{
          tooltip: { trigger: "item" },
          series: [{
            type: "pie", radius: ["45%","70%"],
            data: [
              { value: 65, name: "已批准", itemStyle: { color: "#00e5a0" } },
              { value: 20, name: "待审批", itemStyle: { color: "#ffd93d" } },
              { value: 10, name: "已拒绝", itemStyle: { color: "#ff6b6b" } },
              { value: 5, name: "已撤回", itemStyle: { color: "#666" } },
            ],
            label: { color: "rgba(180,210,240,0.8)", fontSize: 11 },
          }],
        }}
      />
    </div>

    {/* Table */}
    <DataTable
      title="空域审批记录"
      columns={[
        { key: "id", title: "申请ID" },
        { key: "zone", title: "空域" },
        { key: "alt", title: "高度(m)" },
        { key: "time", title: "时段" },
        { key: "purpose", title: "用途" },
        { key: "status", title: "状态" },
      ]}
      data={[
        { id: "AP-2024-156", zone: "C区", alt: "0-120", time: "09:00-12:00", purpose: "河道巡检", status: "✅ 已批准" },
        { id: "AP-2024-157", zone: "D区", alt: "0-80", time: "14:00-16:00", purpose: "电力巡线", status: "⏳ 待审批" },
        { id: "AP-2024-155", zone: "F区", alt: "0-100", time: "08:00-10:00", purpose: "山区测绘", status: "❌ 已拒绝" },
        { id: "AP-2024-154", zone: "A区", alt: "0-120", time: "全天", purpose: "常规巡检", status: "✅ 已批准" },
      ]}
    />
  </div>
);

export default AirspaceManagement;
