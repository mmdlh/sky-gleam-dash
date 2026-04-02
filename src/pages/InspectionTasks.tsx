import ChartCard from "@/components/ChartCard";
import DataTable from "@/components/DataTable";
import GlassCard from "@/components/GlassCard";
import StatusIndicator from "@/components/StatusIndicator";

const InspectionTasks = () => (
  <div className="space-y-6">
    {/* Top: Radar + Status panel */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <ChartCard
        title="巡检能力评估"
        className="lg:col-span-1"
        option={{
          radar: {
            indicator: [
              { name: "覆盖率", max: 100 },
              { name: "准时率", max: 100 },
              { name: "质量分", max: 100 },
              { name: "效率", max: 100 },
              { name: "安全性", max: 100 },
            ],
            axisLine: { lineStyle: { color: "rgba(0,180,255,0.2)" } },
            splitLine: { lineStyle: { color: "rgba(0,180,255,0.1)" } },
          },
          series: [{
            type: "radar",
            data: [
              { value: [92,88,95,85,97], name: "本月", areaStyle: { color: "rgba(0,180,255,0.2)" }, lineStyle: { color: "#00b4ff" }, itemStyle: { color: "#00b4ff" } },
              { value: [85,80,88,78,90], name: "上月", areaStyle: { color: "rgba(0,229,160,0.1)" }, lineStyle: { color: "#00e5a0", type: "dashed" }, itemStyle: { color: "#00e5a0" } },
            ],
          }],
        }}
      />
      <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
        <GlassCard shimmer>
          <h3 className="font-display text-sm font-semibold text-primary mb-3">进行中任务</h3>
          <div className="space-y-2">
            <StatusIndicator status="online" label="TX-0425 城区A线巡检" />
            <StatusIndicator status="online" label="TX-0426 电力D线巡检" />
            <StatusIndicator status="warning" label="TX-0427 河道C线 (延迟)" />
          </div>
          <div className="mt-4 pt-3 border-t border-border/30">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">今日进度</span>
              <span className="stat-value font-bold">67%</span>
            </div>
            <div className="mt-2 h-2 rounded-full bg-muted overflow-hidden">
              <div className="h-full rounded-full bg-gradient-to-r from-primary to-accent" style={{ width: "67%" }} />
            </div>
          </div>
        </GlassCard>
        <GlassCard shimmer>
          <h3 className="font-display text-sm font-semibold text-primary mb-3">任务统计</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 rounded-lg bg-primary/5">
              <p className="stat-value text-2xl font-bold">342</p>
              <p className="text-xs text-muted-foreground">本月完成</p>
            </div>
            <div className="text-center p-3 rounded-lg bg-primary/5">
              <p className="stat-value text-2xl font-bold">12</p>
              <p className="text-xs text-muted-foreground">待执行</p>
            </div>
            <div className="text-center p-3 rounded-lg bg-primary/5">
              <p className="stat-value text-2xl font-bold">3</p>
              <p className="text-xs text-muted-foreground">异常中</p>
            </div>
            <div className="text-center p-3 rounded-lg bg-primary/5">
              <p className="stat-value text-2xl font-bold">95.2%</p>
              <p className="text-xs text-muted-foreground">完成率</p>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>

    {/* Charts */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <ChartCard
        title="每日任务完成量"
        option={{
          tooltip: { trigger: "axis" },
          xAxis: { type: "category", data: ["周一","周二","周三","周四","周五","周六","周日"], axisLine: { lineStyle: { color: "rgba(0,180,255,0.3)" } } },
          yAxis: { type: "value", splitLine: { lineStyle: { color: "rgba(0,180,255,0.1)" } } },
          series: [
            { type: "bar", data: [15,18,22,20,25,12,8], itemStyle: { color: { type: "linear", x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: "#00b4ff" },{ offset: 1, color: "#0066cc" }] }, borderRadius: [4,4,0,0] } },
            { type: "line", data: [15,18,22,20,25,12,8], smooth: true, lineStyle: { color: "#00e5a0", width: 2 }, itemStyle: { color: "#00e5a0" }, symbol: "circle", symbolSize: 6 },
          ],
        }}
      />
      <ChartCard
        title="任务类型占比"
        option={{
          tooltip: { trigger: "item" },
          series: [{
            type: "pie", radius: "65%",
            data: [
              { value: 40, name: "常规巡检", itemStyle: { color: "#00b4ff" } },
              { value: 25, name: "专项检查", itemStyle: { color: "#00e5a0" } },
              { value: 20, name: "应急响应", itemStyle: { color: "#ff6b6b" } },
              { value: 15, name: "数据采集", itemStyle: { color: "#ffd93d" } },
            ],
            label: { color: "rgba(180,210,240,0.8)" },
          }],
        }}
      />
    </div>

    {/* Table */}
    <DataTable
      title="任务记录"
      columns={[
        { key: "id", title: "任务ID" },
        { key: "type", title: "类型" },
        { key: "route", title: "航线" },
        { key: "drone", title: "执行设备" },
        { key: "start", title: "开始时间" },
        { key: "duration", title: "耗时" },
        { key: "status", title: "状态" },
      ]}
      data={[
        { id: "TX-0425", type: "常规巡检", route: "城区A线", drone: "UAV-001", start: "08:30", duration: "45min", status: "🔄 进行中" },
        { id: "TX-0424", type: "专项检查", route: "电力D线", drone: "UAV-003", start: "07:00", duration: "1h20min", status: "✅ 完成" },
        { id: "TX-0423", type: "应急响应", route: "河道C线", drone: "UAV-005", start: "昨日 16:00", duration: "35min", status: "⚠️ 异常" },
        { id: "TX-0422", type: "数据采集", route: "工业B线", drone: "UAV-002", start: "昨日 14:00", duration: "2h", status: "✅ 完成" },
      ]}
    />
  </div>
);

export default InspectionTasks;
