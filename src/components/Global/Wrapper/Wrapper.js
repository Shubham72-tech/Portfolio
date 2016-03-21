import React, {Component, PropTypes} from 'react';
import s from './Wrapper.css';

export default class Wrapper extends Component {
  render() {
    const {children, className} = this.props;
    const rootClass = [s.root, className].join(' ');
    return (
      <div className={rootClass}>
        {children}
      </div>
    );
  }
}

Wrapper.propTypes = {
  children: PropTypes.any,
}
