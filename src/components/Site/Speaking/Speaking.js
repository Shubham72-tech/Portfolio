import React, {Component} from 'react';
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
              Got a conference coming up? Got a diverse lineup and a proper code of conduct? Need someone to talk about creative coding, gamification or interaction design? Let’s do it.
            </p>
            <IconRow />
          </div>
          <div className={s.thinRow}>
            <h2 className={s.subtitle} style={ {backgroundImage: `url(images/heading-shapes.svg)` }}>Previous Talks</h2>

            <div className={s.eventList}>

              <div className={s.event}>
                <h3>HybridConf</h3>
                <p className={s.meta}>‘Re-learning To Love The Web’ <span className={s.slash}>/</span> Dublin <span className={s.slash}>/</span> 2015</p>
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

            <h2 className={s.subtitle} style={ {backgroundImage: `url(images/heading-shapes.svg)` }}>Speaking Requirements</h2>
            <div className={[s.eventList, s.requirements].join(' ')}>

              <div className={s.event}>
                <h3>Diversity</h3>
                <p className={s.desc}>
                  This is super important. I feel like an event without a diverse range of speakers (and thusly opinions and experiences) will never be great. I’ll only speak at events that have a diverse lineup and a keynote speaker that isn’t another boring ass white dude.
                </p>
              </div>

              <div className={s.event}>
                <h3>A Code of Conduct</h3>
                <p className={s.desc}>
                  Diversity means nothing if people don’t feel safe at an event. I only speak at events that have a thorough, inclusion-focussed CoC and plans to enforce it.
                </p>
              </div>

              <div className={s.event}>
                <h3>Travel & Accommodation</h3>
                <p className={s.desc}>
                  Unless an event is local, it’d be super nice to get travel and accommodation paid so I don’t go poor from speaking at lots of dope conferences x
                </p>
              </div>

            </div>

          </div>
        </Wrapper>
      </div>
    );
  }
}
