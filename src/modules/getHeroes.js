import { getData } from "./getData"
import { showHero } from "./showHero"
import { slider } from "./slider"

export const getHeroes = () => {
    getData().then(data => {
        data.forEach(item => {
            if (item) {
                showHero(item)
            }
        })
        slider()
    })

}