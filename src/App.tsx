import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import RouteManagement from "./pages/RouteManagement";
import DroneManagement from "./pages/DroneManagement";
import InspectionTasks from "./pages/InspectionTasks";
import DataAnalysis from "./pages/DataAnalysis";
import AlertCenter from "./pages/AlertCenter";
import AirspaceManagement from "./pages/AirspaceManagement";
import SystemSettings from "./pages/SystemSettings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/routes" element={<RouteManagement />} />
            <Route path="/drones" element={<DroneManagement />} />
            <Route path="/tasks" element={<InspectionTasks />} />
            <Route path="/analysis" element={<DataAnalysis />} />
            <Route path="/alerts" element={<AlertCenter />} />
            <Route path="/airspace" element={<AirspaceManagement />} />
            <Route path="/settings" element={<SystemSettings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
