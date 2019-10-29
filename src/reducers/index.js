import { combineReducers } from 'redux';
import reducerWishlist from './reducerWishlist';
import reducerCart from './reducerCart';
import { productsReducer } from './reducerAPIcall';
import reducerProductList from './reducerProductList';
import reducerNotifications from './reducerNotifications';

export default combineReducers({
  reducerWishlist,
  reducerProductList,
  reducerNotifications,
  productsReducer,
  reducerCart
});
