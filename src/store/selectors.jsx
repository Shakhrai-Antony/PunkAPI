export const getBeer = (state) => {
    return state.searchPage.beer
}
export const getTotalItems = (state) => {
    return state.searchPage.totalItems
}
export const getCurrentPage = (state) => {
    return state.searchPage.currentPage
}
export const getSingleBeer = (state) => {
    return state.searchPage.setSingleBeer
}

export const getPreloader = (state) => {
    return state.searchPage.isFetching
}