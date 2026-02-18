import Tarjeta from '../comunes/Tarjeta';
import Boton from '../comunes/Boton';
import './CrearTransporte.css';

const CrearTransporte = () => {
  return (
    <div className="contenedor">
      <h1 className="titulo-pagina">Crear transporte</h1>

      <Tarjeta>
        <form className="form-transporte">

          <div className="grupo-campo">
            <label>Tipo de transporte</label>
            <select>
              <option>Autobús</option>
              <option>Tren</option>
              <option>Avión</option>
            </select>
          </div>

          <div className="grupo-campo">
            <label>Precio (€)</label>
            <input type="number" placeholder="Ej: 25" />
          </div>

          <div className="grupo-campo">
            <label>Lugar de salida</label>
            <input type="text" placeholder="Ej: Bilbao" />
          </div>

          <div className="grupo-campo">
            <label>Hora de salida</label>
            <input type="time" />
          </div>

          <div className="grupo-campo">
            <label>Número de plazas</label>
            <input type="number" placeholder="Ej: 50" />
          </div>

          <div className="grupo-campo">
            <label>Concierto asociado</label>
            <select>
              <option>Coldplay Madrid</option>
              <option>Imagine Dragons</option>
            </select>
          </div>

          <div className="form-acciones">
            <Boton>Crear transporte</Boton>
          </div>

        </form>
      </Tarjeta>
    </div>
  );
};

export default CrearTransporte;
