export default function RankingTable({ titulo, columnas, datos }) {
  return (
    <div style={styles.container}>
      <h3>{titulo}</h3>
      <table style={styles.table}>
        <thead>
          <tr>
            {columnas.map(col => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {datos.map((fila, index) => (
            <tr key={index}>
              {Object.values(fila).map((valor, i) => (
                <td key={i}>{valor}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  container: {
    background: "#1e1e1e",
    color: "white",
    padding: "1rem",
    borderRadius: "8px"
  },
  table: {
    width: "100%",
    borderCollapse: "collapse"
  }
};
