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
      <Motion
        defaultStyle={{rootY: 30, topY: 10, bottomY: 10, pop: .7}}
        style={{
          rootY: spring(0, {stiffness: 100, damping: 10}),
          topY: spring(0, {stiffness: 80, damping: 8}),
          bottomY: spring(0, {stiffness: 80, damping: 7}),
          pop: spring(1, {stiffness: 80, damping: 7}),
        }}>
        { value =>
          <div className={s.root} style={{transform: `translateY(${value.rootY}vh)`}}>
            <Wrapper>
              <div className={s.row}>
                <div className={s.col}>
                  <div className={s.imageContainer}>
                    <img src={bolt} style={{transform: `scale(${value.pop})`}} />
                  </div>
                  <Link to="/" className={[s.link, m.epsilon, m.mbepsilon].join(' ')} style={{transform: `translateY(${value.topY}vh)`}}>What I do</Link>
                  <Link to="/" className={[s.link, m.epsilon, m.mbepsilon].join(' ')} style={{transform: `translateY(${value.topY}vh)`}}>What I make</Link>
                </div>
                <div className={s.col}>
                  <div className={s.imageContainer}>
                    <img src={lantern} style={{transform: `scale(${value.pop})`}} />
                  </div>
                  <Link to="/" className={[s.link, m.epsilon, m.mbepsilon].join(' ')} style={{transform: `translateY(${value.bottomY}vh)`}}>Speaking</Link>
                  <Link to="/" className={[s.link, m.epsilon, m.mbepsilon].join(' ')} style={{transform: `translateY(${value.bottomY}vh)`}}>Workshops</Link>
                </div>
              </div>

              <div className={s.row}>
                <div className={s.col}>
                  <div className={s.imageContainer}>
                    <img src={anchor} style={{transform: `scale(${value.pop})`}} />
                  </div>
                  <Link to="/" className={[s.link, m.epsilon, m.mbepsilon].join(' ')} style={{transform: `translateY(${value.topY}vh)`}}>Writing</Link>
                  <Link to="/" className={[s.link, m.epsilon, m.mbepsilon].join(' ')} style={{transform: `translateY(${value.topY}vh)`}}>Screencasts</Link>
                </div>
                <div className={s.col}>
                  <div className={s.imageContainer}>
                    <img src={heart} style={{transform: `scale(${value.pop})`}} />
                  </div>
                  <Link to="/" className={[s.link, m.epsilon, m.mbepsilon].join(' ')} style={{transform: `translateY(${value.bottomY}vh)`}}>Exploration</Link>
                  <Link to="/" className={[s.link, m.epsilon, m.mbepsilon].join(' ')} style={{transform: `translateY(${value.bottomY}vh)`}}>Mentorship</Link>
                </div>
              </div>

            </Wrapper>
          </div>
        }
      </Motion>
    );
  }
}
