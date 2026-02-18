import Tarjeta from '../comunes/Tarjeta';
import Boton from '../comunes/Boton';
import './ListaTransportes.css';

const ListaTransportes = () => {
  const transportes = [
    {
      tipo: "Autobús",
      salida: "Bilbao",
      hora: "18:00",
      precio: 25,
      plazas: 50,
      vendidas: 38
    },
    {
      tipo: "Tren",
      salida: "Vitoria",
      hora: "17:30",
      precio: 30,
      plazas: 100,
      vendidas: 100
    }
  ];

  return (
    <div className="contenedor">
      <h1 className="titulo-pagina">Transportes - Coldplay Madrid</h1>

      <div className="grid-transportes-admin">
        {transportes.map((t, index) => {
          const disponibles = t.plazas - t.vendidas;
          const porcentaje = (t.vendidas / t.plazas) * 100;

          return (
            <Tarjeta key={index}>
              <div className="card-admin">
                <div className="header-card">
                  <h3>{t.tipo}</h3>
                  <span className="hora">{t.hora}</span>
                </div>

                <div className="info-admin">
                  <p><strong>Salida:</strong> {t.salida}</p>
                  <p><strong>Precio:</strong> {t.precio}€</p>
                </div>

                <div className="progreso-container">
                  <div className="progreso-info">
                    <span>{t.vendidas} / {t.plazas} plazas</span>
                    <span>{disponibles} disponibles</span>
                  </div>

                  <div className="barra-progreso">
                    <div
                      className="barra-relleno"
                      style={{ width: `${porcentaje}%` }}
                    />
                  </div>
                </div>

                <div className="acciones-admin">
                  <Boton>Ver billetes</Boton>
                  {disponibles === 0 && (
                    <Boton tipo="peligro">Eliminar</Boton>
                  )}
                </div>
              </div>
            </Tarjeta>
          );
        })}
      </div>
    </div>
  );
};

export default ListaTransportes;
