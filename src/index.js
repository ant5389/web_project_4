import "./index.css";
import FormValidator from '../scripts/FormValidator.js';
import Card from '../scripts/Card.js';
import { initialCards } from '../scripts/array.js';
import { openModalWindow, closeModalWindow } from '../scripts/utils.js';

const defaultConfig = {
    formSelector: ".popup__container",
    inputSelector: ".popup__field",
    submitButtonSelector: ".popup__save",
    inactiveButtonClass: "popup__save_disabled",
    inputErrorClass: "popup__field_type_error",
    errorClass: "popup__error_visible"
};

//validations
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

const list = document.querySelector('.places__list');

//popups
const ESC_key = 27;
const popupBgProfile = document.querySelector('.popup__background_type_profile');
const popupBgAddcard = document.querySelector('.popup__background_type_addcard');
const popupBgImage = document.querySelector('.popup__background_type_image');

// clone initial cards
initialCards.forEach(data => {
    const card = new Card(data, ".card-template");

    list.append(card.generateCard());
})

// add new card
function addNewCard(event) {
    event.preventDefault();

    const newCard = {
        text: titleInput.value,
        src: linkInput.value,
        alt: titleInput.value
    };

    const cardElement = new Card(newCard, ".card-template");

    list.prepend(cardElement.generateCard());

    titleInput.value = "";
    linkInput.value = "";

    closeModalWindow(addCardModal);
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