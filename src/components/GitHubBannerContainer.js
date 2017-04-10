import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  border: 0;
`;

const GitHubBannerContainer = props => (
  <Container>
    {props.children}
  </Container>
);

GitHubBannerContainer.propTypes = {
  children: PropTypes.node
};

GitHubBannerContainer.defaultProps = {
  children: PropTypes.node
};

export default GitHubBannerContainer;
