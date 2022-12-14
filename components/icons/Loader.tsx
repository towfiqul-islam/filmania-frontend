import React from 'react';

interface Props {
  width?: string;
  height?: string;
  color?: string;
}

const Loader = ({width = '70px', height = '20px', color = "#fff"}: Props) => {
  return (
    <>
      <svg
        style={{
          margin: 'auto',
          background: 'none',
          display: 'block',
          shapeRendering: 'auto',
        }}
        width={width}
        height={height}
        viewBox='0 0 100 100'
        preserveAspectRatio='xMidYMid'
      >
        <circle cx='84' cy='50' r='10' fill={color}>
          <animate
            attributeName='r'
            repeatCount='indefinite'
            dur='1.6666666666666665s'
            calcMode='spline'
            keyTimes='0;1'
            values='10;0'
            keySplines='0 0.5 0.5 1'
            begin='0s'
          ></animate>
          <animate
            attributeName='fill'
            repeatCount='indefinite'
            dur='6.666666666666666s'
            calcMode='discrete'
            keyTimes='0;0.25;0.5;0.75;1'
            values={`${color};${color};${color};${color};${color}`}
            begin='0s'
          ></animate>
        </circle>
        <circle cx='16' cy='50' r='10' fill={color}>
          <animate
            attributeName='r'
            repeatCount='indefinite'
            dur='6.666666666666666s'
            calcMode='spline'
            keyTimes='0;0.25;0.5;0.75;1'
            values='0;0;10;10;10'
            keySplines='0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1'
            begin='0s'
          ></animate>
          <animate
            attributeName='cx'
            repeatCount='indefinite'
            dur='6.666666666666666s'
            calcMode='spline'
            keyTimes='0;0.25;0.5;0.75;1'
            values='16;16;16;50;84'
            keySplines='0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1'
            begin='0s'
          ></animate>
        </circle>
        <circle cx='50' cy='50' r='10' fill={color}>
          <animate
            attributeName='r'
            repeatCount='indefinite'
            dur='6.666666666666666s'
            calcMode='spline'
            keyTimes='0;0.25;0.5;0.75;1'
            values='0;0;10;10;10'
            keySplines='0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1'
            begin='-1.6666666666666665s'
          ></animate>
          <animate
            attributeName='cx'
            repeatCount='indefinite'
            dur='6.666666666666666s'
            calcMode='spline'
            keyTimes='0;0.25;0.5;0.75;1'
            values='16;16;16;50;84'
            keySplines='0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1'
            begin='-1.6666666666666665s'
          ></animate>
        </circle>
        <circle cx='84' cy='50' r='10' fill={color}>
          <animate
            attributeName='r'
            repeatCount='indefinite'
            dur='6.666666666666666s'
            calcMode='spline'
            keyTimes='0;0.25;0.5;0.75;1'
            values='0;0;10;10;10'
            keySplines='0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1'
            begin='-3.333333333333333s'
          ></animate>
          <animate
            attributeName='cx'
            repeatCount='indefinite'
            dur='6.666666666666666s'
            calcMode='spline'
            keyTimes='0;0.25;0.5;0.75;1'
            values='16;16;16;50;84'
            keySplines='0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1'
            begin='-3.333333333333333s'
          ></animate>
        </circle>
        <circle cx='16' cy='50' r='10' fill={color}>
          <animate
            attributeName='r'
            repeatCount='indefinite'
            dur='6.666666666666666s'
            calcMode='spline'
            keyTimes='0;0.25;0.5;0.75;1'
            values='0;0;10;10;10'
            keySplines='0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1'
            begin='-4.999999999999999s'
          ></animate>
          <animate
            attributeName='cx'
            repeatCount='indefinite'
            dur='6.666666666666666s'
            calcMode='spline'
            keyTimes='0;0.25;0.5;0.75;1'
            values='16;16;16;50;84'
            keySplines='0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1'
            begin='-4.999999999999999s'
          ></animate>
        </circle>
      </svg>
    </>
  );
};

export default Loader;
