import React from 'react';
import { shallow } from 'enzyme';

import LoginPage from './LoginPage';

describe('<LoginPage />', () => {
  let wrapper;
  let instance;

  beforeEach(() => {
    wrapper = shallow(<LoginPage />);
    instance = wrapper.instance();
    instance.formLogin = {
      current: [
        {
          value: 'password'
        },
        {
          value: 'groot@gmail.com'
        }
      ]
    };
    instance.formRegister = {
      current: [
        {
          value: 'groot@gmail.com'
        }
      ]
    }
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should save strings to localStorage', () => {
    jest.spyOn(instance, 'saveToLocalStorage');
    instance.saveToLocalStorage();
    jest.spyOn(window.localStorage.__proto__, 'setItem');
    window.localStorage.__proto__.setItem = jest.fn();
    
    expect(instance.saveToLocalStorage).toHaveBeenCalledTimes(1);
  });
});
