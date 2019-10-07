import React from 'react';
import PropTypes from 'prop-types';

import './LinkList.scss';

const Linklist = ({ links }) => {
  const { heading, data } = links;

  return (
    <div>
      <h3 className="linklist__title">{heading}</h3>
      {data.map(({ link, title }) => (
        <a href={link} key={title}>
          <h4 className="linklist__text">{title}</h4>
        </a>
      ))}
    </div>
  );
};

Linklist.propTypes = {
  links: PropTypes.object,
};

export default Linklist;
