import FormValidator from './FormValidator.js';
import Card from './Card.js';

const defaultConfig = {
    formSelector: ".popup__container",
    inputSelector: ".popup__field",
    submitButtonSelector: ".popup__save",
    inactiveButtonClass: "popup__save_disabled",
    inputErrorClass: "popup__field_type_error",
    errorClass: "popup__error_visible"
};

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

const addCardModal = document.querySelector('.popup_type_addcard');
const editProfileModal = document.querySelector('.popup_type_edit-profile');

const addCardForm = addCardModal.querySelector('.popup__container');
const editProfileForm = editProfileModal.querySelector('.popup__container');


const editFormValidator = new FormValidator(defaultConfig, editProfileForm);
const addFormValidator = new FormValidator(defaultConfig, addCardForm);

editFormValidator.enableValidation();
addFormValidator.enableValidation();

const editForm = document.querySelector('.popup__container');
const addForm = document.querySelector('.popup__container_type_addcard');

// open buttons
const editButton = document.querySelector('.profile__edit-box');
const addButton = document.querySelector('.profile__add-pic');

//close buttons
const modalCloseButton = document.querySelector('.popup__close');
const closeAddCardModal = document.querySelector('.popup__close_type_addcard');

//modal inputs
const nameInput = document.getElementById('nameInput');
const subtitleInput = document.getElementById('subtitleInput');
const titleInput = document.getElementById('titleInput');
const linkInput = document.getElementById('linkInput');

const nameHeader = document.querySelector('.profile__name');
const subtitleText = document.querySelector('.profile__subtitle');

const addPic = document.querySelector('.popup__save_type_addcard');
const imageModalWindow = document.querySelector('.popup_type_image');
const closeImagePopup = imageModalWindow.querySelector('.popup__close');
const popupImage = imageModalWindow.querySelector('.popup__image');
const popupImageTitle = imageModalWindow.querySelector('.popup__image-title');

const cardTemplate = document.querySelector('.card-template').content.querySelector('.card');
const list = document.querySelector('.places__list');

//popups
const ESC_key = 27;
const popupBgProfile = document.querySelector('.popup__background_type_profile');
const popupBgAddcard = document.querySelector('.popup__background_type_addcard');
const popupBgImage = document.querySelector('.popup__background_type_image');

// open/close modals
function openModalWindow(modal) {
    modal.classList.add('popup_opened');
    document.addEventListener('keyup', handleEsc);
}

function closeModalWindow(modal) {
    modal.classList.remove('popup_opened');
    document.removeEventListener('keyup', handleEsc);
}

// create new card
function createCardElement(src, alt, text) {
    const cardElement = cardTemplate.cloneNode(true);

    const cardRemove = cardElement.querySelector('.places__remove');
    const cardImage = cardElement.querySelector('.places__picture');
    const cardTitle = cardElement.querySelector('.places__location');
    const cardLike = cardElement.querySelector('.places__like-btn');

    cardImage.src = src;
    cardImage.alt = alt;
    cardTitle.textContent = text;

    cardRemove.addEventListener('click', removeCard);
    cardLike.addEventListener('click', toggleLike);

    cardImage.addEventListener('click', () => {
        popupImage.src = cardImage.src;
        popupImageTitle.textContent = cardTitle.textContent;
        popupImage.alt = cardTitle.textContent;

        openModalWindow(imageModalWindow);
    });

    return cardElement;
}

// clone initial cards
initialCards.forEach(data => {
    const card = new Card(data, ".card-template");

    list.append(card.generateCard());
})

// add new card
function addNewCard(event) {
    event.preventDefault();

    const cardElement = createCardElement(linkInput.value, titleInput.value, titleInput.value)

    list.prepend(cardElement);

    titleInput.value = "";
    linkInput.value = "";

    closeModalWindow(addCardModal);
}

// remove card
function removeCard(event) {
    const remove = event.target.parentElement;
    list.removeChild(remove);
}

// submit info
function submitProfile(event) {
    event.preventDefault();
    nameHeader.textContent = nameInput.value;
    subtitleText.textContent = subtitleInput.value;
    closeModalWindow(editProfileModal);
}

// auto-fill input fields
function openEditProfileForm() {
    nameInput.value = nameHeader.innerText;
    subtitleInput.value = subtitleText.innerText;
    openModalWindow(editProfileModal);
}

// like picture
function toggleLike(event) {
    const likeButton = event.target;
    likeButton.classList.toggle('places__like-btn_active');
}

// ESC to close popups
const handleEsc = (evt) => {
    evt.preventDefault();

    const activePopup = document.querySelector('.popup_opened');

    if (evt.which === ESC_key) {
        closeModalWindow(activePopup);
    }
}

// event listeners
editButton.addEventListener('click', openEditProfileForm);
editForm.addEventListener('submit', submitProfile);
addForm.addEventListener('submit', addNewCard);

modalCloseButton.addEventListener('click', () => {
    closeModalWindow(editProfileModal);
});

addButton.addEventListener('click', () => {
    addPic.classList.add('popup__save_disabled');
    openModalWindow(addCardModal);
});

closeAddCardModal.addEventListener('click', () => {
    closeModalWindow(addCardModal);
});

closeImagePopup.addEventListener('click', () => {
    closeModalWindow(imageModalWindow);
});

popupBgProfile.addEventListener('click', () => {
    closeModalWindow(editProfileModal);
});

popupBgAddcard.addEventListener('click', () => {
    closeModalWindow(addCardModal);
});

popupBgImage.addEventListener('click', () => {
    closeModalWindow(imageModalWindow);
});