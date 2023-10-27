const initialState = {
    products: [],
    discountedProducts: [],
    error: null,
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS_SUCCESS':
            const discounted = action.payload.filter(product => product.discont_price !== null);
            return {
                ...state,
                products: action.payload,
                discountedProducts: discounted,
                error: null,
            };
        case 'GET_PRODUCTS_ERROR':
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state;
    }
}

export default productReducer;