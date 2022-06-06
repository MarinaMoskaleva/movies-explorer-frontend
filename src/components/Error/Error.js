import React from 'react';
import './Error.css';
import { useHistory } from 'react-router-dom';
import { errorsWithCode } from '../../utils/errorMessage';

function Error() {
    const history = useHistory();
    function onGoBackClick(e){
        history.push('/');
    }
    return (
        <section className="error">
            <h3 className="error__code">{errorsWithCode[0].code}</h3>
            <p className="error__text">{errorsWithCode[0].text}</p>
            <p className="error__go-back" onClick={onGoBackClick}>Назад</p>
            
        </section>
    );
}

export default Error;