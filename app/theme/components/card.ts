import type { SystemStyleObject } from '@chakra-ui/theme-tools';

const baseStyle: SystemStyleObject = {
  padding: 8,
  boxShadow: 'base',
  textAlign: 'left'
};
const variants: Record<string, SystemStyleObject> = {
  default: {
    bg: 'white'
  },
  muted: {
    bg: 'gray.100',
    color: 'gray.400'
  }
};

const defaultProps = {
  variant: 'default'
};

export default {
  baseStyle,
  variants,
  defaultProps
};
