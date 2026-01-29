import axios from "axios";
import {
  estadisticasGenerales,
  topArtistas,
  topConciertos
} from "../mock/estadisticasMock";

// Simulamos llamadas HTTP con Promises
export const getEstadisticasGenerales = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ data: estadisticasGenerales });
    }, 500);
  });
};

export const getTopArtistas = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ data: topArtistas });
    }, 500);
  });
};

export const getTopConciertos = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ data: topConciertos });
    }, 500);
  });
};
