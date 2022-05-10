export const showMovies = (text) => {
    const list = document.getElementById('list-movies')

    let li = document.createElement('li')

    li.textContent = text
    list.append(li)

}