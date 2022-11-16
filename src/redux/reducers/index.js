import { combineReducers } from "redux";
import HomepageReducer from "./homeReducer";
import ProductReducer from "./productReducer";


const rootReducers = combineReducers({
    homepage: HomepageReducer,
    productDetailPage: ProductReducer

})


export default rootReducers