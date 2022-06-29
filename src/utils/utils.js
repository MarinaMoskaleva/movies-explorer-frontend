import {SHORT_FILM_DURATION} from './constants';
export function filterMoviesArray(isShort, moviesArray, keywords, savedMoviesArray=[]){
    const keywordsArr = keywords.replace(/\s{2,}/g, ' ').trim().split(' ').map(item => item.toLowerCase());
    const regExp = new RegExp(keywordsArr.join("|"));
    
    const resultMovies = savedMoviesArray.length !== 0 ? 
                            markSavedMovies(moviesArray.filter(item => regExp.test(item.nameRU.toLowerCase())), savedMoviesArray)
                            : moviesArray.filter(item => regExp.test(item.nameRU.toLowerCase()));
    if (!isShort) {
        return resultMovies.filter(item => item.duration > SHORT_FILM_DURATION);
    }
    
    return resultMovies;
}

export function markSavedMovies(moviesArray, savedMoviesArray){
    return moviesArray.map(item => {
        const resultItem = item;
        resultItem.isSaved = false;
        for (let i=0; i<savedMoviesArray.length; i++){
            if (item.movieId === savedMoviesArray[i].movieId){
                resultItem.isSaved = true;
                resultItem._id = savedMoviesArray[i]._id;
                break;
            }
        }
        return resultItem;
    })
}