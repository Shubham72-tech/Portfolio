import React, {Component} from 'react';
import Isvg from 'react-inlinesvg';

import illo from './caf.svg';

import s from './CuteAsFuck.css'

export default class CuteAsFuck extends Component {
  render() {
    return (
      <Isvg src={illo} />
    );
  }
}
