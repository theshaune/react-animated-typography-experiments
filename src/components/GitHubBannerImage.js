import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Img = styled.img`
  max-width: 100%;
`;

const GitHubBannerImage = props => (
  <Img
    alt={props.alt}
    dataCanonicalSrc={props.dataCanonicalSrc}
    src={props.src}
  />
);

GitHubBannerImage.propTypes = {
  alt: PropTypes.string,
  dataCanonicalSrc: PropTypes.string,
  src: PropTypes.string
};

GitHubBannerImage.defaultProps = {
  alt: '',
  dataCanonicalSrc: '',
  src: ''
};

export default GitHubBannerImage;
