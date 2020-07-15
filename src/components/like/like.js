import { localStorageHelper } from '../../core/localStorage'
const storage = localStorageHelper()

const like = document.querySelector('.program-like')
const likeText = document.querySelector('.program-like span')

like.addEventListener('click', btnLikeClick)

likeText.innerHTML = storage.getItem('likeText') || 120
checkLikeState(121)

storage.setItem('likeText', likeText.innerHTML)

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
