import { MOTION_SET_DURATION } from '../constants';

const initialState = {
  animationDelay: 0.025,
  animationDuration: 1000,
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
