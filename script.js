function changeTheme() {
    document.body.classList.toggle('body-light')
    document.querySelector('.slider').classList.toggle('slide-right')
}

const button = document.querySelector('.dark-mode')
button.addEventListener('click', changeTheme)