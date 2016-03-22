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
    const {modifier} = this.props;
    let classNames = [s.root];
    if(modifier) {
      classNames.push(s[modifier]);
    }
    classNames = classNames.join(' ');
    return (
      <div className={classNames}>
        <div className={s.icon}>
          <img src={KeyholeIcon} />
        </div>
        <div className={s.icon}>
          <img src={LanternIcon} className={s.lantern} />
        </div>
        <div className={s.icon}>
          <img src={BoltIcon} />
        </div>
        <div className={s.icon}>
          <img src={AnchorIcon} />
        </div>
        <div className={s.icon}>
          <img src={HeartIcon} />
        </div>
      </div>
    );
  }
}
