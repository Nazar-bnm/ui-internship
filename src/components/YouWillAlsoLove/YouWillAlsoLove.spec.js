import React from 'react';
import { shallow } from 'enzyme';

import YouWillAlsoLove from './YouWillAlsoLove';

describe('<ProductImage />', () => {
  test('should match snapshot', () => {
    const products = [{
      chosenQuantity: 1,
      color: "black",
      colors: ["black"],
      data: {
        brandId: "5daf1650a3f2fe001790b09b",
        category: "shirts",
        colors: ["black"],
        createdAt: "2019-10-24T10:15:18.279Z",
        description: "Adopt breathable fabric, soft, lightweight, comfortable to wear. Simple stripe design will make you fashionable and beautiful. It can easily match with denim shorts, close-fitting pants, etc. Suitable for daily wear, perfectly displaying your temperament.",
        genders: ["woman"],
        price: 200,
        quantity: 10,
        seasons: ["spring, summer, autumn"],
        sellCount: 0,
        sizes: ["S", "M"],
        title: "Black shirt with white stripes",
        _id: "5db179b634a29600172f6e8a"
      },
      description: "Adopt breathable fabric, soft, lightweight, comfortable to wear. Simple stripe design will make you fashionable and beautiful. It can easily match with denim shorts, close-fitting pants, etc. Suitable for daily wear, perfectly displaying your temperament.",
      id: "5db179b634a29600172f6e8a",
      price: 200,
      quantity: 10,
      size: "S",
      sizes: ["S", "M"],
      title: "Black shirt with white stripes",
    }];
    const userCart = [{
      chosenQuantity: 1,
      color: "black",
      colors: ["black"],
      data: {
        brandId: "5daf1650a3f2fe001790b09b",
        category: "shirts",
        colors: ["black"],
        createdAt: "2019-10-24T10:15:18.279Z",
        description: "Adopt breathable fabric, soft, lightweight, comfortable to wear. Simple stripe design will make you fashionable and beautiful. It can easily match with denim shorts, close-fitting pants, etc. Suitable for daily wear, perfectly displaying your temperament.",
        genders: ["woman"],
        price: 200,
        quantity: 10,
        seasons: ["spring, summer, autumn"],
        sellCount: 0,
        sizes: ["S", "M"],
        title: "Black shirt with white stripes",
        _id: "5db179b634a29600172f6e8a"
      },
      description: "Adopt breathable fabric, soft, lightweight, comfortable to wear. Simple stripe design will make you fashionable and beautiful. It can easily match with denim shorts, close-fitting pants, etc. Suitable for daily wear, perfectly displaying your temperament.",
      id: "5db179b634a29600172f6e8a",
      price: 200,
      quantity: 10,
      size: "S",
      sizes: ["S", "M"],
      title: "Black shirt with white stripes",
    }];
    const wrapper = shallow(<YouWillAlsoLove userCart={userCart} products={products} />);

    expect(wrapper).toMatchSnapshot();
  });
});
