import React from 'react';
import { shallow } from 'enzyme';

import ProductItem from './ProductItem';

describe('<ProductItem />', () => {
  let wrapper;
  let addToWishlist;
  let showMessage;
  const removeFromWishlist = jest.fn();

  const props = {
    product: {
      _id: '5',
      images: [],
      label: 'new',
      title: 'dress',
      price: '599',
      sizes: ['s', 'm', 'l']
    },
    wishlist: ['5', '4', '2'],
    addToWishlist: addToWishlist,
    removeFromWishlist: removeFromWishlist,
    showMessage: showMessage
  };

  beforeEach(() => {
    addToWishlist = jest.fn();
    showMessage = jest.fn();
    props.addToWishlist = addToWishlist;
    props.showMessage = showMessage;
    wrapper = shallow(<ProductItem {...props} />);
  });

  it('should render component <ProductItem />', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should onClick eye button set state to isShowedModal to true', () => {
    wrapper.setState({ isHovered: true });
    wrapper
      .find('.eye')
      .first()
      .simulate('click');

    expect(wrapper.state().isShowedModal).toBeTruthy();
  });

  it('should set isShowedModal to false when removeModal is called', () => {
    wrapper.setState({ isHovered: true, isShowedModal: true });
    wrapper
      .find('.product-quick-view')
      .first()
      .props()
      .removeModal();

    expect(wrapper.state().isShowedModal).toBeFalsy();
  });

  it('should onMouseEnter set isHovered to true', () => {
    wrapper
      .find('.product')
      .first()
      .simulate('mouseEnter');

    expect(wrapper.state().isHovered).toBeTruthy();
  });

  it('should onMouseLeave set isHovered to false when isShowedModal is false', () => {
    wrapper
      .find('.product')
      .first()
      .simulate('mouseLeave');
    wrapper.setState({ isShowedModal: true });

    expect(wrapper.state().isHovered).toBeFalsy();
  });

  it('should onClick on red heart call removeFromWishlist and showNotification props', () => {
    wrapper.setState({ isHovered: true });
    wrapper
      .find('.red')
      .first()
      .simulate('click');

    expect(removeFromWishlist).toHaveBeenCalledTimes(1);
    expect(showMessage).toHaveBeenCalledTimes(1);
  });

  it('should call props addToWishlist and showMessage', () => {
    const classNameSelector = '.product-quick-view-content__product-order';
    
    wrapper.setState({ isHovered: true, isShowedModal: true });
    wrapper
      .find(classNameSelector)
      .first()
      .props()
      .onClickAddToWishlist();

    expect(addToWishlist).toHaveBeenCalledTimes(1);
    expect(showMessage).toHaveBeenCalledTimes(1);
  });
});
