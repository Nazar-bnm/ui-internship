import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from '@/constants/actionTypes';

export const addToWishlist = (productId) => ({
  type: ADD_TO_WISHLIST,
  payload: productId
});

export const removeFromWishlist = (productId) => ({
  type: REMOVE_FROM_WISHLIST,
  payload: productId
});
