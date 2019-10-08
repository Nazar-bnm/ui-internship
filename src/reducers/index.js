import { combineReducers } from 'redux';
import reducerCounter from './reducerCounter';
import reducerWishlist from './reducerWishlist';

export default combineReducers({
  reducerCounter,
  reducerWishlist,
});
