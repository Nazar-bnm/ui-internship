import React from 'react';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

import { mount } from 'enzyme';
import Brands from './Brands';

const mockData = [
  {
    'id': 'Boss',
    'photo': 'https://i.pinimg.com/originals/a6/c8/7b/a6c87bc1494906db8c9bafb3a4f4686b.png',
  },
  {
    'id': 'DonnaKaran',
    'photo': 'https://i.pinimg.com/originals/86/5a/64/865a64b6060a7f40b94301a7fab8bbcf.jpg',
  },
  {
    'id': 'Gucci',
    'photo': 'https://myrealdomain.com/images/gucci-logo-png-1.png',
  },
  {
    'id': 'Baldinini',
    'photo': 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Baldinini_logo.svg/1280px-Baldinini_logo.svg.png',
  },
  {
    'id': 'Dior',
    'photo': 'https://pervayaoptica.ru//upload//DIOR.png',
  },
  {
    'id': 'Gucci2',
    'photo': 'https://myrealdomain.com/images/gucci-logo-png-1.png',
  },
];

describe('<Brands />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Brands />);
    const mock = new MockAdapter(axios);

    mock.onGet(`${process.env.BASE_URL}/brands`).reply(200, mockData);
  });

  test('should check `componentDidMount()`', () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'downloadBrands');
    instance.componentDidMount();
    expect(instance.downloadBrands).toHaveBeenCalledTimes(1);
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
