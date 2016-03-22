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
        <div className={[s.bioBlock, m.fw200, m.theta, m.lhLoose].join(' ')}>
          <p>
            My name is Scott and <Link to="/" className={s.link}>I make things</Link> for money and for fun.
            I’m a product designer, developer, speaker and internet tinkerer.
            I 💖 turning exciting ideas into beautiful&nbsp;products.
          </p>
        </div>
      </div>
    );
  }
}
