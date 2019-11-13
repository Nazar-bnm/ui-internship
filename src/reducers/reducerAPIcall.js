import { FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR } from '../constants/actionTypes';

const initialState = {
  pending: false,
  products: [],
  error: null
};

export const productsReducer = (state = initialState, { type, products, error }) => {
  switch (type) {
    case FETCH_PRODUCTS_PENDING:
      return {
        ...state,
        pending: true
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        pending: false,
        products: products.products
      };
    case FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        pending: false,
        error
      };
    default:
      return state;
  }
};

export const getProducts = (state) => state.products;
export const getProductsPending = (state) => state.pending;
export const getProductsError = (state) => state.error;
