const icon = document.querySelector('.profile-icon')
const iconmenu = document.querySelector('.menu-profile')

icon.addEventListener('click', () => {
    iconmenu.classList.toggle('active')
})

const burger = document.querySelector('.burgerbtn')
const menu = document.querySelector('.menu')

burger.addEventListener('click', () =>{
    burger.classList.toggle('is-active')
    menu.classList.toggle('active')
})