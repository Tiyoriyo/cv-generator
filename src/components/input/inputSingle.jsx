import React from 'react';
import PropTypes from 'prop-types';
import './input.css';

export default function InputSingle({
  title,
  name,
  handler,
  data,
  type,
}) {
  return (
    <div className="input-field noselect" autoComplete="off">
      <label className="input-label" htmlFor={name}>
        {title}
      </label>
      {type === 'textarea' && (
        <textarea
          id={name}
          className="input-box detailsTextArea"
          name={name}
          value={data[name]}
          onChange={handler}
          rows={5}
        />
      )}
      {type !== 'textarea' && (
        <input
          id={name}
          className="input-box"
          name={name}
          value={data[name]}
          onChange={handler}
        />
      )}
    </div>
  );
}

InputSingle.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  handler: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
  type: PropTypes.string,
};

InputSingle.defaultProps = {
  title: '',
  name: '',
  handler: () => {},
  data: [],
  type: '',
};
