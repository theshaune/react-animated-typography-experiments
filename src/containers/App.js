import React from 'react';
import { connect } from 'react-redux';
import App from '../components/App';
import * as motionActions from '../actions/motion';

function mapStateToProps(state) {
  return { motion: state.motion };
}

function mapDispatchToProps(dispatch) {
  return {
    setDuration: ms => dispatch(motionActions.setDuration(ms)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
