import React, { useEffect, useState } from "react";
import './Profile.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import { EMAIL_REGEX } from '../../utils/constants';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../customHooks/validation';

function Profile({handleProfile, info, handleSignOut}) {
    const currentUser = React.useContext(CurrentUserContext);
    
    const [isInputInactive, setInputInactive] = useState(true);

    const { values, handleChange, resetForm, errors, isValid } = useFormWithValidation();

    function handleSubmit(e){
        e.preventDefault();
        if (!values.name || !values.email ){
            return;
        }
        handleProfile({name: values.name, email: values.email});
    }

    useEffect(() => {
        if (currentUser) {
          resetForm(currentUser, {}, false);
        }
      }, [currentUser, resetForm]);

      useEffect(() => {
        if (info.type === 'success') {
            setInputInactive(true)
        }
      }, [info]);

    

    function onEdit(e){
        setInputInactive(false);
        resetForm(currentUser, {}, false);
    }
    function onSignOut(e){
        handleSignOut();
    }
    return (
        <div className="profile">
            <Header isActive={true}/>
            <form className="profile__form">
                <div className="profile__form-top">
                    <p className="profile__greeting">Привет, {currentUser.name}!</p>
                    <div className="profile__data">
                        <div className="profile__data-line">
                            <p className="profile__data-text">Имя</p>
                            <label className="profile__data-label" >
                                <input 
                                    className="profile__data-input" 
                                    name='name'
                                    type="text"
                                    required
                                    minLength="2"
                                    maxLength="30"
                                    value={values.name || ''}
                                    onChange={handleChange}
                                    readOnly={isInputInactive}
                                ></input>
                                <span className='profile__error-validation profile__error-validation_show'>{errors.name || ''}</span>
                            </label>
                        </div>
                        <div className="profile__data-line">
                            <p className="profile__data-text">E-mail</p>
                            <label className="profile__data-label" >
                                <input 
                                    className="profile__data-input" 
                                    type="email"
                                    name='email'
                                    required
                                    pattern={EMAIL_REGEX}
                                    value={values.email || ''}
                                    onChange={handleChange}
                                    readOnly={isInputInactive}
                                ></input>
                                <span className='profile__error-validation profile__error-validation_show'>{errors.email || ''}</span>
                            </label>
                        </div>
                        <div className="profile__data-line"></div>
                    </div>
                </div>
                { isInputInactive ? 
                <div className="profile__form-bottom">
                    <span className='profile__info profile__info_success'>{info.type === 'success' ? info.text : ''}</span>
                    <p className='profile__edit' onClick={onEdit}>Редактировать</p>
                    <Link to='/' onClick={onSignOut} className='profile__sign-out'>Выйти из аккаунта</Link>
                </div>
                :
                <div className="profile__form-bottom">
                    <span className='profile__info profile__info_error'>{info.type === 'error' ? info.text : ''}</span>
                    <button 
                        className={`profile__button-save
                            ${info.type === 'error' ? 'profile__button-save_error' : ''}
                            ${!isValid && 'profile__button-save_error'}`
                        }
                        onClick={handleSubmit} 
                        type="submit" 
                        disabled={!isValid}
                    >Сохранить</button>
                </div>
                }
               
            </form>
        </div>
    );
}

export default Profile;