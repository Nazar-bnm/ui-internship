import React from 'react';
import { shallow } from 'enzyme';
import ProductImage from './ProductImage';
import { defaultImages } from '../../constants';

const { image1URL, image2URL, image3URL, image4URL } = defaultImages;

describe('<ProductImage />', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      imagesArr: [
        { src: image1URL },
        { src: image2URL },
        { src: image3URL },
        { src: image4URL },
      ],
    };

    wrapper = shallow(
      <ProductImage {...props} />
    );
  });
  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
