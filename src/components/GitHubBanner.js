import React from 'react';
import GitHubBannerContainer from './GitHubBannerContainer';
import GitHubBannerLink from './GitHubBannerLink';
import GitHubBannerImage from './GitHubBannerImage';

const GitHubBanner = () => (
  <GitHubBanner.Container>
    <GitHubBanner.Link
      href="https://github.com/theshaune/react-animated-typography-experiments"
    >
      <GitHubBanner.Image
        src="https://camo.githubusercontent.com/52760788cde945287fbb584134c4cbc2bc36f904/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f77686974655f6666666666662e706e67"
        alt="Fork me on GitHub"
        dataCanonicalSrc="https://s3.amazonaws.com/github/ribbons/forkme_right_white_ffffff.png"
      />
    </GitHubBanner.Link>
  </GitHubBanner.Container>
);

GitHubBanner.Container = GitHubBannerContainer;
GitHubBanner.Link = GitHubBannerLink;
GitHubBanner.Lmage = GitHubBannerImage;

export default GitHubBanner;
