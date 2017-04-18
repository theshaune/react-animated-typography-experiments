import { MOTION_SET_DURATION } from '../constants';
import MotionTypography from '../components/library/MotionTypography';

const initialState = {
  animationDelay: MotionTypography.defaultProps.animationDelay,
  animationDuration: MotionTypography.defaultProps.animationDuration,
};

export default function motion(state = initialState, action) {
  switch (action.type) {
    case MOTION_SET_DURATION:
      return {
        ...state,
        animationDuration: action.duration,
      };
    default:
      return state;
  }
}
