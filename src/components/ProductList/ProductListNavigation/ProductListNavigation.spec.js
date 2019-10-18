import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import toJson from 'enzyme-to-json';
import ItemListContainer from '../ItemsList/ItemsListContainer';

const configureMockStore = configureStore();

const initialState = {
  ascendingOrder: true,
  orderType: 'Position',
  chosenItemsOnPage: 6,
  itemList: [],
  error: null,
}

const products = [{dress: 1}];
const errorMessage = 'Error happened';
const store = configureMockStore({reducerProductList: initialState});

it('should receive the state from the store', () => {
  const wrapper = shallow(
      <ItemListContainer store={ store } />
  ).dive();
  expect(toJson(wrapper)).toMatchSnapshot();  
});

it('should path the proper array of products to the action', () => {
  const wrapper = shallow(
    <ItemListContainer store={ store } />
  ).dive();
  expect(wrapper.props().onGetProductsSuccess(products).products).toBe(products);
});

it('should path an error message to the action', () => {
  const wrapper = shallow(
    <ItemListContainer store={ store } />
  ).dive();
  expect(wrapper.props().onGetProductsError(errorMessage).error).toBe(errorMessage);
});