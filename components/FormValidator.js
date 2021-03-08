export default class FormValidator {
    constructor(settings, formElement) {
        this._formSelector = settings.formSelector;
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._errorClass = settings.errorClass;

        this._form = formElement;
    }

    _showErrorMessage(input) {
        const error = this._form.querySelector('#' + input.id + '-error');
        error.textContent = input.validationMessage;

        error.classList.add(this._errorClass);
        input.classList.add(this._inputErrorClass);
    }

    _hideErrorMessage(input) {
        const error = this._form.querySelector('#' + input.id + '-error');
        error.textContent = "";

        error.classList.remove(this._errorClass);
        input.classList.remove(this._inputErrorClass);
    }

    _checkInputValidity(input) {
        if (input.validity.valid) {
            this._hideErrorMessage(input, input.validationMessage);
        } else {
            this._showErrorMessage(input, input.validationMessage);
        }
    }

    _hasInvalidInput(inputs) {
        return inputs.some((input) => {
            return !input.validity.valid;
        });
    }

    _toggleButtonState(inputs, button) {
        if (this._hasInvalidInput(inputs)) {
            button.classList.add(this._inactiveButtonClass);
            button.disabled = true;
        } else {
            button.classList.remove(this._inactiveButtonClass);
            button.disabled = false;
        }
    }

    _setEventListeners() {
        const inputs = [...this._form.querySelectorAll(this._inputSelector)];
        const button = this._form.querySelector(this._submitButtonSelector);

        this._form.addEventListener('reset', () => {
            inputs.forEach((inputElement) => {
                this._hideErrorMessage(inputElement)
            })
            this._toggleButtonState(inputs, button);
        });

        inputs.forEach((input) => {
            input.addEventListener('input', () => {
                this._checkInputValidity(input, input.validationMessage);
                this._toggleButtonState(inputs, button);
            });
        });
    }

    enableValidation() {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

        this._setEventListeners();
    }
}