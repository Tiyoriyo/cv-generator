import React from 'react';
import PropTypes from 'prop-types';
import InfoDisplayList from '../infoDisplayList/infoDisplayList';
import InfoGeneral from '../infoGeneral/infoGeneral';

import './previewcv.css';

export default function PreviewCV({ data }) {
  return (
    <div className="preview-container">
      <div className="preview-page">
        <InfoGeneral
          data={data}
        />
        <InfoDisplayList
          data={data}
          type="education"
        />
        <InfoDisplayList
          data={data}
          type="work"
        />
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
