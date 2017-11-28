import React, {Component} from "react";
import {Link} from "react-router";

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
            <h1 className={s.heading}>Hi there</h1>
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
                <h2 className={s.portfolioHeading}>Readme</h2>
                <p className={[s.skills, s.blue].join(' ')}>
                  UX <span className={s.slash}>/</span> UI <span className={s.slash}>/</span> Vue.js <span className={s.slash}>/</span> Frontend
                </p>
                <p className={s.processDescription}>
                  I teamed up with my good pal/chum/friendo Ben Howdle to design and help build a lovely little feature-light Twitter reader. It's literally just a big list of tweets. I kinda love it.
                </p>
                <p className={s.processDescription}>
                  <Link to="/making-stuff">See more work</Link>
                </p>
              </div>
              <div className={s.images}>
                <div className={s.smallImages}>
                  <img src="images/portfolio/readme-hex.png" />
                  <img src="images/portfolio/readme-circle.png" />
                  <img src="images/portfolio/readme-diamond.png" />
                </div>
                <div className={s.bigImage}>
                  <img src="images/portfolio/readme-main.png" />
                </div>
              </div>
            </div>
        </div>

      </div>
    )
  }
}
