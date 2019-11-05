import React, { useState } from 'react';

import ProductImage from '../ProductImage';
import ProductOrder from '../ProductOrder';
import Accordion from '../Accordion';
import ContactDetails from '../Footer/ContactDetails';
import { accordionItemsData } from '../../config/dataItemsAccordion';
import Button from '../shared/Button';

import './ProductDetailsPage.scss';

export const CN = 'product-details';

const ProductDetailsPage = (props) => {
  const [isVerticalCarousel, setVerticalCarousel] = useState(window.innerWidth > 768);
  const { match: { params: { id } }, history: { goBack }, products } = props;
  const product = products.find(({ _id }) => _id === id);
  window.onresize = () => setVerticalCarousel(window.innerWidth > 768);
  if (products.length) {
    const {
      images, title, price, description
    } = product;
    const productImageData = images.map(({ claudinaryId }) => ({ src: `${process.env.IMAGE_URL}/${claudinaryId}` }));


    return (
      <>
        <Button
          className="go-back-btn"
          icon="arrow left"
          onClick={goBack}
        >
      Go Back
        </Button>
        <div className={`${CN} content`}>
          <ProductImage className={`${CN}-images`} images={productImageData} verticalCarousel={isVerticalCarousel} />
          <div className={`${CN}-description`}>
            <ProductOrder className={`${CN}-description__product-order`} title={title} price={`$${price}`} description={description} />
            <div className={`${CN}-description-accordion`}>
              <Accordion data={accordionItemsData} heightItem="100px" className={`${CN}__accordion`} />
              <ContactDetails title="share" />
            </div>
          </div>
        </div>
      </>
    );
  }

  return <> </>;
};

export default ProductDetailsPage;
