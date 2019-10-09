import React from 'react';
import { shallow } from 'enzyme';
import BlogArticlePreview from './BlogArticlePreview';

describe('<BlogArticlePreview />', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      imageSrc: 'src/assets/img/content/new2.png',
      heading: 'Raccoons are fun and fashionable',
      text: 'Raccoons are fun and fashionable, they like to eat vinegrapes',
    };

    wrapper = shallow(
      <BlogArticlePreview {...props} />
    );
  });
  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
