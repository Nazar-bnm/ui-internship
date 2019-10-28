import { combineReducers } from 'redux';
import { reducerWishlist } from './reducerWishlist';
import { productsReducer } from './reducerAPIcall';
import reducerProductList from './reducerProductList';

export default combineReducers({
  reducerWishlist,
  productsReducer,
  reducerProductList
});
