import React from 'react';
import PropTypes from 'prop-types';
import './resizeController.css';

export default function ResizeController({ fontSize, fontHandler }) {
  const fontSizeController = (e) => {
    const Mode = e.target.innerHTML;

    if ((fontSize === 0.9 && Mode === '+') || (fontSize === 0.7 && Mode === '-')) return;

    if (Mode === '-') {
      fontHandler(Math.round(fontSize * 10 - 1) / 10);
    } else {
      fontHandler(Math.round(fontSize * 10 + 1) / 10);
    }
  };

  return (
    <div className="resize-controller-container">

      <div className="resize-controller-header">
        Font Resize
      </div>
      <div className="resize-controller-content">
        <div className="font-p">
          <p className="font-p-header">Font Size</p>
          <p className="font-p-content">
            {`- ${fontSize}rem`}
          </p>
        </div>
        <div className="fontBtn-container">
          <button type="button" className="fontBtn" onClick={fontSizeController}>-</button>
          <button type="button" className="fontBtn" onClick={fontSizeController}>&#43;</button>
        </div>
      </div>
    </div>

  );
}

ResizeController.propTypes = {
  fontSize: PropTypes.number,
  fontHandler: PropTypes.func,
};

ResizeController.defaultProps = {
  fontSize: 0.9,
  fontHandler: {},
};
