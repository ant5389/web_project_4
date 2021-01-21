const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-box');
const editForm = document.querySelector('.popup__container');
const editCloseButton = document.querySelector('.popup__close');
const nameInput = document.getElementById('nameInput');
const subtitleInput = document.getElementById('subtitleInput');
const nameHeader = document.querySelector('.profile__name');
const subtitleText = document.querySelector('.profile__subtitle');
const addCard = document.querySelector('.popup_type_addcard');
const addButton = document.querySelector('.profile__add-pic');
const addForm = document.querySelector('.popup__container_type_addcard');
const addCloseButton = document.querySelector('.popup__close_type_addcard');
const titleInput = document.getElementById('titleInput');
const linkInput = document.getElementById('linkInput');
const likeButton = document.querySelector('.places__like-btn');


// open edit popup
function openPopup() {
    popup.classList.add('popup_opened');
}

// close edit window
function closePopup() {
    popup.classList.remove('popup_opened');
}

// open addcard
function openAddcard() {
    addCard.classList.add('popup_opened');
}

// close addcard
function closeAddcard() {
    addCard.classList.remove('popup_opened');
}

// submit info
function submitProfile(event) {
    event.preventDefault();
    nameHeader.innerText = nameInput.value;
    subtitleText.innerText = subtitleInput.value;
    closePopup();
}

// add new card
function addNewCard(event) {
    event.preventDefault();

    closeAddcard();
}

// auto-fill input fields
function openEditProfileForm() {
    nameInput.value = nameHeader.innerText;
    subtitleInput.value = subtitleText.innerText;
    openPopup();
}

// like picture
function toggleLike() {
    likeButton.classList.toggle('places__like-btn_active');
}


// event listeners
editButton.addEventListener('click', openEditProfileForm);
editCloseButton.addEventListener('click', closePopup);
editForm.addEventListener('submit', submitProfile);
addButton.addEventListener('click', openAddcard);
addCloseButton.addEventListener('click', closeAddcard);
likeButton.addEventListener('click', toggleLike);