import { CHANGE_QUANTITY, REMOVE_ITEM_FROM_CART } from '../constants/actionTypes';

const initialState = {
  userCart: [{
    id: 10, quantity: 1, color: 'white', size: 'XS'
  },
  {
    id: 12, quantity: 1, color: 'red', size: 'S'
  }
  ]
};

// initial state is not left empty here just to show at least anything since store is not connected yet//

export default function reducerCounter(state = initialState, { type, payload }) {
  switch (type) {
    case CHANGE_QUANTITY:
      return {
        ...state,
        userCart: payload
      };
    case REMOVE_ITEM_FROM_CART: {
      return {
        ...state,
        userCart: payload
      };
    }
    default:
      return state;
  }
}
