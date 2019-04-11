import React from 'react'
import PropTypes from 'prop-types'

const Focus = ({ width, height, colorStroke, colorFill }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fillRule="evenodd" clipRule="evenodd">
    <path
      fill={colorFill}
      d={`
        M13.403
        24h-13.403v-22h3c1.231
        0
        2.181-1.084
        3-2h8c.821.916
        1.772
        2
        3
        2h3v9.15c-.485-.098-.987-.15-1.5-.15l-.5.016v-7.016h-4l-2
        2h-3.897l-2.103-2h-4v18h9.866c.397.751.919
        1.427
        1.537
        2zm5.097-11c3.035
        0
        5.5
        2.464
        5.5
        5.5s-2.465
        5.5-5.5
        5.5c-3.036
        0-5.5-2.464-5.5-5.5s2.464-5.5
        5.5-5.5zm0
        2c1.931
        0
        3.5
        1.568
        3.5
        3.5s-1.569
        3.5-3.5
        3.5c-1.932
        0-3.5-1.568-3.5-3.5s1.568-3.5
        3.5-3.5zm2.5
        4h-3v-3h1v2h2v1zm-15.151-4.052l-1.049-.984-.8.823
        1.864
        1.776
        3.136-3.192-.815-.808-2.336
        2.385zm6.151
        1.052h-2v-1h2v1zm2-2h-4v-1h4v1zm-8.151-4.025l-1.049-.983-.8.823
        1.864
        1.776
        3.136-3.192-.815-.808-2.336
        2.384zm8.151
        1.025h-4v-1h4v1zm0-2h-4v-1h4v1zm-5-6c0
        .552.449
        1
        1
        1
        .553
        0
        1-.448
        1-1s-.447-1-1-1c-.551
        0-1
        .448-1
        1z
      `}/>
  </svg>
);

Focus.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  colorStroke: PropTypes.string,
  colorFill: PropTypes.string,
};

Focus.defaultProps = {
  width: 36,
  height: 36,
  colorStroke: '#FFF',
  colorFill: '#067df7',
};

export default Focus
