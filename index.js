let slider = document.querySelector('.slider-container')
let sliderOne = document.querySelectorAll('.slider-test')
let contador = 1
let width = sliderOne[0].clientWidth
let interv = 1500

const slides = () => {
    slider.style.transform = 'translate(' + (- width * contador) + 'px'
    slider.style.transition = 'transform 1s'
    contador++
    if(contador === 4){
        contador = 0
    }
}

setInterval(() => {
    slides()
}, interv)