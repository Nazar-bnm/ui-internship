import { combineReducers } from 'redux';
import reducerCounter from './reducerCounter';
import reducerWishlist from './reducerWishlist';
import reducerFilter from './reducerFilter';

export default combineReducers({
  reducerCounter,
  reducerWishlist,
  reducerFilter
});
