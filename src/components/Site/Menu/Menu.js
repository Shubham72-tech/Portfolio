import React, {Component} from 'react';
import {Link} from 'react-router';
import {Motion, StaggeredMotion, TransitionMotion, spring} from 'react-motion';

import Wrapper from 'components/Global/Wrapper/Wrapper';

import s from './Menu.css';
import m from 'global/modifiers.css';

import lantern from '../Nav/icons/lantern-black.svg'
import heart from '../Nav/icons/heart-black.svg'
import anchor from '../Nav/icons/anchor-black.svg'
import bolt from '../Nav/icons/bolt-black.svg'

export default class Menu extends Component {
  render() {
    return (
      <div className={s.root}>
        <Wrapper>
          <div className={s.row}>
            <div className={s.col}>
              <div className={s.imageContainer}>
                <img src={bolt} />
              </div>
              <Link to="/" className={[s.link, m.epsilon, m.mbepsilon].join(' ')}>What I do</Link>
              <Link to="/" className={[s.link, m.epsilon, m.mbepsilon].join(' ')}>What I make</Link>
            </div>
            <div className={s.col}>
              <div className={s.imageContainer}>
                <img src={lantern} />
              </div>
              <Link to="/" className={[s.link, m.epsilon, m.mbepsilon].join(' ')}>Speaking</Link>
              <Link to="/" className={[s.link, m.epsilon, m.mbepsilon].join(' ')}>Workshops</Link>
            </div>
          </div>

          <div className={s.row}>
            <div className={s.col}>
              <div className={s.imageContainer}>
                <img src={anchor} />
              </div>
              <Link to="/" className={[s.link, m.epsilon, m.mbepsilon].join(' ')}>Writing</Link>
              <Link to="/" className={[s.link, m.epsilon, m.mbepsilon].join(' ')}>Screencasts</Link>
            </div>
            <div className={s.col}>
              <div className={s.imageContainer}>
                <img src={heart} />
              </div>
              <Link to="/" className={[s.link, m.epsilon, m.mbepsilon].join(' ')}>Exploration</Link>
              <Link to="/" className={[s.link, m.epsilon, m.mbepsilon].join(' ')}>Mentorship</Link>
            </div>
          </div>

        </Wrapper>
      </div>
    );
  }
}
