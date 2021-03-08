export default class UserInfo {
    constructor({ userNameSelector, userSubtitleSelector }) {
        this._userNameSelector = userNameSelector;
        this._userSubtitleSelector = userSubtitleSelector;
        this._name = document.querySelector(this._userNameSelector);
        this._subtitle = document.querySelector(this._userSubtitleSelector);
    }

    getUserInfo() {
        return [this._name.innerText, this._subtitle.innerText]
    }

    setUserInfo(name, subtitle) {
        this._name.innerText = name;
        this._subtitle.innerText = subtitle;
    }
}