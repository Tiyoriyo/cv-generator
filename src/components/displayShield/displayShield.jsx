/* eslint-disable react/jsx-no-bind */
import React from 'react';
import PropTypes from 'prop-types';
import './displayShield.css';

import Icon from '@mdi/react';
import { mdiFileEditOutline, mdiTrashCanOutline } from '@mdi/js';

export default function DisplayShield({
  index,
  handlers,
  data,
  item,
}) {
  const {
    setState, setTempData, retrieveItems, setIsEditting, setSave, setIndex, forceRender,
  } = handlers;
  const name = item.school || item.company || 'Info';

  function editItem() {
    setState('active');
    setSave({ ...retrieveItems(index) });
    setTempData({ ...retrieveItems(index) });
    setIndex(index);
    setIsEditting(true);
  }

  function deleteItem() {
    data.splice(index, 1);
    forceRender();
  }

  return (
    <div
      className="experience-data"
      key={index}
    >
      <p>{name}</p>
      <div className="icon-container">
        <Icon
          className="edit-icon"
          path={mdiFileEditOutline}
          size={1}
          onClick={editItem}
        />
        <Icon
          className="edit-icon"
          path={mdiTrashCanOutline}
          size={1}
          onClick={deleteItem}
        />
      </div>
    </div>
  );
}

DisplayShield.propTypes = {
  index: PropTypes.number,
  handlers: PropTypes.shape({
    setData: PropTypes.func,
    setState: PropTypes.func,
    setTempData: PropTypes.func,
    setIsEditting: PropTypes.func,
    setSave: PropTypes.func,
    setIndex: PropTypes.func,
    retrieveItems: PropTypes.func,
    forceRender: PropTypes.func,
  }),
  data: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
  item: PropTypes.shape({
    company: PropTypes.string,
    school: PropTypes.string,
  }),
  forceRender: PropTypes.func,
};

DisplayShield.defaultProps = {
  index: 0,
  handlers: {},
  data: [],
  item: {},
  forceRender: () => {},
};
