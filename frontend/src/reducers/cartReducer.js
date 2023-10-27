const savedCartList = localStorage.getItem('cartList');
const savedTotalSum = localStorage.getItem('totalSum');
const savedTotalQuantity = localStorage.getItem('totalQuantity');

const initialState = {
    cartList: savedCartList ? JSON.parse(savedCartList) : [],
    totalSum: savedTotalSum ? Number(savedTotalSum) : 0,
    totalQuantity: savedTotalQuantity ? Number(savedTotalQuantity) : 0,
    hasDiscount: false,
    isModalOpen: false,

};

const cartReducer = (state = initialState, action) => {
    let newCartList = [];
    let totalSum = 0;
    let totalQuantity = 0;


    switch (action.type) {
        case "CART_ADD":

            const addedItem = action.payload.product;
            const itemFromCart = state.cartList.find((item) => item.id === addedItem.id);

            if (itemFromCart) {
                const updatedItem = { ...itemFromCart, quantity: itemFromCart.quantity + 1 };
                newCartList = state.cartList.map(item => item.id === addedItem.id ? updatedItem : item);
            } else {
                newCartList = [...state.cartList, { ...addedItem, quantity: 1 }];
            }

            break;

        case "CART_DELETE":
            newCartList = state.cartList.filter((item) => item.id !== action.payload);
            break;

        case "CART_DECREMENT":
            const decrementItem = state.cartList.find((item) => item.id === action.payload);

            if (decrementItem && decrementItem.quantity > 1) {
                const updatedItem = { ...decrementItem, quantity: decrementItem.quantity - 1 };
                newCartList = state.cartList.map(item => item.id === action.payload ? updatedItem : item);
            } else {
                newCartList = state.cartList.filter((item) => item.id !== action.payload);
            }
            break;

        case "SET_DISCOUNT":
            return { ...state, hasDiscount: action.payload };

        case "RESET_AND_SHOW_MODAL":
            localStorage.removeItem('cartList');
            localStorage.removeItem('totalSum');
            localStorage.removeItem('totalQuantity');
            return { ...initialState, hasDiscount: false };


        case "TOGGLE_MODAL":
            return { ...state, isModalOpen: action.payload };

        default:
            return state;
    }

    newCartList.forEach((item) => {
        if (item.discont_price !== null) {
            totalSum += item.discont_price * item.quantity;
        } else {
            totalSum += item.price * item.quantity;
        }
        totalQuantity += item.quantity;
    });

    localStorage.setItem('cartList', JSON.stringify(newCartList));
    localStorage.setItem('totalSum', totalSum);
    localStorage.setItem('totalQuantity', totalQuantity);

    return { cartList: newCartList, totalSum, totalQuantity, hasDiscount: state.hasDiscount };
}

export default cartReducer;

