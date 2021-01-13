let popup = document.getElementById('editProfile');
let editButton = document.getElementById('editButton');
let editForm = document.getElementById('editForm');
let closeButton = document.getElementById('closeButton');
let nameInput = document.getElementById('nameInput');
let subtitleInput = document.getElementById('subtitleInput');
let nameHeader = document.getElementById('nameHeader');
let subtitleText = document.getElementById('subtitleText');
let placesSection = document.getElementById('placesSection');


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

// event listeners
editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
placesSection.addEventListener('click', toggleLike);
editForm.addEventListener('submit', submitProfile);