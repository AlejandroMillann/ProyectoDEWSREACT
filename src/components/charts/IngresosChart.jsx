import "./Chart.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

export default function IngresosChart({ data }) {
  return (
    <div className="chart-card">
      <h3>Ingresos por concierto</h3>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorIngresos" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#2563eb" stopOpacity={0.05} />
            </linearGradient>
          </defs>

          <CartesianGrid stroke="#e2e8f0" strokeDasharray="4 4" />
          <XAxis dataKey="nombre" tick={{ fill: "#64748b" }} />
          <YAxis tick={{ fill: "#64748b" }} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="ingresos"
            stroke="#2563eb"
            fill="url(#colorIngresos)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
