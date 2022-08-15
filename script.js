function changeTheme() {
    document.body.classList.toggle('body-light')
    document.body.classList.toggle('body-dark')
    document.querySelector('.slider').classList.toggle('slider-move')
    document.querySelector('.slider').classList.toggle('slider-return')
}

const button = document.querySelector('.dark-mode')
button.addEventListener('click', changeTheme)