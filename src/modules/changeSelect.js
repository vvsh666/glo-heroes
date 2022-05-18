import { filter } from './filter'

export const changeSelect = () => {
    const listMovies = document.getElementById('list-movies')
    const movies = listMovies.getElementsByTagName('li')
    const selects = document.querySelectorAll('select')

    let objFilters = {}

    selects.forEach(select => {
        select.addEventListener('change', () => {
            selects.forEach(item => {
                objFilters[item.id] = item.value
            })

            for (let movie of movies) {
                if (movie.classList.contains('list-movies-item-active')) {
                    objFilters.movie = movie.textContent
                }
            }

            filter(objFilters)

        })
    })
}