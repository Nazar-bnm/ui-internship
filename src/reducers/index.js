import { combineReducers } from 'redux';
import reducerCounter from './reducerCounter';
import reducerWishlist from './reducerWishlist';
import reducerProductList from './reducerProductList';
import reducerNotifications from './reducerNotifications';

export default combineReducers({
  reducerCounter,
  reducerWishlist,
  reducerProductList,
  reducerNotifications
});
