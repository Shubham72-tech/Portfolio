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
                <h2 className={s.portfolioHeading}>With Jack</h2>
                <p className={[s.skills, s.blue].join(' ')}>
                  UX <span className={s.slash}>/</span> UI <span className={s.slash}>/</span> Vue.js <span className={s.slash}>/</span> Frontend
                </p>
                <p className={s.processDescription}>
                  I teamed up with Ashley Baxter and Vic Bell to redesignh and build an entire new vibe for the already-awesome With Jack. I designed and built the marketing site and a lovely chatty quote system, as well as building a simple API and barebones CRM for customer management.
                </p>
                <p className={s.processDescription}>
                  <Link to="/making-stuff">See more work</Link>
                </p>
              </div>
              <div className={s.images}>
                <div className={s.smallImages}>
                  <img src="images/portfolio/wj-hex.png" />
                  <img src="images/portfolio/wj-circle.png" />
                  <img src="images/portfolio/wj-diamond.png" />
                </div>
                <div className={s.bigImage}>
                  <img src="images/portfolio/wj-main.png" />
                </div>
              </div>
            </div>
        </div>

      </div>
    )
  }
}
