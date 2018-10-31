import React, {Component} from 'react';

import Wrapper from 'components/Global/Wrapper/Wrapper';
import IconRow from 'components/Site/IconRow/IconRow';

import s from './Portfolio.css';
import m from 'global/modifiers';

export default class Portfolio extends Component {

  componentDidMount() {
    window.scrollTo(0,0,);
  }

  render() {
    return (
      <div className={s.root}>
        <Wrapper>
          <h1 className={[m.alpha, s.heading].join(' ')}>My Work</h1>
          <div className={s.thinRow}>
            <p className={s.subtext}>
              I like to design and build good shit with socially-conscious founders who understand how their products manifest in the real world. Here's some stuff I've done:
            </p>
            <IconRow />
          </div>
        </Wrapper>

        <div className={s.sections}>

          <div className={s.portfolioItem}>
            <div className={s.section}>
                <div className={s.copy}>
                  <h3 className={s.subhead}>2018</h3>
                  <h2 className={s.portfolioHeading}>With Jack</h2>
                  <p className={[s.skills, s.blue].join(' ')}>
                    UX <span className={s.slash}>/</span> UI &amp; Animation <span className={s.slash}>/</span> React
                  </p>
                  <p className={s.processDescription}>
                    I teamed up with Ashley Baxter and Vic Bell to redesignh and build an entire new vibe for the already-awesome With Jack. I designed and built the marketing site and a lovely chatty quote system, as well as building a simple API and barebones CRM for customer management.
                  </p>
                  <p className={s.processDescription}>
                    <a href="https://withjack.co.uk">See it live</a>
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

          <div className={s.portfolioItem}>
            <div className={s.section}>
              <div className={s.copy}>
                <h3 className={s.subhead}>2018</h3>
                <h2 className={s.portfolioHeading}>Molly</h2>
                <p className={[s.skills, s.blue].join(' ')}>
                  Frontend <span className={s.slash}>/</span> React <span className={s.slash}>/</span> Animation
                </p>
                <p className={s.processDescription}>
                  I worked with the Molly team to develop their early-stage web app while they went through the Y-Combinator funding process.
                </p>
                <p className={s.processDescription}>
                  <a href="http://molly.com" target="_blank">See it live</a>
                </p>
              </div>
              <div className={s.images}>
                <div className={s.smallImages}>
                  <img src="images/portfolio/molly-hex.png" />
                  <img src="images/portfolio/molly-circle.png" />
                  <img src="images/portfolio/molly-diamond.png" />
                </div>
                <div className={s.bigImage}>
                  <img src="images/portfolio/molly-main.png" />
                </div>
              </div>
            </div>
          </div>

          <div className={s.portfolioItem}>
            <div className={s.section}>
              <div className={s.copy}>
                <h3 className={s.subhead}>2017+</h3>
                <h2 className={s.portfolioHeading}>Readme</h2>
                <p className={[s.skills, s.blue].join(' ')}>
                  UX <span className={s.slash}>/</span> UI <span className={s.slash}>/</span> Vue.js <span className={s.slash}>/</span> Frontend
                </p>
                <p className={s.processDescription}>
                  I teamed up with my good pal/chum/friendo Ben Howdle to design and help build a lovely little feature-light Twitter reader. It's literally just a big list of tweets. I kinda love it.
                </p>
                <p className={s.processDescription}>
                  <a href="http://readmeapp.stream" target="_blank">See it live</a>
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
                <p className={s.processDescription}>
                  <a href="http://pactcoffee.com" target="_blank">See it live</a>
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
                  Hit Me Up is a service that helps frontend devs make super quick contact forms or messaging apps, without coding their own API endpoint. Anyone can sign up and start sending data to it.
                </p>
                <p className={s.processDescription}>
                  <a href="https://hmu.cool" target="_blank">See it live</a>
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
                  I led the UX, interaction design and frontend build of a redesigned Manchester City Council website. We took it from an outdated, clunky mess to a pretty lovely, responsive site that helps thousands of people do boring stuff everyday.
                </p>
                <p className={s.processDescription}>
                  <a href="http://manchester.gov.uk" target="_blank">See it live</a>
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
