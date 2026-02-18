import Tarjeta from '../comunes/Tarjeta';
import Boton from '../comunes/Boton';
import './ComprarBillete.css';

const ComprarBillete = () => {
  const transportes = [
    {
      concierto: "Coldplay Madrid",
      tipo: "Autobús",
      salida: "Bilbao",
      hora: "18:00",
      precio: 25,
      plazas: 12
    },
    {
      concierto: "Coldplay Madrid",
      tipo: "Tren",
      salida: "Vitoria",
      hora: "17:30",
      precio: 30,
      plazas: 0
    }
  ];

  return (
    <div className="contenedor">
      <h1 className="titulo-pagina">Comprar billete</h1>

      <div className="grid-transportes">
        {transportes.map((t, index) => (
          <Tarjeta key={index}>
            <div className="card-transporte">
              <h3 className="concierto">{t.concierto}</h3>

              <div className="info">
                <span>{t.tipo}</span>
                <span>{t.salida}</span>
                <span>{t.hora}</span>
              </div>

              <div className="footer-card">
                <div className="precio">
                  {t.precio}€
                </div>

                <div className={`plazas ${t.plazas === 0 ? "agotado" : ""}`}>
                  {t.plazas > 0
                    ? `${t.plazas} plazas disponibles`
                    : "Sin plazas"}
                </div>
              </div>

              {t.plazas > 0 ? (
                <Boton>Comprar</Boton>
              ) : (
                <Boton tipo="peligro">No disponible</Boton>
              )}
            </div>
          </Tarjeta>
        ))}
      </div>
    </div>
  );
};

export default ComprarBillete;
