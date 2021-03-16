import "./index.css";
import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupToDelete from '../components/PopupToDelete.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import {
    defaultConfig,
    avatar,
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

const userInfo = new UserInfo({
    userNameSelector: '.profile__name',
    userSubtitleSelector: '.profile__subtitle',
    nameInput: 'nameInput',
    subtitleInput: 'subtitleInput'
});

api.getUserInfo().then(res => {
    userInfo.setUserInfo(res.name, res.about, res._id);
    avatar.src = res.avatar;

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
                        removeCardPopup.setDeleteId(data._id);
                        removeCardPopup.open();
                    }
                }, ".card-template", api);

                cardList.addItem(card.generateCard(userInfo.id));
            }
        }, ".places__list");

        cardList.renderItems();

        const addcardPopup = new PopupWithForm({
            popupSelector: '.popup_type_addcard',
            handleSubmit: (data) => {
                return api.addCard(data).then(res => {
                    const card = new Card({
                        data: res,
                        handleCardClick: (name, link) => {
                            imagePopup.open(name, link);
                        }
                    }, ".card-template", api);

                    cardList.prependItem(card.generateCard(userInfo.id));
                });
            },
            openButton: addButton
        });
        addcardPopup.setEventListeners();
    });
});

//validations
const editFormValidator = new FormValidator(defaultConfig, editProfileForm);
editFormValidator.enableValidation();
const addFormValidator = new FormValidator(defaultConfig, addCardForm);
addFormValidator.enableValidation();
const avatarFormValidator = new FormValidator(defaultConfig, editAvatarForm);
avatarFormValidator.enableValidation();

const editAvatarPic = new PopupWithForm({
    popupSelector: '.popup_type_avatar',
    handleSubmit: (res) => {
        return api.setUserAvatar({ avatar: res.link }).then(res => {
            avatar.src = res.avatar;
        });
    },
    openButton: editAvatar
});
editAvatarPic.setEventListeners();

const editPopup = new PopupWithForm({
    popupSelector: '.popup_type_edit-profile',
    handleSubmit: ({ name, subtitle }) => {
        return api.setUserInfo({ name, about: subtitle }).then(res => {
            userInfo.setUserInfo(res.name, res.about, res._id)
        })
    },
    openButton: editButton
});
editPopup.setEventListeners();

const imagePopup = new PopupWithImage('.popup_type_image');
imagePopup.setEventListeners();

const removeCardPopup = new PopupToDelete('.popup_type_remove-card', api);
removeCardPopup.setEventListeners();