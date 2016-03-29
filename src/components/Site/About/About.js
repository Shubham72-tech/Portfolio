import React, {Component} from 'react';
import {Link} from 'react-router';

import Wrapper from 'components/Global/Wrapper/Wrapper';
import IconRow from 'components/Site/IconRow/IconRow';

import s from './About.css';
import m from 'global/modifiers';

export default class About extends Component {
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
                Isn’t it lovely? I’m a designer and developer, specialising in interface design, React development and inventing new swear words. I like to do fun experiments that marry things like music and audio processing, 3D environments, gaming, and virtual reality with web technology. I also speak about gamification, interaction design and creative coding.
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
              <Link to="https://twitter.com/scott_riley"><h3>Twitter</h3></Link>
              <Link to="https://instagram.com/scott_riley"><h3>GitHub</h3></Link>
              <Link to="https://instagram.com/scott_riley"><h3>Instagram</h3></Link>
            </div>

          </div>
        </div>

      </div>
    );
  }
}
