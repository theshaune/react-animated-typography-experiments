import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import styled, { keyframes } from 'styled-components';

const stagger = keyframes`
  to {
    opacity: 1;
    transform: translateY(0%);
  }
`;

const Segments = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 38px;
  overflow-y: hidden;
  line-height: 1.25;
`;

const Segment = styled.span`
  animation-duration: ${props => `${props.animationDuration}ms`};
  animation-name: ${stagger};
  animation-fill-mode: forwards;
  display: inline-block;
  opacity: 0;
  transform: translateY(100%);
  white-space: pre-wrap;
`;

const MotionTypography = props => (
  <Segments>
    {[...props.title].map((segment, index) => (
      <Segment
        key={shortid.generate()}
        animationDuration={props.animationDuration}
        style={{
          animationDelay: `${props.animationDelay * index}s`,
        }}
      >
        {segment}
      </Segment>
    ))}
  </Segments>
);

MotionTypography.propTypes = {
  animationDelay: PropTypes.number,
  animationDuration: PropTypes.number,
  title: PropTypes.string,
};

MotionTypography.defaultProps = {
  animationDelay: 0.025,
  animationDuration: 100,
  title: '',
};

export default MotionTypography;
