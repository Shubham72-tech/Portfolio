import React, {Component} from 'react';
import {Link} from 'react-router';

import Wrapper from 'components/Global/Wrapper/Wrapper';
import IconRow from 'components/Site/IconRow/IconRow';

import s from './About.css';
import m from 'global/modifiers';

export default class About extends Component {
  componentDidMount() {
    window.scrollTo(0,0,);
  }
  render() {
    return (
      <div className={s.root}>
        <Wrapper>
          <h1 className={[m.alpha, s.heading].join(' ')}>This is my face</h1>
          <div className={s.row}>
            <div className={s.imageCol}>
              <img src="/images/speaking.jpg" className={s.speakingImage} />
            </div>
            <div className={s.copyCol}>
              <p className={s.subtext}>
                Isn't it lovely? I'm a designer, developer and advocate for mental health discourse in tech. 
                I'm specifically interested in design's role and impact on mental health (spoiler, right now, we fucking suck at it) and improving design processes through mindful principles, 
                inclusive research and Actually Doing Our Fucking Job. 
              </p>
              <p className={s.subtext}>
                I believe that technology&mdash;and by proxy, design&mdash;should democratise and that late-stage tech-capitalism is an absolute shitshow. Thusly, I only take on design projects with socially conscious founders who 
                don't place profit above all else.
              </p>
            </div>
          </div>
          <IconRow className={s.icons} />
        </Wrapper>

        <div className={s.thinRow}>
          <h2 className={s.subtitle}>Six Very important Facts About Scott Riley</h2>

          <div className={s.eventList}>

            <div className={s.event}>
              <h3>Haunter is my favourite Pokemon.</h3>
            </div>

            <div className={s.event}>
              <h3>I put the milk in first when I make tea because fuck you I do what I want.</h3>
            </div>

            <div className={s.event}>
              <h3>I build guitars for charity because I’m just so super nice.</h3>
            </div>

            <div className={s.event}>
              <h3>Cereal is very important to me.</h3>
            </div>

            <div className={s.event}>
              <h3>As a kid I wanted to be ‘God, or the drummer from The Commitments’ when I grew up.</h3>
            </div>

            <div className={s.event}>
              <h3>I don’t want to be God anymore.</h3>
            </div>

          </div>
        </div>

        <div className={s.thinRow}>
          <h2 className={s.subtitle}>Holler</h2>

          <div className={s.eventList}>

            <div className={s.event}>
              <a href="https://twitter.com/scott_riley"><h3>Twitter</h3></a>
              <a href="https://github.com/scott-riley"><h3>GitHub</h3></a>
              <a href="https://instagram.com/scott_riley"><h3>Instagram</h3></a>
            </div>

          </div>
        </div>

      </div>
    );
  }
}
