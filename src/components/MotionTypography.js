import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import classNames from 'classnames';

class MotionTypography extends Component {
  static propTypes = {
    activeClassName: PropTypes.string,
    title: PropTypes.string,
    initialDelay: PropTypes.number
  };

  static defaultProps = {
    activeClassName: 'isActive',
    title: 'Write something cool.',
    initialDelay: 500
  };

  constructor(props) {
    super(props);

    this.initialState = () => ({
      currentIndex: 0,
      segments: [...this.props.title].map(segment => ({
        segment,
        id: shortid.generate(),
        isActive: false
      }))
    });

    this.state = this.initialState();
  }

  componentDidMount() {
    setTimeout(
      () => {
        this.rafId = requestAnimationFrame(this.animateSegments);
      },
      this.props.initialDelay
    );
  }

  repeatAnimation = () => {
    cancelAnimationFrame(this.rafId);

    this.setState(this.initialState(), () => {
      setTimeout(
        () => this.rafId = requestAnimationFrame(this.animateSegments),
        this.props.initialDelay
      );
    });
  };

  animateSegments = () => {
    this.rafId = requestAnimationFrame(this.animateSegments);

    const newState = Object.assign({}, this.state);
    newState.segments[this.state.currentIndex].isActive = true;

    this.setState(
      {
        ...newState,
        currentIndex: this.state.currentIndex + 1
      },
      () => {
        if (this.state.currentIndex >= this.state.segments.length) {
          cancelAnimationFrame(this.rafId);
        }
      }
    );
  };

  render() {
    const innerTree = this.state.segments.map(obj => (
      <span
        key={obj.id}
        className={classNames('MotionTypography-segment', {
          [this.props.activeClassName]: obj.isActive
        })}
      >
        {obj.segment}
      </span>
    ));

    return (
      <div>
        <div className="MotionTypography">
          {innerTree}
        </div>
        <button
          className={classNames('Button', 'isClean')}
          onClick={this.repeatAnimation}
        >
          repeat
        </button>
      </div>
    );
  }
}

export default MotionTypography;
