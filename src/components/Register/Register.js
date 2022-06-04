import React, { useState, useEffect } from "react";
import './Register.css'
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import { registerErrors } from '../../utils/errorMessage';
import {EMAIL_REGEX} from '../../utils/constants';

function Register() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [nameError, setNameError] = useState('Поле Имя не должно быть пустым.');
    const [emailError, setEmailError] = useState('Поле Email не должно быть пустым.');
    const [passError, setPassError] = useState('Поле Пароль не должно быть пустым.');
    const [nameDirty, setNameDirty] = useState(false);
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
    function handleNameChange(e){
        setName(e.target.value);
        if ((e.target.value.length < 2) || (e.target.value.length > 30)){
            setNameError('Обязательная длина поля от 2 до 30 символов.');
        } else {
            setNameError('');
        }
    }
    function handleSubmit(e){
        e.preventDefault();
    }
    function blurHandler(e) {
        switch (e.target.name){
            case 'name':
                setNameDirty(true);
                break;
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
        if (nameError || emailError || passError){
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [nameError, emailError, passError]);

    return (
        <section className="register">
            <div className="register__container">
                <Logo />
                <form className="register__form" name='register'>
                <h2 className="register__greeting">Добро пожаловать!</h2>
                    <label className="register__form-field">Имя
                        <input
                            id="register-name-input"
                            type="text"
                            className="register__input"
                            name="name"
                            required
                            placeholder="Имя"
                            minLength="2"
                            maxLength="30"
                            value={name}
                            onChange={handleNameChange}
                            onBlur={blurHandler}
                        />
                        <span className={`register__error-validation ${(nameDirty && nameError) && 'register__error-validation_show'}`}>{nameError}</span>
                    </label>
                    <label className="register__form-field">Email
                        <input
                            id="register-email-input"
                            type="text"
                            className="register__input"
                            name="email"
                            required
                            placeholder="Email"
                            value={email}
                            onChange={handleEmailChange}
                            onBlur={blurHandler}
                        />
                        <span className={`register__error-validation ${(emailDirty && emailError) && 'register__error-validation_show'}`}>{emailError}</span>
                    </label>
                    <label className="register__form-field">Пароль
                        <input
                            id="register-password-input"
                            type="password"
                            className="register__input"
                            name="pass"
                            required
                            placeholder="Пароль"
                            value={password}
                            onChange={handlePasswordChange}
                            onBlur={blurHandler}
                        />
                        <span className={`register__error-validation ${(passDirty && passError) && 'register__error-validation_show'}`}>{passError}</span>
                    </label>
                    <span className={`register__error ${error}`}>{registerErrors.genError}</span>
                    <button 
                        className={`register__button ${!formValid && 'register__button_disabled'}`} 
                        onClick={handleSubmit} 
                        type="submit" 
                        disabled={!formValid}
                    >Зарегистрироваться</button>
                    <div className="register__caption">
                        <p className="register__caption-text">Уже зарегистрированы?</p>
                        <Link to="/signin" className="register__caption-link">Войти</Link>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Register;