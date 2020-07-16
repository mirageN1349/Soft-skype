import './scss/index.scss'
import './components/button/m-400'
import './components/slider/slider'
import './components/like/like'
import './components/burger/burger'

document.addEventListener('DOMContentLoaded', () => {
  const btnMore = document.querySelector('.program-description__button')
  const btnMoreImg = document.querySelector('.program-description__button img')
  const descriptionText = document.querySelector('.program-description__text')
  const blur = document.querySelector('.program-description__blur')
  const headerTitle = document.querySelector('.header-title')
  const input = document.querySelector('.header-input')
  const hide = document.querySelectorAll('.hide')

  btnMore.addEventListener('click', btnMoreClick)

  if (document.documentElement.clientWidth <= 768) {
    hide.forEach(el => (el.style.display = 'none'))
    input.setAttribute('disable', true)
    input.addEventListener('click', inputClick)
    function inputClick() {
      input.setAttribute('disable', false)
      input.classList.toggle('active')
    }
  }

  function btnMoreClick() {
    blur.classList.toggle('active-blur')
    descriptionText.classList.toggle('active-btn')
    btnMoreImg.classList.toggle('active')
  }

  if (document.documentElement.clientWidth <= 768) {
    headerTitle.textContent = 'Skype'
  }
})
