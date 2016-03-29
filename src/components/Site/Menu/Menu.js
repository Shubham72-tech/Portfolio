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
    const {onLinkClick} = this.props;
    return (
      <Motion
        defaultStyle={{rootY: 30, topY: 10, bottomY: 10, pop: .7}}
        style={{
          rootY: spring(0, {stiffness: 100, damping: 10}),
          topY: spring(0, {stiffness: 80, damping: 12}),
          bottomY: spring(0, {stiffness: 80, damping: 12}),
          pop: spring(1, {stiffness: 60, damping: 21}),
        }}>
        { value =>
          <div className={s.root} style={{transform: `translateY(${value.rootY}vh)`}}>
            <Wrapper>
              <div className={s.row}>
                <div className={s.col}>
                  <div className={s.imageContainer}>
                    <img src={bolt} style={{transform: `scale(${value.pop})`}} />
                  </div>
                  <Link to="/" className={s.link} style={{transform: `translateY(${value.topY}vh)`}} onClick={onLinkClick}>Home</Link>
                  <Link to="/talking-about-himself-again" className={s.link} style={{transform: `translateY(${value.topY}vh)`}} onClick={onLinkClick}>About</Link>
                </div>
                <div className={s.col}>
                  <div className={s.imageContainer}>
                    <img src={lantern} style={{transform: `scale(${value.pop})`}} />
                  </div>
                  <Link to="/doing" className={s.link} style={{transform: `translateY(${value.topY}vh)`}} onClick={onLinkClick}>What I do</Link>
                  <Link to="/making-stuff" className={s.link} style={{transform: `translateY(${value.topY}vh)`}} onClick={onLinkClick}>My work</Link>
                </div>
              </div>

              <div className={s.row}>
                <div className={s.col}>
                  <div className={s.imageContainer}>
                    <img src={anchor} style={{transform: `scale(${value.pop})`}} />
                  </div>
                  <Link to="/speaking" className={s.link} style={{transform: `translateY(${value.bottomY}vh)`}} onClick={onLinkClick}>Speaking</Link>
                  <Link to="/writing" className={s.link} style={{transform: `translateY(${value.bottomY}vh)`}} onClick={onLinkClick}>Writing</Link>
                </div>
                <div className={s.col}>
                  <div className={s.imageContainer}>
                    <img src={heart} style={{transform: `scale(${value.pop})`}} />
                  </div>
                  <Link to="/experimenting" className={s.link} style={{transform: `translateY(${value.bottomY}vh)`}} onClick={onLinkClick}>Experiments</Link>
                  <span className={[s.link, s.disabled].join(' ')} style={{transform: `translateY(${value.bottomY}vh)`}} onClick={onLinkClick}>Mentorship</span>
                </div>
              </div>

            </Wrapper>
          </div>
        }
      </Motion>
    );
  }
}
