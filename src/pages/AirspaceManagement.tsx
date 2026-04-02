import ChartCard from "@/components/ChartCard";
import DataTable from "@/components/DataTable";
import GlassCard from "@/components/GlassCard";
import StatusIndicator from "@/components/StatusIndicator";
import { Map, ShieldCheck, Clock, Plane } from "lucide-react";

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
            <StatusIndicator status="online" label="G区 - 低空开放 (0-100m)" />
            <StatusIndicator status="warning" label="H区 - 审批中 (新规划)" />
          </div>
        </GlassCard>
        <GlassCard shimmer>
          <div className="grid grid-cols-4 gap-3 text-center">
            <div><p className="stat-value text-xl font-bold">8</p><p className="text-xs text-muted-foreground">管控区域</p></div>
            <div><p className="stat-value text-xl font-bold">4</p><p className="text-xs text-muted-foreground">开放</p></div>
            <div><p className="stat-value text-xl font-bold">3</p><p className="text-xs text-muted-foreground">受限</p></div>
            <div><p className="stat-value text-xl font-bold">1</p><p className="text-xs text-muted-foreground">禁飞</p></div>
          </div>
        </GlassCard>
      </div>
    </div>

    {/* Mini stats */}
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      <GlassCard shimmer>
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10"><Map size={18} className="text-primary" /></div>
          <div>
            <p className="text-xs text-muted-foreground font-body">空域面积</p>
            <p className="text-xl font-bold stat-value">256km²</p>
          </div>
        </div>
      </GlassCard>
      <GlassCard shimmer>
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-success/10"><ShieldCheck size={18} className="text-success" /></div>
          <div>
            <p className="text-xs text-muted-foreground font-body">安全运行天数</p>
            <p className="text-xl font-bold stat-value">128</p>
          </div>
        </div>
      </GlassCard>
      <GlassCard shimmer>
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-warning/10"><Clock size={18} className="text-warning" /></div>
          <div>
            <p className="text-xs text-muted-foreground font-body">审批平均时长</p>
            <p className="text-xl font-bold stat-value">2.5h</p>
          </div>
        </div>
      </GlassCard>
      <GlassCard shimmer>
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-destructive/10"><Plane size={18} className="text-destructive" /></div>
          <div>
            <p className="text-xs text-muted-foreground font-body">今日冲突检测</p>
            <p className="text-xl font-bold stat-value">2</p>
          </div>
        </div>
      </GlassCard>
    </div>

    {/* Charts */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <ChartCard
        title="空域使用率"
        option={{
          tooltip: { trigger: "axis" },
          grid: { top: 15, bottom: 25, left: 40, right: 15 },
          xAxis: { type: "category", data: ["A区","B区","C区","D区","E区","F区","G区","H区"], axisLine: { lineStyle: { color: "rgba(0,180,255,0.3)" } } },
          yAxis: { type: "value", max: 100, splitLine: { lineStyle: { color: "rgba(0,180,255,0.08)" } } },
          series: [{ type: "bar", data: [78,65,30,0,55,15,62,10], itemStyle: { color: (p: any) => p.value > 60 ? "#00b4ff" : p.value > 30 ? "#ffd93d" : p.value > 0 ? "#ff6b6b" : "#333", borderRadius: [4,4,0,0] } }],
        }}
      />
      <ChartCard
        title="飞行密度时段分布"
        option={{
          tooltip: { trigger: "axis" },
          grid: { top: 15, bottom: 25, left: 40, right: 10 },
          xAxis: { type: "category", data: ["06","08","10","12","14","16","18","20"], axisLine: { lineStyle: { color: "rgba(0,180,255,0.3)" } } },
          yAxis: { type: "value", splitLine: { lineStyle: { color: "rgba(0,180,255,0.08)" } } },
          series: [{ type: "line", smooth: true, data: [5,25,40,30,45,50,35,10], lineStyle: { color: "#00b4ff", width: 2 }, areaStyle: { color: { type: "linear", x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: "rgba(0,180,255,0.3)" },{ offset: 1, color: "transparent" }] } }, itemStyle: { color: "#00b4ff" } }],
        }}
      />
      <ChartCard
        title="空域申请审批"
        option={{
          tooltip: { trigger: "item" },
          series: [{
            type: "pie", radius: ["45%","70%"], center: ["50%","55%"],
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

    {/* Bottom: Table + conflict log */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2">
        <DataTable
          title="空域审批记录"
          columns={[
            { key: "id", title: "申请ID" },
            { key: "zone", title: "空域" },
            { key: "alt", title: "高度(m)" },
            { key: "time", title: "时段" },
            { key: "purpose", title: "用途" },
            { key: "applicant", title: "申请人" },
            { key: "status", title: "状态" },
          ]}
          data={[
            { id: "AP-2024-158", zone: "H区", alt: "0-100", time: "明日 09:00-12:00", purpose: "新区测绘", applicant: "赵工", status: "⏳ 待审批" },
            { id: "AP-2024-157", zone: "D区", alt: "0-80", time: "14:00-16:00", purpose: "电力巡线", applicant: "王工", status: "⏳ 待审批" },
            { id: "AP-2024-156", zone: "C区", alt: "0-120", time: "09:00-12:00", purpose: "河道巡检", applicant: "李工", status: "✅ 已批准" },
            { id: "AP-2024-155", zone: "F区", alt: "0-100", time: "08:00-10:00", purpose: "山区测绘", applicant: "张工", status: "❌ 已拒绝" },
            { id: "AP-2024-154", zone: "A区", alt: "0-120", time: "全天", purpose: "常规巡检", applicant: "系统", status: "✅ 已批准" },
            { id: "AP-2024-153", zone: "G区", alt: "0-100", time: "全天", purpose: "水库巡查", applicant: "系统", status: "✅ 已批准" },
          ]}
        />
      </div>
      <GlassCard>
        <h3 className="font-display text-sm font-semibold text-primary mb-4">空域冲突日志</h3>
        <div className="space-y-3 text-sm font-body">
          {[
            { time: "14:30", desc: "D区与民航航路重叠检测", level: "warning" },
            { time: "12:15", desc: "C区与军方临时空域冲突", level: "error" },
            { time: "10:00", desc: "A区同时飞行器达上限(8台)", level: "warning" },
            { time: "08:30", desc: "E区高度冲突已自动调整", level: "info" },
            { time: "昨日 16:00", desc: "F区气象限制已生效", level: "warning" },
            { time: "昨日 14:00", desc: "所有区域冲突检测通过", level: "info" },
          ].map((item, i) => (
            <div key={i} className="flex gap-3 items-start">
              <span className="text-xs text-muted-foreground w-14 shrink-0 mt-0.5">{item.time}</span>
              <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${item.level === "error" ? "bg-destructive" : item.level === "warning" ? "bg-warning" : "bg-primary"}`} />
              <span className="text-foreground/80">{item.desc}</span>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  </div>
);

export default AirspaceManagement;
