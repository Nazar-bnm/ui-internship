import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import './BlogArticlePreview.scss';

export const CN = 'article-preview';

const BlogArticlePreview = (props) => {
  const { imageSrc, heading, text } = props;
  const backgroundImageURL = {
    backgroundImage: `url(${imageSrc})`
  };

  return (
    <div className={cx(CN)} style={backgroundImageURL}>
      <div className={`${CN}__content`}>
        <h2 className={`${CN}__heading`}>{heading}</h2>
        <p className={`${CN}__text`}>{text}</p>
      </div>
    </div>
  );
};

BlogArticlePreview.propTypes = {
  imageSrc: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string
};

BlogArticlePreview.defaultProps = {
  imageSrc: 'src/assets/img/content/new2.png',
  heading: 'Raccoons are fun and fashionable',
  text: 'Raccoons are fun and fashionable, they like to eat vinegrapes'
};

export default BlogArticlePreview;
