import { INCREMENT_QUANTITY, DECREMENT_QUANTITY, REMOVE_ITEM_FROM_CART } from '../constants/actionTypes';

export const incrementQuantity = (userCart) => ({ type: INCREMENT_QUANTITY, payload: userCart });

export const decrementQuantity = (userCart) => ({ type: DECREMENT_QUANTITY, payload: userCart });

export const removeItemFromCart = (userCart) => ({ type: REMOVE_ITEM_FROM_CART, payload: userCart });
