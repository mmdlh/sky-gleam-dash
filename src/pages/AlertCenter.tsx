import ChartCard from "@/components/ChartCard";
import DataTable from "@/components/DataTable";
import GlassCard from "@/components/GlassCard";
import StatusIndicator from "@/components/StatusIndicator";

const AlertCenter = () => (
  <div className="space-y-6">
    {/* Top: Alert list + live status */}
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
      <div className="lg:col-span-3">
        <GlassCard shimmer>
          <h3 className="font-display text-sm font-semibold text-destructive mb-4">⚡ 实时预警</h3>
          <div className="space-y-3">
            {[
              { status: "error" as const, label: "UAV-004 信号丢失 — 工业B区 15:32", level: "一级" },
              { status: "warning" as const, label: "UAV-003 电量低于20% — 河道C区 15:28", level: "二级" },
              { status: "warning" as const, label: "城区A线偏航预警 — 偏离50m 15:15", level: "二级" },
              { status: "error" as const, label: "气象预警：6级风 — 山区F区 14:50", level: "一级" },
              { status: "warning" as const, label: "空域冲突预警 — D区与民航重叠 14:30", level: "三级" },
            ].map((a, i) => (
              <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                <StatusIndicator status={a.status} label={a.label} />
                <span className={`text-xs px-2 py-0.5 rounded font-display ${a.level === "一级" ? "bg-destructive/20 text-destructive" : a.level === "二级" ? "bg-warning/20 text-warning" : "bg-primary/20 text-primary"}`}>
                  {a.level}
                </span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
      <div className="lg:col-span-2 space-y-4">
        <GlassCard>
          <h3 className="font-display text-sm font-semibold text-primary mb-3">预警统计</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="text-center p-3 rounded-lg bg-destructive/10">
              <p className="text-2xl font-display font-bold text-destructive">5</p>
              <p className="text-xs text-muted-foreground">一级预警</p>
            </div>
            <div className="text-center p-3 rounded-lg bg-warning/10">
              <p className="text-2xl font-display font-bold text-warning">12</p>
              <p className="text-xs text-muted-foreground">二级预警</p>
            </div>
            <div className="text-center p-3 rounded-lg bg-primary/10">
              <p className="text-2xl font-display font-bold text-primary">28</p>
              <p className="text-xs text-muted-foreground">三级预警</p>
            </div>
            <div className="text-center p-3 rounded-lg bg-success/10">
              <p className="text-2xl font-display font-bold text-success">89%</p>
              <p className="text-xs text-muted-foreground">处理率</p>
            </div>
          </div>
        </GlassCard>
        <GlassCard>
          <h3 className="font-display text-sm font-semibold text-primary mb-3">处理时效</h3>
          <div className="space-y-2">
            {[
              { label: "一级预警", time: "< 5min", pct: 95 },
              { label: "二级预警", time: "< 15min", pct: 88 },
              { label: "三级预警", time: "< 1h", pct: 92 },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-foreground/80">{item.label}</span>
                  <span className="text-muted-foreground">{item.time} ({item.pct}%)</span>
                </div>
                <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-primary to-accent" style={{ width: `${item.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>

    {/* Charts */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <ChartCard
        title="预警趋势"
        option={{
          tooltip: { trigger: "axis" },
          xAxis: { type: "category", data: ["W1","W2","W3","W4","W5","W6","W7","W8"], axisLine: { lineStyle: { color: "rgba(0,180,255,0.3)" } } },
          yAxis: { type: "value", splitLine: { lineStyle: { color: "rgba(0,180,255,0.1)" } } },
          series: [
            { name: "一级", type: "line", data: [2,3,1,4,2,5,3,2], lineStyle: { color: "#ff6b6b" }, itemStyle: { color: "#ff6b6b" } },
            { name: "二级", type: "line", data: [5,8,6,10,7,12,9,8], lineStyle: { color: "#ffd93d" }, itemStyle: { color: "#ffd93d" } },
            { name: "三级", type: "line", data: [12,15,10,18,14,20,16,14], lineStyle: { color: "#00b4ff" }, itemStyle: { color: "#00b4ff" } },
          ],
        }}
      />
      <ChartCard
        title="预警类型分布"
        option={{
          tooltip: { trigger: "item" },
          series: [{
            type: "pie", radius: ["40%","70%"],
            data: [
              { value: 30, name: "设备故障", itemStyle: { color: "#ff6b6b" } },
              { value: 25, name: "气象预警", itemStyle: { color: "#ffd93d" } },
              { value: 20, name: "偏航预警", itemStyle: { color: "#00b4ff" } },
              { value: 15, name: "空域冲突", itemStyle: { color: "#00e5a0" } },
              { value: 10, name: "其他", itemStyle: { color: "#a78bfa" } },
            ],
            label: { color: "rgba(180,210,240,0.8)" },
          }],
        }}
      />
    </div>

    {/* Table */}
    <DataTable
      title="预警处理记录"
      columns={[
        { key: "id", title: "编号" },
        { key: "type", title: "类型" },
        { key: "level", title: "级别" },
        { key: "desc", title: "描述" },
        { key: "time", title: "时间" },
        { key: "handler", title: "处理人" },
        { key: "status", title: "状态" },
      ]}
      data={[
        { id: "ALT-089", type: "设备故障", level: "🔴 一级", desc: "UAV-004 通信中断", time: "15:32", handler: "张工", status: "🔄 处理中" },
        { id: "ALT-088", type: "气象", level: "🔴 一级", desc: "6级风预警", time: "14:50", handler: "系统", status: "📢 已通知" },
        { id: "ALT-087", type: "电量", level: "🟡 二级", desc: "UAV-003 低电量", time: "15:28", handler: "李工", status: "✅ 已处理" },
        { id: "ALT-086", type: "偏航", level: "🟡 二级", desc: "城区A线偏航50m", time: "15:15", handler: "系统", status: "🔄 纠偏中" },
      ]}
    />
  </div>
);

export default AlertCenter;
