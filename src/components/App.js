import React from 'react';
import MotionTypography from './MotionTypography';
import GitHubBanner from './GitHubBanner';

const App = () => (
  <div className="App">
    <GitHubBanner />
    <div className="App-main">
      <MotionTypography title={`Who cares, it's only fashion!`} />
    </div>
  </div>
);

export default App;
