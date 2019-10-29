import { combineReducers } from 'redux';
import reducerFilter from './reducerFilter';
import { reducerWishlist } from './reducerWishlist';
import { productsReducer } from './reducerAPIcall';
import reducerProductList from './reducerProductList';

export default combineReducers({
  reducerWishlist,
  reducerFilter,
  productsReducer,
  reducerProductList
});
