import React from 'react';
import { shallow, mount } from 'enzyme';

import Modal from './Modal';

describe('<Modal />', () => {
  const mockFunc = jest.fn();
  const children = <div>Children</div>;
  let wrapper;

  let props = {
    show: true,
    hideModal: mockFunc,
  };

  beforeEach(() => {
    wrapper = shallow(<Modal {...props}>{children}</Modal>);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should set body class "remove-scroll" and be on focus mode when prop show is true', () => {
    wrapper = mount(<Modal {...props}>{children}</Modal>);

    expect(document.body.classList.contains('remove-scroll')).toBeTruthy();
    expect(wrapper.is(':focus')).toBeTruthy();
  });

  it('should call mockFunc on click', () => {
    const mockEvent = {
      target: {
        classList: {
          contains: () => 'modal'
        },
      },
    };

    wrapper.simulate('click', mockEvent);

    expect(mockFunc).toHaveBeenCalledTimes(1);
  });

  it('should call mockFunc on escape button', () => {
    const mockEvent = {
      target: {
        keyCode: 27
      },
    };

    wrapper.simulate('keyDown', mockEvent);
    expect(mockFunc).toHaveBeenCalledTimes(1);
  });

  it('should call mockFunc on close icon', () => {
    wrapper.find('.modal__close-button').simulate('click');
    expect(mockFunc).toHaveBeenCalledTimes(2);
  })

  it('should not set body class "remove-scroll" when prop show is false', () => {
    props.show = false;
    wrapper = mount(<Modal {...props}>{children}</Modal>);

    expect(document.body.classList.contains('remove-scroll')).toBeFalsy();
  });
});
