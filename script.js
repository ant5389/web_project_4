let popup = document.getElementById('editProfile');
let editButton = document.getElementById('editButton');
let submitButton = document.getElementById('submitButton');
let closeButton = document.getElementById('closeButton');
let nameInput = document.getElementById('nameInput');
let subtitleInput = document.getElementById('subtitleInput');
let nameHeader = document.getElementById('nameHeader');
let subtitleText = document.getElementById('subtitleText');
let placesSection = document.getElementById('placesSection');

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
submitButton.addEventListener('click', submitProfile);
placesSection.addEventListener('click', toggleLike)

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
    let name = nameInput.value;
    let subtitle = subtitleInput.value;
    nameHeader.innerText = name;
    subtitleText.innerText = subtitle;
    nameInput.value = '';
    subtitleInput.value = '';
    closePopup();
}

// like button
function toggleLike(event) {
    let element = event.target;
    if (element.alt === "Heart") {
        if (element.src.includes("like.svg")) {
            element.src = "./images/like-active.svg";
        } else {
            element.src = "./images/like.svg";
        }
    }
}