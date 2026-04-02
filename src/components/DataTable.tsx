import GlassCard from "./GlassCard";

interface Column {
  key: string;
  title: string;
}

interface DataTableProps {
  columns: Column[];
  data: Record<string, any>[];
  title?: string;
}

const DataTable = ({ columns, data, title }: DataTableProps) => (
  <GlassCard>
    {title && <h3 className="font-display text-sm font-semibold text-primary mb-4">{title}</h3>}
    <div className="overflow-x-auto">
      <table className="w-full text-sm font-body">
        <thead>
          <tr className="border-b border-primary/20">
            {columns.map((col) => (
              <th key={col.key} className="text-left py-2 px-3 text-muted-foreground font-medium text-xs uppercase tracking-wider">
                {col.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="border-b border-border/30 hover:bg-primary/5 transition-colors">
              {columns.map((col) => (
                <td key={col.key} className="py-2.5 px-3 text-foreground/85">
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </GlassCard>
);

export default DataTable;
