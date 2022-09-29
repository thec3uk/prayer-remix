import type { SystemStyleObject } from '@chakra-ui/theme-tools';

const baseStyle: SystemStyleObject = {
  fontSize: 'md',
  marginEnd: 3,
  mb: 1,
  fontWeight: 'semibold',
  transitionProperty: 'common',
  transitionDuration: 'normal',
  opacity: 1,
  _disabled: {
    opacity: 0.4
  }
};

export default {
  baseStyle
};
