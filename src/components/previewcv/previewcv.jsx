import React from 'react';
import PropTypes from 'prop-types';
import InfoDisplayList from '../infoDisplayList/infoDisplayList';
import InfoGeneral from '../infoGeneral/infoGeneral';

import './previewcv.css';

export default function PreviewCV({ data, fontSize }) {
  return (
    <div className="preview-container">
      <div className="preview-page">
        <InfoGeneral
          data={data}
          fontSize={fontSize}
        />
        <div className="cv-main-content">
          <InfoDisplayList
            data={data}
            type="education"
            fontSize={fontSize}
          />
          <InfoDisplayList
            data={data}
            type="work"
            fontSize={fontSize}
          />
        </div>
      </div>
    </div>
  );
}

PreviewCV.propTypes = {
  data: PropTypes.shape({}),
};

PreviewCV.defaultProps = {
  data: {},
};
