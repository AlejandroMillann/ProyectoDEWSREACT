import Tarjeta from '../comunes/Tarjeta';
import Boton from '../comunes/Boton';
import './MisBilletes.css';

const MisBilletes = () => {
  const billetes = [
    {
      concierto: "Coldplay Madrid",
      transporte: "Autobús",
      salida: "Bilbao",
      hora: "18:00",
      precio: "25€",
      estado: "ACTIVO"
    },
    {
      concierto: "Arctic Monkeys",
      transporte: "Tren",
      salida: "Vitoria",
      hora: "17:30",
      precio: "30€",
      estado: "CANCELADO"
    }
  ];

  return (
    <div className="contenedor">
      <h1 className="titulo-pagina">Mis billetes</h1>

      <Tarjeta>
        <table className="tabla-billetes">
          <thead>
            <tr>
              <th>Concierto</th>
              <th>Transporte</th>
              <th>Salida</th>
              <th>Hora</th>
              <th>Precio</th>
              <th>Estado</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {billetes.map((b, index) => (
              <tr key={index}>
                <td>{b.concierto}</td>
                <td>{b.transporte}</td>
                <td>{b.salida}</td>
                <td>{b.hora}</td>
                <td>{b.precio}</td>

                <td>
                  <span className={`badge ${b.estado === "ACTIVO" ? "activo" : "cancelado"}`}>
                    {b.estado}
                  </span>
                </td>

                <td>
                  {b.estado === "ACTIVO" && (
                    <Boton tipo="peligro">Cancelar</Boton>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Tarjeta>
    </div>
  );
};

export default MisBilletes;
