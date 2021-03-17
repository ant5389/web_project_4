export default class UserInfo {
    constructor({ userNameSelector, userSubtitleSelector, nameInput, subtitleInput, avatar }) {
        this._userNameSelector = userNameSelector;
        this._userSubtitleSelector = userSubtitleSelector;
        this._name = document.querySelector(this._userNameSelector);
        this._subtitle = document.querySelector(this._userSubtitleSelector);
        this._nameInput = document.getElementById(nameInput);
        this._subtitleInput = document.getElementById(subtitleInput);
        this._avatar = document.querySelector(avatar)
    }

    getUserInfo() {
        return [this._name.innerText, this._subtitle.innerText]
    }

    setUserInfo(name, subtitle, id, avatar) {
        this.id = id;

        this._name.innerText = name;
        this._subtitle.innerText = subtitle;
        this._nameInput.value = name;
        this._subtitleInput.value = subtitle;
        this._avatar.src = avatar;
    }
}