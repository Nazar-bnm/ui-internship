import { combineReducers } from 'redux';
import reducerFilter from './reducerFilter';
import { reducerWishlist } from './reducerWishlist';
import { productsReducer } from './reducerAPIcall';
import reducerProductList from './reducerProductList';
import reducerNotifications from './reducerNotifications';
import reducerCart from './reducerCart';

export const getCartReducer = (state) => state.reducerCart;

export default combineReducers({
  reducerWishlist,
  productsReducer,
  reducerProductList,
  reducerFilter,
  reducerCart,
  reducerNotifications
});
