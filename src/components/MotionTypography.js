import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import classNames from 'classnames';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 38px;
  font-style: normal;
  font-weight: 400;
  overflow-y: hidden;
  line-height: 1.25;
`;

const Segment = styled.span`
  display: inline-block;
  white-space: pre-wrap;
  opacity: 0;
  transform: translateY(100%);
  will-change: transform;

  &.isActive {
      opacity: 1;
      transform: translateY(0%);
      transition: all 2s cubic-bezier(0, 0, 0, 1);
  }
`;

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
      <Segment
        key={obj.id}
        className={classNames({
          [this.props.activeClassName]: obj.isActive
        })}
      >
        {obj.segment}
      </Segment>
    ));

    return (
      <div>
        <Wrapper className="MotionTypography">
          {innerTree}
        </Wrapper>
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
