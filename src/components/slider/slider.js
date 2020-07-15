const navBtn = document.querySelectorAll('.slider-button-nav'),
  navRight = document.querySelector('.slider-button-right'),
  navLeft = document.querySelector('.slider-button-left'),
  slides = document.querySelectorAll('.slide'),
  carousel = document.querySelector('.slider-carousel')

let counter = 0

navRight.addEventListener('click', nextSlide)
navLeft.addEventListener('click', prevSlide)

navBtn.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    currentSlide(index)
    counter = index
  })
})

function activeSlide(index) {
  slides.forEach(slide => {
    slide.classList.remove('animate__fadeOutRight')
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

function nextSlide(check = true) {
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
