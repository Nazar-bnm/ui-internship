import React from 'react';

import './BlogItem.scss';

const CN = 'blog-item';

const BlogItem = ({
  title,
  date,
  photo,
  text
}) => (
  <div className={CN}>
    <h3 className={`${CN}__heading`}>{title}</h3>
    <span className={`${CN}__date`}>{date}</span>
    <div className={`${CN}__image-wrapper`}>
      <img
        className={`${CN}__image`}
        alt="Publication"
        src={photo}
      />
    </div>
    <p className={`${CN}__text`}>{text}</p>
  </div>
);

export default BlogItem;
