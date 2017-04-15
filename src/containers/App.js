import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GitHubBanner from '../components/GitHubBanner';
import MotionTypography from '../components/MotionTypography';
import * as App from '../components/App';
import * as motionActions from '../actions/motion';

function mapStateToProps(state) {
  return { motion: state.motion };
}

function mapDispatchToProps(dispatch) {
  return {
    setDuration: ms => dispatch(motionActions.setDuration(ms)),
  };
}

const AppContainer = props => (
  <App.Wrapper>
    <GitHubBanner />
    <button onClick={() => props.setDuration(500)}>500</button>
    <button onClick={() => props.setDuration(1000)}>1000</button>
    <button onClick={() => props.setDuration(2000)}>2000</button>
    <button onClick={() => props.setDuration(3000)}>3000</button>
    <App.Main>
      <MotionTypography
        {...props.motion}
        title={`Who cares, it's only fashion!`}
      />
    </App.Main>
  </App.Wrapper>
);

AppContainer.propTypes = {
  motion: PropTypes.shape(),
};

AppContainer.defaultProps = {
  motion: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
