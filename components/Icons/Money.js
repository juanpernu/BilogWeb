import React from 'react'
import PropTypes from 'prop-types'

const Money = ({ width, height, colorStroke, colorFill }) => (
  <svg width={width} height={height} viewBox="0 0 24 24">
    <path
      fill={colorFill}
      d={`
        M12
        8c-2.208
        0-4
        1.792-4
        4s1.792
        4
        4
        4c2.209
        0
        4-1.792
        4-4s-1.791-4-4-4zm.2
        5.979v.42h-.4v-.399c-.414-.007-.843-.105-1.2-.29l.181-.657c.383.146.891.305
        1.29.215.46-.104.555-.577.046-.805-.372-.172-1.512-.322-1.512-1.296
        0-.546.417-1.034
        1.194-1.141v-.425h.401v.407c.29.007.616.058.977.168l-.145.658c-.307-.107-.646-.205-.977-.185-.595.035-.648.551-.232.766.684.322
        1.576.561
        1.576
        1.418.002.687-.536
        1.054-1.199
        1.146zm-12.2-8.979v14h24v-14h-24zm22
        9.422c-1.151.504-2.074
        1.427-2.578
        2.578h-14.844c-.504-1.151-1.427-2.074-2.578-2.578v-4.844c1.151-.504
        2.074-1.427
        2.578-2.578h14.844c.504
        1.151
        1.427
        2.074
        2.578
        2.578v4.844z
      `}/>
 </svg>
);

Money.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  colorStroke: PropTypes.string,
  colorFill: PropTypes.string,
};

Money.defaultProps = {
  width: 36,
  height: 36,
  colorStroke: '#FFF',
  colorFill: '#067df7',
};

export default Money
