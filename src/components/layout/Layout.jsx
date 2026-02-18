import { useState, useEffect } from 'react';
import BarraNavegacion from './BarraNavegacion';

import MisBilletes from '../cliente/MisBilletes';
import ComprarBillete from '../cliente/ComprarBillete';

import ListaConciertos from '../admin/ListaConciertos';
import ListaTransportes from '../admin/ListaTransportes';
import CrearTransporte from '../admin/CrearTransporte';

const Layout = () => {
  const [rol, setRol] = useState("ADMIN");
  const [vistaActiva, setVistaActiva] = useState("conciertos");

  useEffect(() => {
    if (rol === "ADMIN") {
      setVistaActiva("conciertos");
    } else {
      setVistaActiva("mis-billetes");
    }
  }, [rol]);

  const renderVista = () => {
    if (rol === "CLIENTE") {
      if (vistaActiva === "mis-billetes") return <MisBilletes />;
      if (vistaActiva === "comprar") return <ComprarBillete />;
    }

    if (rol === "ADMIN") {
      if (vistaActiva === "conciertos") return <ListaConciertos />;
      if (vistaActiva === "transportes") return <ListaTransportes />;
      if (vistaActiva === "crear") return <CrearTransporte />;
    }

    return null;
  };

  return (
    <>
      <BarraNavegacion
        rol={rol}
        setVistaActiva={setVistaActiva}
        vistaActiva={vistaActiva}
        setRol={setRol}
      />
      {renderVista()}
    </>
  );
};

export default Layout;
