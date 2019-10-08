import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from '../constants/actionTypes';

export function addToWishlist(product) {
  return {
    type: ADD_TO_WISHLIST,
    payload: product,
  };
};

export function removeFromWishlist(product) {
  return {
    type: REMOVE_FROM_WISHLIST,
    payload: product,
  };
};
