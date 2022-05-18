import { filter } from './filter'

export const changeMovies = () => {
    const listMovies = document.getElementById('list-movies')
    const movies = listMovies.getElementsByTagName('li')
    const selects = document.querySelectorAll('select')
    const titleHero = document.querySelector('.title-hero')

    let objFilters = {}

    listMovies.addEventListener('click', (e) => {
        if (e.target.closest('.list-movies-item')) {
            for (let item of movies) {
                item.classList.remove('list-movies-item-active')
            }
            e.target.classList.add('list-movies-item-active')

            titleHero.textContent = e.target.textContent

            selects.forEach(item => {
                objFilters[item.id] = item.value
            })

            objFilters.movie = e.target.textContent

            filter(objFilters)
        }
    })
}