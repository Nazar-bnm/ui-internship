import { combineReducers } from 'redux';
import reducerCounter from './reducerCounter';
import reducerWishlist from './reducerWishlist';
import reducerProductList from './reducerProductList';

export default combineReducers({
  reducerCounter,
  reducerWishlist,
  reducerProductList
});
