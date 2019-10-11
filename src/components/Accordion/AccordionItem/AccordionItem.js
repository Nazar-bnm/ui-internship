import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './AccordionItem.scss';

const CN = 'accordion-item';

const accordionItem = ({ hide, onClick, title, description }) => {
  return (
    <div className={CN}>
      <div className={cx(`${CN}-header`, { [`${CN}-header--active`]: !hide })} onClick={onClick}>
        <h4>{title}</h4>
        <i className={cx('caret', 'right', 'icon', { [`${CN}-down`]: !hide } )} />
      </div>
      <div className={cx({ [`${CN}-hide`]: hide, [`${CN}-show`]: !hide })}>
        <p>
          {description}
        </p>
      </div>
    </div>
  );
};

accordionItem.propTypes = {
  hide: PropTypes.bool,
  onClick: PropTypes.func,
  title: PropTypes.string,
  description: PropTypes.string,
};

accordionItem.defaultProps = {
  hide: true,
  onClick: () => {},
  title: '',
  description: '',
};

export default accordionItem;
