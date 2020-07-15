import './scss/index.scss'
import './button/m-400'
import './slider/slider'
import { localStorageHelper } from './core/localStorage'

const storage = localStorageHelper()

const likeText = document.querySelector('.program-like span')
const btnMore = document.querySelector('.program-description__button')
const descriptionText = document.querySelector('.program-description__text')
const blur = document.querySelector('.program-description__blur')
const like = document.querySelector('.program-like')

likeText.innerHTML = storage.getItem('likeText') || 120
checkLikeState(121)

storage.setItem('likeText', likeText.innerHTML)

btnMore.addEventListener('click', btnMoreClick)
like.addEventListener('click', btnLikeClick)

function btnMoreClick() {
  blur.classList.toggle('active-blur')
  descriptionText.classList.toggle('active-btn')
}

function checkLikeState(state) {
  likeText.innerHTML == state
    ? like.classList.add('active')
    : like.classList.remove('active')
}

function btnLikeClick() {
  checkLikeState(120)
  let counter = storage.getItem('likeText')
  counter === 120
    ? storage.setItem('likeText', counter + 1)
    : storage.setItem('likeText', counter - 1)

  likeText.innerHTML = storage.getItem('likeText')
}
