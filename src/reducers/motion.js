import { MOTION_SET_DURATION } from '../constants';

const initialState = {
  animationDelay: 50,
  animationDuration: 500,
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
