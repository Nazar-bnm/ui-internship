import React from 'react';

import ProductImage from '../ProductImage';
import ProductOrder from '../ProductOrder';
import Accordion from '../Accordion';
import ContactDetails from '../Footer/ContactDetails';
import { accordionItemsData } from '../../config/dataItemsAccordion';
import { productOrderParameters } from '../../config/ProductOrderMockups';
import Button from '../shared/Button';

import './ProductDetailsPage.scss';

export const CN = 'product-details';

const ProductDetailsPage = (props) => {
  const { match: { params: { id } }, history: { goBack }, products } = props;
  const product = products.find(({ _id }) => _id === id);

  if (products.length) {
    const { images } = product;
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
          <ProductImage className={`${CN}-images`} images={productImageData} />
          <div className={`${CN}-right-aside`}>
            <ProductOrder {...productOrderParameters} />
            <div className={`${CN}-right-aside-accordion`}>
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
