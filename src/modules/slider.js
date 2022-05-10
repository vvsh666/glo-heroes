import Swiper, { Navigation, Pagination } from 'swiper'

export const slider = () => {
    const swiper = new Swiper('.swiper', {
        modules: [Navigation, Pagination],
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }


    });
}