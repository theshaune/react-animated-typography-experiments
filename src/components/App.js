import React from 'react';
import PropTypes from 'prop-types';
import TrackVisibility from 'react-on-screen';
import GitHubBanner from './library/GitHubBanner';
import MotionTypography from './library/MotionTypography';
import * as App from './library/App';

const AppIndex = props => (
  <App.Wrapper>
    <GitHubBanner />

    <button onClick={() => props.setDuration(500)}>500</button>
    <button onClick={() => props.setDuration(1000)}>1000</button>
    <button onClick={() => props.setDuration(2000)}>2000</button>
    <button onClick={() => props.setDuration(3000)}>3000</button>

    <App.Main>
      <div
        style={{
          height: '100vh',
          justifyContent: 'center',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <TrackVisibility>
          <MotionTypography
            {...props.motion}
            title={`Who cares, it's only fashion!`}
          />
        </TrackVisibility>
      </div>

      <div
        style={{
          height: '100vh',
          justifyContent: 'center',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <TrackVisibility>
          <MotionTypography
            {...props.motion}
            title={`More fashion, i won't repeat`}
          />
        </TrackVisibility>
      </div>

      <div
        style={{
          height: '100vh',
          justifyContent: 'center',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <TrackVisibility>
          <MotionTypography {...props.motion} title={`Three is a crowd`} />
        </TrackVisibility>
      </div>

    </App.Main>
  </App.Wrapper>
);

AppIndex.propTypes = {
  motion: PropTypes.shape(),
};

AppIndex.defaultProps = {
  motion: {},
};

export default AppIndex;
