import React from 'react';
import { shallow } from 'enzyme';

import Notifications from './Notifications';

describe('<Notifications />', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      notifications: [
        {title: "warning", message: "Hey, be careful", type: "warning", id: 7986713631788149},
        {title: "warning", message: "Hey, be careful", type: "warning", id: 7986713631788148},
        {title: "warning", message: "Hey, be careful", type: "warning", id: 7986713631788147}
      ],
      removeItemNotification: jest.fn()
    }
    wrapper = shallow(<Notifications {...props} />);
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renderIcon method', () => {
    wrapper.instance().renderIcon = jest.fn();
      const type = 'info';
     
   wrapper.update();
   expect(wrapper.instance().renderIcon).toBeDefined();
   expect(type).toEqual('info'); 
  });

  it('removeItemNotification have beent called', () => {
    const inst = wrapper.instance();
    const spy = jest.spyOn(inst, 'hideNotification');
    inst.hideNotification();
    expect(spy).toBeCalled();
   })

});