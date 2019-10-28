import { combineReducers } from 'redux';
import reducerWishlist from './reducerWishlist';
import reducerCart from './reducerCart';
import { productsReducer } from './reducerAPIcall';
import reducerProductList from './reducerProductList';

export default combineReducers({
  reducerWishlist,
  reducerCart,
  productsReducer,
  reducerProductList
});
