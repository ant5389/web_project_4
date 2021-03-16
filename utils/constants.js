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
export const avatarModal = document.querySelector('.popup_type_avatar');
export const addCardForm = addCardModal.querySelector('.popup__container');
export const editProfileForm = editProfileModal.querySelector('.popup__container');
export const editAvatarForm = avatarModal.querySelector('.popup__container');
export const avatar = document.querySelector('.profile__avatar');

// open buttons
export const editAvatar = document.querySelector('.profile__avatar-container');
export const editButton = document.querySelector('.profile__edit-box');
export const addButton = document.querySelector('.profile__add-pic');