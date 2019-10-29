import { combineReducers } from 'redux';
import reducerCart from './reducerCart';
import reducerFilter from './reducerFilter';
import { reducerWishlist } from './reducerWishlist';
import { productsReducer } from './reducerAPIcall';
import reducerProductList from './reducerProductList';

export default combineReducers({
  reducerWishlist,
  reducerCart,
  reducerFilter,
  productsReducer,
  reducerProductList
});
