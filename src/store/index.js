import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers';
import cartReducer from '../reducers/reducerCart';

export default createStore(rootReducer, applyMiddleware(thunk, logger), cartReducer);
