import React from 'react';
import PropTypes from 'prop-types';

const GitHubBannerLink = props => (
  <a href={props.href}>
    {props.children}
  </a>
);

GitHubBannerLink.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string
};

GitHubBannerLink.defaultProps = {
  children: PropTypes.node,
  href: ''
};

export default GitHubBannerLink;
