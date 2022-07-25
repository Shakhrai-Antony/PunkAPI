import {getBeerAPI as getBeerDescription, getBeerAPI} from "../dal/API";

const initialState = {
    beer: [],
    totalItems: null,
    currentPage: 1,
    setCurrentBeerId: null,
    setSingleBeer: [],
    isFetching: false
}

const SearchBeerReducer = (state = initialState, action) => {
        switch (action.type) {
            case 'SET_BEER':
                return {
                    ...state, beer: action.beer
                }
            case 'SET_TOTAL_ITEMS' :
                return {
                    ...state, totalItems: action.items
                }
            case 'SET_CURRENT_PAGE':
                return {
                    ...state, currentPage: action.page
                }
            case 'SET_CURRENT_BEER_ID':
                return {
                    ...state, setCurrentBeerId: action.id
                }
            case 'SET_SINGLE_BEER': {
                    return {
                        ...state, setSingleBeer: action.singleBeer
                    }
                }
            case 'SET_IS_FETCHING':
                return {
                    ...state, isFetching: action.fetching
                }
            default:
                return state
        }
}

export const beerReducerActions = {
    setBeers: (beer) => {
        return ({ type: 'SET_BEER', beer})
    },
    setTotalItems: (items) => {
        return ({ type: 'SET_TOTAL_ITEMS', items})

    },
    setNewPage: (page) => {
        return ({type: 'SET_CURRENT_PAGE', page})
    },
    setCurrentId: (id) => {
        return ({type: 'SET_CURRENT_BEER_ID', id})
    },
    setSingleBeerDescription: (singleBeer) => {
        return ({type: 'SET_SINGLE_BEER', singleBeer})
    },
    setFetching: (fetching) => {
        return ({type: 'SET_IS_FETCHING', fetching})
    }
}

export const setBeerThunkCreator = (term) => {
    return (dispatch) => {
        try {
            dispatch(beerReducerActions.setFetching(true))
            getBeerAPI.getNewBeer(term).then(data => {
                dispatch(beerReducerActions.setFetching(false))
                dispatch(beerReducerActions.setBeers(data))
                dispatch(beerReducerActions.setTotalItems(data.length))
            })
        } catch (e) {
            console.log(e.message)
        }
    }
}
export const setBeerDescriptionThunkCreator = (id) => {
    return (dispatch) => {
        try {
            dispatch(beerReducerActions.setFetching(true))
            getBeerDescription.getBeerDescription(id).then(data => {
                dispatch(beerReducerActions.setFetching(false))
                dispatch(beerReducerActions.setCurrentId(data.id))
                dispatch(beerReducerActions.setSingleBeerDescription(data))
            })
        } catch (e) {
            console.log(e.message)
        }
    }
}



export default SearchBeerReducer