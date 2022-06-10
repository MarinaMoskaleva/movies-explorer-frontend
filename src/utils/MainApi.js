import {mainUrl} from './constants.js';

class MainApi {
    constructor(mainUrl) {
        this._mainUrl = mainUrl;
    }

    _getResponseData(res) {
      if (res.ok) {
       return res.json();
      }
      const err = new Error(`Ошибка: ${res.status}`);
      err.statusCode = res.status;
      return Promise.reject(err);
    }
    
    register(name, email, password){
        console.log(name, email, password);
      return fetch(`${this._mainUrl}/signup`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "password": password,
          "email": email,
          "name": name
        })
      })
      .then(this._getResponseData);
    };
    login(email, password){
        return fetch(`${this._mainUrl}/signin`, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            "password": password,
            "email": email
          })
        })
        .then(this._getResponseData);
      };
      getUser(){
        return fetch(`${this._mainUrl}/users/me`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        .then(this._getResponseData);
      }
      patchUserData(newData) {
        console.log('newData',newData);
        return fetch(`${this._mainUrl}/users/me`, {
          method: 'PATCH',
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: newData.name,
            email: newData.email
          })
        })
        .then(this._getResponseData);
      }
      getContent(token) {
        return fetch(`${this._mainUrl}/users/me`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          }
        })
        .then(res => res.json())
        .then(data => data)
      }
    
}

const mainApi = new MainApi(mainUrl);

export default mainApi;