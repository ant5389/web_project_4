import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._image = this._popupElement.querySelector('.popup__image');
        this._title = this._popupElement.querySelector('.popup__image-title');
    }

    open(src, text) {
        this._image.src = src;
        this._title.textContent = text;
        super.open();
    }
}