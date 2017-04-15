import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GitHubBanner from './library/GitHubBanner';
import MotionTypography from '../containers/MotionTypography';
import * as App from './library/App';

export const Panel = styled.div`

  &:first-child {
    height: 100vh;  
  }

  height: 33vh;
  justify-content: center;
  display: flex;
  align-items: center;
`;

const AppIndex = props => (
  <App.Wrapper>
    <GitHubBanner />

    <div style={{ position: 'fixed' }}>
      <button onClick={() => props.setDuration(500)}>500</button>
      <button onClick={() => props.setDuration(1000)}>1000</button>
      <button onClick={() => props.setDuration(2000)}>2000</button>
      <button onClick={() => props.setDuration(3000)}>3000</button>
    </div>

    <App.Main>
      {[
        `Who cares, it's only fashion!`,
        'Two',
        'Three',
        'Four',
        'Five',
        'six',
        'seven',
        'eight',
        'none',
        'ten',
      ].map(title => (
        <Panel>
          <MotionTypography {...props.motion} title={title} />
        </Panel>
      ))}
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
