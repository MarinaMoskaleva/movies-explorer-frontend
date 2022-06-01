import React from 'react';
import './PinkColor.css';
import Header from '../../Header/Header';
import Promo from '../Promo/Promo';

function PinkColor() {
    return (
        <div className="pink-color">
            <Header isActive={false}/>
            <Promo />
        </div>
    );
}

export default PinkColor;