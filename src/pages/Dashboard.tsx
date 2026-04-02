import StatCard from "@/components/StatCard";
import ChartCard from "@/components/ChartCard";
import DataTable from "@/components/DataTable";
import StatusIndicator from "@/components/StatusIndicator";
import GlassCard from "@/components/GlassCard";
import { Plane, Route, AlertTriangle, CheckCircle } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="在线无人机" value={128} icon={Plane} trend="12% 较昨日" trendUp />
        <StatCard title="活跃航线" value={56} icon={Route} trend="8% 较昨日" trendUp />
        <StatCard title="今日预警" value={7} icon={AlertTriangle} trend="3 已处理" />
        <StatCard title="完成任务" value={342} icon={CheckCircle} trend="95.2% 完成率" trendUp />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ChartCard
          title="巡检任务趋势"
          option={{
            tooltip: { trigger: "axis" },
            xAxis: { type: "category", data: ["1月","2月","3月","4月","5月","6月","7月"], axisLine: { lineStyle: { color: "rgba(0,180,255,0.3)" } } },
            yAxis: { type: "value", splitLine: { lineStyle: { color: "rgba(0,180,255,0.1)" } }, axisLine: { lineStyle: { color: "rgba(0,180,255,0.3)" } } },
            series: [
              { name: "计划", type: "line", smooth: true, data: [120,132,101,134,90,230,210], lineStyle: { color: "#00b4ff", width: 2 }, areaStyle: { color: { type: "linear", x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: "rgba(0,180,255,0.3)" }, { offset: 1, color: "rgba(0,180,255,0)" }] } }, itemStyle: { color: "#00b4ff" } },
              { name: "完成", type: "line", smooth: true, data: [110,125,95,128,85,220,200], lineStyle: { color: "#00e5a0", width: 2 }, areaStyle: { color: { type: "linear", x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: "rgba(0,229,160,0.2)" }, { offset: 1, color: "rgba(0,229,160,0)" }] } }, itemStyle: { color: "#00e5a0" } },
            ],
          }}
        />
        <ChartCard
          title="无人机类型分布"
          option={{
            tooltip: { trigger: "item" },
            series: [{
              type: "pie", radius: ["40%","70%"], center: ["50%","55%"],
              data: [
                { value: 45, name: "巡检型", itemStyle: { color: "#00b4ff" } },
                { value: 30, name: "测绘型", itemStyle: { color: "#00e5a0" } },
                { value: 15, name: "物流型", itemStyle: { color: "#ff6b6b" } },
                { value: 10, name: "应急型", itemStyle: { color: "#ffd93d" } },
              ],
              label: { color: "rgba(180,210,240,0.8)" },
            }],
          }}
        />
      </div>

      {/* Bottom: Table + Status */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <DataTable
            title="最近巡检记录"
            columns={[
              { key: "id", title: "任务ID" },
              { key: "route", title: "航线" },
              { key: "drone", title: "无人机" },
              { key: "status", title: "状态" },
              { key: "time", title: "时间" },
            ]}
            data={[
              { id: "TX-0421", route: "城区A线", drone: "DJI-M300", status: "✅ 完成", time: "14:32" },
              { id: "TX-0420", route: "工业B线", drone: "DJI-M30T", status: "✅ 完成", time: "13:15" },
              { id: "TX-0419", route: "河道C线", drone: "EVO-II", status: "⚠️ 异常", time: "11:48" },
              { id: "TX-0418", route: "电力D线", drone: "DJI-M300", status: "✅ 完成", time: "10:20" },
              { id: "TX-0417", route: "交通E线", drone: "Autel-M", status: "🔄 进行中", time: "09:05" },
            ]}
          />
        </div>
        <GlassCard>
          <h3 className="font-display text-sm font-semibold text-primary mb-4">设备状态</h3>
          <div className="space-y-3">
            <StatusIndicator status="online" label="DJI M300 #01 - 城区巡检中" />
            <StatusIndicator status="online" label="DJI M30T #03 - 待命" />
            <StatusIndicator status="warning" label="EVO-II #05 - 低电量" />
            <StatusIndicator status="online" label="DJI M300 #02 - 返航中" />
            <StatusIndicator status="error" label="Autel M #04 - 信号丢失" />
            <StatusIndicator status="offline" label="DJI Mini3 #06 - 维修中" />
            <StatusIndicator status="online" label="DJI M300 #07 - 待命" />
            <StatusIndicator status="online" label="EVO-II #08 - 数据上传" />
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default Dashboard;
