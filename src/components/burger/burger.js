const burgerBtn = document.querySelector('.burger-btn')
const nav = document.querySelector('.header-nav')

burgerBtn.addEventListener('click', burgerBtnClick)

function burgerBtnClick() {
  burgerBtn.classList.toggle('active')
  nav.classList.toggle('active')
}
