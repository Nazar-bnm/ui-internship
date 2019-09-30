import React from 'react';
import { Link } from 'react-router-dom';

const renderProductList = () => {
  const products = [
    { product: 'dress', id: '1' },
    { product: 't-shirt', id: '2' },
    { product: 'pants', id: '3' },
    { product: 'jeans', id: '4' },
  ];

  return products.map(({ product, id }) => {
    return (
      <div key={id}>
        <li>
          <Link to={`/products/${id}`}>{product}</Link>
        </li>
      </div>
    );
  });
};

const ProductListPage = () => (<ul>{renderProductList()}</ul>);

export default ProductListPage;
