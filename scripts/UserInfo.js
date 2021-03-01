export default class UserInfo {
    constructor(userNameSelector, userDescriptionSelector) {
        this._userNameSelector = userNameSelector;
        this._userDescriptionSelector = userDescriptionSelector;
    }

    getUserInfo(nameInput, subtitleInput) {
        this._userNameSelector.getElementById('nameInput').value = nameInput;
        this._userDescriptionSelector.getElementById('subtitleInput').value = subtitleInput;

        return [this._userNameSelector, this._userDescriptionSelector];
    }

    setUserInfo() {
        this._userNameSelector.getElementById('nameInput').textContent = nameInput;
        this._userDescriptionSelector.getElementById('subtitleInput').textContent = subtitleInput;
    }
}