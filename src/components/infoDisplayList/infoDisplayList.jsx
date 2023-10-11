/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import InfoDisplay from '../infoDisplay/infoDisplay';
import './infoDisplayList.css';

export default function InfoDisplayList({
  data,
  type,
}) {
  const dataObj = data[type];
  const header = (type === 'education') ? 'Education' : 'Work';

  if (dataObj.length > 0) {
    return (
      <div className="info-display">
        <h2 className="info-header">{header}</h2>
        {dataObj.map((item, ind) => (
          <InfoDisplay
            key={ind}
            type={type}
            item={item}
            index={ind}
          />
        ))}
      </div>
    );
  }
}

InfoDisplayList.propTypes = {
  data: PropTypes.object,
  type: PropTypes.string,
};
