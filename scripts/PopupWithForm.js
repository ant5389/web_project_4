import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }

    _getInputValues() {
        this._popupElement.getElementById('nameInput').value = document.querySelector('.profile__name').innerText;
        this._popupElement.getElementById('subtitleInput').value = document.querySelector('.profile__subtitle').innerText;
    }

    setEventListeners() {
        this._popupElement.addEventListener('click', super.close);
        this._popupElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            if (evt.target.classList.contains('popup__save')) {
                super.close();
            }
        });
    }

    close() {
        this._popupElement.getElementById('nameInput').value = "";
        this._popupElement.getElementById('subtitleInput').value = "";
        super.close();
    }
}