function changeTheme() {
    document.body.classList.toggle('body-light')
    document.body.classList.toggle('body-dark')
}

const button = document.querySelector('.dark-mode')
button.addEventListener('click', changeTheme)