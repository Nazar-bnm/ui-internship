import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants/actionTypes';

const initState = {
  addedToCart: [],
  total: 0
};

const reducerCart = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        addedToCart: [...state.addedToCart, action.payload]
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id)
      };
    default:
      return state;
  }
};

export default reducerCart;
