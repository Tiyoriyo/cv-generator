import React from 'react';
import PropTypes from 'prop-types';
import './infoDisplay.css';

export default function InfoDisplay({
  type,
  item,
  index,
}) {
  const organization = (type === 'education') ? item.school : item.company;
  const occupation = (type === 'education') ? item.subject : item.title;
  const location = (type === 'education') ? item.eduLocation : item.workLocation;
  const from = (type === 'education') ? item.eduFrom : item.workFrom;
  const to = (type === 'education') ? item.eduTo : item.workTo;

  return (
    <div className="experience-container" key={index}>
      <div className="experience-mainDetails-container">
        <div className="experience-mainDetails">
          <p className="experience-name">{organization}</p>
          <p className="experience-occupation">{occupation}</p>
          {item.grade && (
            <p className="experience-grade">{item.grade}</p>
          )}
        </div>
        <div className="experience-subDetails">
          <p className="experience-location">{location}</p>
          {(from && to) && (
            <div className="experience-length">
              <p>{from}</p>
              {' '}
              -
              {' '}
              <p>{to}</p>
            </div>
          )}
        </div>
      </div>
      <p className="experience-details">{item.details}</p>
    </div>
  );
}

InfoDisplay.propTypes = {
  type: PropTypes.string,
  item: PropTypes.shape({
    school: PropTypes.string,
    company: PropTypes.string,
    subject: PropTypes.string,
    title: PropTypes.string,
    eduLocation: PropTypes.string,
    workLocation: PropTypes.string,
    eduFrom: PropTypes.string,
    workFrom: PropTypes.string,
    eduTo: PropTypes.string,
    workTo: PropTypes.string,
    grade: PropTypes.string,
    details: PropTypes.string,
  }),
  index: PropTypes.number,
};

InfoDisplay.defaultProps = {
  type: '',
  item: {},
  index: null,
};
