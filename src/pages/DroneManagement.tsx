import ChartCard from "@/components/ChartCard";
import DataTable from "@/components/DataTable";
import GlassCard from "@/components/GlassCard";
import StatCard from "@/components/StatCard";
import { Plane, Battery, Wifi, Wrench } from "lucide-react";

const DroneManagement = () => (
  <div className="space-y-6">
    {/* Top: Table first (not stats) */}
    <DataTable
      title="无人机清单"
      columns={[
        { key: "id", title: "编号" },
        { key: "model", title: "型号" },
        { key: "battery", title: "电量" },
        { key: "hours", title: "飞行时长(h)" },
        { key: "location", title: "位置" },
        { key: "status", title: "状态" },
      ]}
      data={[
        { id: "UAV-001", model: "DJI M300 RTK", battery: "87%", hours: 1245, location: "城区A", status: "🟢 在线" },
        { id: "UAV-002", model: "DJI M300 RTK", battery: "92%", hours: 980, location: "基站", status: "🔵 待命" },
        { id: "UAV-003", model: "DJI M30T", battery: "45%", hours: 756, location: "工业B", status: "🟡 低电量" },
        { id: "UAV-004", model: "Autel EVO II", battery: "—", hours: 1102, location: "维修间", status: "🔴 维修" },
        { id: "UAV-005", model: "DJI M30T", battery: "78%", hours: 432, location: "基站", status: "🔵 待命" },
        { id: "UAV-006", model: "DJI Mini 3 Pro", battery: "—", hours: 210, location: "仓库", status: "⚫ 离线" },
      ]}
    />

    {/* Middle: Stats + Pie */}
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
      <div className="lg:col-span-2 grid grid-cols-2 gap-4">
        <StatCard title="总数量" value={24} icon={Plane} />
        <StatCard title="在线数" value={18} icon={Wifi} trend="75%" trendUp />
        <StatCard title="平均电量" value="76%" icon={Battery} />
        <StatCard title="待维修" value={3} icon={Wrench} trend="1 紧急" />
      </div>
      <div className="lg:col-span-3">
        <ChartCard
          title="无人机型号分布"
          option={{
            tooltip: { trigger: "item" },
            series: [{
              type: "pie", radius: ["35%","65%"],
              data: [
                { value: 10, name: "DJI M300", itemStyle: { color: "#00b4ff" } },
                { value: 6, name: "DJI M30T", itemStyle: { color: "#00e5a0" } },
                { value: 4, name: "Autel EVO", itemStyle: { color: "#ffd93d" } },
                { value: 4, name: "其他", itemStyle: { color: "#ff6b6b" } },
              ],
              label: { color: "rgba(180,210,240,0.8)" },
            }],
          }}
        />
      </div>
    </div>

    {/* Bottom: Charts */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <ChartCard
        title="月度飞行时长统计"
        option={{
          tooltip: { trigger: "axis" },
          xAxis: { type: "category", data: ["1月","2月","3月","4月","5月","6月"], axisLine: { lineStyle: { color: "rgba(0,180,255,0.3)" } } },
          yAxis: { type: "value", name: "小时", splitLine: { lineStyle: { color: "rgba(0,180,255,0.1)" } } },
          series: [
            { name: "M300", type: "bar", stack: "a", data: [420,380,450,510,480,520], itemStyle: { color: "#00b4ff" } },
            { name: "M30T", type: "bar", stack: "a", data: [180,200,170,220,210,230], itemStyle: { color: "#00e5a0" } },
            { name: "其他", type: "bar", stack: "a", data: [100,90,110,130,120,140], itemStyle: { color: "#ffd93d" } },
          ],
        }}
      />
      <ChartCard
        title="电池健康度趋势"
        option={{
          tooltip: { trigger: "axis" },
          xAxis: { type: "category", data: ["W1","W2","W3","W4","W5","W6","W7","W8"], axisLine: { lineStyle: { color: "rgba(0,180,255,0.3)" } } },
          yAxis: { type: "value", min: 70, max: 100, splitLine: { lineStyle: { color: "rgba(0,180,255,0.1)" } } },
          series: [
            { name: "平均", type: "line", smooth: true, data: [95,94,93,92,91,90,89,88], lineStyle: { color: "#00e5a0" }, itemStyle: { color: "#00e5a0" }, areaStyle: { color: { type: "linear", x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: "rgba(0,229,160,0.2)" },{ offset: 1, color: "transparent" }] } } },
            { name: "最低", type: "line", smooth: true, data: [88,86,85,83,80,78,76,74], lineStyle: { color: "#ff6b6b", type: "dashed" }, itemStyle: { color: "#ff6b6b" } },
          ],
        }}
      />
    </div>
  </div>
);

export default DroneManagement;
