const navBtn = document.querySelectorAll('.slider-button-nav'),
  navRight = document.querySelector('.slider-button-right'),
  navLeft = document.querySelector('.slider-button-left'),
  slides = document.querySelectorAll('.slide'),
  carousel = document.querySelector('.slider-carousel'),
  slide = document.querySelector('.slide')

let counter = 0

navRight.addEventListener('click', nextSlide)
navLeft.addEventListener('click', prevSlide)
slide.addEventListener('touchstart', touchStartSlide)

navBtn.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    currentSlide(index)
    counter = index
  })
})

function activeSlide(index) {
  slides.forEach(slide => {
    slide.classList.remove('active')
  })
  slides[index].classList.add('active')
  slides[index].classList.add('animate__zoomIn')
}

function activeNavBtn(index) {
  navBtn.forEach(btn => {
    btn.classList.remove('active')
  })
  navBtn[index].classList.add('active')
}

function currentSlide(index) {
  activeSlide(index)
  activeNavBtn(index)
}

function nextSlide() {
  if (counter === slides.length - 1) {
    counter = 0
    currentSlide(counter)
  } else {
    counter++
    currentSlide(counter)
  }
}

function prevSlide() {
  if (counter === 0) {
    counter = slides.length - 1
    currentSlide(counter)
  } else {
    counter--
    currentSlide(counter)
  }
}

function touchStartSlide(e) {
  let startX = e.changedTouches[0].clientX
  let thisX = 0

  document.ontouchmove = e => {
    thisX = e.changedTouches[0].clientX
  }

  document.ontouchend = e => {
    if (e.target.getAttribute('alt') !== 'Skype') return

    if (startX < thisX) {
      prevSlide()
    } else if (startX > thisX) {
      nextSlide()
    }
  }
}
