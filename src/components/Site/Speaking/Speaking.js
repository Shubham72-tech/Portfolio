import React, {Component} from 'react';
import Vimeo from 'react-vimeo';
import Wrapper from 'components/Global/Wrapper/Wrapper';
import IconRow from 'components/Site/IconRow/IconRow';

import s from './Speaking.css';
import m from 'global/modifiers';

export default class Speaking extends Component {
  render() {
    const {children} = this.props;
    return (
      <div className={s.root}>
        <Wrapper>
          <h1 className={[m.alpha, s.heading].join(' ')}>Speaking</h1>
          <div className={s.thinRow}>
            <p className={s.subtext}>
              I don’t speak at conferences anymore because they’re full of boring as fuck straight white dudes. If you’re running an event, pay <a href="http://www.womenandcolor.com/">someone</a> <a href="https://enbytech.github.io/">who</a> <a href="https://modelviewculture.com/pieces/black-women-in-tech-2016">isn’t</a> a boring as fuck straight white dude to speak.
            </p>
            <IconRow />
          </div>
          <div className={s.thinRow}>
            <h2 className={s.subtitle} style={ {backgroundImage: `url(images/heading-shapes.svg)` }}>Previous Talks</h2>

            <div className={s.eventList}>

              <div className={s.event}>
                <h3>HybridConf</h3>
                <p className={s.meta}>‘Re-learning To Love The Web’ <span className={s.slash}>/</span> Dublin <span className={s.slash}>/</span> 2015</p>
                <Vimeo videoId={ `166454418` } />
                <p className={s.desc}>I spoke about falling in and out of love with the web. My talk featured a live demo where I made a cosmic world generate on screen by playing guitar at some JavaScript. I had to open for Aaron fucking Draplin. It was fun.</p>
              </div>

              <div className={s.event}>
                <h3>Second Wednesday</h3>
                <p className={s.meta}>‘This Is Your Brain On Games’ <span className={s.slash}>/</span> Nottingham <span className={s.slash}>/</span> 2015</p>
                <p className={s.desc}>I spoke about dopamine and Pokémon, how our brains respond to reward and challenges, and how we can use concepts from games to create better interfaces and interactions.</p>
              </div>

              <div className={s.event}>
                <h3>Forefront</h3>
                <p className={s.meta}>‘You’re Probably A Designer’ <span className={s.slash}>/</span> Leeds <span className={s.slash}>/</span> 2014</p>
                <p className={s.desc}>I spoke about dopamine and Pokémon. Again. I also spoke about how front-end developers constantly make design decisions whether they know it or not.</p>
              </div>

              <div className={s.event}>
                <h3>WebDev</h3>
                <p className={s.meta}>‘Gamify Everything’ <span className={s.slash}>/</span> Bristol <span className={s.slash}>/</span> 2013</p>
                <p className={s.desc}>I spoke about the general principles of gamification and how they can be applied to products and interfaces to make users happy as fuck.</p>
              </div>

            </div>

          </div>
        </Wrapper>
      </div>
    );
  }
}
