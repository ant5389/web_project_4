function openModalWindow(modal) {
    modal.classList.add('popup_opened');
    document.addEventListener('keyup', handleEsc);
}

const handleEsc = (evt) => {
    evt.preventDefault();

    const activePopup = document.querySelector('.popup_opened');
    const ESC_key = 27;

    if (evt.which === ESC_key) {
        closeModalWindow(activePopup);
    }
}

class Card {
    constructor(data, templateSelector) {
        this._text = data.text;
        this._src = data.src;
        this._alt = data.alt;
        this._templateSelector = templateSelector;
    }

    _getCardTemplate() {
        const cardTemplate = document.querySelector(this._templateSelector).content.querySelector('.card');

        return cardTemplate;
    }

    _removeCard(event) {
        const remove = event.target.parentElement;
        const list = document.querySelector('.places__list');
        list.removeChild(remove);
    }

    _toggleLike(event) {
        const likeButton = event.target;
        likeButton.classList.toggle('places__like-btn_active');
    }

    _setEventListeners() {
        const cardRemove = this._card.querySelector('.places__remove');
        const cardImage = this._card.querySelector('.places__picture');
        const cardTitle = this._card.querySelector('.places__location');
        const cardLike = this._card.querySelector('.places__like-btn');
        const imageModalWindow = document.querySelector('.popup_type_image');
        const popupImage = imageModalWindow.querySelector('.popup__image');
        const popupImageTitle = imageModalWindow.querySelector('.popup__image-title');


        cardRemove.addEventListener('click', this._removeCard);
        cardLike.addEventListener('click', this._toggleLike);

        cardImage.addEventListener('click', () => {
            popupImage.src = cardImage.src;
            popupImageTitle.textContent = cardTitle.textContent;
            popupImage.alt = cardTitle.textContent;

            openModalWindow(imageModalWindow);
        });
    }

    generateCard() {
        this._card = this._getCardTemplate().cloneNode(true);

        const cardImage = this._card.querySelector('.places__picture');
        const cardTitle = this._card.querySelector('.places__location');

        cardImage.src = this._src;
        cardImage.alt = this._alt;
        cardTitle.textContent = this._text;

        this._setEventListeners();

        return this._card;
    }
}

export default Card;