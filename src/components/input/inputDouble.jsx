import React from 'react';
import PropTypes from 'prop-types';
import './input.css';
import InputSingle from './inputSingle';

export default function InputDouble({
  title1,
  title2,
  name1,
  name2,
  handler,
  index,
  data,
}) {
  return (
    <div className="input-field-double noselect">
      <InputSingle
        title={title1}
        name={name1}
        handler={handler}
        index={index}
        data={data}
      />
      <InputSingle
        title={title2}
        name={name2}
        handler={handler}
        index={index}
        data={data}
      />
    </div>
  );
}

InputDouble.propTypes = {
  title1: PropTypes.string,
  title2: PropTypes.string,
  name1: PropTypes.string,
  name2: PropTypes.string,
  index: PropTypes.number,
  handler: PropTypes.func,
  data: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
};

InputDouble.defaultProps = {
  title1: '',
  title2: '',
  name1: '',
  name2: '',
  index: null,
  handler: () => {},
  data: [],
};
