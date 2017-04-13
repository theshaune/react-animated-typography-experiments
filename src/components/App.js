import React from 'react';
import styled from 'styled-components';
import MotionTypography from './MotionTypography';
import GitHubBanner from './GitHubBanner';

const Container = styled.div`
  background-color: #000000;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  overflow-x: none;
  overflow-y: scroll;
  width: 100vw;
`;

const Main = styled.div`
  align-items: center;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  padding: 1rem;
`;

const App = () => (
  <Container>
    <GitHubBanner />
    <Main>
      <MotionTypography title={`Who cares, it's only fashion!`} />
    </Main>
  </Container>
);

export default App;
