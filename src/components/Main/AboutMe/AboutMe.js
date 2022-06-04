import React from 'react';
import './AboutMe.css';
import MainLine from '../MainLine/MainLine';

function AboutMe() {
    return (
        <div className="about-me">
            <MainLine text=' Студент' />
            <div className="about-me__info">
                <div className="about-me__text">
                    <h2 className="about-me__name">Марина</h2>
                    <p className="about-me__about">Фронтенд-разработчик, 32 года</p>
                    <p className="about-me__desc">
                        Я родилась и живу в Пензе, закончила ПГУ по специальности "математика", получила ученую степень к.ф.-м.н. по специальности "Математическое моделирование, численные методы и комплексы программ". 
                        Я увлекаюсь корейскими сериалами, а ещё люблю вязать крючком.  
                        С 2017 года работаю в ПГУ. Сейчас прохожу курс по веб-разработке, 
                        после этого хочу сменить сферу деятельности и найти работу в области фронтед-разработки.
                    </p>
                    <div className="about-me__links">
                        <a href='https://www.facebook.com/' target="_blank" rel="noreferrer" className="about-me__link">Facebook</a>
                        <a href='https://github.com/MarinaMoskaleva' target="_blank" rel="noreferrer" className="about-me__link">Github</a>
                    </div>
                </div>
                <div className="about-me__img"></div>
            </div>
        </div>
    );
}

export default AboutMe;