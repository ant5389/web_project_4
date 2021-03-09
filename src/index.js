import "./index.css";
import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import {
    initialCards,
    defaultConfig,
    addCardForm,
    editProfileForm,
    editButton,
    addButton
} from '../utils/constants.js';

//validations
const editFormValidator = new FormValidator(defaultConfig, editProfileForm);
editFormValidator.enableValidation();
const addFormValidator = new FormValidator(defaultConfig, addCardForm);
addFormValidator.enableValidation();

const userInfo = new UserInfo({
    userNameSelector: '.profile__name',
    userSubtitleSelector: '.profile__subtitle'
});

const editPopup = new PopupWithForm({
    popupSelector: '.popup_type_edit-profile',
    handleSubmit: ({ name, subtitle }) => {
        userInfo.setUserInfo(name, subtitle);
    },
    openButton: editButton
});
editPopup.setEventListeners();

const addcardPopup = new PopupWithForm({
    popupSelector: '.popup_type_addcard',
    handleSubmit: (data) => {
        const card = new Card({
            data,
            handleCardClick: (text, src) => {
                imagePopup.open(text, src);
            }
        }, ".card-template");

        cardList.prependItem(card.generateCard());
    },
    openButton: addButton
});
addcardPopup.setEventListeners();

const imagePopup = new PopupWithImage('.popup_type_image');
imagePopup.setEventListeners();

const cardList = new Section({
        data: initialCards,
        renderer: (data) => {
            const card = new Card({
                data,
                handleCardClick: (text, src) => {
                    imagePopup.open(text, src);
                }
            }, ".card-template");

            cardList.addItem(card.generateCard());
        }
    },
    ".places__list"
);

cardList.renderItems();