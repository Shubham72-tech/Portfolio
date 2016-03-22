import React, {Component} from 'react';
import Isvg from 'react-inlinesvg';

import illo from './caf.svg';

export default class CuteAsFuck extends Component {
  render() {
    return (
      <Isvg src={illo} />
    );
  }
}
