import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPost} from 'actions/index';
import {Link} from 'react-router';
import moment from 'moment';

import Remarkable from 'react-remarkable';

import Wrapper from 'components/Global/Wrapper/Wrapper';
import IconRow from 'components/Site/IconRow/IconRow';
import Loading from 'components/Site/Loading/Loading';

import s from './Post.css';
import m from 'global/modifiers';

class Post extends Component {

  componentWillMount() {
    this.props.fetchPost(this.props.params.slug);
  }

  render() {
    const {active_post} = this.props;
    return (
      <div classname={s.root}>
        { active_post ?
          <div className={s.postContainer}>
            <h1 className={[m.alpha, s.heading].join(' ')}>{active_post.title}</h1>
            <div className={s.thinRow}>
              <p className={s.subtext}>
                {active_post.intro}
              </p>
              <IconRow className={s.icons} />
            </div>
            <div className={s.postContent}>
              <Remarkable source={active_post.content} />
              <Link to="/writing">↚ Back to posts</Link>
            </div>
          </div>
          :
            <Loading />
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    active_post: state.active_post,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchPost: fetchPost,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
