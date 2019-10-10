import React from 'react';
import cx from 'classnames';
import './AccordionItem.scss';

const CN = 'accordion-item';

const accordionItem = ({ type, onClick, hide, className }) => {
  return (
    <div className={CN}>
      <div className={`${CN}-header`}>
        <h4>accordion-item</h4>
        <span onClick={onClick}>
          <i className={cx('angle', type, 'icon')} />
        </span>
      </div>
      <div className={cx(`${CN}-description`, className)}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A quasi
          blanditiis quis hic! A, vero facilis ratione molestiae provident
          reiciendis perspiciatis culpa, cum neque architecto velit, dolore
          dolorum consequuntur ducimus.
        </p>
      </div>
    </div>
  );
};

export default accordionItem;
