import React from 'react';
import { shallow } from 'enzyme';

import ProductListNavigation from './ProductListNavigation';

describe('<ProductListNavigation />', () => {
  test('should match snapshot', () => {
    let props = {
      ascendingOrder: true,
      changeItemsOnPageNum: jest.fn(),
      changeOrderType: jest.fn(),
      changeSortingOrder: jest.fn(),
    };
    let wrapper = shallow(
      <ProductListNavigation {...props} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
