'use strict'

import { getData } from "./getData"
import { getArrOfUnique } from "./helpers"
import { showMovies } from "./showMovies"

export const getMovies = () => {
    let moviesList = []

    return getData().then(data => {
        data.forEach(item => {
            if (item.movies) {
                moviesList = [...moviesList, ...item.movies]
            }
        })
        moviesList = getArrOfUnique(moviesList)
        moviesList.forEach(item => {
            showMovies(item)
        })
    })
        .catch(error => console.log(error.message))


}