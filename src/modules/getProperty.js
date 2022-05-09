'use strict'

import { getData } from "./getData"
import { getArrOfUnique } from "./helpers"

export const getProperty = (key) => {
    let propertyList = []

    getData().then(data => {
        data.forEach(item => {
            if (item[key]) {
                propertyList.push(item[key])
            }
        })
        return getArrOfUnique(propertyList)
    })
}