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
  globalData,
  handlers,
  type,
}) {
  const [state, setState] = useState('setup');
  const [tempData, setTempData] = useState(getTempDataSkeleton()[type]);
  const [save, setSave] = useState(undefined);
  const [index, setIndex] = useState(undefined);
  const [isEditting, setIsEditting] = useState(false);

  // Variables
  const data = globalData[type];
  const maxDisplayShields = (type === 'work') ? 2 : 1;
  const { forceRender, setData } = handlers;

  // Sets main data based on new input values
  function inputHandler(e, i = data.children.length - 1) {
    const newData = { ...data };
    const inputFields = newData.children[i];
    inputFields[e.target.name] = e.target.value;
    setData({ ...globalData, [type]: newData });
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

  function getNewChildren() {
    const { children } = data;
    const child = getTempDataSkeleton()[type];
    children.push(child);
    return children;
  }

  function addHandler() {
    const children = getNewChildren();
    const obj = { children };
    setData({ ...globalData, [type]: obj });
    setState('active');
  }

  function exitEdit() {
    setSave(undefined);
    setIsEditting(false);
  }

  function cancelEdit() {
    const obj = { ...data };
    obj.children[index] = save;
    exitEdit();
    setState('setup');
    setData({ ...globalData, [type]: obj });
  }

  function cancelHandler() {
    if (isEditting) {
      cancelEdit();
      return;
    }
    const { children } = data;
    const lastIndex = children.length - 1;
    children.splice(lastIndex, 1);
    const obj = { children };
    setData({ ...globalData, [type]: obj });
    setState('setup');
  }

  // Capitalize first letter
  function getTitle() {
    const title = type;
    const result = title[0].toUpperCase() + title.substring(1);
    return result;
  }

  // Retrieve Items Function
  function retrieveItems() {
    return data.children[index];
  }

  // Create Item from Input
  function confirmInput() {
    const check = getTempDataSkeleton()[type];
    if (JSON.stringify(retrieveItems(index)) === JSON.stringify(check)) {
      const { children } = data;
      children.splice(index, 1);
      const newDataObject = { children };
      setData({ ...globalData, [type]: newDataObject });
      setState('setup');
    }
    setIsEditting(false);
    setState('setup');
  }

  return (
    <form className="form noselect">
      <div className="form-header">
        <h2>{getTitle()}</h2>
      </div>
      {state === 'setup' && (
        <div className="form-main">
          {data.children.length > 0 && (
          <>
            {data.children.map((item) => (
              <DisplayShield
                key={item.id}
                index={item.id}
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

          {data.children.length < maxDisplayShields && (
          <Button
            handler={{ addHandler }}
            className="addBtn"
            text="Add"
          />
          )}
        </div>
      )}
      {state === 'active' && (
        <div className="form-main">
          {returnInputs(inputSkeleton[type])
            .map((item) => {
              const input = returnInputs(item);
              const {
                title, title1, title2, name, name1, name2, inputType, inputType1, inputType2,
              } = item;

              if (input.length <= 3) {
                return (
                  <InputSingle
                    key={item.id}
                    title={title}
                    name={name}
                    type={inputType}
                    data={isEditting ? tempData : data}
                    index={item.id}
                    handler={{ inputHandler }}
                  />
                );
              }
              return (
                <InputDouble
                  key={item.id}
                  title1={title1}
                  title2={title2}
                  name1={name1}
                  name2={name2}
                  data={isEditting ? tempData : data}
                  type1={inputType1}
                  type2={inputType2}
                  handler={{ inputHandler }}
                />
              );
            })}
          <div className="buttonContainer">
            <Button
              handler={{ cancelHandler }}
              className="cancelBtn"
              text="Cancel"
            />
            <Button
              handler={{ confirmInput }}
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
  globalData: PropTypes.object,
  type: PropTypes.string,
  handlers: PropTypes.object,
};
