import React from 'react';
import ProductImage from '../ProductImage';
import ProductOrder from '../ProductOrder';
import Accordion from '../Accordion';
import ContactDetails from '../Footer/ContactDetails';
import { accordionItemsData } from '../../config/dataItemsAccordion';
import { Button } from '@/shared';
import { ADDED_TO_WISHLIST_NOTIFICATION } from '../../constants/notificationData';
import './ProductDetailsPage.scss';

export const CN = 'product-details';
class ProductDetailsPage extends React.Component {
  constructor(props) {
    super(props);

    const laptopWidth = 1024;

    this.state = {
      isVerticalCarousel: window.innerWidth > laptopWidth
    };

    this.addToWishlistWithNotification = this.addToWishlistWithNotification.bind(this);
  }

  setVerticalCarousel() {
    this.state({
      isVerticalCarousel: window.innerWidth > this.laptopWidth
    });
  }

  addToWishlistWithNotification() {
    const { showMessage, addToWishlist, id } = this.props;
    addToWishlist(id);
    showMessage(ADDED_TO_WISHLIST_NOTIFICATION);
  }

  render() {
    const {
      match: {
        params: { id }
      },
      history: { goBack },
      products
    } = this.props;
    const product = products.find(({ _id }) => _id === id);
    const productsExist = products.length;

    if (productsExist) {
      const {
        images, title, price, description
      } = product;
      const productImageData = images.map(({ claudinaryId }) => ({
        src: `${process.env.IMAGE_URL}/${claudinaryId}`
      }));
      const { isVerticalCarousel } = this.state;
      return (
        <>
          <Button className="go-back-btn" icon="arrow left" onClick={goBack}>
            Go Back
          </Button>
          <div className={`${CN} content`}>
            <ProductImage
              className={`${CN}-images`}
              images={productImageData}
              verticalCarousel={isVerticalCarousel}
            />
            <div className={`${CN}-description`}>
              <ProductOrder
                id={id}
                className={`${CN}-description__product-order`}
                title={title}
                price={`$${price}`}
                description={description}
                onClickAddToWishlist={this.addToWishlistWithNotification}
              />
              <div className={`${CN}-description-accordion`}>
                <Accordion
                  scroll
                  data={accordionItemsData}
                  heightItem="100px"
                  className={`${CN}__accordion`}
                />
                <ContactDetails title="share" />
              </div>
            </div>
          </div>
        </>
      );
    }
    return <></>;
  }
}

export default ProductDetailsPage;
