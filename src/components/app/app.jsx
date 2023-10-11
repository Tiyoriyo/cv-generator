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

  function dataSubmit(inputData, type) {
    const children = data[type];
    children.push(inputData);
    setData({ ...data, [type]: children });
  }

  function dataUpdate(inputData, type, index) {
    const children = data[type];
    children[index] = inputData;
    setData({ ...data, [type]: children });
  }

  return (
    <div className="main">
      <FormBar
        data={data}
        handlers={{
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
