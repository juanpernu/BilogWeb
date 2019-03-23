import React from 'react'
import PropTypes from 'prop-types'

const Simple = ({ width, height, colorStroke, colorFill }) => (
  <svg width={width} height={height} viewBox="0 0 24 24">
    <path fill={colorFill} d={`
    M4.908
    2.081l-2.828
    2.828
    19.092
    19.091
    2.828-2.828-19.092-19.091zm2.121
    6.363l-3.535-3.535
    1.414-1.414
    3.535
    3.535-1.414
    1.414zm1.731-5.845c1.232.376
    2.197
    1.341
    2.572
    2.573.377-1.232
    1.342-2.197
    2.573-2.573-1.231-.376-2.196-1.34-2.573-2.573-.375
    1.232-1.34
    2.197-2.572
    2.573zm-5.348
    6.954c-.498
    1.635-1.777
    2.914-3.412
    3.413
    1.635.499
    2.914
    1.777
    3.412
    3.411.499-1.634
    1.778-2.913
    3.412-3.411-1.634-.5-2.913-1.778-3.412-3.413zm9.553-3.165c.872.266
    1.553.948
    1.819
    1.82.266-.872.948-1.554
    1.819-1.82-.871-.266-1.553-.948-1.819-1.82-.266.871-.948
    1.554-1.819
    1.82zm4.426-6.388c-.303.994-1.082
    1.772-2.075
    2.076.995.304
    1.772
    1.082
    2.077
    2.077.303-.994
    1.082-1.772
    2.074-2.077-.992-.303-1.772-1.082-2.076-2.076z`}/>
  </svg>
);

Simple.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  colorStroke: PropTypes.string,
  colorFill: PropTypes.string,
};

Simple.defaultProps = {
  width: 36,
  height: 36,
  colorStroke: '#FFF',
  colorFill: '#50e38b',
};

export default Simple
