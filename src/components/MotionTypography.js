import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import classNames from 'classnames';
import styled, { keyframes } from 'styled-components';

const stagger = keyframes`
  to {
    opacity: 1;
    transform: translateY(0%);
  }
`;

const Wrapper = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 38px;
  font-style: normal;
  font-weight: 400;
  overflow-y: hidden;
  line-height: 1.25;
`;

const Segment = styled.span`
  animation: ${stagger} 1s cubic-bezier(0, 0, 0, 1);
  animation-delay: ${props => `${0.025 * props.index}s`};
  animation-fill-mode: forwards;
  display: inline-block;
  opacity: 0;
  transform: translateY(100%);
  white-space: pre-wrap;
  will-change: transform;
`;

const Button = styled.button`
  background-color: none
  color: white;
  
  &.isClean {
    background: none;
    border: none;
    padding: 0;
  }
`;

class MotionTypography extends Component {
  static propTypes = {
    title: PropTypes.string,
  };

  static defaultProps = {
    title: 'Write something cool.',
  };

  constructor(props) {
    super(props);

    this.initialState = () => ({
      currentIndex: 0,
      segments: [...this.props.title].map(segment => ({
        segment,
        id: shortid.generate(),
      })),
    });

    this.state = this.initialState();
  }

  handleClick = () => this.repeatAnimation();

  repeatAnimation = () => this.setState({ key: shortid.generate() });

  render() {
    const innerTree = this.state.segments.map((obj, index) => (
      <Segment key={obj.id} index={index}>
        {obj.segment}
      </Segment>
    ));

    return (
      <div>
        <Wrapper key={this.state.key}>
          {innerTree}
        </Wrapper>
        <Button className={classNames('isClean')} onClick={this.handleClick}>
          repeat
        </Button>
      </div>
    );
  }
}

export default MotionTypography;
