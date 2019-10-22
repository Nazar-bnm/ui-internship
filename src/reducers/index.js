import { combineReducers } from 'redux';
import { reducerCounter } from './reducerCounter';
import { reducerWishlist } from './reducerWishlist';
import { productsReducer } from './reducerAPIcall';

export default combineReducers({
  reducerCounter,
  reducerWishlist,
  productsReducer
});
