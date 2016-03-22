import React, {Component} from "react";

import Btn from 'components/Global/Btn/Btn';
import Wrapper from 'components/Global/Wrapper/Wrapper';
import IconRow from 'components/Site/IconRow/IconRow';
import IntroSection from 'components/Site/IntroSection/IntroSection';
import CuteAsFuck from 'components/Site/CuteAsFuck/CuteAsFuck';

import s from './Homepage.css';
import m from 'global/modifiers';

export default class Homepage extends Component {
  render() {
    return(
      <div id="homepage" className={s.super}>
        <Wrapper className={s.root}>
          <div className={s.thinRow}>
            <IconRow modifier="left" />
            <h1 className={[m.alpha, s.heading].join(' ')}>Hi there</h1>
            <IntroSection />
          </div>
        </Wrapper>
        <div className={s.illo}>
          <CuteAsFuck />
        </div>
      </div>
    )
  }
}
