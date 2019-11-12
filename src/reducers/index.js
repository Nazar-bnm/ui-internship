import { combineReducers } from 'redux';
import reducerCart from './reducerCart';
import reducerFilter from './reducerFilter';
import { reducerWishlist } from './reducerWishlist';
import { productsReducer } from './reducerAPIcall';
import reducerProductList from './reducerProductList';
import reducerNotifications from './reducerNotifications';
import reducerBlogPage from './reducerBlogPage';

export default combineReducers({
  reducerWishlist,
  reducerCart,
  reducerFilter,
  reducerProductList,
  reducerNotifications,
  productsReducer,
  reducerBlogPage
});
