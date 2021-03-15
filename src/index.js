import "./index.css";
import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import {
    defaultConfig,
    addCardForm,
    editProfileForm,
    editAvatarForm,
    editAvatar,
    editButton,
    addButton
} from '../utils/constants.js';

const api = new Api({
    baseUrl: "https://around.nomoreparties.co/v1/group-7",
    headers: {
        authorization: "78665cc3-4ac9-40da-9978-6b5e0bf3da61",
        "Content-Type": "application/json"
    }
});

api.getUserInfo().then(res => console.log(res));

api.getCardList().then(res => {
    const cardList = new Section({
        data: res,
        renderer: (data) => {
            const card = new Card({
                data,
                handleCardClick: (name, link) => {
                    imagePopup.open(name, link);
                },
                handleDeleteClick: () => {
                    const id = card.getId();
                    api.removeCard(id).then(res => card.handleDeleteClick())
                }
            }, ".card-template");

            cardList.addItem(card.generateCard());
        }
    }, ".places__list");

    cardList.renderItems();

    const addcardPopup = new PopupWithForm({
        popupSelector: '.popup_type_addcard',
        handleSubmit: (data) => {
            api.addCard(data).then(res => {
                const card = new Card({
                    data,
                    handleCardClick: (name, link) => {
                        imagePopup.open(name, link);
                    }
                }, ".card-template");

                cardList.prependItem(card.generateCard());
            });
        },
        openButton: addButton
    });
    addcardPopup.setEventListeners();
});

//validations
const editFormValidator = new FormValidator(defaultConfig, editProfileForm);
editFormValidator.enableValidation();
const addFormValidator = new FormValidator(defaultConfig, addCardForm);
addFormValidator.enableValidation();
const avatarFormValidator = new FormValidator(defaultConfig, editAvatarForm);
avatarFormValidator.enableValidation();

const userInfo = new UserInfo({
    userNameSelector: '.profile__name',
    userSubtitleSelector: '.profile__subtitle'
});

api.getUserInfo().then(res => {
    userInfo.setUserInfo({
        name: res.name,
        subtitle: res.about
    })
});

// api.setUserInfo().then(res => {
//     userInfo.getUserInfo({
//         name: res.name,
//         about: res.subtitle
//     })
// })

const editAvatarPic = new PopupWithForm({
    popupSelector: '.popup_type_avatar',
    handleSubmit: (res) => {
        api.setUserAvatar(res.avatar);
    },
    openButton: editAvatar
});
editAvatarPic.setEventListeners();

const editPopup = new PopupWithForm({
    popupSelector: '.popup_type_edit-profile',
    handleSubmit: ({ name, subtitle }) => {
        userInfo.setUserInfo(name, subtitle);
    },
    openButton: editButton
});
editPopup.setEventListeners();

const imagePopup = new PopupWithImage('.popup_type_image');
imagePopup.setEventListeners();

// const removeCardPopup = new PopupWithForm({
//             popupSelector: '.popup_type_remove-card',
//             handleSubmit: () => {
//                 this._handleDeleteClick(this.getId());
//                 this._removeCard()
//             },
//             openButton: this._card.querySelector('.places__remove';
//             }); removeCardPopup.setEventListeners();