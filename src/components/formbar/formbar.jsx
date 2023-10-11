import React from 'react';
import PropTypes from 'prop-types';
import ExperienceForm from '../experienceform/experienceform';
import './formbar.css';

export default function FormBar({
  data,
  handlers,
}) {
  const {
    dataUpdate, dataSubmit, forceRender, setData,
  } = handlers;

  return (
    <div className="formbar">
      <ExperienceForm
        mainData={data}
        type="general"
        handlers={{
          dataUpdate,
          dataSubmit,
          forceRender,
          setData,
        }}
      />
      <ExperienceForm
        mainData={data}
        type="education"
        handlers={{
          dataUpdate,
          dataSubmit,
          forceRender,
          setData,
        }}
      />
      <ExperienceForm
        mainData={data}
        type="work"
        handlers={{
          dataUpdate,
          dataSubmit,
          forceRender,
          setData,
        }}
      />
    </div>
  );
}

FormBar.propTypes = {
  data: PropTypes.shape({}),
  handlers: PropTypes.shape({
    dataUpdate: PropTypes.func,
    dataSubmit: PropTypes.func,
    forceRender: PropTypes.func,
    setData: PropTypes.func,
  }),
};

FormBar.defaultProps = {
  data: {},
  handlers: {},
};
