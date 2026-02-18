import Tarjeta from '../comunes/Tarjeta';
import Boton from '../comunes/Boton';
import './ListaConciertos.css';

const ListaConciertos = () => {
  const conciertos = [
    {
      nombre: "Coldplay Madrid",
      fecha: "12/07/2026",
      estado: "ACTIVO"
    },
    {
      nombre: "Arctic Monkeys",
      fecha: "20/06/2026",
      estado: "CANCELADO"
    },
    {
      nombre: "Imagine Dragons",
      fecha: "01/05/2026",
      estado: "FINALIZADO"
    }
  ];

  return (
    <div className="contenedor">
      <h1 className="titulo-pagina">Gestión de conciertos</h1>

      <Tarjeta>
        <table className="tabla-admin">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Fecha</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {conciertos.map((c, index) => (
              <tr key={index}>
                <td>{c.nombre}</td>
                <td>{c.fecha}</td>

                <td>
                  <span className={`badge-estado ${c.estado.toLowerCase()}`}>
                    {c.estado}
                  </span>
                </td>

                <td className="acciones">
                  {c.estado === "ACTIVO" && (
                    <Boton tipo="peligro">Cancelar</Boton>
                  )}
                  <Boton>Ver transportes</Boton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Tarjeta>
    </div>
  );
};

export default ListaConciertos;
