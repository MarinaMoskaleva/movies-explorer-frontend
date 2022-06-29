import React from "react";
import './EvenMore.css';

function EvenMore({onClick}) {
    return (
        <button className="even-more" onClick={onClick}>Еще</button>
    );
}

export default EvenMore;