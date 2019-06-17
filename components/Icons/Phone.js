import React from 'react'
import PropTypes from 'prop-types'

const Phone = ({ width, height, colorStroke, colorFill }) => (
  <svg width={width} height={height} viewBox="0 0 24 24">
    <path
      fill={colorFill}
      d={`
        M20.89
        23.654c-7.367
        3.367-18.802-18.86-11.601-22.615l2.107-1.039
        3.492
        6.817-2.083
        1.026c-2.189
        1.174
        2.37
        10.08
        4.609
        8.994.091-.041
        2.057-1.007
        2.064-1.011l3.522
        6.795c-.008.004-1.989.978-2.11
        1.033zm-9.438-2.264c-1.476
        1.072-3.506
        1.17-4.124.106-.47-.809-.311-1.728-.127-2.793.201-1.161.429-2.478-.295-3.71-1.219-2.076-3.897-1.983-5.906-.67l.956
        1.463c.829-.542
        1.784-.775
        2.493-.609
        1.653.388
        1.151
        2.526
        1.03
        3.229-.212
        1.223-.45
        2.61.337
        3.968
        1.243
        2.143
        4.579
        2.076
        6.836.316-.412-.407-.811-.843-1.2-1.3z
      `}/>
 </svg>
);

Phone.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  colorStroke: PropTypes.string,
  colorFill: PropTypes.string,
};

Phone.defaultProps = {
  width: 24,
  height: 24,
  colorStroke: '#FFF',
  colorFill: '#067df7',
};

export default Phone
