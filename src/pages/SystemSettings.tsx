import GlassCard from "@/components/GlassCard";
import ChartCard from "@/components/ChartCard";
import { Shield, Users, Database, Bell, Cpu, Globe } from "lucide-react";

const settingsItems = [
  { icon: Users, label: "用户管理", desc: "管理操作员与角色权限", count: "12 用户" },
  { icon: Shield, label: "安全设置", desc: "飞行安全规则与限制", count: "8 规则" },
  { icon: Database, label: "数据管理", desc: "存储空间与备份策略", count: "12.8 TB" },
  { icon: Bell, label: "通知设置", desc: "预警推送与通知配置", count: "5 通道" },
  { icon: Cpu, label: "设备配置", desc: "无人机参数与校准", count: "24 台" },
  { icon: Globe, label: "API接口", desc: "外部系统集成管理", count: "6 接口" },
];

const SystemSettings = () => (
  <div className="space-y-6">
    {/* Settings grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {settingsItems.map((item, i) => (
        <GlassCard key={i} shimmer>
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-primary/10">
              <item.icon size={24} className="text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-sm font-semibold text-foreground">{item.label}</h3>
              <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
              <p className="stat-value text-lg font-bold mt-2">{item.count}</p>
            </div>
          </div>
        </GlassCard>
      ))}
    </div>

    {/* System monitor */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <ChartCard
        title="系统资源使用率"
        option={{
          tooltip: { trigger: "axis" },
          legend: { data: ["CPU","内存","存储"], textStyle: { color: "rgba(180,210,240,0.7)" } },
          xAxis: { type: "category", data: ["00:00","04:00","08:00","12:00","16:00","20:00"], axisLine: { lineStyle: { color: "rgba(0,180,255,0.3)" } } },
          yAxis: { type: "value", max: 100, splitLine: { lineStyle: { color: "rgba(0,180,255,0.1)" } } },
          series: [
            { name: "CPU", type: "line", smooth: true, data: [20,15,45,65,55,30], lineStyle: { color: "#00b4ff" }, itemStyle: { color: "#00b4ff" } },
            { name: "内存", type: "line", smooth: true, data: [50,48,62,75,70,55], lineStyle: { color: "#00e5a0" }, itemStyle: { color: "#00e5a0" } },
            { name: "存储", type: "line", smooth: true, data: [72,72,73,74,75,76], lineStyle: { color: "#ffd93d" }, itemStyle: { color: "#ffd93d" } },
          ],
        }}
      />
      <GlassCard>
        <h3 className="font-display text-sm font-semibold text-primary mb-4">系统日志</h3>
        <div className="space-y-2 font-mono text-xs">
          {[
            { time: "15:32:01", level: "ERROR", msg: "UAV-004 通信超时, 已触发应急预案" },
            { time: "15:28:15", level: "WARN", msg: "UAV-003 电量低于阈值 (18%)" },
            { time: "15:15:30", level: "WARN", msg: "城区A线偏航检测: 偏移52m" },
            { time: "14:50:22", level: "INFO", msg: "气象数据更新: F区风速6.2m/s" },
            { time: "14:30:10", level: "INFO", msg: "空域冲突检测完成, 1项待确认" },
            { time: "14:00:00", level: "INFO", msg: "系统定时备份完成 (2.3GB)" },
            { time: "13:45:18", level: "INFO", msg: "TX-0424 任务数据上传完成" },
          ].map((log, i) => (
            <div key={i} className={`flex gap-2 p-1.5 rounded ${log.level === "ERROR" ? "bg-destructive/10" : log.level === "WARN" ? "bg-warning/10" : "bg-primary/5"}`}>
              <span className="text-muted-foreground">{log.time}</span>
              <span className={log.level === "ERROR" ? "text-destructive" : log.level === "WARN" ? "text-warning" : "text-primary"}>[{log.level}]</span>
              <span className="text-foreground/80">{log.msg}</span>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  </div>
);

export default SystemSettings;
