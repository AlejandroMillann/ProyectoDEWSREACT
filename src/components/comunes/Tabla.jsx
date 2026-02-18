import './Tabla.css';

const Tabla = ({ columnas, datos }) => {
  return (
    <table className="tabla">
      <thead>
        <tr>
          {columnas.map((col, index) => (
            <th key={index}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {datos.map((fila, i) => (
          <tr key={i}>
            {fila.map((celda, j) => (
              <td key={j}>{celda}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tabla;
