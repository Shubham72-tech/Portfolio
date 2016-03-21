import React, {Component} from 'react';
import Isvg from 'react-inlinesvg';

import feSvg from './fe.svg';

export default class Frontend extends Component {
  render() {
    return (
      <Isvg src={feSvg} />
    );
  }
}
