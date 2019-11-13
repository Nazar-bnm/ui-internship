import {
  CHANGE_QUANTITY,
  REMOVE_ITEM_FROM_CART,
  ADD_TO_CART,
  SET_TOTAL_COUNT
} from '../constants/actionTypes';

export const addToCart = (userCart) => ({ type: ADD_TO_CART, payload: userCart });

export const changeQuantity = (userCart) => ({ type: CHANGE_QUANTITY, payload: userCart });

export const removeItemFromCart = (userCart) => ({ type: REMOVE_ITEM_FROM_CART, payload: userCart });

export const setTotalCount = (userCart) => ({ type: SET_TOTAL_COUNT, payload: userCart });
