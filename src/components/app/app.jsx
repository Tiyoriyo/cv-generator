import React, { useState } from 'react';
import './app.css';
import FormBar from '../formbar/formbar';
import PreviewCV from '../previewcv/previewcv';
import initialData from './initialData';
import ResizeController from '../resizeController/resizeController';

export default function App() {
  const [data, setData] = useState(initialData);
  const [key, setKey] = useState(0);
  const [curFontSize, setCurFontSize] = useState(1);

  function forceRender() {
    setKey(key + 1);
  }

  return (
    <div className="main">
      <FormBar
        data={data}
        handlers={{
          forceRender,
          setData,
        }}
      />
      <PreviewCV
        data={data}
        fontSize={curFontSize}
      />
      <ResizeController
        fontSize={curFontSize}
        fontHandler={setCurFontSize}
      />
    </div>
  );
}
