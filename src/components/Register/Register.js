import React, { useState } from "react";
import './Register.css'
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import { registerErrors } from '../../utils/errorMessage';

function Register() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    function handleEmailChange(e){
        setEmail(e.target.value);
    }
    function handlePasswordChange(e){
        setPassword(e.target.value);
    }
    function handleNameChange(e){
        setName(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault();
    }

    return (
        <section className="register">
            <Logo />
            <form className="register__form" name='register'>
            <h2 className="register__greeting">Добро пожаловать!</h2>
                <label className="register__form-field">Имя
                    <input
                        id="register-name-input"
                        type="text"
                        className="register__input"
                        name="register-name"
                        required
                        placeholder="Имя"
                        minLength="2"
                        maxLength="30"
                        value={name}
                        onChange={handleNameChange}
                    />
                    <span className="name-input-error register__error-validation"></span>
                </label>
                <label className="register__form-field">Email
                    <input
                        id="register-email-input"
                        type="text"
                        className="register__input"
                        name="register-email"
                        required
                        placeholder="Email"
                        minLength="2"
                        maxLength="30"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <span className="email-input-error register__error-validation"></span>
                </label>
                <label className="register__form-field">Password
                    <input
                        id="register-password-input"
                        type="password"
                        className="register__input"
                        name="register-password"
                        required
                        placeholder="Пароль"
                        minLength="2"
                        maxLength="30"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <span className="password-input-error register__error-validation"></span>
                </label>
                <span className={`register__error ${error}`}>{registerErrors.genError}</span>
                <button className="register__button" onClick={handleSubmit} type="submit">Зарегистрироваться</button>
                <div className="register__caption">
                    <p className="register__caption-text">Уже зарегистрированы?</p>
                    <Link to="/signin" className="register__caption-link">Войти</Link>
                </div>
            </form>
        </section>
    );
}

export default Register;