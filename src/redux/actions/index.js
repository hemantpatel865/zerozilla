
import { ADD_TO_CART, ALL_PRODUCTS, GET_CATEGORIES, GET_PRODUCTS, SET_CATEGORY_NAME, SET_PRODUCT_DETAIL } from "./types"



const fetchAPICall = async (url) => {
    let response = await fetch(url)
            .then((response) => {
                if(response.ok){
                    return response.json()
                }
            })
            .catch((err) => err.response)
        return response;
}


export const getCategories = () => {
    return async (dispatch, getState) => {
        fetchAPICall("https://fakestoreapi.com/products/categories")
        .then((data) => {
            dispatch({
                type: GET_CATEGORIES,
                payload: data
            })
        })
        .catch(err => console.log(err))
        

    }
}

export const getProductsByCategory = (category) => {
    return async (dispatch, getState) => {
        fetchAPICall(`https://fakestoreapi.com/products/category/${category}`)
        .then((data) => {
            dispatch({
                type: GET_PRODUCTS,
                payload: data
            })
        })
    }
}
export const getProductsList = () => {
    
    return async (dispatch, getState) => {
        fetchAPICall(`https://fakestoreapi.com/products`)
        .then((data) => {           
            dispatch({
                type: ALL_PRODUCTS,
                payload: data
            })
            
        })

    }
}

export const setCategoryName = (category) => {
    return (dispatch) => {
        dispatch({
            type: SET_CATEGORY_NAME,
            payload: category
        })
    }
}

export const setProductDetails = (data) => {
    localStorage.setItem("productData", JSON.stringify(data));
    return (dispatch) => {
        dispatch({
            type: SET_PRODUCT_DETAIL,
            payload: data
        })
    }
}
export const addToCart = (val) => {
    // localStorage.setItem("productData", JSON.stringify(data));
    return (dispatch, getState) => {
        console.log(getState())
        dispatch({
            type: ADD_TO_CART,
            payload: val + 1
        })
    }
}
