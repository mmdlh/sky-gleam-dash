import GlassCard from "@/components/GlassCard";
import ChartCard from "@/components/ChartCard";
import DataTable from "@/components/DataTable";
import StatusIndicator from "@/components/StatusIndicator";
import { Shield, Users, Database, Bell, Cpu, Globe, HardDrive, Activity } from "lucide-react";

const settingsItems = [
  { icon: Users, label: "用户管理", desc: "管理操作员与角色权限", count: "12 用户", online: "8 在线" },
  { icon: Shield, label: "安全设置", desc: "飞行安全规则与限制", count: "8 规则", online: "全部启用" },
  { icon: Database, label: "数据管理", desc: "存储空间与备份策略", count: "12.8 TB", online: "76% 使用" },
  { icon: Bell, label: "通知设置", desc: "预警推送与通知配置", count: "5 通道", online: "4 活跃" },
  { icon: Cpu, label: "设备配置", desc: "无人机参数与校准", count: "24 台", online: "18 在线" },
  { icon: Globe, label: "API接口", desc: "外部系统集成管理", count: "6 接口", online: "全部正常" },
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
              <div className="flex items-center justify-between mt-2">
                <p className="stat-value text-lg font-bold">{item.count}</p>
                <span className="text-xs text-success">{item.online}</span>
              </div>
            </div>
          </div>
        </GlassCard>
      ))}
    </div>

    {/* System health */}
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      <GlassCard shimmer>
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10"><Cpu size={18} className="text-primary" /></div>
          <div>
            <p className="text-xs text-muted-foreground font-body">CPU使用率</p>
            <p className="text-xl font-bold stat-value">45%</p>
          </div>
        </div>
        <div className="mt-2 h-1.5 rounded-full bg-muted overflow-hidden">
          <div className="h-full rounded-full bg-primary" style={{ width: "45%" }} />
        </div>
      </GlassCard>
      <GlassCard shimmer>
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-success/10"><Activity size={18} className="text-success" /></div>
          <div>
            <p className="text-xs text-muted-foreground font-body">内存使用率</p>
            <p className="text-xl font-bold stat-value">68%</p>
          </div>
        </div>
        <div className="mt-2 h-1.5 rounded-full bg-muted overflow-hidden">
          <div className="h-full rounded-full bg-success" style={{ width: "68%" }} />
        </div>
      </GlassCard>
      <GlassCard shimmer>
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-warning/10"><HardDrive size={18} className="text-warning" /></div>
          <div>
            <p className="text-xs text-muted-foreground font-body">存储使用率</p>
            <p className="text-xl font-bold stat-value">76%</p>
          </div>
        </div>
        <div className="mt-2 h-1.5 rounded-full bg-muted overflow-hidden">
          <div className="h-full rounded-full bg-warning" style={{ width: "76%" }} />
        </div>
      </GlassCard>
      <GlassCard shimmer>
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-destructive/10"><Globe size={18} className="text-destructive" /></div>
          <div>
            <p className="text-xs text-muted-foreground font-body">网络延迟</p>
            <p className="text-xl font-bold stat-value">12ms</p>
          </div>
        </div>
        <div className="mt-2 h-1.5 rounded-full bg-muted overflow-hidden">
          <div className="h-full rounded-full bg-success" style={{ width: "12%" }} />
        </div>
      </GlassCard>
    </div>

    {/* System monitor charts */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <ChartCard
        title="系统资源使用率（24小时）"
        option={{
          tooltip: { trigger: "axis" },
          legend: { data: ["CPU","内存","存储","网络I/O"], textStyle: { color: "rgba(255,255,255,0.7)" } },
          grid: { top: 35, bottom: 25, left: 45, right: 15 },
          xAxis: { type: "category", data: ["00:00","04:00","08:00","12:00","16:00","20:00","现在"], axisLine: { lineStyle: { color: "rgba(0,180,255,0.3)" } } },
          yAxis: { type: "value", max: 100, splitLine: { lineStyle: { color: "rgba(0,180,255,0.08)" } } },
          series: [
            { name: "CPU", type: "line", smooth: true, data: [20,15,45,65,55,30,45], lineStyle: { color: "#00b4ff", width: 2 }, itemStyle: { color: "#00b4ff" }, areaStyle: { color: { type: "linear", x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: "rgba(0,180,255,0.15)" },{ offset: 1, color: "transparent" }] } } },
            { name: "内存", type: "line", smooth: true, data: [50,48,62,75,70,55,68], lineStyle: { color: "#00e5a0", width: 2 }, itemStyle: { color: "#00e5a0" } },
            { name: "存储", type: "line", smooth: true, data: [72,72,73,74,75,76,76], lineStyle: { color: "#ffd93d", width: 2 }, itemStyle: { color: "#ffd93d" } },
            { name: "网络I/O", type: "line", smooth: true, data: [10,5,35,50,45,20,30], lineStyle: { color: "#a78bfa", width: 2 }, itemStyle: { color: "#a78bfa" } },
          ],
        }}
      />
      <GlassCard>
        <h3 className="font-display text-sm font-semibold text-primary mb-4">系统日志</h3>
        <div className="space-y-2 font-mono text-xs max-h-[300px] overflow-y-auto scrollbar-hide">
          {[
            { time: "15:32:01", level: "ERROR", msg: "UAV-004 通信超时, 已触发应急预案" },
            { time: "15:28:15", level: "WARN", msg: "UAV-003 电量低于阈值 (18%)" },
            { time: "15:15:30", level: "WARN", msg: "城区A线偏航检测: 偏移52m" },
            { time: "14:50:22", level: "INFO", msg: "气象数据更新: F区风速6.2m/s" },
            { time: "14:30:10", level: "INFO", msg: "空域冲突检测完成, 1项待确认" },
            { time: "14:00:00", level: "INFO", msg: "系统定时备份完成 (2.3GB)" },
            { time: "13:45:18", level: "INFO", msg: "TX-0424 任务数据上传完成" },
            { time: "13:30:00", level: "INFO", msg: "数据库优化完成, 释放1.2GB" },
            { time: "12:00:00", level: "INFO", msg: "自动备份调度已启动" },
            { time: "11:30:45", level: "WARN", msg: "API网关响应时间偏高 (280ms)" },
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

    {/* Bottom: Service status + User table */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <GlassCard>
        <h3 className="font-display text-sm font-semibold text-primary mb-4">服务状态</h3>
        <div className="space-y-2.5">
          <StatusIndicator status="online" label="主数据库 — PostgreSQL 正常运行" />
          <StatusIndicator status="online" label="消息队列 — RabbitMQ 正常" />
          <StatusIndicator status="online" label="对象存储 — MinIO 正常" />
          <StatusIndicator status="online" label="AI推理服务 — GPU集群 正常" />
          <StatusIndicator status="warning" label="日志服务 — ELK 磁盘偏高" />
          <StatusIndicator status="online" label="监控服务 — Prometheus 正常" />
          <StatusIndicator status="online" label="API网关 — Nginx 正常" />
        </div>
      </GlassCard>
      <div className="lg:col-span-2">
        <DataTable
          title="用户操作记录"
          columns={[
            { key: "user", title: "用户" },
            { key: "role", title: "角色" },
            { key: "action", title: "操作" },
            { key: "target", title: "对象" },
            { key: "time", title: "时间" },
            { key: "ip", title: "IP" },
          ]}
          data={[
            { user: "张工", role: "管理员", action: "审批空域", target: "AP-2024-156", time: "15:30", ip: "192.168.1.101" },
            { user: "李工", role: "操作员", action: "执行任务", target: "TX-0425", time: "14:50", ip: "192.168.1.105" },
            { user: "王工", role: "操作员", action: "处理预警", target: "ALT-085", time: "14:18", ip: "192.168.1.108" },
            { user: "系统", role: "自动化", action: "数据备份", target: "全量备份", time: "14:00", ip: "localhost" },
            { user: "赵工", role: "分析师", action: "生成报告", target: "RPT-1856", time: "13:45", ip: "192.168.1.112" },
            { user: "张工", role: "管理员", action: "修改配置", target: "电力D线航高", time: "09:45", ip: "192.168.1.101" },
          ]}
        />
      </div>
    </div>
  </div>
);

export default SystemSettings;
