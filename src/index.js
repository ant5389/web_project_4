import "./index.css";
import FormValidator from '../scripts/FormValidator.js';
import Card from '../scripts/Card.js';
import Section from '../scripts/Section.js';
import PopupWithForm from '../scripts/PopupWithForm.js';
import PopupWithImage from '../scripts/PopupWithImage.js';
import UserInfo from '../scripts/UserInfo.js';
import {
    initialCards,
    defaultConfig,
    addCardModal,
    editProfileModal,
    addCardForm,
    editProfileForm,
    list,
    editForm,
    addForm,
    editButton,
    addButton,
    modalCloseButton,
    closeAddCardModal,
    nameInput,
    subtitleInput,
    titleInput,
    linkInput,
    nameHeader,
    subtitleText,
    addPic,
    imageModalWindow,
    closeImagePopup,
    popupBgProfile,
    popupBgAddcard,
    popupBgImage,
} from '../utils/constants.js';
// import { openModalWindow, closeModalWindow } from '../scripts/utils.js';

//validations
const editFormValidator = new FormValidator(defaultConfig, editProfileForm);
editFormValidator.enableValidation();
const addFormValidator = new FormValidator(defaultConfig, addCardForm);
addFormValidator.enableValidation();

const editPopup = new PopupWithForm('.popup_type_edit-profile');
editPopup.setEventListeners();
const addcardPopup = new PopupWithForm('.popup_type_addcard');
addcardPopup.setEventListeners();
const imagePopup = new PopupWithImage('.popup_type_image');
imagePopup.setEventListeners();

const userInfo = new UserInfo({
    userNameSelector: nameInput,
    userDescriptionSelector: subtitleInput
});

const cardList = new Section({
        data: items,
        renderer: (item) => {
            const card = new Card({
                item,
                handleCardClick: () => {
                    imagePopup.open(data);
                }
            }, ".card-template");

            cardList.addItem(card.generateCard())
        }
    },
    list
);

// clone initial cards
initialCards.forEach(data => {
    const card = new Card({
        data,
        handleCardClick: (text, src) => {
            imagePopup.open(text, src);
        }
    }, ".card-template");

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

    const cardElement = new Card({
        newCard,
        handleCardClick: (text, src) => {
            imagePopup.open(text, src);
        }
    }, ".card-template");

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