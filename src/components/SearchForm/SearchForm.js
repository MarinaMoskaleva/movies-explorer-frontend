import React from 'react';
import './SearchForm.css';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';

function SearchForm() {
    return (
        <form className="search-form">
            <div className="search-form__find">
                <input className="search-form__input" placeholder='Фильм' required></input>
                <button className="search-form__button"></button>
            </div>
            <FilterCheckbox />
        </form>
    );
}

export default SearchForm;