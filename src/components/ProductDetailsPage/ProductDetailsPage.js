import React from 'react';

import ProductImage from '../ProductImage';
import ProductOrder from '../ProductOrder';
import Accordion from '../Accordion';
import ContactDetails from '../Footer/ContactDetails';
import { defaultImages } from '../../constants';
import { accordionItemsData } from '../../config/dataItemsAccordion';
import { productOrderParameters } from '../../config/ProductOrderMockups';

import './ProductDetailsPage.scss';

export const CN = 'product-details';

const ProductDetailsPage = ({ productId }) => (
  <div className={`${CN} content`}>
    <ProductImage images={defaultImages} />
    <div className={`${CN}-right-aside`}>
      <ProductOrder {...productOrderParameters} id={productId} />
      <div className={`${CN}-right-aside-accordion`}>
        <Accordion data={accordionItemsData} heightItem="100px" className={`${CN}__accordion`} />
        <ContactDetails title="share" />
      </div>
    </div>
  </div>
);

export default ProductDetailsPage;
