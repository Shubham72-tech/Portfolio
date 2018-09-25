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
import ItIcon from 'components/Site/Icons/Iteration/Iteration';

import headerShapes from './header-shapes.svg';

export default class Process extends Component {
  componentDidMount() {
    ghost.init({
    clientId: "ghost-frontend",
    clientSecret: "<letters-and-numbers>"
   });
  }
  render() {
    return(
      <div id="process" className={s.root}>
        <Wrapper>
          <h1 className={s.heading}>What I Do</h1>
          <div className={s.thinRow}>
            <p className={s.subtext}>
              I plan, design, build, test and iterate on digital products and sites for socially-conscious people with exciting ideas and wonderful stories to tell. I'm currently accepting work for early-stage design projects, working directly with founders to turn ideas into useful, mindful products.
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
                  Ethnography &amp; Research <span className={s.slash}>/</span> Storyboarding <span className={s.slash}>/</span> Wireframing &amp; Prototyping
                </p>
                <p className={s.processDescription}>
                  The best ideas need time, research, discussion, and lots of scribbling. Exploring the problem space our work exists in and conducting diverse, broad research puts us in the best position to make impactful shit. I strongly believe that a project is only as good as its foundations.
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
                  Design Systems <span className={s.slash}>/</span> Icon Design <span className={s.slash}>/</span> Typography &amp; Grids
                </p>
                <p className={s.processDescription}>
                My approach to UI design revolves around ensuring design decisions and principles can carry through to a complete system. I never design solely in the context of static screens and do a lot of work to create robust, reusable elements.
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
                  Interaction Design <span className={s.slash}>/</span> Animations <span className={s.slash}>/</span> Interactive Prototyping
                </p>
                <p className={s.processDescription}>
                  Interaction design is my biggest area of expertise. Designing the ‘in-betweens’ is a vital part of my approach to design. Sculpting the tiny elements surrounding an interface’s interactions to create conversations and reduce cognitive load is My Shit&trade;.
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
                  Frontend <span className={s.slash}>/</span> React &amp; Redux Prototyping <span className={s.slash}>/</span> API Integration
                </p>
                <p className={s.processDescription}>
                  I love bringing ideas to life in the browser. I’m super comfortable working with React, Vue.js and Redux to build interfaces and websites, whether it’s a simple, performant marketing site or a big, fancy interface talking to multiple APIs.
                </p>
              </div>
              <div className={s.icons}>
                <FeIcon />
              </div>
            </div>
          </div>

          <div className={s.it}>
            <div className={s.section}>
              <div className={s.copy}>
                <h2 className={[s.processHeading, s.pinkHeading].join(' ')} style={ { backgroundImage: `url(${headerShapes})`} }>The making shit better stuff</h2>
                <p className={[s.skills, s.pink].join(' ')}>
                  Qualitative Testing <span className={s.slash}>/</span> Rapid Iteration <span className={s.slash}>/</span> Feature Enhancement
                </p>
                <p className={s.processDescription}>
                  No one launches a perfect product first-time. I think it's important to be available after launch to look where a product can be improved over time. While I offer the most value in early-stage work - taking an idea through to a 'V1' - I'm more than happy to stick around post-launch.
                </p>
              </div>
              <div className={s.icons}>
                <ItIcon />
              </div>
            </div>
          </div>

        </div>

      </div>
    )
  }
}
