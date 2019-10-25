import React from 'react';
import { shallow } from 'enzyme';

import ProductList from './ProductList';

describe('<ProductList />', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(<ProductList />);
    expect(wrapper).toMatchSnapshot();
  });
});