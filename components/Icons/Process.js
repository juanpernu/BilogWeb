import React from 'react'
import PropTypes from 'prop-types'

const Process = ({ width, height, colorStroke, colorFill }) => (
  <svg width={width} height={height} viewBox="0 0 24 24">
    <path
    fill={colorFill}
    d={`
      M22
      2v20h-20v-20h20zm2-2h-24v24h24v-24zm-4
      7h-8v1h8v-1zm0
      5h-8v1h8v-1zm0
      5h-8v1h8v-1zm-10.516-11.304l-.71-.696-2.553
      2.607-1.539-1.452-.698.71
      2.25
      2.135
      3.25-3.304zm0
      5l-.71-.696-2.552
      2.607-1.539-1.452-.698.709
      2.249
      2.136
      3.25-3.304zm0
      5l-.71-.696-2.552
      2.607-1.539-1.452-.698.709
      2.249
      2.136
      3.25-3.304z
    `}/>
  </svg>
);

Process.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  colorStroke: PropTypes.string,
  colorFill: PropTypes.string,
};

Process.defaultProps = {
  width: 36,
  height: 36,
  colorStroke: '#FFF',
  colorFill: '#067df7',
};

export default Process
