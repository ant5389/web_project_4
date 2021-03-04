import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }

    open(src, text) {
        this._popupElement.querySelector('.popup__image').src = src;
        this._popupElement.querySelector('.popup__image-title').textContent = text;
        super.open();
    }
}