import React, {Component} from 'react';

import Wrapper from 'components/Global/Wrapper/Wrapper';
import IconRow from 'components/Site/IconRow/IconRow';

import s from './Portfolio.css';
import m from 'global/modifiers';

export default class Portfolio extends Component {
  render() {
    return (
      <div className={s.root}>
        <Wrapper>
          <h1 className={[m.alpha, s.heading].join(' ')}>My Work</h1>
          <div className={s.thinRow}>
            <p className={s.subtext}>
              I’ve been lucky enough to work on loads of pretty cool projects, including huge enterprise web apps, Government sites, mobile apps and lovely interfaces for hipster coffee drinkers.
            </p>
            <IconRow />
          </div>
        </Wrapper>

        <div className={s.sections}>

          <div className={s.portfolioItem}>
            <div className={s.section}>
              <div className={s.copy}>
                <h3 className={s.subhead}>2016</h3>
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

          <div className={s.portfolioItem}>
            <div className={s.section}>
              <div className={s.copy}>
                <h3 className={s.subhead}>2016</h3>
                <h2 className={s.portfolioHeading}>Hit Me Up</h2>
                <p className={[s.skills, s.blue].join(' ')}>
                  UX <span className={s.slash}>/</span> UI <span className={s.slash}>/</span> React & Redux <span className={s.slash}>/</span> API Build
                </p>
                <p className={s.processDescription}>
                  Hit Me Up is a service that lets anyone sign up and quickly get a simple API endpoint to start sending data to. It’s intended for frontend devs who want to make super quick contact forms or messaging apps without coding their own API endpoint.
                </p>
              </div>
              <div className={s.images}>
                <div className={s.smallImages}>
                  <img src="images/portfolio/hmu-hex.png" />
                  <img src="images/portfolio/hmu-circle.png" />
                  <img src="images/portfolio/hmu-diamond.png" />
                </div>
                <div className={s.bigImage}>
                  <img src="images/portfolio/hmu-main.png" />
                </div>
              </div>
            </div>
          </div>

          <div className={s.portfolioItem}>
            <div className={s.section}>
              <div className={s.copy}>
                <h3 className={s.subhead}>2013</h3>
                <h2 className={s.portfolioHeading}>MCC</h2>
                <p className={[s.skills, s.blue].join(' ')}>
                  UX <span className={s.slash}>/</span> Interaction Design <span className={s.slash}>/</span> Frontend
                </p>
                <p className={s.processDescription}>
                  I led the UX, interaction design and frontend build of a redesigned Manchester City Council website, taking it from an outdated, clunky mess to a pretty lovely responsive site that helps thousands of people do boring stuff every day.
                </p>
              </div>
              <div className={s.images}>
                <div className={s.smallImages}>
                  <img src="images/portfolio/mcc-hex.png" />
                  <img src="images/portfolio/mcc-circle.png" />
                  <img src="images/portfolio/mcc-diamond.png" />
                </div>
                <div className={s.bigImage}>
                  <img src="images/portfolio/mcc-main.png" />
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    );
  }
}
