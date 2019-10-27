import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Modal from "../Modal";
import ProductImage from "../ProductImage";
import ProductOrder from "../ProductOrder";
import Heading from "../Heading";
import { defaultImages } from "../../constants";
import { productOrderParameters } from "../../config/ProductOrderMockups";

import "./QuickView.scss";

const CN = "quick-view";

class QuickView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };

    this.removeModal = this.removeModal.bind(this);
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
        <i className={`eye icon ${CN}__icon`} onClick={this.showModal} />
        {show && (
          <Modal className={CN} removeModal={this.removeModal}>
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
