import React, { useEffect, useRef } from 'react';
import cx from 'classnames';

import './Modal.scss';

const CN = 'modal';

const Modal = (props) => {
  const {
    show,
    children,
    hideModal,
    className
  } = props;
  const modalRef = useRef(null);

  useEffect(() => {
    if (show) {
      document.body.classList.add('remove-scroll');
      modalRef.current.focus();
    }
  });

  const handleHiding = () => {
    document.body.classList.remove('remove-scroll');
    hideModal();
  };

  const hideModalOnBackdrop = (event) => {
    event.target.classList.contains(CN)
      && handleHiding();
  };

  const hideModalOnEscape = (event) => {
    const escapeKeyCode = 27;

    event.keyCode === escapeKeyCode && handleHiding();
  };

  return (
    <div
      tabIndex="-1"
      ref={modalRef}
      className={cx(`${CN}`, { [`${CN}--hide`]: !show })}
      onClick={hideModalOnBackdrop}
      onKeyDown={hideModalOnEscape}
    >
      <div className={cx(`${CN}__window`, className, { [`${CN}__window--animation`]: show })}>
        {children}
        <span
          className={`${CN}__close-button`}
          role="button"
          label="closer"
          tabIndex="0"
          onClick={handleHiding}
        >
          <i className={cx('close', 'icon')} />
        </span>
      </div>
    </div>
  );
};

export default Modal;
