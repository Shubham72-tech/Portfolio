import React, {Component} from 'react';
import Isvg from 'react-inlinesvg';

import s from './Loading.css';

import loading from './loading.svg';

export default class Loading extends Component {
  render() {
    const {children} = this.props;
    return (
      <div className={s.super}>
        <Isvg src={loading} className={s.root} />
      </div>
    );
  }
}
