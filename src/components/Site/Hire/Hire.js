import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {reduxForm} from 'redux-form';
import {sendMessage} from 'actions/index';

import Wrapper from 'components/Global/Wrapper/Wrapper';
import IconRow from 'components/Site/IconRow/IconRow';
import CuteAsFuck from 'components/Site/CuteAsFuck/CuteAsFuck';

import s from './Hire.css';
import m from 'global/modifiers';

const validate = values => {
  const errors = {};
  if(!values.email) {
    errors.email = "Please leave your email so I can contact you!";
  }
  if(!values.name) {
    errors.name = "Please leave your name so I know who to contact!";
  }
  return errors;
}

class Hire extends Component {
  render() {
    const { handleSubmit, submitting, contact, fields: { name, email, description, budget, subject, projectName} } = this.props;
    return (
      <div className={s.root}>
        { contact.status == 'success' ?
          <div>
            <Wrapper>
              <IconRow />
              <h1 className={[m.alpha, s.heading].join(' ')}>Thanks!</h1>
              <div className={s.thinRow}>
                <p className={s.subtext}>
                  I’ll get back to you as soon as I possibly can! In the meantime, why not <a href="http://twitter.com/scott_riley" className={s.link}>bug me on Twitter</a>?
                </p>
              </div>
            </Wrapper>
            <CuteAsFuck />
          </div>
          :
            <form className={s.form} onSubmit={handleSubmit(this.props.sendMessage)}>
              <p className={s.greeting}>Hey Scott!</p>
              <p>I want you to
                <label className={s.label}>
                  <select name="subject" className={s.select} value={"Project Enquiry"} {...subject}>
                    <option value="Project Enquiry">make something awesome for me</option>
                    <option value="Speaking Request">speak at my lovely conference</option>
                    <option value="Question">answer my question</option>
                  </select>
                </label>
              </p>
               {projectName.touched && projectName.error && <div className={s.error}>{projectName.error}</div>}
              <p>
                My project is called <input className={s.inlineInput} name="projectName" placeholder="Uber for Cats" {...projectName} /> and it’s going to be awesome.
              </p>
              <p>
                I’ve got a budget of
                <label className={s.label}>
                  <select name="budget" className={s.select} {...budget} defaultValue="$10,000-$15,000" >
                    <option value="> $10,000">Less than $10,000</option>
                    <option value="$10,000-$15,000">$10,000-$15,000</option>
                    <option value="$15,000-$25,000">$15,00-$25,000</option>
                    <option value="$25,000+">$25,000+</option>
                  </select>
                </label> to make it happen.
              </p>

              <p>
                I heard you like nice, succinct descriptions of what makes my idea so wonderful, so here’s a short description of what it is, and why I’m so excited to make it:
              </p>

              <p>
                <textarea className={s.textarea} rows="10" name="description" {...description}>

                </textarea>
              </p>
              {email.touched && email.error && <div className={s.error}>{email.error}</div>}
              <p>
                Email me at <input className={s.inlineInput} name="email" type="email" placeholder="awesome@person.com" {...email} /> and let’s make magic.
              </p>
              {name.touched && name.error && <div className={s.error}>{name.error}</div>}
              <p>
                Lots of love, <br /> <input className={[s.inlineInput, s.singleInput].join(' ')} name="name" placeholder="Awesome Person" {...name} /> <br /> xoxo
              </p>

              <p className={s.ctaWrap} >
                <button className={s.cta} disabled={submitting}>
                  { submitting ?
                      `Sending`
                    :
                      `Send`
                  }
                </button>
              </p>
            </form>
          }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    contact: state.contact
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    sendMessage: sendMessage
  }, dispatch);
}


export default reduxForm({
  form: 'ContactForm',
  fields: ['name', 'email', 'subject', 'budget', 'description', 'projectName'],
  validate
}, mapStateToProps, mapDispatchToProps)(Hire);
