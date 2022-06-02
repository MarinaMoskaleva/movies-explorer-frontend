import React, { useState } from "react";
import './Profile.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import { profileErrors } from '../../utils/errorMessage';

function Profile() {
    const [visibleButton, setVisibleButton] = useState('');
    const [hideEdit, setHideEdit] = useState('');
    const [hideSignOut, setHideSignOut] = useState('');
    const [inputIsReadOnly, setInputIsReadOnly] = useState(true);
    const [valueName, setValueName] = useState("Marina");
    const [valueEmail, setValueEmail] = useState("pochta@yandex.ru");
    const [errorGeneralEdit, setGeneralErrorEdit] = useState('');
    const [errorEmailEdit, setErrorEmailEdit] = useState('');
    const [errorButtonSave, setErrorButtonSave] = useState('');

    function onEdit(e){
        setVisibleButton('profile__button-save_active');
        setHideEdit('profile__edit_hide');
        setHideSignOut('profile__sign-out_hide');
        setInputIsReadOnly(false);
    }
    function onSignOut(e){
        console.log('onSignOut');
    }
    function onButtonSaveClick(e){
        e.preventDefault();
        setGeneralErrorEdit('profile__error_show');
        setErrorButtonSave('profile__button-save_error');
    }
    const handleChangeName = event => {
        setValueName(event.target.value)
    }
    const handleChangeEmail = event => {
        setValueEmail(event.target.value)
    }
    return (
        <div className="profile">
            <Header isActive={true}/>
            <form className="profile__form">
                <div className="profile__form-top">
                    <p className="profile__greeting">Привет, Марина!</p>
                    <div className="profile__data">
                        <div className="profile__data-line">
                            <p className="profile__data-text">Имя</p>
                            <input 
                                className="profile__data-input" 
                                type="text" 
                                value={valueName} 
                                onChange={handleChangeName}
                                readOnly={inputIsReadOnly}
                            ></input>
                        </div>
                        <div className="profile__data-line">
                            <p className="profile__data-text">E-mail</p>
                            <input 
                                className="profile__data-input" 
                                type="email" 
                                value={valueEmail} 
                                onChange={handleChangeEmail}
                                readOnly={inputIsReadOnly}
                            ></input>
                        </div>
                        <div className="profile__data-line"></div>
                    </div>
                </div>
                <div className="profile__form-bottom">
                    <span className={`profile__error ${errorGeneralEdit}`}>{profileErrors.genError}</span>
                    <p className={`profile__edit ${hideEdit}`} onClick={onEdit}>Редактировать</p>
                    <Link to='/' onClick={onSignOut} className={`profile__sign-out ${hideSignOut}`}>Выйти из аккаунта</Link>
                    <button className={`profile__button-save ${visibleButton} ${errorButtonSave}`} onClick={onButtonSaveClick} type="submit">Сохранить</button>
                </div>
            </form>
        </div>
    );
}

export default Profile;