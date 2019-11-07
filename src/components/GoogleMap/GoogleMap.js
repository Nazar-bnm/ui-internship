import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import './GoogleMap.scss';

export const CN = 'google-map';

class GoogleMap extends Component {
  constructor(props) {
    super(props);

    this.onPageLoad = this.onPageLoad.bind(this);
  }

  componentDidMount() {
    if (!window.google) {
      const script = document.createElement('script');
      script.src = 'https://maps.google.com/maps/api/js?key=AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo';
      script.id = 'googleMaps';
      document.body.appendChild(script);
      script.addEventListener('load', () => this.onPageLoad());
    } else {
      this.onPageLoad();
    }
  }

  onPageLoad() {
    const { id, options } = this.props;
    (() => new window.google.maps.Map(document.getElementById(id), options))();
  }

  render() {
    const { id } = this.props;
    return <div id={id} className={cx(CN)} />;
  }
}

GoogleMap.propTypes = {
  id: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired
};


export default GoogleMap;
