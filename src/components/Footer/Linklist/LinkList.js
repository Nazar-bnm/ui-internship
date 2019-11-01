import React from 'react';
import PropTypes from 'prop-types';

import './LinkList.scss';

export const CN = 'linklist';

const Linklist = ({ links }) => {
  const { heading, data } = links;

  return (
    <nav>
      <h3 className={`${CN}__title`}>{heading}</h3>
      {data.map(({ link, title }) => (
        <a href={link} key={title}>
          <h4 className={`${CN}__text`}>{title}</h4>
        </a>
      ))}
    </nav>
  );
};

Linklist.propTypes = {
  links: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({
      link: PropTypes.string,
      title: PropTypes.string
    }))
  }).isRequired
};

export default Linklist;
