import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor({ handleSubmit, popupSelector, openButton, handleClose }) {
        super(popupSelector);
        this._handleSubmit = handleSubmit;
        this._openButton = openButton;
        this._handleClose = handleClose;
        this._inputList = this._popupElement.querySelectorAll('.popup__field');
    }

    _getInputValues() {
        const formOutput = {};
        this._inputList.forEach(input => {
            formOutput[input.name] = input.value;
        });

        return formOutput;
    }

    close() {
        this._handleClose(this._popupElement);
        super.close();
    }

    setEventListeners() {
        super.setEventListeners();

        this._popupElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmit(this._getInputValues());
            this.close();
        });

        this._openButton.addEventListener('click', () => {
            this.open();
        })
    }
}