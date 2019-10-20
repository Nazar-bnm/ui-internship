import React from 'react';

import ProductImage from '../ProductImage';
import ProductOrder from '../ProductOrder';
import { defaultImages } from '../../constants';
import { productOrderParameters } from '../../config/ProductOrderMockups';

import './ProductDetailsPage.scss';

export const CN = 'product-details';

const ProductDetailsPage = () => (
  <div className={`${CN} content`}>
    <ProductImage imagesArr={defaultImages} />
    <ProductOrder {...productOrderParameters} />
  </div>
);

export default ProductDetailsPage;
