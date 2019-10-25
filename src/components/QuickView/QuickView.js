import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Modal from '../Modal';
import ProductImage from '../ProductImage';
import ProductOrder from '../ProductOrder';
import Heading from '../Heading';
import { defaultImages } from '../../constants';
import { productOrderParameters } from '../../config/ProductOrderMockups';

import './QuickView.scss';

const CN = 'quick-view';

class QuickView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  showModal = () => {
    this.setState({
      show: true
    });
  };

  removeModal = () => {
    this.setState({
      show: false
    });
  };

  render() {
    const { show } = this.state;
    const {
      product: { id }
    } = this.props;

    return (
      <>
        <button
          type="button"
          onClick={this.showModal}
          className={`${CN}-button`}
        >
          <i className={`eye icon ${CN}-button__icon`} />
        </button>
        {show && (
          <Modal className={CN} removeModal={this.removeModal.bind(this)}>
            <Heading title="Quick view" />
            <div className={`${CN}-content`}>
              <ProductImage images={defaultImages} />
              <div className={`${CN}-content__wrapper`}>
                <ProductOrder {...productOrderParameters} />
                <NavLink
                  to={`/product-page/${id}`}
                  className={`${CN}-content__link`}
                >
                  See more details
                </NavLink>
              </div>
            </div>
          </Modal>
        )}
      </>
    );
  }
}

export default QuickView;
