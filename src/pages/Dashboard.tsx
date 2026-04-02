import StatCard from "@/components/StatCard";
import ChartCard from "@/components/ChartCard";
import DataTable from "@/components/DataTable";
import StatusIndicator from "@/components/StatusIndicator";
import GlassCard from "@/components/GlassCard";
import { Plane, Route, AlertTriangle, CheckCircle, Activity, Clock, Zap, TrendingUp } from "lucide-react";

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

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <ChartCard
          title="巡检任务趋势"
          className="lg:col-span-2"
          option={{
            tooltip: { trigger: "axis" },
            legend: { data: ["计划", "完成", "异常"], right: 10, top: 0 },
            grid: { top: 35, bottom: 25, left: 45, right: 15 },
            xAxis: { type: "category", data: ["1月","2月","3月","4月","5月","6月","7月"], axisLine: { lineStyle: { color: "rgba(0,180,255,0.3)" } } },
            yAxis: { type: "value", splitLine: { lineStyle: { color: "rgba(0,180,255,0.08)" } }, axisLine: { lineStyle: { color: "rgba(0,180,255,0.3)" } } },
            series: [
              { name: "计划", type: "bar", data: [120,132,101,134,90,230,210], itemStyle: { color: "rgba(0,180,255,0.6)", borderRadius: [4,4,0,0] } },
              { name: "完成", type: "bar", data: [110,125,95,128,85,220,200], itemStyle: { color: "rgba(0,229,160,0.6)", borderRadius: [4,4,0,0] } },
              { name: "异常", type: "line", smooth: true, data: [5,7,6,4,8,10,6], lineStyle: { color: "#ff6b6b", width: 2 }, itemStyle: { color: "#ff6b6b" }, areaStyle: { color: { type: "linear", x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: "rgba(255,107,107,0.2)" }, { offset: 1, color: "rgba(255,107,107,0)" }] } } },
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
              label: { color: "rgba(255,255,255,0.7)", fontSize: 11 },
            }],
          }}
        />
      </div>

      {/* Charts Row 2 — Radar + Area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ChartCard
          title="各区域巡检能力评估"
          option={{
            tooltip: {},
            radar: {
              indicator: [
                { name: "覆盖率", max: 100 },
                { name: "及时性", max: 100 },
                { name: "准确度", max: 100 },
                { name: "续航力", max: 100 },
                { name: "响应速度", max: 100 },
                { name: "安全评分", max: 100 },
              ],
              shape: "polygon",
              splitNumber: 4,
              axisName: { color: "rgba(255,255,255,0.7)", fontSize: 11 },
              splitLine: { lineStyle: { color: "rgba(0,180,255,0.15)" } },
              splitArea: { areaStyle: { color: ["rgba(0,180,255,0.02)", "rgba(0,180,255,0.06)"] } },
              axisLine: { lineStyle: { color: "rgba(0,180,255,0.2)" } },
            },
            series: [{
              type: "radar",
              data: [
                { value: [92, 85, 88, 78, 95, 90], name: "A区", areaStyle: { color: "rgba(0,180,255,0.15)" }, lineStyle: { color: "#00b4ff" }, itemStyle: { color: "#00b4ff" } },
                { value: [78, 90, 82, 85, 72, 88], name: "B区", areaStyle: { color: "rgba(0,229,160,0.12)" }, lineStyle: { color: "#00e5a0" }, itemStyle: { color: "#00e5a0" } },
              ],
            }],
          }}
        />
        <ChartCard
          title="本周飞行时长统计（小时）"
          option={{
            tooltip: { trigger: "axis" },
            grid: { top: 20, bottom: 25, left: 45, right: 15 },
            xAxis: { type: "category", data: ["周一","周二","周三","周四","周五","周六","周日"], axisLine: { lineStyle: { color: "rgba(0,180,255,0.3)" } } },
            yAxis: { type: "value", splitLine: { lineStyle: { color: "rgba(0,180,255,0.08)" } }, axisLine: { lineStyle: { color: "rgba(0,180,255,0.3)" } } },
            series: [
              { type: "line", smooth: true, data: [28,35,42,38,50,45,32], lineStyle: { color: "#00b4ff", width: 3 }, symbol: "circle", symbolSize: 8, itemStyle: { color: "#00b4ff", borderColor: "#0a1628", borderWidth: 2 }, areaStyle: { color: { type: "linear", x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: "rgba(0,180,255,0.35)" }, { offset: 1, color: "rgba(0,180,255,0)" }] } } },
            ],
          }}
        />
      </div>

      {/* Mini Stat Cards Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <GlassCard shimmer>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10"><Activity size={18} className="text-primary" /></div>
            <div>
              <p className="text-xs text-muted-foreground font-body">今日飞行架次</p>
              <p className="text-xl font-bold stat-value">187</p>
            </div>
          </div>
        </GlassCard>
        <GlassCard shimmer>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-success/10"><TrendingUp size={18} className="text-success" /></div>
            <div>
              <p className="text-xs text-muted-foreground font-body">巡检覆盖率</p>
              <p className="text-xl font-bold stat-value">96.8%</p>
            </div>
          </div>
        </GlassCard>
        <GlassCard shimmer>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-warning/10"><Clock size={18} className="text-warning" /></div>
            <div>
              <p className="text-xs text-muted-foreground font-body">平均响应时间</p>
              <p className="text-xl font-bold stat-value">3.2min</p>
            </div>
          </div>
        </GlassCard>
        <GlassCard shimmer>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-destructive/10"><Zap size={18} className="text-destructive" /></div>
            <div>
              <p className="text-xs text-muted-foreground font-body">待处理事件</p>
              <p className="text-xl font-bold stat-value">4</p>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Bottom: Table + Status */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 space-y-4">
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
              { id: "TX-0416", route: "水库F线", drone: "DJI-M30T", status: "✅ 完成", time: "08:30" },
            ]}
          />
          <ChartCard
            title="各航线异常事件分布"
            height="220px"
            option={{
              tooltip: { trigger: "axis" },
              grid: { top: 15, bottom: 25, left: 70, right: 15 },
              yAxis: { type: "category", data: ["城区A线","工业B线","河道C线","电力D线","交通E线","水库F线"], axisLine: { lineStyle: { color: "rgba(0,180,255,0.3)" } } },
              xAxis: { type: "value", splitLine: { lineStyle: { color: "rgba(0,180,255,0.08)" } }, axisLine: { lineStyle: { color: "rgba(0,180,255,0.3)" } } },
              series: [
                { type: "bar", data: [3,8,12,5,2,6], itemStyle: { color: { type: "linear", x: 0, y: 0, x2: 1, y2: 0, colorStops: [{ offset: 0, color: "rgba(255,107,107,0.8)" }, { offset: 1, color: "rgba(255,217,61,0.8)" }] }, borderRadius: [0,4,4,0] }, barWidth: 14 },
              ],
            }}
          />
        </div>
        <div className="space-y-4">
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
          <GlassCard>
            <h3 className="font-display text-sm font-semibold text-primary mb-4">今日预警摘要</h3>
            <div className="space-y-2.5 text-sm font-body">
              <div className="flex items-start gap-2 text-destructive/90">
                <AlertTriangle size={14} className="mt-0.5 shrink-0" />
                <span>14:21 河道C线发现障碍物，已自动避障</span>
              </div>
              <div className="flex items-start gap-2 text-warning/90">
                <AlertTriangle size={14} className="mt-0.5 shrink-0" />
                <span>13:05 EVO-II #05 电量低于20%</span>
              </div>
              <div className="flex items-start gap-2 text-destructive/90">
                <AlertTriangle size={14} className="mt-0.5 shrink-0" />
                <span>11:48 Autel M #04 信号中断</span>
              </div>
              <div className="flex items-start gap-2 text-warning/90">
                <AlertTriangle size={14} className="mt-0.5 shrink-0" />
                <span>10:30 工业B线气象预警（阵风6级）</span>
              </div>
              <div className="flex items-start gap-2 text-foreground/50">
                <CheckCircle size={14} className="mt-0.5 shrink-0" />
                <span>09:15 电力D线高压区域限飞已解除</span>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
