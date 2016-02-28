import React, {Component} from "react";
import {Motion, StaggeredMotion, spring} from 'react-motion';

import Btn from 'components/Global/Btn/Btn';
import Wrapper from 'components/Global/Wrapper/Wrapper';
import Menu from 'components/Site/Menu/Menu';

import s from './Nav.css'

export default class Nav extends Component {

  constructor(props) {
    super(props);
    this.showMenu.bind(this);
    this.state = {
      showMenu: false,
    }
  }

  showMenu() {
    this.setState({ showMenu: !this.state.showMenu });
  }

  render() {
    const {showMenu} = this.state;
    const menuClass = showMenu ? s.closeButton : s.menuButton;
    return (
      <div className={s.super}>
        { showMenu ?
            <Menu />
          :
            null
        }
        <nav className={s.root}>
          <Wrapper>
            <a className={[s.menuLink, menuClass].join(' ')} onClick={ () => this.showMenu() }>
            <StaggeredMotion
              defaultStyles={[{z: 0}, {z: 0}, {z: 0}]}
              styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
                return i === 0
                  ? {z: spring(100, {stiffness: 120, damping: 10})}
                  : {z: spring(prevInterpolatedStyles[i - 1].z, {stiffness: 120, damping: 10})}
              })}>
              {interpolatingStyles =>
                <div>
                  {interpolatingStyles.map((style, i) =>
                    <div key={i} style={{width: `${style.z}%`}} className={[s.line].join(' ')}/>)
                  }
                </div>
              }
            </StaggeredMotion>
            </a>
            <div className={s.cta}>
              <a href="/hire" className={[s.hire, s.theta].join(' ')}>Hire me</a>
              <div className={s.squiggle}>
                <svg width="74px" height="6px" viewBox="0 0 74 6">
                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="Artboard-1" transform="translate(-1067.000000, -80.000000)" stroke="#9AEFDD">
                            <g id="Group-6" transform="translate(1060.000000, 45.000000)">
                                <path d="M7,36 C10.681,36 10.681,40 14.361,40 C18.039,40 18.039,36 21.717,36 C25.397,36 25.397,40 29.077,40 C32.757,40 32.757,36 36.436,36 C40.116,36 40.116,40 43.796,40 C47.477,40 47.477,36 51.157,36 C54.839,36 54.839,40 58.521,40 C62.202,40 62.202,36 65.883,36 C69.567,36 69.567,40 73.25,40 C76.933,40 76.933,36 80.617,36" id="Page-1"></path>
                            </g>
                        </g>
                    </g>
                </svg>
              </div>
            </div>
          </Wrapper>
        </nav>
      </div>
    )
  }
}
