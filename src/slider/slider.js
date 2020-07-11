const navBtn = document.querySelectorAll('.slider-button-nav')
navBtn[0].classList.add('active-nav')

navBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    navBtn.forEach(btn => {
      btn.classList.remove('active-nav')
    })
    btn.classList.toggle('active-nav')
  })
})
