import colors from './colors';
import typography from './typography';
import breakpoints from './breakpoints';
import shadows from './shadows';
import { spacing } from './spacing';
import sizes from './sizes';

const foundations = {
  colors,
  breakpoints,
  shadows,
  sizes,
  space: spacing,
  ...typography
};

export default foundations;
