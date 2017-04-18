import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import faker from 'faker';
import GitHubBanner from './library/GitHubBanner';
import MotionTypography from '../containers/MotionTypography';

const Wrapper = styled.div`
  background-color: #000000;
  color: #FFFFFF;
`;

const Main = styled.div`
  align-items: center;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  padding: 1rem;
  flex-direction: column;
`;

const Panel = styled.div`
  &:first-child {
    height: 100vh;  
  }

  height: 33vh;
  justify-content: center;
  display: flex;
  align-items: center;
`;

const App = props => (
  <App.Wrapper>
    <GitHubBanner />

    <div style={{ position: 'fixed' }}>
      <button onClick={() => props.setDuration(100)}>100</button>
      <button onClick={() => props.setDuration(1000)}>1000</button>
      <button onClick={() => props.setDuration(2000)}>2000</button>
      <button onClick={() => props.setDuration(3000)}>3000</button>
    </div>

    <App.Main>
      {[
        `Scroll`,
        faker.name.findName(),
        faker.name.findName(),
        faker.name.findName(),
        faker.name.findName(),
        faker.name.findName(),
        faker.name.findName(),
        faker.name.findName(),
        faker.name.findName(),
        faker.name.findName(),
      ].map(title => (
        <App.Panel>
          <MotionTypography {...props.motion} title={title} />
        </App.Panel>
      ))}

    </App.Main>
  </App.Wrapper>
);

App.propTypes = {
  motion: PropTypes.shape(),
};

App.defaultProps = {
  motion: {},
};

App.Main = Main;
App.Panel = Panel;
App.Wrapper = Wrapper;

export default App;
