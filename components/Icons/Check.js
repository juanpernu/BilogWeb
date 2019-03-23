import React from 'react'
import PropTypes from 'prop-types'

const Check = ({ width, height, colorStroke, colorFill }) => (
  <svg width={width} height={height} viewBox="0 -3 36 36" fill="none">
    <g>
      <path
        d="M18 30C25.732 30 32 23.732 32 16C32 8.26801 25.732 2 18 2C10.268 2 4 8.26801 4 16C4 23.732 10.268 30 18 30Z"
        fill={colorFill}></path>
      <path d="M13 16.3333L15.9167 19.25L22.1667 13" stroke={colorStroke} strokeWidth="2" strokeLinecap="round"></path>
    </g>
  </svg>
);

Check.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  colorStroke: PropTypes.string,
  colorFill: PropTypes.string,
};

Check.defaultProps = {
  width: 36,
  height: 36,
  colorStroke: '#FFF',
  colorFill: '#50e38b',
};

export default Check
