import React, {Component} from 'react';
import Isvg from 'react-inlinesvg';

import ixdSvg from './ixd.svg';

export default class IxD extends Component {
  render() {
    return (
      <Isvg src={ixdSvg} />
    );
  }
}
