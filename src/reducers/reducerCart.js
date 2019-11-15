import {
  CHANGE_QUANTITY,
  REMOVE_ITEM_FROM_CART,
  ADD_TO_CART,
  SET_TOTAL_COUNT
} from '../constants/actionTypes';

const initialState = {
  userCart: [],
  totalCount: 0
};

export default function reducerCart(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_TO_CART: {
      return {
        ...state,
        userCart: state.userCart.some(
          ({
            id, color, chosenQuantity, size
          }) => payload.id === id && payload.color === color
            && payload.chosenQuantity === chosenQuantity
            && payload.size === size
        ) ? state.userCart : [...state.userCart, payload]
      };
    }
    case CHANGE_QUANTITY:
      return {
        ...state,
        userCart: payload
      };
    case REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        userCart: payload
      };
    case SET_TOTAL_COUNT: {
      return {
        ...state,
        totalCount: payload
      };
    }
    default:
      return state;
  }
}
