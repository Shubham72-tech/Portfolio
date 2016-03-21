import React, {Component} from 'react';
import Isvg from 'react-inlinesvg';

import uxSvg from './ux.svg';

export default class UX extends Component {
  render() {
    return (
      <Isvg src={uxSvg} />
    );
  }
}
