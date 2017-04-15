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
  font-size: 38px;
  line-height: 1.25;
  overflow-y: hidden;
`;

const Segment = styled.span`
  ${props => props.isVisible ? `animation-name: ${stagger}` : ''};
  animation-fill-mode: forwards;
  display: inline-block;
  opacity: 0;
  transform: translateY(100%);
  white-space: pre-wrap;
`;

const MotionTypography = props => {
  const styles = index => ({
    animationDuration: `${props.animationDuration}ms`,
    animationDelay: `${props.animationDelay * index}s`,
  });

  return (
    <Segments>
      {[...props.title].map((segment, index) => (
        <Segment {...props} style={styles(index)}>
          {segment}
        </Segment>
      ))}
    </Segments>
  );
};

MotionTypography.propTypes = {
  animationDelay: PropTypes.number,
  animationDuration: PropTypes.number,
  isVisible: PropTypes.string,
  title: PropTypes.string,
};

MotionTypography.defaultProps = {
  animationDelay: 0.025,
  animationDuration: 100,
  isVisible: true,
  title: '',
};

export default MotionTypography;
