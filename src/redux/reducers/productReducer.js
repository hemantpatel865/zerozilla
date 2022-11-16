import { ADD_TO_CART, ALL_PRODUCTS, GET_CATEGORIES, GET_PRODUCTS, SET_CATEGORY_NAME, SET_PRODUCT_DETAIL } from "../actions/types"

const intialState = {
    productDetails: localStorage.getItem("productData") ? JSON.parse(localStorage.getItem("productData")) : null,
    cartItemsCount: 0,
    allProductsList: []
}

const ProductReducer = (state = intialState, action) => {
    switch(action.type){
        case SET_PRODUCT_DETAIL:
            return {
                ...state,
                productDetails: action.payload
            }
        case ADD_TO_CART:
            return {
                ...state,
                cartItemsCount: action.payload
            }
        case ALL_PRODUCTS:
            return {
                ...state,
                allProductsList: action.payload
            }
        default:
            return state
    }
}

export default ProductReducer