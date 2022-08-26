import React from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentTheme } from '../../store/themeReducer';

const Spinner = () => {
  const currentTheme = useSelector(selectCurrentTheme);
  return (
    <>
      <svg
        style={{
          margin: 'auto',
          background: 'none',
          display: 'block',
          shapeRendering: 'auto',
        }}
        width='200px'
        height='200px'
        viewBox='0 0 100 100'
        preserveAspectRatio='xMidYMid'
      >
        <path
          d='M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50'
          fill={currentTheme === 'light' ? '#000' : '#fff'}
          stroke='none'
        >
          <animateTransform
            attributeName='transform'
            type='rotate'
            dur='1s'
            repeatCount='indefinite'
            keyTimes='0;1'
            values='0 50 51;360 50 51'
          ></animateTransform>
        </path>
      </svg>
    </>
  );
};

export default Spinner;
