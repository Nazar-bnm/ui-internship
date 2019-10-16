import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './AccordionItem.scss';

const CN = 'accordion-item';

const AccordionItem = ({
  hide,
  onClick,
  title,
  description,
  height,
  scroll,
}) => {
  const heightStyle = {
    height: height,
  };

  return (
    <div className={CN}>
      <div
        className={cx(`${CN}__header`, { [`${CN}__header--active`]: !hide })}
        onClick={onClick}
      >
        <h4>{title}</h4>
        <i className={cx('caret', 'right', 'icon', { 'icon--down': !hide })} />
      </div>

      <div
        className={cx([`${CN}__description`], {
          [`${CN}__description--hide`]: hide,
          [`${CN}__description--show`]: !hide,
          scroll: scroll,
        })}
        style={!hide ? heightStyle : {}}
      >
        {description}
      </div>
    </div>
  );
};

AccordionItem.propTypes = {
  hide: PropTypes.bool,
  onClick: PropTypes.func,
  title: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  height: PropTypes.string,
  scroll: PropTypes.bool,
};

AccordionItem.defaultProps = {
  hide: true,
  onClick: () => {},
  title: '',
  description: '',
  height: '',
  scroll: false,
};

export default AccordionItem;
