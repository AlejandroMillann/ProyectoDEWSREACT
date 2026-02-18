import './Boton.css';

const Boton = ({ children, tipo = "primario", onClick }) => {
  return (
    <button className={`boton boton-${tipo}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Boton;
