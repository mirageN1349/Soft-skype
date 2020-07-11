import './scss/index.scss'
import './button/m-400'
import './slider/slider'

const btnMore = document.querySelector('.program-description__button')
const descriptionText = document.querySelector('.program-description__text')
const blur = document.querySelector('.program-description__blur')

btnMore.addEventListener('click', btnMoreClick)

function btnMoreClick() {
  blur.classList.toggle('active-blur')
  descriptionText.classList.toggle('active-btn')
}
