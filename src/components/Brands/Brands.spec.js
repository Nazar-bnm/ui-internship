import React from 'react';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { mount } from 'enzyme';

import Brands from './Brands';
import mockedData from '@/mockedDataForTests';

describe('<Brands />', () => {
  let wrapper;
  const { mockedBrands } = mockedData;

  beforeEach(() => {
    wrapper = mount(<Brands />);
    const mock = new MockAdapter(axios);

    mock.onGet(`${process.env.BASE_URL}/brands`).reply(200, mockedBrands);
  });

  test('should check `componentDidMount()`', () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'getBrandsImages');
    instance.componentDidMount();
    expect(instance.getBrandsImages).toHaveBeenCalledTimes(1);
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
