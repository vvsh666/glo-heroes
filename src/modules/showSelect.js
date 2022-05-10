import { getProperty } from "./getProperty"

export const showSelect = () => {
    const propertyArr = ["species", "gender", "status", "citizenship"]

    propertyArr.forEach(property => {
        getProperty(property)
    })
}