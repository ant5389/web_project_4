import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor({ handleSubmit, popupSelector, openButton }) {
        super(popupSelector);
        this._handleSubmit = handleSubmit;
        this._openButton = openButton;
        this._inputList = this._popupElement.querySelectorAll('.popup__field');
        this._form = this._popupElement.querySelector('.popup__container');
        this._submitButton = this._popupElement.querySelector('.popup__save');
    }

    _getInputValues() {
        const formOutput = {};
        this._inputList.forEach(input => {
            formOutput[input.name] = input.value;
        });

        return formOutput;
    }

    close() {
        super.close();
        this._form.reset();
    }

    setEventListeners() {
        super.setEventListeners();

        this._popupElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            const currentText = this._submitButton.textContent;
            this._submitButton.textContent = 'Saving...';
            this._handleSubmit(this._getInputValues()).then(() => {
                this.close();
                this._submitButton.textContent = currentText;
            });
        });

        this._openButton.addEventListener('click', () => {
            this.open();
        })
    }
}