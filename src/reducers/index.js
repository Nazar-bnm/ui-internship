import { combineReducers } from 'redux';
import { reducerWishlist } from './reducerWishlist';
import { productsReducer } from './reducerAPIcall';
import reducerFilter from './reducerFilter';
import reducerProductList from './reducerProductList';
import reducerCart from './reducerCart';

export const getCartReducer = (state) => state.reducerCart;

export default combineReducers({
  reducerWishlist,
  productsReducer,
  reducerProductList,
  reducerFilter,
  reducerCart
});
