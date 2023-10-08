import React from 'react';
import './button.css';
import PropTypes from 'prop-types';

export default function Button({ text, handler, className }) {
  return (
    <button
      className={className}
      onClick={handler}
      type="button"
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  handler: PropTypes.func,
  className: PropTypes.string,
};
