class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    open() {
        this._popupElement.classList.add('popup_opened');
        document.addEventListener('keyup', this._handleEscClose)
    }

    close() {
        this._popupElement.classList.remove('popup_opened');
        document.removeEventListener('keyup', this._handleEscClose)
    }

    _handleEscClose(evt) {
        if (evt.which == 27) {
            this.close();
        }
    }

    setEventListeners() {
        this._popupElement.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('popup__close') || !evt.target.closest('popup__container')) {
                this.close();
            }
        })
    }
}

export default Popup;