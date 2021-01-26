const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-box');
const editForm = document.querySelector('.popup__container');
const editCloseButton = document.querySelector('.popup__close');
const nameInput = document.getElementById('nameInput');
const subtitleInput = document.getElementById('subtitleInput');
const nameHeader = document.querySelector('.profile__name');
const subtitleText = document.querySelector('.profile__subtitle');
const addCard = document.querySelector('.popup_type_addcard');
const addButton = document.querySelector('.profile__add-pic');
const addCloseButton = document.querySelector('.popup__close_type_addcard');
const addPic = document.querySelector('.popup__save_type_addcard');
const titleInput = document.getElementById('titleInput');
const linkInput = document.getElementById('linkInput');
const placesTemplate = document.querySelector('.places');
const imagePopup = document.querySelector('.popup_type_image');
const closeImagePopup = imagePopup.querySelector('.popup__close');

const initialCards = [{
        text: "Yosemite Valley",
        src: "https://code.s3.yandex.net/web-code/yosemite.jpg",
        alt: "Valley"
    },
    {
        text: "Lake Louise",
        src: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
        alt: "Lake"
    },
    {
        text: "Bald Mountains",
        src: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
        alt: "Mountains"
    },
    {
        text: "Latemar",
        src: "https://code.s3.yandex.net/web-code/latemar.jpg",
        alt: "Latemar"
    },
    {
        text: "Vanoise National Park",
        src: "https://code.s3.yandex.net/web-code/vanoise.jpg",
        alt: "Vanoise"
    },
    {
        text: "Lago di Braies",
        src: "https://code.s3.yandex.net/web-code/lago.jpg",
        alt: "Spanish Lake"
    }
];

// add initial cards
const cardElements = initialCards.map(card => {
    return createCard(card.src, card.alt, card.text);
});
placesTemplate.append(...cardElements);

// create additional cards
function createCard(src, alt, text) {
    const cardDiv = document.createElement('div');
    const removeButton = document.createElement('button');
    const imageLink = document.createElement('img');
    const locationName = document.createElement('h2');
    const likeButton = document.createElement('button');

    cardDiv.classList.add('places__card');
    removeButton.classList.add('places__remove');
    imageLink.classList.add('places__picture');
    locationName.classList.add('places__location');
    likeButton.classList.add('places__like-btn');

    imageLink.setAttribute('src', src);
    imageLink.setAttribute('alt', alt);
    locationName.innerText = text;

    removeButton.addEventListener('click', removeCard);
    likeButton.addEventListener('click', toggleLike);
    imageLink.addEventListener('click', () => {
        const popupImage = document.querySelector('.popup__image');
        const popupImageTitle = document.querySelector('.popup__image-title');

        popupImage.src = src;
        popupImageTitle.textContent = text;

        openImage();
    });

    cardDiv.append(...[removeButton, imageLink, locationName, likeButton]);
    return cardDiv;
}


// open modals
function openPopup() {
    popup.classList.add('popup_opened');
}

function openAddcard() {
    addCard.classList.add('popup_opened');
}

function openImage() {
    imagePopup.classList.add('popup_opened');
}


// close modals
function closePopup() {
    popup.classList.remove('popup_opened');
}

function closeAddcard() {
    addCard.classList.remove('popup_opened');
}

function closeImage() {
    imagePopup.classList.remove('popup_opened');
}


// create new card
function addNewCard(event) {
    event.preventDefault();
    const title = titleInput.value;
    const link = linkInput.value;
    const cardDiv = createCard(link, title, title);
    placesTemplate.prepend(cardDiv);
    titleInput.value = "";
    linkInput.value = "";
    closeAddcard();
}

// remove card
function removeCard(event) {
    const remove = event.target.parentElement;
    placesTemplate.removeChild(remove);
}

// submit info
function submitProfile(event) {
    event.preventDefault();
    nameHeader.innerText = nameInput.value;
    subtitleText.innerText = subtitleInput.value;
    closePopup();
}

// auto-fill input fields
function openEditProfileForm() {
    nameInput.value = nameHeader.innerText;
    subtitleInput.value = subtitleText.innerText;
    openPopup();
}

// like picture
function toggleLike(event) {
    const likeButton = event.target;
    likeButton.classList.toggle('places__like-btn_active');
}


// event listeners
editButton.addEventListener('click', openEditProfileForm);
editCloseButton.addEventListener('click', closePopup);
editForm.addEventListener('submit', submitProfile);
addButton.addEventListener('click', openAddcard);
addCloseButton.addEventListener('click', closeAddcard);
addPic.addEventListener('click', addNewCard);
closeImagePopup.addEventListener('click', closeImage);