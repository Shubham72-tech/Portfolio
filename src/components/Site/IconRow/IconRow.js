import React, {Component} from 'react';
import {Motion, StaggeredMotion, spring} from 'react-motion';

import s from './IconRow.css';

import KeyholeIcon from './icons/keyhole.svg';
import LanternIcon from './icons/lantern.svg';
import BoltIcon from './icons/bolt.svg';
import AnchorIcon from './icons/anchor.svg';
import HeartIcon from './icons/heart.svg';

export default class IconRow extends Component {
  render() {
    const {children} = this.props;
    return (
      <div className={s.root}>
        <img src={KeyholeIcon} />
        <img src={LanternIcon} />
        <img src={BoltIcon} />
        <img src={AnchorIcon} />
        <img src={HeartIcon} />
      </div>
    );
  }
}
