import React from 'react';
import './infoGeneral.css';
import PropTypes from 'prop-types';

export default function InfoGeneral({
  data,
}) {
  const dataObject = data.general;
  let firstName;
  let lastName;
  let email;
  let phone;

  if (dataObject.length) {
    firstName = dataObject[0].firstName;
    lastName = dataObject[0].lastName;
    email = dataObject[0].email;
    phone = dataObject[0].phone;
  }

  return (
    <div className="general-info">
      {dataObject.length > 0 && (
        <>
          <h1 className="general-info-header">
            {firstName}
            {' '}
            {lastName}
          </h1>
          <div className="general-info-details">
            <p>{email}</p>
            <p>{phone}</p>
          </div>
        </>
      )}
    </div>
  );
}

InfoGeneral.propTypes = {
  data: PropTypes.object,
};
