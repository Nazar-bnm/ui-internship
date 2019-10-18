/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { Component } from 'react';
import cx from 'classnames';

import './Modal.scss';

const CN = 'modal';

class Modal extends Component {
  constructor(props) {
    super(props);

    this.removeModal = this.removeModal.bind(this);
    this.removeModalOnBackdrop = this.removeModalOnBackdrop.bind(this);
    this.removeModalOnEscape = this.removeModalOnEscape.bind(this);
    this.modalRef = React.createRef();
  }

  componentDidMount() {
    document.body.classList.add('remove-scroll');
  }

  removeModal() {
    document.body.classList.remove('remove-scroll');
    this.modalRef.current.focus();
  }

  removeModalOnBackdrop(event) {
    const { handleClose } = this.props;
    if (!event.target.classList.contains(`${CN}__window`)) {
      handleClose();
      this.removeModal();
    }
  }

  removeModalOnEscape(event) {
    const { handleClose } = this.props;
    event.keyCode === 27 && handleClose();
  }

  render() {
    const { children, show } = this.props;
    if (show) {
      document.body.classList.add('remove-scroll');
      this.modalRef.current.focus();
    }

    // if (!this.props.show) { return null}

    return (
      <div
        tabIndex="0"
        ref={this.modalRef}
        className={cx(`${CN}`, { [`${CN}--hide`]: !show })}
        onClick={this.removeModalOnBackdrop}
        onKeyDown={this.removeModalOnEscape}
      >
        <div className={cx(`${CN}__window`)}>
          {children}
          <span
            className={`${CN}__close-button`}
            role="button"
            label="closer"
            tabIndex="0"
            onClick={this.removeModal}
          >
            <i className={cx('close', 'icon')} />
          </span>
        </div>
      </div>
    );
  }
}

export default Modal;
