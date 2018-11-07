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
            My name is Scott and <Link className={s.link} to="/making-stuff">I make things</Link> for money and for fun.
            I’m a product designer, <a href="https://mindfuldesign.xyz" target="_blank" rel="noopener noreferrer">author</a>, developer, <Link className={s.link} to="/speaking">speaker</Link>, musician and internet <Link className={s.link} to="/experimenting">tinkerer</Link>.
            I love turning exciting ideas into beautiful&nbsp;products.
          </p>
        </div>
      </div>
    );
  }
}
