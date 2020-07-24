import { localStorageHelper } from '../../core/localStorage'

export class Like {
  static create(counter, softName) {
    return fetch(`https://soft-zilla.firebaseio.com/${softName}.json`, {
      method: 'PUT',
      body: JSON.stringify(counter),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(Like.renderLike)
  }
  static renderLike(res) {
    const currentLikeCounter = document.querySelector('.program-like span')

    currentLikeCounter.textContent = res.counter || 0
  }
}

const storage = localStorageHelper()

document.addEventListener('DOMContentLoaded', () => {
  const like = document.querySelector('.program-like')
  likeClick(false)()

  like.addEventListener('click', likeClick(true))

  function likeClick(check) {
    return function () {
      const softName = 'skype'
      getRequest(softName, check)
    }
  }

  function getRequest(softName, check) {
    fetch(`https://soft-zilla.firebaseio.com/${softName}.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(res => {
        const currentLike = document.querySelector('.program-like')
        const likeImg = document.querySelector('.program-like__img')
        const likeAll = [likeImg, currentLike]
        const program = 'skype'
        const prevLikeState = storage.getItem(program) || false
        prevLikeState
          ? likeAll.forEach(like => like.classList.add('active'))
          : likeAll.forEach(like => like.classList.remove('active'))

        let counter = res.counter || 0

        if (check) {
          storage.setItem(program, prevLikeState)

          if (prevLikeState === false) {
            likeAll.forEach(like => like.classList.add('active'))
            counter = res.counter + 1
            storage.setItem(program, true)
          } else {
            likeAll.forEach(like => like.classList.remove('active'))
            counter = res.counter - 1
            storage.setItem(program, false)
          }
        }

        const text = {
          counter,
          softName,
        }
        putRequest(text, softName)
      })
  }

  function putRequest(text, softName) {
    Like.create(text, softName)
  }
})
