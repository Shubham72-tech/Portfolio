import React, {Component} from "react";
import {Link} from 'react-router';

import Btn from 'components/Global/Btn/Btn';
import Wrapper from 'components/Global/Wrapper/Wrapper';

import s from './Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <footer className={s.root}>
        <div className={s.wrap}>
          <div className={s.getInTouch}>
            <Link to="making-stuff/for-you" className={s.cta}>Get in touch</Link>
          </div>
          <div>
            <p className={s.copyNotice}>
              &copy; Forever and ever until the end of time
            </p>
            <p className={s.nav}>
              <Link to="/" className={[s.link].join(' ')}>Home</Link> / <Link to="/" className={[s.link].join(' ')}>About</Link> / <Link to="/" className={[s.link].join(' ')}>What I do</Link> / <Link to="/" className={[s.link].join(' ')}>My work</Link> / <Link to="/" className={[s.link].join(' ')}>Speaking</Link>
            </p>
          </div>
        </div>
      </footer>
    )
  }
}
