import React from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom/dist';
import { FaArrowLeft } from 'react-icons/fa';

function LoginPage() {


  return (
    <div className="login-page body-login" >
      <div className="form-login">
        <form className="login-form">
          <input type="text" placeholder="usuario"/>
          <input type="password" placeholder="contraseña"/>
          <button>Acceder</button>
          <p className="message">¿No tienes una cuenta? <a href="#">Crear una cuenta</a></p>
        </form>
      </div>
      <div className="button-div">
        <Link to="/">
          <button className="button-return"><FaArrowLeft /></button>
        </Link>
        <p className="button-text">Volver a la tienda</p>
      </div>
    </div>
  );
}

export default LoginPage ;

