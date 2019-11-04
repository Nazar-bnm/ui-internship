import React from 'react';
import { shallow } from 'enzyme';

import ProductDetailsPage from './ProductDetailsPage';

xdescribe('<ProductDetailsPage />', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(<ProductDetailsPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
