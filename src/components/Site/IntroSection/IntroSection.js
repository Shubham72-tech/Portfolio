import React, {Component} from 'react';
import {Link} from 'react-router';

import s from './IntroSection.css';
import face from './face.jpg';
import m from 'global/modifiers.css';

export default class IntroSection extends Component {
  render() {
    const {children} = this.props;
    return (
      <div className={s.root}>
        <div className={[s.bioBlock, m.fw200, m.lhLoose].join(' ')}>
          <p>
            My name is Scott and I make things for money and for fun.
            I’m a product designer, developer, speaker and internet tinkerer.
            I love turning exciting ideas into beautiful&nbsp;products.
          </p>
          <p className={s.links}>
            <Link to="/doing">What I Do</Link> / <Link to="/making">See My Work</Link>
          </p>
        </div>
      </div>
    );
  }
}
