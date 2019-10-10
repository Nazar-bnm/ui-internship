import React from 'react';
import { shallow } from 'enzyme';
import ProductOrder from './ProductOrder';
import { productOrderParameters } from '../../config/ProductOrderMockups';

describe('<ProductOrder />', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    productOrderParameters;

    wrapper = shallow(
      <ProductOrder {...props} />
    );
  });
  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
