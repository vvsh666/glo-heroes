export const showMovies = (text) => {
    const list = document.getElementById('list-movies')

    if (text) {
        let li = document.createElement('li')

        li.textContent = text
        li.classList.add('list-movies-item')
        list.append(li)
    }

}