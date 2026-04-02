interface StatusIndicatorProps {
  status: "online" | "offline" | "warning" | "error";
  label: string;
}

const colors = {
  online: "bg-success shadow-[0_0_8px_hsla(var(--success)/0.6)]",
  offline: "bg-muted-foreground",
  warning: "bg-warning shadow-[0_0_8px_hsla(var(--warning)/0.6)]",
  error: "bg-destructive shadow-[0_0_8px_hsla(var(--destructive)/0.6)]",
};

const StatusIndicator = ({ status, label }: StatusIndicatorProps) => (
  <div className="flex items-center gap-2">
    <span className={`inline-block w-2.5 h-2.5 rounded-full ${colors[status]}`} />
    <span className="text-sm font-body text-foreground/90">{label}</span>
  </div>
);

export default StatusIndicator;
