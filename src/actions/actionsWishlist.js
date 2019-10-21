import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from '../constants/actionTypes';

export const addToWishlist = (product) => ({
  type: ADD_TO_WISHLIST,
  payload: product
});

export const removeFromWishlist = (id) => ({
  type: REMOVE_FROM_WISHLIST,
  payload: id
});
