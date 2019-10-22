import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants/actionTypes';

const initialState = {
  cartItems: []
};

export const getCartItems = (state) => state.cartItems;

const reducerCart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
        // cartItems: [...getCartItems(state), action.payload]
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: [...state.cartItems].filter((product) => product.id !== action.payload.id)
        // cartItems: getCartItems(state).filter((product) => product.id !== action.payload.id)
      };
    default:
      return state;
  }
};

export default reducerCart;
