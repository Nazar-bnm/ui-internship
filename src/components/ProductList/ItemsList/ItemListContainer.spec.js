import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import toJson from 'enzyme-to-json';

import ItemListContainer from './ItemsListContainer';

const configureMockStore = configureStore();

const initialState = {
  ascendingOrder: true,
  chosenItemsOnPage: 6,
  error: null,
  itemList: [],
  orderType: 'Position'
}
  
const products = [{dress: 'a nice dress'}];
const errorMessage = 'Error happened';
const store = configureMockStore({reducerProductList: initialState});

it('should receive the state from the store', () => {
  const wrapper = shallow(
      <ItemListContainer store={store} />
  ).dive();
  expect(toJson(wrapper)).toMatchSnapshot();  
});

it('should path the proper array of products to the action', () => {
  const wrapper = shallow(
    <ItemListContainer store={store} />
  ).dive();
  expect(wrapper.props().onGetProductsSuccess(products).products).toBe(products);
});

it('should path an error message to the action', () => {
  const wrapper = shallow(
    <ItemListContainer store={store} />
  ).dive();
  expect(wrapper.props().onGetProductsError(errorMessage).error).toBe(errorMessage);
});
