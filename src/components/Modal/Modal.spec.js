import React from 'react';
import { mount } from 'enzyme';

import Modal from './Modal';

describe('<Modal />', () => {
  const children = <div>Children</div>;
 let mockEvent = {
    target: {
      classList: {
        contains: () => 'modal',
      }
    }
  };

  let mockFunc;
  let wrapper;
  let props;

  beforeEach(() => {
     mockFunc = jest.fn();

     props = {
      removeModal: mockFunc,
    };

    wrapper = mount(<Modal {...props}>{children}</Modal>);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should set body class "remove-scroll" and be on focus mode when component is mounted', () => {
    expect(document.body.classList.contains('remove-scroll')).toBeTruthy();
    expect(wrapper.is(':focus')).toBeTruthy();
  });

  it('should call mockFunc on transitionEnd', () => {
    wrapper.simulate('transitionEnd', mockEvent);
    expect(mockFunc).toHaveBeenCalledTimes(1);
  });

  it('expect state property isTransition is "true" onClick', () => {
    expect(wrapper.state().isTransition).toBeFalsy();
    wrapper.simulate('click', mockEvent);
    expect(wrapper.state().isTransition).toBeTruthy();
  });

  it('expect state property isTransition is "true" on escape button', () => {
    mockEvent = {
        keyCode: 27
    };

    wrapper.simulate('keyDown', mockEvent);
    expect(wrapper.state().isTransition).toBeTruthy();
  });

  it('should remove body class "remove-scroll"', () => {
    wrapper.unmount();
    expect(document.body.classList.contains('remove-scroll')).toBeFalsy();
  });
});
