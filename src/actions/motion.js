import { MOTION_SET_DURATION } from '../constants';

export const setDuration = duration => ({
  type: MOTION_SET_DURATION,
  duration,
});
