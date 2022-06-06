import React from 'react';
import './PinkColor.css';
import Header from '../../Header/Header';
import Promo from '../Promo/Promo';

function PinkColor({handleClick}) {
    return (
        <div className="pink-color">
            <Header isActive={false}/>
            <Promo handleClick={handleClick}/>
        </div>
    );
}

export default PinkColor;