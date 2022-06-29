import { moviesUrl } from './constants.js';

class MoviesApi {
    constructor(moviesUrl) {
        this._moviesUrl = moviesUrl;
    }

    _getResponseData(res) {
      if (res.ok) {
       return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    
    getMovies(){
      return fetch(`${this._moviesUrl}`)
      .then(this._getResponseData);
    }
}

const moviesApi = new MoviesApi(moviesUrl);

export default moviesApi;