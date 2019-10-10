import React from 'react';
import Carousel from '../Carousel';
import products from '../Carousel/products.json';

const HomePage = () => (
  <div>
    <Carousel items={products}/>
  </div>
);

export default HomePage;
