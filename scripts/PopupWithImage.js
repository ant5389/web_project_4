import Popup from './Popup.js';

class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }

    open(src, text) {
        this._popupElement.querySelector('.popup__image').src = src;
        this._popupElement.querySelector('.popup__image-title').textContent = text;
        super.open();
    }
}

export default PopupWithImage;