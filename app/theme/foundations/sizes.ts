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

// split is used for image split component where the balance is more like 54% / 46%;
// splitSml is used for the 46% split on the content split component
const container = {
  splitWide: 'calc(640px + 4vw)',
  splitNarrow: 'calc(640px - 4vw)',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  xxl: '1440px'
};

const sizes = {
  ...spacing,
  ...largeSizes,
  container
};

export default sizes;
