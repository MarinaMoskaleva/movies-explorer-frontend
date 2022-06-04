import React, { useState, useEffect } from "react";
import './Login.css'
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import { loginErrors } from '../../utils/errorMessage';
import {EMAIL_REGEX} from '../../utils/constants';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const [emailError, setEmailError] = useState('Поле Email не должно быть пустым.');
    const [passError, setPassError] = useState('Поле Пароль не должно быть пустым.');
    const [emailDirty, setEmailDirty] = useState(false);
    const [passDirty, setPassDirty] = useState(false);
    const [formValid, setFormValid] = useState(false);

    function handleEmailChange(e){
        setEmail(e.target.value);
        if (!String(e.target.value).toLowerCase().match(EMAIL_REGEX)){
            setEmailError('Некорректный email');
        } else {
            setEmailError('');
        }
    }
    function handlePasswordChange(e){
        setPassword(e.target.value);
        if (e.target.value.length < 2){
            setPassError('Обязательная длина поля от 2 символов.');
        } else {
            setPassError('');
        }
    }
    function handleSubmit(e){
        e.preventDefault();
    }
    function blurHandler(e) {
        switch (e.target.name){
            case 'email':
                setEmailDirty(true);
                break;
            case 'pass':
                setPassDirty(true);
                break;
            default:
                break;
        }
    }
    useEffect(()=>{
        if (emailError || passError){
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [emailError, passError]);

    return (
        <section className="login">
            <div className="login__container">
                <Logo />
                <form className="login__form" name='login'>
                <h2 className="login__greeting">Рады видеть!</h2>
                    <label className="login__form-field">Email
                        <input
                            id="login-email-input"
                            type="text"
                            className="login__input"
                            name="email"
                            required
                            placeholder="Email"
                            value={email}
                            onChange={handleEmailChange}
                            onBlur={blurHandler}
                        />
                        <span className={`login__error-validation ${(emailDirty && emailError) && 'login__error-validation_show'}`}>{emailError}</span>
                    </label>
                    <label className="login__form-field">Password
                        <input
                            id="login-password-input"
                            type="password"
                            className="login__input"
                            name="pass"
                            required
                            placeholder="Пароль"
                            minLength="2"
                            value={password}
                            onChange={handlePasswordChange}
                            onBlur={blurHandler}
                        />
                        <span className={`login__error-validation ${(passDirty && passError) && 'login__error-validation_show'}`}>{passError}</span>
                    </label>
                    <span className={`login__error ${error}`}>{loginErrors.wrongData}</span>
                    <button 
                        className={`login__button ${!formValid && 'login__button_disabled'}`} 
                        onClick={handleSubmit} 
                        type="submit" 
                        disabled={!formValid}
                    >Войти</button>
                    <div className="login__caption">
                        <p className="login__caption-text">Ещё не зарегистрированы?</p>
                        <Link to="/signup" className="login__caption-link">Регистрация</Link>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Login;