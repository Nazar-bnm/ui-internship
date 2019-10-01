import React from 'react';
import PropTypes from 'prop-types';
import './JoinUs.scss';

export const JoinUsError = ({ formError }) =>
  <div className="join-us-error">
    {
      Object.keys(formError).map((inputName, i) => {
        return formError[inputName].length > 0 ?
          <p className="join-us-paragraph" key={i}>{inputName} {formError[inputName]}</p> : '';
      })
    }
  </div>;

// JoinUsError PropTypes
JoinUsError.propTypes = {
  formError: PropTypes.object,
};
