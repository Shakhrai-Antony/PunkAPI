import axios from "axios"

export const instance = axios.create({
    baseURL: 'https://api.punkapi.com/v2/',
})

export const getBeerAPI = {
    getNewBeer(term) {
        return instance.get(`beers?beer_name=${term}`)
            .then(response => {
                return (
                    response.data
                )
            })
    },
    getBeerDescription(id) {
        return instance.get(`beers/${id}`)
            .then(response => {
                return (
                    response.data
                )
            })
    }
}