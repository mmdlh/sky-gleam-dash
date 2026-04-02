import ChartCard from "@/components/ChartCard";
import DataTable from "@/components/DataTable";
import GlassCard from "@/components/GlassCard";
import StatCard from "@/components/StatCard";
import StatusIndicator from "@/components/StatusIndicator";
import { Plane, Battery, Wifi, Wrench, ThermometerSun, Signal } from "lucide-react";

const DroneManagement = () => (
  <div className="space-y-6">
    {/* Top: Table first */}
    <DataTable
      title="无人机清单"
      columns={[
        { key: "id", title: "编号" },
        { key: "model", title: "型号" },
        { key: "battery", title: "电量" },
        { key: "hours", title: "飞行时长(h)" },
        { key: "missions", title: "总任务" },
        { key: "location", title: "位置" },
        { key: "status", title: "状态" },
      ]}
      data={[
        { id: "UAV-001", model: "DJI M300 RTK", battery: "87%", hours: 1245, missions: 356, location: "城区A", status: "🟢 在线" },
        { id: "UAV-002", model: "DJI M300 RTK", battery: "92%", hours: 980, missions: 298, location: "基站", status: "🔵 待命" },
        { id: "UAV-003", model: "DJI M30T", battery: "45%", hours: 756, missions: 215, location: "工业B", status: "🟡 低电量" },
        { id: "UAV-004", model: "Autel EVO II", battery: "—", hours: 1102, missions: 310, location: "维修间", status: "🔴 维修" },
        { id: "UAV-005", model: "DJI M30T", battery: "78%", hours: 432, missions: 128, location: "基站", status: "🔵 待命" },
        { id: "UAV-006", model: "DJI Mini 3 Pro", battery: "—", hours: 210, missions: 85, location: "仓库", status: "⚫ 离线" },
        { id: "UAV-007", model: "DJI M300 RTK", battery: "95%", hours: 560, missions: 167, location: "电力D", status: "🟢 在线" },
        { id: "UAV-008", model: "Autel EVO II", battery: "68%", hours: 890, missions: 245, location: "河道C", status: "🟢 在线" },
      ]}
    />

    {/* Stats + Pie */}
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
      <div className="lg:col-span-2 grid grid-cols-2 gap-4">
        <StatCard title="总数量" value={24} icon={Plane} />
        <StatCard title="在线数" value={18} icon={Wifi} trend="75%" trendUp />
        <StatCard title="平均电量" value="76%" icon={Battery} />
        <StatCard title="待维修" value={3} icon={Wrench} trend="1 紧急" />
      </div>
      <div className="lg:col-span-3">
        <ChartCard
          title="无人机型号与状态分布"
          option={{
            tooltip: { trigger: "axis" },
            legend: { data: ["在线","待命","维修","离线"], right: 10, top: 0 },
            grid: { top: 35, bottom: 25, left: 50, right: 15 },
            xAxis: { type: "category", data: ["DJI M300","DJI M30T","Autel EVO","DJI Mini","其他"], axisLine: { lineStyle: { color: "rgba(0,180,255,0.3)" } } },
            yAxis: { type: "value", splitLine: { lineStyle: { color: "rgba(0,180,255,0.08)" } } },
            series: [
              { name: "在线", type: "bar", stack: "s", data: [6,3,3,0,2], itemStyle: { color: "#00e5a0" } },
              { name: "待命", type: "bar", stack: "s", data: [2,2,1,1,1], itemStyle: { color: "#00b4ff" } },
              { name: "维修", type: "bar", stack: "s", data: [1,0,1,0,1], itemStyle: { color: "#ffd93d" } },
              { name: "离线", type: "bar", stack: "s", data: [0,1,0,1,0], itemStyle: { color: "#ff6b6b" } },
            ],
          }}
        />
      </div>
    </div>

    {/* Charts row 2 */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <ChartCard
        title="月度飞行时长统计"
        className="lg:col-span-2"
        option={{
          tooltip: { trigger: "axis" },
          legend: { data: ["M300","M30T","其他"], right: 10, top: 0 },
          grid: { top: 35, bottom: 25, left: 45, right: 15 },
          xAxis: { type: "category", data: ["1月","2月","3月","4月","5月","6月"], axisLine: { lineStyle: { color: "rgba(0,180,255,0.3)" } } },
          yAxis: { type: "value", name: "小时", splitLine: { lineStyle: { color: "rgba(0,180,255,0.08)" } } },
          series: [
            { name: "M300", type: "bar", stack: "a", data: [420,380,450,510,480,520], itemStyle: { color: "#00b4ff", borderRadius: [0,0,0,0] } },
            { name: "M30T", type: "bar", stack: "a", data: [180,200,170,220,210,230], itemStyle: { color: "#00e5a0" } },
            { name: "其他", type: "bar", stack: "a", data: [100,90,110,130,120,140], itemStyle: { color: "#ffd93d", borderRadius: [4,4,0,0] } },
          ],
        }}
      />
      <ChartCard
        title="电池健康度趋势"
        option={{
          tooltip: { trigger: "axis" },
          grid: { top: 15, bottom: 25, left: 40, right: 10 },
          xAxis: { type: "category", data: ["W1","W2","W3","W4","W5","W6","W7","W8"], axisLine: { lineStyle: { color: "rgba(0,180,255,0.3)" } } },
          yAxis: { type: "value", min: 70, max: 100, splitLine: { lineStyle: { color: "rgba(0,180,255,0.08)" } } },
          series: [
            { name: "平均", type: "line", smooth: true, data: [95,94,93,92,91,90,89,88], lineStyle: { color: "#00e5a0" }, itemStyle: { color: "#00e5a0" }, areaStyle: { color: { type: "linear", x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: "rgba(0,229,160,0.2)" },{ offset: 1, color: "transparent" }] } } },
            { name: "最低", type: "line", smooth: true, data: [88,86,85,83,80,78,76,74], lineStyle: { color: "#ff6b6b", type: "dashed" }, itemStyle: { color: "#ff6b6b" } },
          ],
        }}
      />
    </div>

    {/* Bottom: Device detail + maintenance */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <GlassCard>
        <h3 className="font-display text-sm font-semibold text-primary mb-4">设备实时监测</h3>
        <div className="space-y-3">
          {[
            { name: "UAV-001", temp: "42°C", signal: "98%", altitude: "120m", speed: "8.5m/s", status: "online" as const },
            { name: "UAV-007", temp: "38°C", signal: "95%", altitude: "85m", speed: "6.2m/s", status: "online" as const },
            { name: "UAV-008", temp: "45°C", signal: "82%", altitude: "60m", speed: "9.1m/s", status: "online" as const },
            { name: "UAV-003", temp: "35°C", signal: "76%", altitude: "45m", speed: "4.0m/s", status: "warning" as const },
          ].map((d, i) => (
            <div key={i} className="flex items-center justify-between p-2.5 rounded-lg bg-primary/5">
              <div className="flex items-center gap-2">
                <StatusIndicator status={d.status} label={d.name} />
              </div>
              <div className="flex gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><ThermometerSun size={12} />{d.temp}</span>
                <span className="flex items-center gap-1"><Signal size={12} />{d.signal}</span>
                <span>Alt {d.altitude}</span>
                <span>{d.speed}</span>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
      <GlassCard>
        <h3 className="font-display text-sm font-semibold text-primary mb-4">维护保养计划</h3>
        <div className="space-y-2.5 text-sm font-body">
          {[
            { drone: "UAV-004", task: "电机更换", due: "今日", urgent: true },
            { drone: "UAV-003", task: "电池更换", due: "明日", urgent: true },
            { drone: "UAV-006", task: "全面检修", due: "3日后", urgent: false },
            { drone: "UAV-001", task: "定期保养", due: "5日后", urgent: false },
            { drone: "UAV-002", task: "固件升级", due: "7日后", urgent: false },
            { drone: "UAV-008", task: "镜头校准", due: "10日后", urgent: false },
          ].map((item, i) => (
            <div key={i} className={`flex justify-between items-center p-2 rounded-lg ${item.urgent ? "bg-destructive/10" : "bg-primary/5"}`}>
              <div>
                <span className="text-foreground/80 font-medium">{item.drone}</span>
                <span className="text-muted-foreground ml-2">{item.task}</span>
              </div>
              <span className={`text-xs px-2 py-0.5 rounded ${item.urgent ? "bg-destructive/20 text-destructive" : "bg-primary/20 text-primary"}`}>{item.due}</span>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  </div>
);

export default DroneManagement;
