export default class Card {
    constructor({ data, handleCardClick, handleDeleteClick }, templateSelector, api) {
        this._name = data.name;
        this._link = data.link;
        this._id = data._id;
        this._ownerId = data.owner._id;
        this._likes = data.likes;
        this._templateSelector = templateSelector;
        this._api = api;

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

    removeCard() {
        const list = document.querySelector('.places__list');
        list.removeChild(this._card);
    }

    _toggleLike(event) {
        const likeButton = event.target;
        likeButton.classList.toggle('places__like-btn_active');
    }

    _didLike(userId) {
        const owner = this._likes.find(like => like._id === userId);
        return !!owner;
    }

    _updateLikeCounter() {
        const likeCounter = this._card.querySelector('.places__counter');
        likeCounter.textContent = this._likes.length;
    }

    _setEventListeners(userId) {
        const cardRemove = this._card.querySelector('.places__remove');
        const cardImage = this._card.querySelector('.places__picture');
        const cardLike = this._card.querySelector('.places__like-btn');

        if (userId === this._ownerId) {
            cardRemove.addEventListener('click', () => {
                this._handleDeleteClick(this.getId());
            })
        } else {
            cardRemove.style.display = "none"
        };
        cardLike.addEventListener('click', (evt) => {
            this._toggleLike(evt);
            if (this._didLike(userId)) {
                this._api.removeLikeCard(this._id);
                this._likes = this._likes.filter(like => like._id !== userId);
            } else {
                this._api.addLikeCard(this._id);
                this._likes.push({ _id: userId });
            };
            this._updateLikeCounter();
        });
        cardImage.addEventListener('click', () => this._handleCardClick(this._link, this._name));
    }

    generateCard(userId) {
        this._card = this._getCardTemplate().cloneNode(true);

        const cardImage = this._card.querySelector('.places__picture');
        const cardTitle = this._card.querySelector('.places__location');
        const cardLike = this._card.querySelector('.places__like-btn');

        if (this._didLike(userId)) {
            cardLike.classList.add('places__like-btn_active');
        }

        cardImage.src = this._link;
        cardTitle.textContent = this._name;

        this._updateLikeCounter();
        this._setEventListeners(userId);

        return this._card;
    }
}