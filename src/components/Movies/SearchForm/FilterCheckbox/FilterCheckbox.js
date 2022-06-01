import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
    return (
        <div className="filter-checkbox">
            <label className="filter-checkbox_text">
                <input className="filter-checkbox_input" type="checkbox" id="short" name="short-films" value="yes" />
                <span className="visible-checkbox"></span>
                <span className="filter-checkbox_text">Короткометражки</span>
            </label>
        </div>
    );
}

export default FilterCheckbox;