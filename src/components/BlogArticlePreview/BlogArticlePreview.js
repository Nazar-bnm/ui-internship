import React from 'react';
import './BlogArticlePreview.scss';
import cx from 'classnames';
import PropTypes from 'prop-types';
export const CN = 'article-preview';

const BlogArticlePreview = () => {
  return (
    <div className={cx(CN)}>
      <div className={`${CN}__content`}>
        <h2 className={`${CN}__heading`}>best summer trends</h2>
        <p className={`${CN}__text`}>we know what you need this summer. most fashion looks</p>
      </div>
    </div>
  );
};

BlogArticlePreview.propTypes = {
  className: PropTypes.string,
};

export default BlogArticlePreview;
