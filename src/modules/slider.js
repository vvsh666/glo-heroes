import { animate } from "./helpers"

export const slider = () => {
    const sliderBlock = document.querySelector('.hero-wrapper')
    const heroBlock = sliderBlock.querySelector('.hero-block')
    const arrows = sliderBlock.querySelectorAll('.arrow')
    const pagination = sliderBlock.querySelector('.pagination')
    const counterCurrent = pagination.querySelector('.counter-current')
    const counterTotal = pagination.querySelector('.counter-total')

    let slides = sliderBlock.querySelectorAll('.hero-slide')
    let currentSlide = 0
    counterTotal.textContent = slides.length
    counterCurrent.textContent = currentSlide + 1

    pagination.style = ''
    arrows.forEach(arrow => {
        arrow.style = ''
    })

    const nextSlide = () => {
        currentSlide++
        if (currentSlide >= slides.length) {
            currentSlide = 0
        }
        slides.forEach(slide => {
            slide.style.display = 'none'
        })
        slides[currentSlide].style = 'opacity: 0'
        slides[currentSlide].style = 'display: flex'

        animate({
            duration: 500,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                slides[currentSlide].style.opacity = progress
            }
        })
        counterCurrent.textContent = currentSlide + 1
    }

    const prevSlide = () => {
        currentSlide--
        if (currentSlide < 0) {
            currentSlide = slides.length - 1
        }
        slides.forEach(slide => {
            slide.style.display = 'none'
        })
        slides[currentSlide].style.opacity = '0'
        slides[currentSlide].style.display = 'flex'
        animate({
            duration: 500,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                slides[currentSlide].style.opacity = progress
            }
        })
        counterCurrent.textContent = currentSlide + 1
    }

    sliderBlock.addEventListener('click', (e) => {
        if (e.target.closest('.button-next')) {
            slides = sliderBlock.querySelectorAll('.hero-slide')
            nextSlide()
        }
        if (e.target.closest('.button-prev')) {
            slides = sliderBlock.querySelectorAll('.hero-slide')
            prevSlide()
        }
    })
}