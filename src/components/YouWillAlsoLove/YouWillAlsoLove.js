import React from 'react';

import { Button } from '@/shared';
import './YouWillAlsoLove.scss';

const CN = 'you-will-also-love';

const YouWillAlsoLove = (props) => {
  const { userCart, products } = props;

  if (!userCart.length) {
    return (
      <div className={`${CN} content`}>
        <h2 className={`${CN}__title`}>you will also love</h2>
        Buy something please!
      </div>
    );
  }

  if (userCart.length) {
    const selectedGender = userCart[0].data.genders[0];
    const selectedCategory = userCart[0].data.category;
    const selectedSize = userCart[0].data.sizes[0];
    const productsToRender = products.filter((item) => item.category === selectedCategory && item.genders.includes(selectedGender) && item.sizes.includes(selectedSize));
    const itemsToRenderNumber = 3;
    const croppedProducts = productsToRender.slice(0, itemsToRenderNumber);

    const renderProducts = () => (
      croppedProducts.map((item) => {
        const { title, price } = item;
        const imageClaudinaryId = item.images[0].claudinaryId;
        const priceToRender = `$${price}.00`;
        const imageSrc = `${process.env.IMAGE_URL}/${imageClaudinaryId}`;

        return (
          <div className={`${CN}__item`}>
            <img
              alt="product"
              className={`${CN}__image`}
              src={imageSrc}
            />
            <div className={`${CN}__item__description`}>
              <h3 className={`${CN}__item__title`}>{title}</h3>
              <span className={`${CN}__item__price`}>{priceToRender}</span>
              <Button className={`${CN}__quickview-button`}>quickview</Button>
            </div>
          </div>
        );
      })
    );

    return (
      <div className={`${CN} content`}>
        <h2 className={`${CN}__title`}>you will also love</h2>
        {renderProducts()}
      </div>
    );
  }
};

export default YouWillAlsoLove;
