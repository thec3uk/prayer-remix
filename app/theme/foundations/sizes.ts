import { spacing } from './spacing';

const largeSizes = {
  max: 'max-content',
  min: 'min-content',
  full: '100%',
  '3xs': '14rem',
  '2xs': '16rem',
  xs: '20rem',
  sm: '24rem',
  md: '28rem',
  lg: '30rem',
  xl: '36rem',
  '2xl': '42rem',
  '3xl': '46rem',
  '4xl': '56rem',
  '5xl': '64rem',
  '6xl': '72rem',
  '7xl': '80rem',
  '8xl': '90rem'
};

const container = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  "2xl": '1440px',
};

const sizes = {
  ...spacing,
  ...largeSizes,
  container
};

export default sizes;
