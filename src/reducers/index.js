import { combineReducers } from 'redux';
import { reducerWishlist } from './reducerWishlist';
import { productsReducer } from './reducerAPIcall';
import reducerProductList from './reducerProductList';
import { reducerAddToCart } from './reducerAddToCart';

export default combineReducers({
  reducerWishlist,
  reducerProductList,
  reducerAddToCart,
  productsReducer
});
