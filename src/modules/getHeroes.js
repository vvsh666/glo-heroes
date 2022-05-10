import { getData } from "./getData"
import { showHero } from "./showHero"

export const getHeroes = () => {
    getData().then(data => {
        data.forEach(item => {
            if (item) {
                showHero(item)
            }

        })
    })

}