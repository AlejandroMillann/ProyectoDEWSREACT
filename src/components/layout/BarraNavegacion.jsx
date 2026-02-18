import './BarraNavegacion.css';

const BarraNavegacion = ({ rol, setVistaActiva, vistaActiva, setRol }) => {
  return (
    <nav className="barra">
      <div className="barra-contenido">
        <div className="logo">CONCIERTOS</div>

        <div className="links">
          {rol === "ADMIN" && (
            <>
              <button
                className={vistaActiva === "conciertos" ? "activo" : ""}
                onClick={() => setVistaActiva("conciertos")}
              >
                Conciertos
              </button>

              <button
                className={vistaActiva === "transportes" ? "activo" : ""}
                onClick={() => setVistaActiva("transportes")}
              >
                Transportes
              </button>

              <button
                className={vistaActiva === "crear" ? "activo" : ""}
                onClick={() => setVistaActiva("crear")}
              >
                Crear
              </button>
            </>
          )}

          {rol === "CLIENTE" && (
            <>
              <button
                className={vistaActiva === "mis-billetes" ? "activo" : ""}
                onClick={() => setVistaActiva("mis-billetes")}
              >
                Mis billetes
              </button>

              <button
                className={vistaActiva === "comprar" ? "activo" : ""}
                onClick={() => setVistaActiva("comprar")}
              >
                Comprar
              </button>
            </>
          )}
        </div>

        <div className="rol-switch">
          <select onChange={(e) => setRol(e.target.value)} value={rol}>
            <option value="ADMIN">ADMIN</option>
            <option value="CLIENTE">CLIENTE</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default BarraNavegacion;
