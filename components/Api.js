export default class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers
    }

    getCardList() {
        return fetch(this._baseUrl + '/cards', {
                headers: this._headers
            })
            .then(res => res.ok ? res.json() : Promise.reject(new Error('Error:' + res.statusText)))
            .catch((err) => console.log(err));
    }

    getUserInfo() {
        return fetch(this._baseUrl + '/users/me', {
                headers: this._headers
            })
            .then(res => res.ok ? res.json() : Promise.reject('Error:' + res.statusText))
            .catch((err) => console.log(err));
    }

    addCard({ name, link }) {
        return fetch(this._baseUrl + '/cards', {
                headers: this._headers,
                method: "POST",
                body: JSON.stringify({ name, link })
            })
            .then(res => res.ok ? res.json() : Promise.reject('Error:' + res.statusText))
            .catch((err) => console.log(err));
    }

    removeCard(cardID) {
        return fetch(this._baseUrl + '/cards/' + cardID, {
                headers: this._headers,
                method: "DELETE"
            })
            .then(res => res.ok ? res.json() : Promise.reject('Error:' + res.statusText))
            .catch((err) => console.log(err));
    }

    addLikeCard(cardID) {
        return fetch(this._baseUrl + '/cards/likes/' + cardID, {
                headers: this._headers,
                method: "PUT"
            })
            .then(res => res.ok ? res.json() : Promise.reject('Error:' + res.statusText))
            .catch((err) => console.log(err));
    }

    removeLikeCard(cardID) {
        return fetch(this._baseUrl + '/cards/likes/' + cardID, {
                headers: this._headers,
                method: "DELETE"
            })
            .then(res => res.ok ? res.json() : Promise.reject('Error:' + res.statusText))
            .catch((err) => console.log(err));
    }

    setUserInfo({ name, about }) {
        return fetch(this._baseUrl + '/users/me', {
                headers: this._headers,
                method: "PATCH",
                body: JSON.stringify({ name, about })
            })
            .then(res => res.ok ? res.json() : Promise.reject('Error:' + res.statusText))
            .catch((err) => console.log(err));
    }

    setUserAvatar({ avatar }) {
        return fetch(this._baseUrl + '/users/me/avatar', {
                headers: this._headers,
                method: "PATCH",
                body: JSON.stringify({ avatar })
            })
            .then(res => res.ok ? res.json() : Promise.reject('Error:' + res.statusText))
            .catch((err) => console.log(err));
    }
}