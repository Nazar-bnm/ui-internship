import { ADD_TO_CART } from '../constants/actionTypes';

const initialState = {
  userCart: []
};

export const reducerAddToCart = (state = initialState, { type, params }) => {
  switch (type) {
    case ADD_TO_CART: {
      return {
        ...state,
        userCart: [...state.userCart, params]
      };
    }
    default:
      return state;
  }
};
