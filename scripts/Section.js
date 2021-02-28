import Card from './Card.js';

class Section {
    constructor({ items, renderer }, containerSelector) {
        this._initialCards = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    renderer() {
        this._initialCards.forEach(data => {
            const card = new Card({
                data,
                handleCardClick: (text, src) => {
                    imagePopup.open(text, src);
                }
            }, ".card-template");

            const cardElement = card.generateCard();
            this.addItem(cardElement);
        })
    }

    addItem(element) {
        this._container.append(element);
    }
}

export default Section;