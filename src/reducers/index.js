import { combineReducers } from 'redux';
import { reducerWishlist } from './reducerWishlist';
import { productsReducer } from './reducerAPIcall';
import reducerFilter from './reducerFilter';
import reducerProductList from './reducerProductList';
import reducerCart, { getCartItems } from './reducerCart';

export const getCartReducer = (state) => state.reducerCart;
export const getCartReducerItems = (state) => getCartItems(getCartReducer(state));

export default combineReducers({
  reducerWishlist,
  productsReducer,
  reducerProductList,
  reducerFilter,
  reducerCart
});
