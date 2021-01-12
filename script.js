const popup = document.getElementById('editProfile');
const editButton = document.getElementById('editButton');
const submitButton = document.getElementById('submitButton');
const closeButton = document.getElementById('closeButton');
const nameInput = document.getElementById('nameInput');
const subtitleInput = document.getElementById('subtitleInput');
const nameHeader = document.getElementById('nameHeader');
const subtitleText = document.getElementById('subtitleText');
const placesSection = document.getElementById('placesSection');

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
    const name = nameInput.value;
    const subtitle = subtitleInput.value;
    nameHeader.innerText = name;
    subtitleText.innerText = subtitle;
    nameInput.value = '';
    subtitleInput.value = '';
    closePopup();
}

// like button
function toggleLike(event) {
    const element = event.target;
    if (element.alt === "Heart") {
        if (element.src.includes("like.svg")) {
            element.src = "./images/like-active.svg";
        } else {
            element.src = "./images/like.svg";
        }
    }
}