import { getData } from "./getData"
import { showHero } from "./showHero"
import { slider } from "./slider"

export const filter = (objFilters) => {
    const sliderBlock = document.querySelector('.hero-wrapper')
    const heroBlock = sliderBlock.querySelector('.hero-block')
    const arrows = sliderBlock.querySelectorAll('.arrow')
    const pagination = sliderBlock.querySelector('.pagination')

    getData().then(data => {
        if (objFilters.species) {
            data = data.filter(item => item.species === objFilters.species)
        }
        if (objFilters.gender) {
            data = data.filter(item => item.gender === objFilters.gender)
        }
        if (objFilters.status) {
            data = data.filter(item => item.status === objFilters.status)
        }
        if (objFilters.citizenship) {
            data = data.filter(item => item.citizenship === objFilters.citizenship)
        }
        if (objFilters.movie) {
            if (objFilters.movie === 'All films') {
                data = data
            } else {
                data = data.filter(item => {
                    if (item.movies && item.movies.includes(objFilters.movie)) {
                        return item
                    }
                })
            }
        }

        heroBlock.innerHTML = ''

        if (data.length === 0) {
            pagination.style.display = 'none'
            arrows.forEach(arrow => {
                arrow.style.display = 'none'
            })
            heroBlock.innerHTML = `
            <div style = "position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; font-size: 1.5rem; width: 100%">
            Нет данных по вашему запросу, измените значения фильтров</div>
            `

        } else {
            data.forEach(item => {
                if (item) {
                    showHero(item)
                }
            })
            slider()
        }
    })
}