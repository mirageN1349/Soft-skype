import './scss/index.scss'
import './button/m-400'
import './slider/slider'

const btnMore = document.querySelector('.program-description__button')
const descriptionText = document.querySelector('.program-description__text')
const blur = document.querySelector('.program-description__blur')
const like = document.querySelector('.program-like')
const likeText = document.querySelector('.program-like span')

btnMore.addEventListener('click', btnMoreClick)
like.addEventListener('click', btnLikeClick)

function btnMoreClick() {
  blur.classList.toggle('active-blur')
  descriptionText.classList.toggle('active-btn')
}

function btnLikeClick() {
  like.classList.toggle('active')
  likeText.textContext
}
