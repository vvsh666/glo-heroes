export const getData = () => {

    return fetch('./dbHeroes.json')
        .then(response => response.json())
        .catch(error => console.log(error.message))

}