import React, { useState } from 'react';
import './app.css';
import FormBar from '../formbar/formbar';
import PreviewCV from '../previewcv/previewcv';
import initialData from './initialData';

export default function App() {
  const [data, setData] = useState(initialData);
  const [key, setKey] = useState(0);

  function forceRender() {
    setKey(key + 1);
  }

  function getFormType(name) {
    let result;

    const generalItems = ['firstName', 'lastName', 'email', 'phone'];
    const educationItems = ['school', 'grade', 'eduFrom', 'eduTo', 'eduLocation'];
    const workItems = ['company', 'workDetails', 'workFrom', 'workTo', 'workLocation'];

    const fields = [generalItems, educationItems, workItems];
    const fieldNames = ['general', 'education', 'work'];

    for (let i = 0; i < fields.length; i += 1) {
      if (fields[i].includes(name)) {
        result = fieldNames[i];
      }
    }

    return result;
  }

  function generalInputHandler(e) {
    const inputType = e.target.name;
    const formType = getFormType(inputType);

    const newData = data[formType];
    newData[inputType] = e.target.value;
    setData({ ...data, [formType]: newData });
  }

  function dataSubmit(inputData, type) {
    const newEduData = data[type];
    newEduData.children.push(inputData);
    setData({ ...data, [type]: newEduData });
  }

  function dataUpdate(inputData, type, index) {
    const newEduData = data[type];
    newEduData.children[index] = inputData;
    setData({ ...data, [type]: newEduData });
  }

  return (
    <div className="main">
      <FormBar
        data={data}
        handlers={{
          generalInputHandler,
          dataUpdate,
          dataSubmit,
          forceRender,
          setData,
        }}
      />
      <PreviewCV
        data={data}
      />
    </div>
  );
}
