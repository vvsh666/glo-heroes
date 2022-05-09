'use strict'

import { getData } from "./getData"
import { getArrOfUnique } from "./helpers"

export const getMovies = () => {
    let moviesList = []

    return getData().then(data => {
        data.forEach(item => {
            if (item.movies) {
                moviesList = [...moviesList, ...item.movies]
            }
        })
        moviesList = getArrOfUnique(moviesList)
    })
        .catch(error => console.log(error.message))


}