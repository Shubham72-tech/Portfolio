import React, {Component} from "react";

import Btn from 'components/Global/Btn/Btn';
import Wrapper from 'components/Global/Wrapper/Wrapper';
import IconRow from 'components/Site/IconRow/IconRow';

import s from './Process.css';
import m from 'global/modifiers';

// Icon Components
import UxIcon from 'components/Site/Icons/UX/UX';
import UiIcon from 'components/Site/Icons/UI/UI';
import IxdIcon from 'components/Site/Icons/IxD/IxD';
import FeIcon from 'components/Site/Icons/Frontend/Frontend';

import headerShapes from './header-shapes.svg';

export default class Process extends Component {
  render() {
    return(
      <div id="process">
        <Wrapper className={s.root}>
          <h1 className={[m.alpha, s.heading].join(' ')}>What I do</h1>
          <div className={s.thinRow}>
            <p className={s.subtext}>
              I plan, design, build, test and iterate on products and sites for people with exciting ideas and wonderful stories to tell. While I’m available for any phase of a design or build, I’m at my best working directly with founders, taking awesome ideas from plan through to launch.
            </p>
            <IconRow />
          </div>
        </Wrapper>

        <div className={s.sections}>

          <div className={s.ux}>
            <div className={s.section}>
              <div className={s.copy}>
                <h2 className={[s.processHeading, s.purpleHeading].join(' ')} style={ { backgroundImage: `url(${headerShapes})`} }>The sharpies and&nbsp;post-it&nbsp;stuff</h2>
                <p className={[s.skills, s.purple].join(' ')}>
                  Roadmapping <span className={s.slash}>/</span> Exploration <span className={s.slash}>/</span> Planning <span className={s.slash}>/</span> Wireframing
                </p>
                <p className={s.processDescription}>
                  I think that the best ideas need time, discussion, and lots of scribbling. Defining the problems your product is trying to solve is super useful and I’m pretty great at this xoxo
                </p>
              </div>
              <div className={s.icons}>
                <UxIcon />
              </div>
            </div>
          </div>

          <div className={s.ui}>
            <div className={s.section}>
              <div className={s.copy}>
                <h2 className={[s.processHeading, s.orangeHeading].join(' ')} style={ { backgroundImage: `url(${headerShapes})`} }>The hipster designery&nbsp;stuff</h2>
                <p className={[s.skills, s.orange].join(' ')}>
                  UI Design <span className={s.slash}>/</span> Icon Design <span className={s.slash}>/</span> Typography & Grids <span className={s.slash}>/</span> Styleguides
                </p>
                <p className={s.processDescription}>
                  My aproach to UI design revolves around crafting a ‘visual language’ for an interface. I never design solely in the context of static screens and do a lot of work to create robust, reusable elements. That means creating styleguides for every project. That means frontend devs wanna smooch me.
                </p>
              </div>
              <div className={s.icons}>
                <UiIcon />
              </div>
            </div>
          </div>

          <div className={s.ixd}>
            <div className={s.section}>
              <div className={s.copy}>
                <h2 className={[s.processHeading, s.yellowHeading].join(' ')} style={ { backgroundImage: `url(${headerShapes})`} }>The click, tap &amp;&nbsp;bounce stuff</h2>
                <p className={[s.skills, s.yellow].join(' ')}>
                  UI Design <span className={s.slash}>/</span> Icon Design <span className={s.slash}>/</span> Typography & Grids <span className={s.slash}>/</span> Styleguides
                </p>
                <p className={s.processDescription}>
                  Interaction design is probably my biggest area of expertise. Designing the ‘in-betweens’ is a vital part of my approach to design. Sculpting all the tiny elements surrounding an interface’s interactions is my absolute favourite thing to do.
                </p>
              </div>
              <div className={s.icons}>
                <IxdIcon />
              </div>
            </div>
          </div>

          <div className={s.fe}>
            <div className={s.section}>
              <div className={s.copy}>
                <h2 className={[s.processHeading, s.blueHeading].join(' ')} style={ { backgroundImage: `url(${headerShapes})`} }>The shouting at browsers stuff</h2>
                <p className={[s.skills, s.blue].join(' ')}>
                  UI Design <span className={s.slash}>/</span> Icon Design <span className={s.slash}>/</span> Typography & Grids <span className={s.slash}>/</span> Styleguides
                </p>
                <p className={s.processDescription}>
                  My aproach to UI design revolves around crafting a ‘visual language’ for an interface. I never design solely in the context of static screens and do a lot of work to create robust, reusable elements. That means creating styleguides for every project. That means frontend devs wanna smooch me.
                </p>
              </div>
              <div className={s.icons}>
                <FeIcon />
              </div>
            </div>
          </div>

        </div>

      </div>
    )
  }
}