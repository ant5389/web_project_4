let popup = document.getElementById('editProfile');
let editButton = document.getElementById('editButton');
let editForm = document.getElementById('editForm');
let closeButton = document.getElementById('closeButton');
let nameInput = document.getElementById('nameInput');
let subtitleInput = document.getElementById('subtitleInput');
let nameHeader = document.getElementById('nameHeader');
let subtitleText = document.getElementById('subtitleText');


// open popup
function openPopup() {
    popup.classList.add('popup_opened');
}

// close edit window
function closePopup() {
    popup.classList.remove('popup_opened');
}

// submit info
function submitProfile(event) {
    event.preventDefault();
    nameHeader.innerText = nameInput.value;
    subtitleText.innerText = subtitleInput.value;
    closePopup();
}

// auto-fill input fields
function openEditProfileForm() {
    nameInput.value = nameHeader.innerText;
    subtitleInput.value = subtitleText.innerText;
    openPopup();
}

// event listeners
editButton.addEventListener('click', openEditProfileForm);
closeButton.addEventListener('click', closePopup);
editForm.addEventListener('submit', submitProfile);