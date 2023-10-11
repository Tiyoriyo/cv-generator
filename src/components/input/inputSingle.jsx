/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
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
      <label className="input-label">
        {title}
      </label>
      {type === 'textarea' && (
        <textarea
          className="input-box detailsTextArea"
          name={name}
          value={data[name]}
          onChange={handler}
          rows={5}
        />
      )}
      {type !== 'textarea' && (
        <input
          className="input-box"
          name={name}
          value={data[name]}
          onChange={handler}
        />
      )}
    </div>
  );
}
