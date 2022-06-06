import React from 'react';
import './AboutProject.css';
import MainLine from '../MainLine/MainLine';

const AboutProject = React.forwardRef((props, ref) => (
    <div className="about-project"  ref={ref}>
            <MainLine text='О проекте' />
            <div className="about-project__info">
                <div className="about-project__text">
                    <h2 className="about-project__text-title">Дипломный проект включал 5 этапов</h2>
                    <p className="about-project__text-paragraph">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="about-project__text">
                    <h2 className="about-project__text-title">На выполнение диплома ушло 5 недель</h2>
                    <p className="about-project__text-paragraph">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="about-project__scale" >
                <div className="about-project__scale-back">
                    <div className="about-project__ceil">1 неделя</div>
                    <p className="about-project__caption">Back-end</p>
                </div>
                <div className="about-project__scale-front">
                    <div className="about-project__ceil about-project__ceil_gray">4 неделя</div>
                    <p className="about-project__caption">Front-end</p>
                </div>
            </div>
        </div>
  ));

export default AboutProject;