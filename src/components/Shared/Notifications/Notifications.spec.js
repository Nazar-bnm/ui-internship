import React from 'react';
import { shallow } from 'enzyme';

import Notifications from './Notifications';

describe('<Notifications />', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      isHideNotification: jest.fn(),
      isShowNotification: true
    }
    wrapper = shallow(<Notifications {...props} />);
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('isHideNotification have beent called', () => {
    const inst = wrapper.instance();
    const spy = jest.spyOn(inst, 'hideMessage');
    inst.hideMessage();
    expect(spy).toBeCalled();
   })

});