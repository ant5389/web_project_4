export default class Card {
    constructor({ data, handleCardClick, handleDeleteClick }, templateSelector) {
        this._name = data.name;
        this._link = data.link;
        this._id = data.id;
        this._templateSelector = templateSelector;

        this._handleCardClick = handleCardClick;
        this._handleDeleteClick = handleDeleteClick
    }

    getId() {
        return this._id
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
        const cardLike = this._card.querySelector('.places__like-btn');


        cardRemove.addEventListener('click', () => this._handleDeleteClick(this.getId()));
        cardLike.addEventListener('click', this._toggleLike);
        cardImage.addEventListener('click', () => this._handleCardClick(this._link, this._name));
    }

    generateCard() {
        this._card = this._getCardTemplate().cloneNode(true);

        const cardImage = this._card.querySelector('.places__picture');
        const cardTitle = this._card.querySelector('.places__location');

        cardImage.src = this._link;
        cardTitle.textContent = this._name;

        this._setEventListeners();

        return this._card;
    }
}