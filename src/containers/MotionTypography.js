import TrackVisibility from 'react-on-screen';
import { nest } from 'recompose';
import MotionTypography from '../components/library/MotionTypography';
import DirectionFilter from '../components/library/DirectionFilter';

export default nest(DirectionFilter, TrackVisibility, MotionTypography);
