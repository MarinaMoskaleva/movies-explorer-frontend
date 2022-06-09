import {SHORT_FILM_DURATION} from './constants';
export function filterMoviesArray(isShort, moviesArray, keywords){
    const keywordsArr = keywords.replace(/\s{2,}/g, ' ').trim().split(' ').map(item => item.replace(/[,\.!\?]/g, '').toLowerCase());
    const regExp = new RegExp(keywordsArr.join("|"));
    const resultMovies = moviesArray.filter(item => regExp.test(item.nameRU.toLowerCase()));
    if (!isShort) {
        return resultMovies.filter(item => item.duration > SHORT_FILM_DURATION);
    }
    return resultMovies;
} 