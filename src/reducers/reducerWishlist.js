import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from '../constants/actionTypes';

const initialState = {
  products: [],
  wishlist: [],
};

export default function reducerWishlist(state = initialState, action) {
  switch (action.type) {
  case ADD_TO_WISHLIST:
    return {
      ...state,
      wishlist: [...state.wishlist, action.payload],
    };
  case REMOVE_FROM_WISHLIST:
    return {
      ...state,
      wishlist: state.wishlist.filter((item) => {
        return item.id !== action.payload.id;
      }),
    };
  default:
    return state;
  };
};
