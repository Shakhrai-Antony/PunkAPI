import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import SearchBeerReducer from "./searchReducer";


let rootReducer = combineReducers({
    searchPage: SearchBeerReducer
})

let store = createStore(rootReducer, applyMiddleware(thunk))

export default store;