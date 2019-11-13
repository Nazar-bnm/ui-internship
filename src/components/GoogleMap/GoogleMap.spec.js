import React from 'react';
import { shallow, mount } from 'enzyme';

import GoogleMap from './GoogleMap';

describe('<GoogleMap />', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      id: 'myMap',
      options: { center: { lat: 49.8397, lng: 24.0297 }, zoom: 11 }
    }

    wrapper = shallow(<GoogleMap {...props}  />)
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should check onPageLoad()', () => {
    const inst = wrapper.instance();
    const spy = jest.spyOn(inst, 'onPageLoad');

    inst.onPageLoad();
    expect(spy).toHaveBeenCalled();
  });

  xtest('should check renderMap()', () => {
    const inst = wrapper.instance();
    const spy = jest.spyOn(inst, 'renderMap');

    inst.renderMap();
    expect(spy).toHaveBeenCalled();
  });

});
