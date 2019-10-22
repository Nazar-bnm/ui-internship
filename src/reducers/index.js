import { combineReducers } from 'redux';
import reducerCounter from './reducerCounter';
import reducerWishlist from './reducerWishlist';
import reducerCart, { getCartItems } from './reducerCart';

export const getCartReducer = (state) => state.reducerCart;
export const getCartReducerItems = (state) => getCartItems(getCartReducer(state));

export default combineReducers({
  reducerCounter,
  reducerWishlist,
  reducerCart
});
