/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../button/button';
import InputSingle from '../input/inputSingle';
import InputDouble from '../input/inputDouble';
import inputSkeleton from './inputSkeleton';
import DisplayShield from '../displayShield/displayShield';
import getTempDataSkeleton from './dataSkeleton';
import './experienceform.css';

export default function ExperienceForm({
  mainData,
  handlers,
  type,
}) {
  const [state, setState] = useState('setup');
  const [tempData, setTempData] = useState(getTempDataSkeleton()[type]);
  const [save, setSave] = useState(undefined);
  const [index, setIndex] = useState(undefined);
  const [isEditting, setIsEditting] = useState(false);

  // Variables
  const data = mainData[type];
  const maxDisplayShields = (type === 'work') ? 2 : 1;
  const { forceRender, setData } = handlers;

  // Reset States
  function resetStates() {
    setSave(undefined);
    setIndex(undefined);
    setTempData(undefined);
    setIsEditting(false);
    setState('setup');
  }

  // Sets main data based on new input values
  function inputHandler(e) {
    const i = (isEditting) ? index : data.length - 1;
    const children = [...data];
    const inputFields = children[i];
    inputFields[e.target.name] = e.target.value;

    setData({ ...mainData, [type]: children });
    setTempData({ ...inputFields });
  }

  // Add Button Functionality
  function addHandler() {
    const array = [...data];
    array.push(getTempDataSkeleton()[type]);
    setData({ ...mainData, [type]: array });
    setState('active');
  }

  // Cancel button Functionality
  function cancelHandler() {
    const curIndex = (isEditting) ? index : data.length - 1;
    const array = [...data];
    if (!isEditting) {
      array.splice(curIndex, 1);
      setData({ ...mainData, [type]: array });
    } else if (isEditting) {
      array[curIndex] = save;
      setData({ ...mainData, [type]: array });
    }
    resetStates();
  }

  // Create Item from Input
  function confirmInput() {
    const curIndex = (index !== undefined) ? index : data.length - 1;
    const emptyData = JSON.stringify(getTempDataSkeleton()[type]);
    const curItems = JSON.stringify(data[curIndex]);
    const children = [...data];

    if (emptyData === curItems) {
      children.splice(curIndex, 1);
    } else {
      children[curIndex] = tempData;
    }

    setData({ ...mainData, [type]: children });
    resetStates();
  }

  // Return queue list for map function within state 'active' render
  function returnInputs(obj) {
    const queue = [];
    Object.keys(obj)
      .forEach((prop) => {
        queue.push(obj[prop]);
      });
    return queue;
  }

  // Capitalize first letter
  function getTitle() {
    const title = type;
    const result = title[0].toUpperCase() + title.substring(1);
    return result;
  }

  // Retrieve Items Function
  function retrieveItems(i) {
    return data[i];
  }

  return (
    <form className="form noselect">
      <div className="form-header">
        <h2>{getTitle()}</h2>
      </div>
      {state === 'setup' && (
        <div className="form-main">
          {data.length > 0 && (
          <>
            {data.map((item, idx) => (
              <DisplayShield
                // eslint-disable-next-line react/no-array-index-key
                key={idx}
                index={idx}
                handlers={{
                  retrieveItems,
                  setState,
                  setIsEditting,
                  setTempData,
                  setSave,
                  setIndex,
                  forceRender,
                }}
                data={data}
                item={item}
              />
            ))}
          </>
          )}

          {data.length < maxDisplayShields && (
          <Button
            handler={addHandler}
            className="addBtn"
            text="Add"
          />
          )}
        </div>
      )}
      {state === 'active' && (
        <div className="form-main">
          {returnInputs(inputSkeleton[type])
            .map((item, idx) => {
              const input = returnInputs(item);
              const {
                title, title1, title2, name, name1, name2, inputType, inputType1, inputType2,
              } = item;

              if (input.length <= 3) {
                return (
                  <InputSingle
                    // eslint-disable-next-line react/no-array-index-key
                    key={idx}
                    title={title}
                    name={name}
                    type={inputType}
                    data={isEditting ? tempData : data}
                    index={idx}
                    handler={inputHandler}
                  />
                );
              }
              return (
                <InputDouble
                  // eslint-disable-next-line react/no-array-index-key
                  key={idx}
                  title1={title1}
                  title2={title2}
                  name1={name1}
                  name2={name2}
                  index={idx}
                  data={isEditting ? tempData : data}
                  type1={inputType1}
                  type2={inputType2}
                  handler={inputHandler}
                />
              );
            })}
          <div className="buttonContainer">
            <Button
              handler={cancelHandler}
              className="cancelBtn"
              text="Cancel"
            />
            <Button
              handler={confirmInput}
              className="confirmBtn"
              text="Confirm"
            />
          </div>
        </div>
      )}

    </form>
  );
}

ExperienceForm.propTypes = {
  mainData: PropTypes.shape({

  }),
  handlers: PropTypes.shape({
    forceRender: PropTypes.func,
    setData: PropTypes.func,
  }),
  type: PropTypes.string,
};

ExperienceForm.defaultProps = {
  mainData: {},
  handlers: {},
  type: 'general',
};
