'use strict'

import { getData } from "./getData"
import { getArrOfUnique } from "./helpers"

export const getProperty = (key) => {
    const select = document.getElementById(key)
    
    let propertyList = []

    getData().then(data => {
        data.forEach(item => {
            if (item[key]) {
                propertyList.push(item[key])
            }
        })
        propertyList = getArrOfUnique(propertyList)
                
        propertyList.forEach(item => {
            const option = document.createElement('option')
            option.value = item
            option.textContent = item
            select.append(option)
        })
        
    })
}