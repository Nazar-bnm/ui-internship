import { combineReducers } from 'redux';
import reducerCounter from './reducerCounter';
import reducerWishlist from './reducerWishlist';
import reducerCart from './reducerCart';

export default combineReducers({
  reducerCounter,
  reducerWishlist,
  reducerCart
});
