import { getMovies } from "./getMovies"

export const search = () => {
    const searchInput = document.querySelector('.search-input')

    searchInput.addEventListener('input', () => {
        getMovies(searchInput.value)
    })
}