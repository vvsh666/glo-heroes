'use strict'

import { getData } from "./getData"
import { getArrOfUnique } from "./helpers"
import { showMovies } from "./showMovies"

export const getMovies = (str = '') => {
    const list = document.getElementById('list-movies')
    list.innerHTML = ''
    let moviesList = []

    getData().then(data => {
        data.forEach(item => {
            if (item.movies) {
                moviesList = [...moviesList, ...item.movies]
            }
        })
        moviesList = getArrOfUnique(moviesList)
        if (str === '') {
            moviesList.forEach(item => {
                showMovies(item)
            })
        } else {
            moviesList = moviesList.filter(item => {
                if (item.toLowerCase().includes(str.toLowerCase())) {
                    return item
                }
            })
            moviesList.forEach(item => {
                showMovies(item)
            })
        }

    })
        .catch(error => console.log(error.message))


}