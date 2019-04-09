import React from 'react'
import PropTypes from 'prop-types'

const Address = ({ width, height, colorStroke, colorFill }) => (
  <svg width={width} height={height} viewBox="0 0 24 24">
    <path
      fill={colorFill}
      d={`
        M12
        1c-3.148
        0-6
        2.553-6
        5.702
        0
        3.148
        2.602
        6.907
        6
        12.298
        3.398-5.391
        6-9.15
        6-12.298
        0-3.149-2.851-5.702-6-5.702zm0
        8c-1.105
        0-2-.895-2-2s.895-2
        2-2
        2
        .895
        2
        2-.895
        2-2
        2zm8
        6h-3.135c-.385.641-.798
        1.309-1.232
        2h3.131l.5
        1h-4.264l-.344.544-.289.456h.558l.858
        2h-7.488l.858-2h.479l-.289-.456-.343-.544h-2.042l-1.011-1h2.42c-.435-.691-.848-1.359-1.232-2h-3.135l-4
        8h24l-4-8zm-12.794
        6h-3.97l1.764-3.528
        1.516
        1.528h1.549l-.859
        2zm8.808-2h3.75l1
        2h-3.892l-.858-2z
    `}/>
  </svg>
);

Address.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  colorStroke: PropTypes.string,
  colorFill: PropTypes.string,
};

Address.defaultProps = {
  width: 36,
  height: 36,
  colorStroke: '#FFF',
  colorFill: '#067df7',
};

export default Address
