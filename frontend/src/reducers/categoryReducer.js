const initialState = {
  categories: [],
  error: null,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CATEGORIES_SUCCESS':
      return {
        ...state,
        categories: action.payload,
        error: null,
      };
    case 'GET_CATEGORIES_ERROR':
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state;
  }
}

export default categoryReducer;