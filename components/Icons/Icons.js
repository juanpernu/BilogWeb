/** React dependencies */
import React from 'react'
import PropTypes from 'prop-types'

/** Components dependencies */
import Check from './Check'
import Cross from './Cross'
import Access from './Access'
import Complete from './Complete'
import Simple from './Simple'

const icons = {
  check: Check,
  cross: Cross,
  access: Access,
  complete: Complete,
  simple: Simple,
};

/**
 * Stateless Component that shows an icon. You must send on
 * props the type of icon.
 * @param {String} type - the type of icon, cannot be null.
 * @param {Number} width - the width of svg icon, can be null.
 * @param {Number} height - the height of svg icon, can be null.
 * @param {String} color - the color of svg icon, can be null.
 */
const GeneratedIcon = ({ type, width, height, colorStroke, colorFill }) => {
  const Icon = icons[type];
  return <Icon
    width={width}
    height={height}
    colorStroke={colorStroke}
    colorFill={colorFill}
  />;
};

GeneratedIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  colorStroke: PropTypes.string,
  colorFill: PropTypes.string,
  type: PropTypes.oneOf(['check', 'cross', 'access', 'complete', 'simple']).isRequired,
};

GeneratedIcon.defaultProps = {
  width: undefined,
  height: undefined,
  colorStroke: undefined,
  colorFill: undefined,
};

export default GeneratedIcon
