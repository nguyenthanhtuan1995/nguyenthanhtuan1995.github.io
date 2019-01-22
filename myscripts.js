let isShow = false
let indexSlide = 0;
function onShowItem() {
  const itemHeader = document.querySelector('.list-item-header')
  if (!isShow) {
    itemHeader.classList.add('show')
    isShow = true
  } else {
    itemHeader.classList.remove('show')
    isShow = false
  }
}

function onShowSlide() {
  const currentSlideShow = document.querySelector('.home-image .show-slide')
  currentSlideShow && currentSlideShow.classList.remove('show-slide')
  if (indexSlide === 3) {
    indexSlide = 1
  } else {
    indexSlide ++
  }
  const nextSlideShow = document.querySelector(`.home-image .slide-${indexSlide}`)
  nextSlideShow.classList.add('show-slide')
}

function loopSlide() {
  setInterval(onShowSlide, 10000)
}

function search() {
  textSearch = document.querySelector('.search').value
  location.href = `https://www.google.com/search?q=${textSearch}`
}

window.addEventListener("keydown", (e) => {
  if(e.which === 13) {
    search()
  }
})

onShowSlide()
loopSlide()
