function showErrorMessage(input, form, { errorClass, inputErrorClass, ...rest }) {
    const error = document.querySelector('#' + input.id + '-error');
    error.textContent = input.validationMessage;

    error.classList.add(errorClass);
    input.classList.add(inputErrorClass);
}

function hideErrorMessage(input, form, { errorClass, inputErrorClass, ...rest }) {
    const error = document.querySelector('#' + input.id + '-error');
    error.textContent = "";

    error.classList.remove(errorClass);
    input.classList.remove(inputErrorClass);
}

function checkInputValidity(input, form, rest) {
    if (input.validity.valid) {
        hideErrorMessage(input, form, rest);
    } else {
        showErrorMessage(input, form, rest);
    }
}

function toggleButtonState(inputs, button, { inactiveButtonClass, ...rest }) {
    const isValid = inputs.every((input) => input.validity.valid);

    if (isValid) {
        button.classList.remove(inactiveButtonClass);
        button.removeAttribute('disabled');
    } else {
        button.classList.add(inactiveButtonClass);
        button.setAttribute('disabled', '');
    }
}

function enableValidation({ formSelector, inputSelector, submitButtonSelector, ...rest }) {
    const forms = [...document.querySelectorAll(formSelector)];

    forms.forEach((form) => {
        form.addEventListener('submit', ((evt) => {
            evt.preventDefault();
        }))

        const inputs = [...form.querySelectorAll(inputSelector)];
        const button = form.querySelector(submitButtonSelector);

        inputs.forEach((input) => {
            input.addEventListener('input', () => {
                checkInputValidity(input, form, rest);
                toggleButtonState(inputs, button, rest);
            })
        })
    })
}


enableValidation({
    formSelector: ".popup__container",
    inputSelector: ".popup__field",
    submitButtonSelector: ".popup__save",
    inactiveButtonClass: "popup__save_disabled",
    inputErrorClass: "popup__field_type_error",
    errorClass: "popup__error_visible"
});