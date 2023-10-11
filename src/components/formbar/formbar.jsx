import React from 'react';
import PropTypes from 'prop-types';
import ExperienceForm from '../experienceform/experienceform';
import './formbar.css';

export default function FormBar({
  data,
  handlers,
}) {
  const items = ['general', 'education', 'work'];

  return (
    <div className="formbar">
      {items.map((item, index) => (
        <ExperienceForm
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          mainData={data}
          handlers={handlers}
          type={item}
        />
      ))}
    </div>
  );
}

FormBar.propTypes = {
  data: PropTypes.shape({}),
  handlers: PropTypes.shape({
    forceRender: PropTypes.func,
    setData: PropTypes.func,
  }),
};

FormBar.defaultProps = {
  data: {},
  handlers: {},
};
