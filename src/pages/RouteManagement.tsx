import ChartCard from "@/components/ChartCard";
import DataTable from "@/components/DataTable";
import GlassCard from "@/components/GlassCard";
import StatusIndicator from "@/components/StatusIndicator";
import { Route, MapPin, Clock, Gauge } from "lucide-react";

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
            <StatusIndicator status="online" label="交通E线 - 运行中" />
            <StatusIndicator status="warning" label="水库G线 - 维护中" />
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

    {/* Mini stats */}
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      <GlassCard shimmer>
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10"><Route size={18} className="text-primary" /></div>
          <div>
            <p className="text-xs text-muted-foreground font-body">今日执行航线</p>
            <p className="text-xl font-bold stat-value">23</p>
          </div>
        </div>
      </GlassCard>
      <GlassCard shimmer>
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-success/10"><MapPin size={18} className="text-success" /></div>
          <div>
            <p className="text-xs text-muted-foreground font-body">巡检点总数</p>
            <p className="text-xl font-bold stat-value">378</p>
          </div>
        </div>
      </GlassCard>
      <GlassCard shimmer>
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-warning/10"><Clock size={18} className="text-warning" /></div>
          <div>
            <p className="text-xs text-muted-foreground font-body">平均飞行时间</p>
            <p className="text-xl font-bold stat-value">42min</p>
          </div>
        </div>
      </GlassCard>
      <GlassCard shimmer>
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-destructive/10"><Gauge size={18} className="text-destructive" /></div>
          <div>
            <p className="text-xs text-muted-foreground font-body">平均飞行速度</p>
            <p className="text-xl font-bold stat-value">8.6m/s</p>
          </div>
        </div>
      </GlassCard>
    </div>

    {/* Charts */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <ChartCard
        title="航线使用频率"
        className="lg:col-span-2"
        option={{
          tooltip: { trigger: "axis" },
          legend: { data: ["本周", "上周"], right: 10, top: 0 },
          grid: { top: 35, bottom: 25, left: 45, right: 15 },
          xAxis: { type: "category", data: ["城区A","工业B","河道C","电力D","交通E","山区F","水库G"], axisLine: { lineStyle: { color: "rgba(0,180,255,0.3)" } } },
          yAxis: { type: "value", splitLine: { lineStyle: { color: "rgba(0,180,255,0.08)" } } },
          series: [
            { name: "本周", type: "bar", data: [85,72,45,90,60,30,55], itemStyle: { color: { type: "linear", x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: "#00b4ff" },{ offset: 1, color: "#0055aa" }] }, borderRadius: [4,4,0,0] } },
            { name: "上周", type: "bar", data: [78,68,50,85,55,35,48], itemStyle: { color: "rgba(0,229,160,0.5)", borderRadius: [4,4,0,0] } },
          ],
        }}
      />
      <ChartCard
        title="航线里程分布"
        option={{
          tooltip: { trigger: "item" },
          radar: { indicator: [{ name: "城区", max: 100 },{ name: "工业", max: 100 },{ name: "河道", max: 100 },{ name: "电力", max: 100 },{ name: "交通", max: 100 },{ name: "山区", max: 100 }], axisName: { color: "rgba(255,255,255,0.7)", fontSize: 11 }, axisLine: { lineStyle: { color: "rgba(0,180,255,0.2)" } }, splitLine: { lineStyle: { color: "rgba(0,180,255,0.1)" } }, splitArea: { areaStyle: { color: ["rgba(0,180,255,0.02)", "rgba(0,180,255,0.06)"] } } },
          series: [{ type: "radar", data: [{ value: [85,70,55,92,65,40], name: "里程(km)", areaStyle: { color: "rgba(0,180,255,0.15)" }, lineStyle: { color: "#00b4ff" }, itemStyle: { color: "#00b4ff" } }] }],
        }}
      />
    </div>

    {/* Bottom: Table + Recent activity */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2">
        <DataTable
          title="航线详情列表"
          columns={[
            { key: "name", title: "航线名称" },
            { key: "length", title: "长度(km)" },
            { key: "points", title: "巡检点" },
            { key: "freq", title: "频率" },
            { key: "lastRun", title: "最近执行" },
            { key: "status", title: "状态" },
          ]}
          data={[
            { name: "城区A线", length: "28.5", points: 12, freq: "每日", lastRun: "今日 14:32", status: "🟢 运行中" },
            { name: "工业B线", length: "35.2", points: 18, freq: "每日", lastRun: "今日 13:15", status: "🟢 运行中" },
            { name: "河道C线", length: "22.8", points: 8, freq: "每周", lastRun: "昨日 16:00", status: "🟡 待审批" },
            { name: "电力D线", length: "41.0", points: 24, freq: "每日", lastRun: "今日 10:20", status: "🟢 运行中" },
            { name: "交通E线", length: "18.6", points: 10, freq: "每周", lastRun: "今日 09:05", status: "🟢 运行中" },
            { name: "山区F线", length: "55.3", points: 6, freq: "每月", lastRun: "3日前", status: "⚫ 已关闭" },
            { name: "水库G线", length: "30.1", points: 14, freq: "每周", lastRun: "2日前", status: "🟡 维护中" },
          ]}
        />
      </div>
      <GlassCard>
        <h3 className="font-display text-sm font-semibold text-primary mb-4">航线变更记录</h3>
        <div className="space-y-3 text-sm font-body">
          {[
            { time: "15:20", desc: "城区A线新增2个巡检点", color: "text-primary" },
            { time: "14:05", desc: "水库G线进入维护状态", color: "text-warning" },
            { time: "11:30", desc: "河道C线审批已提交", color: "text-warning" },
            { time: "09:45", desc: "电力D线航高调整为100m", color: "text-primary" },
            { time: "08:20", desc: "山区F线因天气关闭", color: "text-destructive" },
            { time: "昨日", desc: "交通E线完成季度优化", color: "text-success" },
          ].map((item, i) => (
            <div key={i} className="flex gap-3 items-start">
              <span className="text-xs text-muted-foreground w-10 shrink-0 mt-0.5">{item.time}</span>
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
              <span className={`${item.color}/80`}>{item.desc}</span>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  </div>
);

export default RouteManagement;
