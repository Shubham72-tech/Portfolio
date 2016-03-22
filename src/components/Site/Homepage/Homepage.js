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

        <div className={s.featuredWork}>
          <div className={s.section}>
            <div className={s.copy}>
              <h3 className={s.subhead}>Featured Work</h3>
              <h2 className={s.portfolioHeading}>Pact Coffee</h2>
              <p className={[s.skills, s.blue].join(' ')}>
                UX <span className={s.slash}>/</span> UI <span className={s.slash}>/</span> Icons <span className={s.slash}>/</span> Motion design <span className={s.slash}>/</span> Frontend
              </p>
              <p className={s.processDescription}>
                I led UI at Pact for almost two years and oversaw two major UI and iOS app redesigns, as well as dozens of new features, iterations, successes and failures. It was a beautiful time.
              </p>
            </div>
            <div className={s.images}>
              <div className={s.smallImages}>
                <img src="images/portfolio/pact-hex.png" />
                <img src="images/portfolio/pact-circle.png" />
                <img src="images/portfolio/pact-diamond.png" />
              </div>
              <div className={s.bigImage}>
                <img src="images/portfolio/pact-main.png" />
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
