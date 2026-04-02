import { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import bgHero from "@/assets/bg-hero.jpg";
import {
  LayoutDashboard, Route, Plane, ClipboardCheck,
  BarChart3, AlertTriangle, Map, Settings, Radar
} from "lucide-react";

const menuItems = [
  { path: "/", label: "首页概览", icon: LayoutDashboard },
  { path: "/routes", label: "航线管理", icon: Route },
  { path: "/drones", label: "无人机管理", icon: Plane },
  { path: "/tasks", label: "巡检任务", icon: ClipboardCheck },
  { path: "/analysis", label: "数据分析", icon: BarChart3 },
  { path: "/alerts", label: "预警中心", icon: AlertTriangle },
  { path: "/airspace", label: "空域管理", icon: Map },
  { path: "/settings", label: "系统设置", icon: Settings },
];

const Layout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative">
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${bgHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-background/60" />
      </div>

      <nav className="glass-nav fixed top-0 left-0 right-0 z-50 h-16 flex items-center px-6">
        <h1 className="font-display text-2xl font-bold tracking-wider whitespace-nowrap mr-8 flex items-center gap-2.5">
          <Radar size={28} className="text-primary drop-shadow-[0_0_8px_rgba(0,180,255,0.6)]" />
          <span className="bg-gradient-to-r from-[#00b4ff] via-[#00e5a0] to-[#00b4ff] bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(0,180,255,0.5)] bg-[length:200%_auto] animate-[gradient-shift_3s_linear_infinite]">低空巡检管理平台</span>
        </h1>
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
          {menuItems.map((item) => (
            <div
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`nav-item flex items-center gap-1.5 whitespace-nowrap ${
                location.pathname === item.path ? "active" : ""
              }`}
            >
              <item.icon size={16} />
              <span className="font-body font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </nav>

      <main className="relative z-10 pt-20 px-6 pb-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;
