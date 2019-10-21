import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants/actionTypes';

const initState = {
  cartItems: [
    { jj: 333 }, { jjj: 3204239 }, { j: 222 }
  ]
};

const reducerCart = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload.id)
      };
    default:
      return state;
  }
};

export default reducerCart;
