import { checkboxAnatomy as parts } from '@chakra-ui/anatomy';
import type {
  PartsStyleFunction,
  PartsStyleObject,
  SystemStyleFunction,
  SystemStyleObject
} from '@chakra-ui/theme-tools';

const baseStyleControl: SystemStyleFunction = () => {
  return {
    w: '100%',
    transitionProperty: 'box-shadow',
    transitionDuration: 'normal',
    border: '2px solid',
    borderRadius: 'base',
    borderColor: 'gray.300',
    color: 'white',
    alignSelf: 'start',

    _checked: {
      bg: `purple.600`,
      borderColor: `purple.600`,
      color: 'white',
      _hover: {
        bg: `purple.600`,
        borderColor: `purple.600`
      },

      _disabled: {
        borderColor: 'gray.200',
        bg: 'gray.100',
        color: 'gray.200'
      }
    },

    _indeterminate: {
      bg: `green.500`,
      borderColor: `green.500`,
      color: 'white'
    },

    _disabled: {
      bg: 'gray.100',
      borderColor: 'gray.200'
    },
    _hover: {
      borderColor: 'gray.400'
    },
    _focus: {
      boxShadow: 'outline',
      borderColor: 'purple.600'
    },

    _invalid: {
      borderColor: '#E03A58'
    }
  };
};

const baseStyleLabel: SystemStyleObject = {
  userSelect: 'none',
  _disabled: { opacity: 0.4 }
};

const baseStyleIcon: SystemStyleObject = {
  transitionProperty: 'transform',
  transitionDuration: 'normal'
};

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  icon: baseStyleIcon,
  control: baseStyleControl(props),
  label: baseStyleLabel
});

const sizes: Record<string, PartsStyleObject<typeof parts>> = {
  sm: {
    control: { h: 3, w: 3, mt: 1.5 },
    label: { fontSize: 'sm', ml: 2, fontWeight: 'normal' },
    icon: { fontSize: '0.45rem' }
  },
  md: {
    control: { w: 4, h: 4, mt: 1 },
    label: { fontSize: 'md', ml: 3 },
    icon: { fontSize: '0.625rem' }
  },
  lg: {
    control: { w: 5, h: 5, mt: 0.5 },
    label: { fontSize: 'md', ml: 3 },
    icon: { fontSize: '0.625rem' }
  }
};

const defaultProps = {
  size: 'md'
};

export default {
  parts: parts.keys,
  baseStyle,
  sizes,
  defaultProps
};
