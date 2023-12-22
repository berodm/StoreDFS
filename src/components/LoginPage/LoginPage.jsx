import React from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom/dist';

function LoginPage() {

  const styles = {
    backgroundColor: '#f18e7c', // Substitua pela cor desejada
  };

  return (
    <div style={styles}>
      <div className="login-page body-login" >
        <div className="form-login">
          <form className="login-form">
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password"/>
            <button>login</button>
            <p className="message">Not registered? <a href="#">Create an account</a></p>
          </form>
        </div>
        <Link to="/home">
          <button className="button-return"></button>
        </Link>
      </div>
    </div>
  );
}

export default LoginPage ;

