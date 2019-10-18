import React from 'react';
import { shallow } from 'enzyme';
import ProductListNavigation from './ProductListNavigation';
import { JestEnvironment } from '@jest/environment';

describe('<ProductListNavigation />', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      changeItemsOnPageNum: jest.fn(),
      changeSortingOrder: jest.fn(),
      ascendingOrder: true,
      changeOrderType: jest.fn(),
    };

    wrapper = shallow(
      <ProductListNavigation {...props} />
    );
  });
  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
