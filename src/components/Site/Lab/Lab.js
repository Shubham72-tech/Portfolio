import React, {Component} from 'react';

import Wrapper from 'components/Global/Wrapper/Wrapper';
import IconRow from 'components/Site/IconRow/IconRow';

import s from './Lab.css';
import m from 'global/modifiers';

export default class Portfolio extends Component {
  componentDidMount() {
    window.scrollTo(0,0,);
  }
  render() {
    return (
      <div className={s.root}>
        <Wrapper>
          <h1 className={[m.alpha, s.heading].join(' ')}>Experiments</h1>
          <div className={s.thinRow}>
            <p className={s.subtext}>
              Welcome to the lab! Except it’s not really a lab it’s just a place where I show some weird things I’ve made with web technology.
            </p>
          </div>
        </Wrapper>

        <div className={s.sections}>

        <div className={s.portfolioItem}>
          <div className={s.section}>
            <div className={s.copy}>
              <h3 className={s.subhead}>2016</h3>
              <h2 className={s.portfolioHeading}>TypeMotion</h2>
              <p className={[s.skills, s.blue].join(' ')}>
                JavaScript <span className={s.slash}>/</span> LeapMotion
              </p>
              <p className={s.processDescription}>
                TypeMotion was built as an experiment with the LeapMotion JavaScript API. It lets you set type directly in the browser using silly hand gestures.
              </p>
              <p className={s.processDescription}>
                <a href="https://github.com/scott-riley/typemotion">View on GitHub</a>
              </p>
            </div>
            <div className={s.images}>
              <div className={s.bigImage}>
                <img src="/images/portfolio/typemotion-main.png" />
              </div>
            </div>
          </div>
        </div>

          <div className={s.portfolioItem}>
            <div className={s.section}>
              <div className={s.copy}>
                <h3 className={s.subhead}>2015</h3>
                <h2 className={s.portfolioHeading}>Gilgamesh</h2>
                <p className={[s.skills, s.blue].join(' ')}>
                  UX <span className={s.slash}>/</span> C++ <span className={s.slash}>/</span> DSP
                </p>
                <p className={s.processDescription}>
                  An overdrive effect audio plugin inspired by a Tube Screamer pedal. Made me hate C++. Like, really hate it.
                </p>
                <p className={s.processDescription}>
                  <a href="http://cl.ly/0W2d343r3h2u/download/Gilgamesh%20Overdrive.zip">Download – 64-bit VST/VST2/AU</a>
                </p>
              </div>
              <div className={s.images}>
                <div className={s.bigImage}>
                  <img src="http://cl.ly/image/3H381R3C202z/Screen%20Shot%202015-03-19%20at%2021.16.59.png" />
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    );
  }
}
