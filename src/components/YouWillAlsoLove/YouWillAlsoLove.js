import React from 'react';
import { NavLink } from 'react-router-dom';

import { Button } from '@/shared';
import Modal from '../Modal';
import Heading from '../Heading';
import ProductImage from '../ProductImage';
import ProductOrder from '../ProductOrder';

import './YouWillAlsoLove.scss';

const CN = 'you-will-also-love';

class YouWillAlsoLove extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isShowedModal: false,
      selectedItem: {}
    };

    this.removeModal = this.removeModal.bind(this);
    this.renderQuickView = this.renderQuickView.bind(this);
  }

  handleClick(item) {
    this.setState({
      isShowedModal: true,
      selectedItem: item
    });
    this.renderQuickView();
  }

  removeModal() {
    this.setState({
      isShowedModal: false
    });
  }

  renderQuickView() {
    const { selectedItem } = this.state;
    const {
      images,
      _id
    } = selectedItem;
    const imagesForQuickView = images.map(({ claudinaryId }) => ({
      src: `${process.env.IMAGE_URL}/${claudinaryId}`
    }));

    return (
      <Modal className={`${CN}-quick-view`} removeModal={this.removeModal}>
        <Heading title="Quick view" />
        <div className={`${CN}-quick-view-content`}>
          <ProductImage className={`${CN}-quick-view-content-images`} images={imagesForQuickView} verticalCarousel />
          <div className={`${CN}-quick-view-content-wrapper`}>
            <ProductOrder
              id={_id}
              className={`${CN}-quick-view-content__product-order`}
            />
            <NavLink
              to={`/product-details/${_id}`}
              className={`${CN}-quick-view-content__link`}
            >
              See more details
            </NavLink>
          </div>
        </div>
      </Modal>
    );
  }

  render() {
    const { userCart, products } = this.props;

    if (!userCart.length || window.innerWidth < 1024) {
      return null;
    }
    const selectedGender = userCart[0].data.genders[0];
    const selectedCategory = userCart[0].data.category;
    const selectedSize = userCart[0].data.sizes[0];
    const productsToRender = products.filter((item) => item.category === selectedCategory && item.genders.includes(selectedGender) && item.sizes.includes(selectedSize));
    const itemsToRenderNumber = 3;
    const croppedProducts = productsToRender.slice(0, itemsToRenderNumber);
    const { selectedItem, isShowedModal } = this.state;

    const renderProducts = () => (
      croppedProducts.map((item) => {
        const { title, price } = item;
        const imageClaudinaryId = item.images[0].claudinaryId;
        const priceToRender = `$${price}.00`;
        const imageSrc = `${process.env.IMAGE_URL}/${imageClaudinaryId}`;

        return (
          <div key={title} className={`${CN}__item`}>
            <img
              alt="product"
              className={`${CN}__image`}
              src={imageSrc}
            />
            <div className={`${CN}__item__description`}>
              <h3 className={`${CN}__item__title`}>{title}</h3>
              <span className={`${CN}__item__price`}>{priceToRender}</span>
              <Button className={`${CN}__quickview-button`} onClick={this.handleClick.bind(this, item)}>quickview</Button>
            </div>
          </div>
        );
      })
    );

    return (
      <div className={`${CN} content`}>
        <h2 className={`${CN}__title`}>you will also love</h2>
        {renderProducts()}
        {isShowedModal && this.renderQuickView(selectedItem)}
      </div>
    );
  }
}

export default YouWillAlsoLove;
