import React, {Component} from 'react';
import Isvg from 'react-inlinesvg';

import itSvg from './iterate.svg';

export default class Iteration extends Component {
  render() {
    return (
      <Isvg src={itSvg} />
    );
  }
}
