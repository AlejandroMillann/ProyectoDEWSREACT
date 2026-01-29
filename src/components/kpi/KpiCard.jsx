import "./KpiCard.css";

export default function KpiCard({ titulo, valor }) {
  return (
    <div className="kpi-card">
      <span className="kpi-title">{titulo}</span>
      <span className="kpi-value">{valor}</span>
    </div>
  );
}
