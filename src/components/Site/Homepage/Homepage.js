import React, {Component} from "react";

import Btn from 'components/Global/Btn/Btn';
import Wrapper from 'components/Global/Wrapper/Wrapper';
import IconRow from 'components/Site/IconRow/IconRow';
import IntroSection from 'components/Site/IntroSection/IntroSection';

import s from './Homepage.css';
import m from 'global/modifiers';

export default class Homepage extends Component {
  render() {
    return(
      <div id="homepage">
        <Wrapper>
          <div className={s.thinRow}>
            <IconRow />
            <h1 className={m.alpha}>Hi there</h1>
            <IntroSection />
          </div>
        </Wrapper>
      </div>
    )
  }
}
