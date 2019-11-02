import { CHANGE_QUANTITY, REMOVE_ITEM_FROM_CART } from '@/constants/actionTypes';

export const changeQuantity = (userCart) => ({ type: CHANGE_QUANTITY, payload: userCart });

export const removeItemFromCart = (userCart) => ({ type: REMOVE_ITEM_FROM_CART, payload: userCart });
