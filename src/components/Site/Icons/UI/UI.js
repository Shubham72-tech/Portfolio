import React, {Component} from 'react';
import Isvg from 'react-inlinesvg';

import uiSvg from './ui.svg';

export default class UI extends Component {
  render() {
    return (
      <Isvg src={uiSvg} />
    );
  }
}
