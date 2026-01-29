import "./Dashboard.css";
import { useEffect, useState } from "react";
import KpiCard from "../components/kpi/KpiCard";
import VentasChart from "../components/charts/VentasChart";
import IngresosChart from "../components/charts/IngresosChart";
import RankingTable from "../components/ranking/RankingTable";
import {
  getEstadisticasGenerales,
  getTopArtistas,
  getTopConciertos
} from "../api/estadisticasApi";
import {
  ventasPorConcierto,
  ingresosPorConcierto,
  topArtistas,
  topConciertos
} from "../mock/estadisticasMock";


export default function Dashboard() {
  const [kpis, setKpis] = useState(null);

  useEffect(() => {
    getEstadisticasGenerales().then(res => setKpis(res.data));
  }, []);

  if (!kpis) {
  return (
    <div className="dashboard">
      <p>Cargando estadísticas...</p>
    </div>
  );
}


  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Análisis y Estadísticas</h1>
        <span>Rol: Analista</span>
      </header>

      <section className="kpi-grid">
        <KpiCard titulo="Entradas vendidas" valor={kpis.entradasVendidas} />
        <KpiCard titulo="Ingresos totales" valor={`${kpis.ingresosTotales} €`} />
        <KpiCard titulo="Conciertos" valor={kpis.conciertosFinalizados} />
        <KpiCard titulo="Ocupación media" valor={`${kpis.ocupacionMedia}%`} />
      </section>

      <section className="charts-grid">
        <VentasChart data={ventasPorConcierto} />
        <IngresosChart data={ingresosPorConcierto} />
      </section>

        <section className="ranking-grid">
        <RankingTable
            titulo="Top Artistas"
            columnas={["Artista", "Entradas"]}
            datos={topArtistas.map(a => ({
            Artista: a.nombre,
            Entradas: a.entradas
            }))}
        />

        <RankingTable
            titulo="Top Conciertos"
            columnas={["Concierto", "Ingresos (€)"]}
            datos={topConciertos.map(c => ({
            Concierto: c.nombre,
            "Ingresos (€)": c.ingresos
            }))}
        />
        </section>

    </div>
  );
}
