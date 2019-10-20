import React from 'react';
import { shallow } from 'enzyme';

import ProductDetailsPage from './ProductDetailsPage';

describe('<ProductDetailsPage />', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(
      <ProductDetailsPage />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
