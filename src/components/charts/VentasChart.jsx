import "./Chart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

export default function VentasChart({ data }) {
  return (
    <div className="chart-card">
      <h3>Entradas vendidas por concierto</h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid stroke="#e2e8f0" strokeDasharray="4 4" />
          <XAxis dataKey="nombre" tick={{ fill: "#64748b" }} />
          <YAxis tick={{ fill: "#64748b" }} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="entradas"
            stroke="#2563eb"
            strokeWidth={2.5}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
