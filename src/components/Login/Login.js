import React, { useState } from "react";
import './Login.css'
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import { loginErrors } from '../../utils/errorMessage';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    function handleEmailChange(e){
        setEmail(e.target.value);
    }
    function handlePasswordChange(e){
        setPassword(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault();
    }

    return (
        <section className="login">
            <Logo />
            <form className="login__form" name='login'>
                <div className="login__form-top">
                    <h2 className="login__greeting">Рады видеть!</h2>
                    <label className="login__form-field">Email
                        <input
                            id="login-email-input"
                            type="text"
                            className="login__input"
                            name="login-email"
                            required
                            placeholder="Email"
                            minLength="2"
                            maxLength="30"
                            value={email}
                            onChange={handleEmailChange}
                        />
                        <span className="email-input-error login__error-validation"></span>
                    </label>
                    <label className="login__form-field">Password
                        <input
                            id="login-password-input"
                            type="password"
                            className="login__input"
                            name="login-password"
                            required
                            placeholder="Пароль"
                            minLength="2"
                            maxLength="30"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        <span className="password-input-error login__error-validation"></span>
                    </label>
                </div>
                <div className="login__form-bottom">
                    <span className={`login__error ${error}`}>{loginErrors.wrongData}</span>
                    <button className="login__button" onClick={handleSubmit} type="submit">Войти</button>
                    <div className="login__caption">
                        <p className="login__caption-text">Ещё не зарегистрированы?</p>
                        <Link to="/signup" className="login__caption-link">Регистрация</Link>
                    </div>
                </div>
            </form>
        </section>
    );
}

export default Login;