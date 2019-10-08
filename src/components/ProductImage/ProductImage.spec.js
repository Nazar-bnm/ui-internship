import React from 'react';
import { shallow } from 'enzyme';
import ProductImage from './ProductImage';

const image1URL = 'src/assets/img/content/new1.png';
const image2URL = 'src/assets/img/content/new1.png';
const image3URL = 'src/assets/img/content/new1.png';
const image4URL = 'src/assets/img/content/new1.png';

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
