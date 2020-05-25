/** React dependencies */
import React from 'react';

/** Components dependencies */
import Check from './Check';
import Cross from './Cross';
import Access from './Access';
import Complete from './Complete';
import Simple from './Simple';
import Innovation from './Innovation';
import Focus from './Focus';
import Agenda from './Agenda';
import Person from './Person';
import Chart from './Chart';
import Money from './Money';
import Account from './Account';
import Instagram from './Instagram';
import Facebook from './Facebook';
import Twitter from './Twitter';
import Address from './Address';
import Tables from './Tables';
import Process from './Process';
import Phone from './Phone';

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
  process: Process,
  chart: Chart,
  money: Money,
  account: Account,
  instagram: Instagram,
  facebook: Facebook,
  twitter: Twitter,
  address: Address,
  tables: Tables,
  phone: Phone,
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

export default GeneratedIcon;
