export function openModalWindow(modal) {
    modal.classList.add('popup_opened');
    document.addEventListener('keyup', handleEsc);
}

export function closeModalWindow(modal) {
    modal.classList.remove('popup_opened');
    document.removeEventListener('keyup', handleEsc);
}

export const handleEsc = (evt) => {
    evt.preventDefault();

    const activePopup = document.querySelector('.popup_opened');
    const ESC_key = 27;

    if (evt.which === ESC_key) {
        closeModalWindow(activePopup);
    }
}