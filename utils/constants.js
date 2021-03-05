export const initialCards = [{
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

export const defaultConfig = {
    formSelector: ".popup__container",
    inputSelector: ".popup__field",
    submitButtonSelector: ".popup__save",
    inactiveButtonClass: "popup__save_disabled",
    inputErrorClass: "popup__field_type_error",
    errorClass: "popup__error_visible"
};

export const addCardModal = document.querySelector('.popup_type_addcard');
export const editProfileModal = document.querySelector('.popup_type_edit-profile');
export const addCardForm = addCardModal.querySelector('.popup__container');
export const editProfileForm = editProfileModal.querySelector('.popup__container');
export const list = document.querySelector('.places__list');

// open buttons
export const editButton = document.querySelector('.profile__edit-box');
export const addButton = document.querySelector('.profile__add-pic');