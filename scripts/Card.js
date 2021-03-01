import { openModalWindow, closeModalWindow, handleEsc } from './utils.js';

export default class Card {
    constructor({ data, handleCardClick }, templateSelector) {
        this._text = data.text;
        this._src = data.src;
        this._alt = data.alt;
        this._templateSelector = templateSelector;

        this._handleCardClick = handleCardClick;
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

    _openImage() {
        const cardImage = document.querySelector('.places__picture');
        const cardTitle = document.querySelector('.places__location');
        const imageModalWindow = document.querySelector('.popup_type_image');
        const popupImage = imageModalWindow.querySelector('.popup__image');
        const popupImageTitle = imageModalWindow.querySelector('.popup__image-title');

        popupImage.src = cardImage.src;
        popupImageTitle.textContent = cardTitle.textContent;
        popupImage.alt = cardTitle.textContent;

        openModalWindow(imageModalWindow);
    }

    _setEventListeners() {
        const cardRemove = this._card.querySelector('.places__remove');
        const cardImage = this._card.querySelector('.places__picture');
        const cardLike = this._card.querySelector('.places__like-btn');


        cardRemove.addEventListener('click', this._removeCard);
        cardLike.addEventListener('click', this._toggleLike);
        cardImage.addEventListener('click', () => this._handleCardClick(this.text, this.src));
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