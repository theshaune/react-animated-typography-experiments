import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const stagger = keyframes`
  to {
    opacity: 1;
    transform: translateY(0%);
  }
`;

const Segments = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 18px;

  @media (min-width: 600px){
    font-size: 28px;
  }

  @media (min-width: 900px){
    font-size: 36px;
  }
`;

const Segment = styled.span`
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0, 0, 0, 1);
  display: inline-block;
  opacity: 0;
  white-space: pre-wrap;
`;

const MotionTypography = props => {
  const styles = index => ({
    animationDuration: `${props.animationDuration + index * 0.15}ms`,
    animationDelay: props.direction === 'up'
      ? `${props.animationDelay * (props.title.length - index)}ms`
      : `${props.animationDelay * index}ms`,
    animationName: props.isVisible ? `${stagger}` : null,
    transform: `translateY(${props.direction === 'up' ? '-75%' : '75%'})`,
  });

  return (
    <Segments>
      {[...props.title].map((segment, index) => (
        <Segment
          direction={props.direction}
          isVisible={props.isVisible}
          style={styles(index)}
        >
          {segment}
        </Segment>
      ))}
    </Segments>
  );
};

MotionTypography.propTypes = {
  animationDelay: PropTypes.number,
  animationDuration: PropTypes.number,
  direction: PropTypes.string,
  isVisible: PropTypes.bool,
  title: PropTypes.string,
};

MotionTypography.defaultProps = {
  animationDelay: 10,
  animationDuration: 1500,
  direction: 'down',
  isVisible: true,
  title: '',
};

export default MotionTypography;
