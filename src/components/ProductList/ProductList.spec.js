import React from 'react';
import { shallow } from 'enzyme';
import ProductList from './ProductList';

describe('<ProductList />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <ProductList />
    );
  });
  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});