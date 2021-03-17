import Popup from './Popup.js';

export default class PopupToDelete extends Popup {
    constructor(popupSelector, api) {
        super(popupSelector);
        this._deleteButton = this._popupElement.querySelector('.popup__save_type_remove-card');
        this._api = api;
    }

    setDeleteFunction(deleteFunction) {
        this._deleteFunction = deleteFunction;
    }

    setEventListeners() {
        super.setEventListeners();

        this._deleteButton.addEventListener('click', () => {
            this._deleteFunction();
        })
    }
}