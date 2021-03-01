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
export const editForm = document.querySelector('.popup__container');
export const addForm = document.querySelector('.popup__container_type_addcard');

// open buttons
export const editButton = document.querySelector('.profile__edit-box');
export const addButton = document.querySelector('.profile__add-pic');

//close buttons
export const modalCloseButton = document.querySelector('.popup__close');
export const closeAddCardModal = document.querySelector('.popup__close_type_addcard');

//modal inputs
export const nameInput = document.getElementById('nameInput');
export const subtitleInput = document.getElementById('subtitleInput');
export const titleInput = document.getElementById('titleInput');
export const linkInput = document.getElementById('linkInput');

export const nameHeader = document.querySelector('.profile__name');
export const subtitleText = document.querySelector('.profile__subtitle');

export const addPic = document.querySelector('.popup__save_type_addcard');
export const imageModalWindow = document.querySelector('.popup_type_image');
export const closeImagePopup = imageModalWindow.querySelector('.popup__close');

//popups
export const popupBgProfile = document.querySelector('.popup__background_type_profile');
export const popupBgAddcard = document.querySelector('.popup__background_type_addcard');
export const popupBgImage = document.querySelector('.popup__background_type_image');