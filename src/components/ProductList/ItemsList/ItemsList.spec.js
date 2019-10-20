import React from 'react';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { mount } from 'enzyme';

import ItemsList from './ItemsList';
import mockedData from '../../../mockedDataForTests';

describe('<ItemsList />', () => {
  let wrapper;
  const { mockedProductList } = mockedData;

  beforeEach(() => {
    const mock = new MockAdapter(axios);

    wrapper = mount(<ItemsList />);
    mock.onGet(`${process.env.BASE_URL}/product-list`).reply(200, mockedProductList);
  });

  test('should check `componentDidMount()`', () => {
    const instance = wrapper.instance();
    
    jest.spyOn(instance, 'getListItems');
    instance.componentDidMount();
    expect(instance.getListItems).toHaveBeenCalledTimes(1);
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
