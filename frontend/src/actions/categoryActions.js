import axios from "axios";

export const getCategories = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3333/categories/all");
      dispatch({ type: 'GET_CATEGORIES_SUCCESS', payload: response.data })
    } catch (error) {
      dispatch({ type: 'GET_CATEGORIES_ERROR', payload: error.message })
    }
  }
};