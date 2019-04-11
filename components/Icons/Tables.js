import React from 'react'
import PropTypes from 'prop-types'

const Tables = ({ width, height, colorStroke, colorFill }) => (
  <svg width={width} height={height} viewBox="0 0 24 24">
    <path
    fill={colorFill}
    d={`
      M5
      19h-4v-8h4v8zm6
      0h-4v-18h4v18zm6
      0h-4v-12h4v12zm6
      0h-4v-4h4v4zm1
      2h-24v2h24v-2z
    `}/>
  </svg>
);

Tables.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  colorStroke: PropTypes.string,
  colorFill: PropTypes.string,
};

Tables.defaultProps = {
  width: 36,
  height: 36,
  colorStroke: '#FFF',
  colorFill: '#067df7',
};

export default Tables
