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
    const {modifier, className} = this.props;
    let classNames = [s.root, className];
    if(modifier) {
      classNames.push(s[modifier]);
    }
    classNames = classNames.join(' ');
    return (
      <div className={classNames}>
        <div className={s.icon}>
          <img src="/images/icons/keyhole.svg" />
        </div>
        <div className={s.icon}>
          <img src="/images/icons/lantern.svg" className={s.lantern} />
        </div>
        <div className={s.icon}>
          <img src="/images/icons/bolt.svg" />
        </div>
        <div className={s.icon}>
          <img src="/images/icons/anchor.svg" />
        </div>
        <div className={s.icon}>
          <img src="/images/icons/heart.svg" />
        </div>
      </div>
    );
  }
}
