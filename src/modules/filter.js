import { getData } from "./getData"
import { showHero } from "./showHero"
import { slider } from './slider'

export const filter = (objFilters) => {
    const heroBlock = document.querySelector('.hero-block')

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

        console.log(data);

        if (data) {
            data.forEach(item => {
                if (item) {
                    showHero(item)
                }
            })

            slider()
        } else {
            // const div = document.createElement('div')
            // div.style.width = '100%'
            // div.style.height = '100%'
            // div.style.display = 'flex'
            // div.innerHTML = `
            //     <p>Информация отсутствует. Измените параметры фильтров</p>
            // `
            // heroBlock.append(div)
            heroBlock.textContent = 'Нет данных'
            console.log('Нет данных');
        }
    })
}