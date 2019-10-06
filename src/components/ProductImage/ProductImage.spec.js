/* eslint-disable max-len */
import React from 'react';
import { shallow } from 'enzyme';
import ProductImage from './ProductImage';

describe('<ProductImage />', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      imagesArr: [
        { src: 'https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/r/raccoon_thumb.ngsversion.1485815402351.adapt.1900.1.JPG' },
        { src: 'https://www.nydailynews.com/resizer/57h4sk1Mr8eFVp6LV7LlJ3zBasI=/800x600/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/CVQJPCXX35C5NFMJMPHHC6QKHQ.jpg' },
        { src: 'https://cdn.mos.cms.futurecdn.net/xCknw5UTKR8rM97eZE7reF-320-80.jpg' },
        { src: 'https://curiodyssey.org/wp-content/uploads/bb-plugin/cache/xMammals-Raccoon-square.jpg.pagespeed.ic.W5-0FMTZBa.jpg' },
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
