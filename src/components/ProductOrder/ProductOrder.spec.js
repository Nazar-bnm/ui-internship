import React from 'react';
import { shallow } from 'enzyme';

import ProductOrder from './ProductOrder';
import { productOrderParameters } from '../../config/ProductOrderMockups';

describe('<ProductOrder />', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(<ProductOrder {...productOrderParameters} />);
    expect(wrapper).toMatchSnapshot();
  });
});
