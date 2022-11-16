import { GET_CATEGORIES, GET_PRODUCTS, SET_CATEGORY_NAME } from "../actions/types"

const intialState = {
    categoriesList: [],
    productsList: [],
    category: null
}

const HomepageReducer = (state = intialState, action) => {
    switch(action.type){
        case GET_CATEGORIES:
            return {
                ...state,
                categoriesList: action.payload
            }
        case GET_PRODUCTS:
            return {
                ...state,
                productsList: action.payload
            }
        case SET_CATEGORY_NAME:
            return {
                ...state,
                category: action.payload
            }
        default:
            return state
    }
}

export default HomepageReducer