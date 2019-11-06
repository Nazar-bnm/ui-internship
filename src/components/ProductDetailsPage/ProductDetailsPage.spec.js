import React from 'react';
import { shallow } from 'enzyme';

import ProductDetailsPage from './ProductDetailsPage';

describe('<ProductDetailsPage />', () => {
  const products = [{images: [], title: '', price: '', description: '', _id: 5}]
  const props = { match: { params: { id: 5 } }, history: { goBack: () => {} }, products }
  test('should match snapshot', () => {
    const wrapper = shallow(<ProductDetailsPage {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
