/** React dependencies */
import React from 'react'
import PropTypes from 'prop-types'

/** Components dependencies */
import Check from './Check'
import Cross from './Cross'
import Access from './Access'
import Complete from './Complete'
import Simple from './Simple'
import Innovation from './Innovation'
import Focus from './Focus'
import Agenda from './Agenda'
import Person from './Person'
import Chart from './Chart'
import Money from './Money'
import Account from './Account';
import Instagram from './Instagram';
import Facebook from './Facebook';
import Twitter from './Twitter';
import Address from './Address';

const icons = {
  check: Check,
  cross: Cross,
  access: Access,
  complete: Complete,
  simple: Simple,
  innovation: Innovation,
  focus: Focus,
  agenda: Agenda,
  person: Person,
  chart: Chart,
  money: Money,
  account: Account,
  instagram: Instagram,
  facebook: Facebook,
  twitter: Twitter,
  address: Address,
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
  type: PropTypes.oneOf([
    'check',
    'cross',
    'access',
    'address',
    'account',
    'agenda',
    'chart',
    'complete',
    'simple',
    'innovation',
    'focus',
    'person',
    'money',
    'instagram',
    'facebook',
    'twitter',
  ]).isRequired,
};

GeneratedIcon.defaultProps = {
  width: undefined,
  height: undefined,
  colorStroke: undefined,
  colorFill: undefined,
};

export default GeneratedIcon
