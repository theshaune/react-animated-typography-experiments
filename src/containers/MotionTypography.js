import { nest, withPropsOnChange } from 'recompose';
import TrackVisibility from 'react-on-screen';
import DirectionFilter from '../components/library/DirectionFilter';
import MotionTypography from '../components/library/MotionTypography';

export default nest(
  DirectionFilter,
  TrackVisibility,
  withPropsOnChange(
    (props, nextProps) => !nextProps.isVisible,
    props => ({ direction: props.direction }),
  )(MotionTypography),
);
