import Popup from "./Popup.js";

class PopupWithForm extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }

    _getInputValues() {
        this._popupElement.getElementById('.')
    }

    setEventListeners() {

    }

    close() {

    }
}

export default PopupWithForm;