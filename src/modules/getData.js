export const getData = () => {

    return fetch('./dbHeroes.json')
        .then(response => response.json())

}