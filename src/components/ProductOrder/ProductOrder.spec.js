import React from 'react';
import { shallow } from 'enzyme';
import ProductOrder from './ProductOrder';
import { productOrderParameters } from '../../config/ProductOrderMockups';

describe('<ProductOrder />', () => {
  const wrapper = shallow(
    <ProductOrder {...productOrderParameters} />
  );

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
