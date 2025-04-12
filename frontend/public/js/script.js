// frontend/public/js/script.js
function loader() {
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut() {
    setTimeout(loader, 4000);
}

window.onload = () => {
    fadeOut();
};