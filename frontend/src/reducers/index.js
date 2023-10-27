import { combineReducers } from "redux";

import cartReducer from "./cartReducer";
import categoryReducer from "./categoryReducer";
import productReducer from "./productReducer";
import sortAndFilterReducer from "./sortAndFilterReducer";

const rootReducer = combineReducers({
    categories: categoryReducer,
    products: productReducer,
    cart: cartReducer,
    sort: sortAndFilterReducer,
})

export default rootReducer;