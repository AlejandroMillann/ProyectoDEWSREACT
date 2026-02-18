import './Login.css';
import Boton from '../comunes/Boton';
import Tarjeta from '../comunes/Tarjeta';

const Login = () => {
  return (
    <div className="login-container">
      <Tarjeta>
        <h2 className="login-title">Iniciar sesión</h2>

        <div className="campo">
          <label>Email</label>
          <input type="email" placeholder="correo@ejemplo.com" />
        </div>

        <div className="campo">
          <label>Contraseña</label>
          <input type="password" placeholder="••••••••" />
        </div>

        <div className="campo">
          <label>Rol</label>
          <select>
            <option>ADMIN</option>
            <option>PROMOTOR</option>
            <option>CLIENTE</option>
          </select>
        </div>

        <Boton>Entrar</Boton>
      </Tarjeta>
    </div>
  );
};

export default Login;
