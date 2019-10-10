import React from 'react';
import { shallow } from 'enzyme';
import ProductImage from './ProductImage';
import { defaultImages } from '../../constants';

describe('<ProductImage />', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(
      <ProductImage imagesArr={defaultImages} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
