import React from 'react'
import PropTypes from 'prop-types'

const Facebook = ({ width, height, colorStroke, colorFill }) => (
  <svg width={width} height={height} viewBox="0 0 24 24">
    <path
      fill={colorFill}
      d={`
        M9
        8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333
        1.115-1.333h2.885v-5h-3.808c-3.596
        0-5.192
        1.583-5.192
        4.615v3.385z
      `}
    />
  </svg>
);

Facebook.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  colorStroke: PropTypes.string,
  colorFill: PropTypes.string,
};

Facebook.defaultProps = {
  width: 24,
  height: 24,
  colorStroke: '#FFF',
  colorFill: '#067df7',
};

export default Facebook
