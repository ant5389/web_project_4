export default class UserInfo {
    constructor({ userNameSelector, userSubtitleSelector }) {
        this._userNameSelector = userNameSelector;
        this._userSubtitleSelector = userSubtitleSelector;
    }

    getUserInfo() {
        return [document.querySelector(this._userNameSelector).innerText, document.querySelector(this._userSubtitleSelector).innerText]
    }

    setUserInfo(name, subtitle) {
        document.querySelector(this._userNameSelector).innerText = name;
        document.querySelector(this._userSubtitleSelector).innerText = subtitle;
    }
}