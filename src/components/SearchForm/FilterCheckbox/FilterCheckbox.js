import React, { useState } from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({onCheckBoxClick, initState}) {
    const [checked, setChecked] = useState(initState);
   
    function changeCheckbox() { 
        setChecked(!checked);
        onCheckBoxClick(!checked);
    }
    return (
        <div className="filter-checkbox">
            <label className="filter-checkbox_text">
                <input className="filter-checkbox_input" type="checkbox" checked={checked} onChange={changeCheckbox} id="short" name="short-films" />
                <span className="visible-checkbox"></span>
                <span className="filter-checkbox_text">Короткометражки</span>
            </label>
        </div>
    );
}

export default FilterCheckbox;