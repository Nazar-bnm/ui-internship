import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from '../constants/actionTypes';

const initialState = {
  wishlist: []
};

export const reducerWishlist = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_WISHLIST:
      return {
        ...state,
        wishlist: [...state.wishlist, payload]
      };
    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishlist: state.wishlist.filter((item) => item !== payload)
      };
    default:
      return state;
  }
};
