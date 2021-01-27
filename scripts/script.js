const editForm = document.querySelector('.popup__container');

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
const addCardModal = document.querySelector('.popup_type_addcard');
const editProfileModal = document.querySelector('.popup_type_edit-profile');
const imagePopup = document.querySelector('.popup_type_image');
const closeImagePopup = imagePopup.querySelector('.popup__close');
const addPic = document.querySelector('.popup__save_type_addcard');
const imageModalWindow = document.querySelector('.popup_type_image');
const popupImage = imageModalWindow.querySelector('.popup__image');
const popupImageTitle = imageModalWindow.querySelector('.popup__image-title');

const cardTemplate = document.querySelector('.card-template').content.querySelector('.card');
const list = document.querySelector('.places__list');


// toggle modals
function toggleModalWindow(modal) {
    modal.classList.toggle('popup_opened');
}

// clone cards
initialCards.forEach(data => {
    const cardElement = cardTemplate.cloneNode(true);

    const cardRemove = cardElement.querySelector('.places__remove');
    const cardImage = cardElement.querySelector('.places__picture');
    const cardTitle = cardElement.querySelector('.places__location');
    const cardLike = cardElement.querySelector('.places__like-btn');

    cardImage.src = data.src;
    cardTitle.textContent = data.text;

    cardRemove.addEventListener('click', removeCard);
    cardLike.addEventListener('click', toggleLike);

    cardImage.addEventListener('click', () => {
        popupImage.src = data.src;
        popupImageTitle.textContent = data.text;

        toggleModalWindow(imageModalWindow);
    })

    list.prepend(cardElement);
})

// create new card
function addNewCard(event) {
    event.preventDefault();

    const cardElement = cardTemplate.cloneNode(true);

    const cardRemove = cardElement.querySelector('.places__remove');
    const cardImage = cardElement.querySelector('.places__picture');
    const cardTitle = cardElement.querySelector('.places__location');
    const cardLike = cardElement.querySelector('.places__like-btn');

    cardImage.src = linkInput.value;
    cardTitle.textContent = titleInput.value;

    cardRemove.addEventListener('click', removeCard);
    cardLike.addEventListener('click', toggleLike);

    cardImage.addEventListener('click', () => {
        popupImage.src = cardImage.src;
        popupImageTitle.textContent = cardTitle.textContent;

        toggleModalWindow(imageModalWindow);
    })

    list.prepend(cardElement);

    titleInput.value = "";
    linkInput.value = "";

    toggleModalWindow(addCardModal);
}

// remove card
function removeCard(event) {
    const remove = event.target.parentElement
    list.removeChild(remove);
}

// submit info
function submitProfile(event) {
    event.preventDefault();
    nameHeader.textContent = nameInput.value;
    subtitleText.textContent = subtitleInput.value;
    toggleModalWindow(editProfileModal);
}

// auto-fill input fields
function openEditProfileForm() {
    nameInput.value = nameHeader.innerText;
    subtitleInput.value = subtitleText.innerText;
    toggleModalWindow(editProfileModal);
}

// like picture
function toggleLike(event) {
    const likeButton = event.target;
    likeButton.classList.toggle('places__like-btn_active');
}

// event listeners
editButton.addEventListener('click', openEditProfileForm);
editForm.addEventListener('submit', submitProfile);
addPic.addEventListener('click', addNewCard);

modalCloseButton.addEventListener('click', () => {
    toggleModalWindow(editProfileModal);
});

addButton.addEventListener('click', () => {
    toggleModalWindow(addCardModal);
});

closeAddCardModal.addEventListener('click', () => {
    toggleModalWindow(addCardModal);
})

closeImagePopup.addEventListener('click', () => {
    toggleModalWindow(imageModalWindow);
});