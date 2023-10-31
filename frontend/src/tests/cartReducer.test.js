import cartReducer from "../reducers/cartReducer"

describe('cart reducer', () => {
  it('should return the initial state', () => {
    expect(cartReducer(undefined, {})).toEqual({
      cartList: [],
      totalSum: 0,
      totalQuantity: 0,
      hasDiscount: false,
      isModalOpen: false,
    });
  });

  it('should handle CART_ADD', () => {
    const initialState = {
      cartList: [],
      totalSum: 0,
      totalQuantity: 0,
      hasDiscount: false,
      isModalOpen: false,
    };

    const addAction = {
      type: 'CART_ADD',
      payload: { product: { id: 1, name: 'Test', price: 100 } },
    };

    const newState = cartReducer(initialState, addAction);
    
    expect(newState.cartList.length).toBe(1);
    expect(newState.cartList[0].id).toBe(1);
  });
});