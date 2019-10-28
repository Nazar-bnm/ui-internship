import React, { Component } from 'react';
import Modal from './Modal';

class TestModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  showModal = () => {
    this.setState({
      show: true
    });
  };

  removeModal = () => {
    this.setState({
      show: false
    });
  };

  render() {
    const { show } = this.state;
    return (
      <>
        <button type="button" onClick={this.showModal}>
          show modal
        </button>
        {show && (
          <Modal removeModal={this.removeModal.bind(this)}>
            <p>Hello</p>
          </Modal>
        )}
      </>
    );
  }
}

export default TestModal;
