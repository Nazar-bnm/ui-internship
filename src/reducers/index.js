import { combineReducers } from 'redux';
import reducerCounter from './reducerCounter';
import reducerWishlist from './reducerWishlist';
import reducerProductList from './reducerProductList';
import { reducerAddToCart } from './reducerAddToCart';

export default combineReducers({
  reducerCounter,
  reducerWishlist,
  reducerProductList,
  reducerAddToCart
});
