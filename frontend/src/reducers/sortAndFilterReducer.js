import { SET_SORT_PARAMS } from '../actions/sortAndFilterActions';

const initialState = {
  priceFrom: null,
  priceTo: null,
  sorted: null,
  sale: false,
};

const sortReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SORT_PARAMS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default sortReducer;