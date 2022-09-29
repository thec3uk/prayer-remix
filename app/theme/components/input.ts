import { inputAnatomy as parts } from '@chakra-ui/anatomy';
import type {
  PartsStyleFunction,
  PartsStyleObject,
  SystemStyleObject
} from '@chakra-ui/theme-tools';

const baseStyle: PartsStyleObject<typeof parts> = {
  field: {
    width: '100%',
    minWidth: 0,
    outline: 0,
    position: 'relative',
    appearance: 'none',
    transitionProperty: 'common',
    transitionDuration: 'normal',
    color: 'gray.500',
    borderRadius: 'base',
    mt: 1
  }
};

const size: Record<string, SystemStyleObject> = {
  lg: {
    fontSize: 'md',
    p: 3,
    borderRadius: 'base'
  },

  md: {
    fontSize: 'md',
    px: 3,
    py: 2,
    borderRadius: 'base'
  },

  sm: {
    fontSize: 'xs',
    px: 3,
    py: 1,
    borderRadius: 'base'
  }
};

const sizes: Record<string, PartsStyleObject<typeof parts>> = {
  lg: {
    field: size.lg,
    addon: size.lg
  },
  md: {
    field: size.md,
    addon: size.md
  },
  sm: {
    field: size.sm,
    addon: size.sm
  },
  xs: {
    field: size.xs,
    addon: size.xs
  }
};

const variantOutline: PartsStyleFunction<typeof parts> = () => {
  return {
    field: {
      border: '1px solid',
      borderColor: 'gray.300',
      bg: 'white',

      _hover: {
        borderColor: 'gray.400'
      },
      _readOnly: {
        boxShadow: 'none !important',
        userSelect: 'all',
        bg: 'gray.100'
      },
      _disabled: {
        cursor: 'not-allowed',
        bg: 'gray.100',
        borderColor: 'gray.200',
        color: 'gray.300'
      },
      _invalid: {
        borderColor: 'red.400',
        boxShadow: 'none'
      },
      _focus: {
        zIndex: 1,
        borderColor: 'purple.600',
        boxShadow: 'outline'
      },
      _placeholder: {
        color: 'gray.400'
      }
    },
    addon: {
      border: '1px solid',
      borderColor: 'gray.300',
      bg: 'gray.100'
    }
  };
};

const variantUnstyled: PartsStyleObject<typeof parts> = {
  field: {
    bg: 'transparent',
    px: 0,
    height: 'auto'
  },
  addon: {
    bg: 'transparent',
    px: 0,
    height: 'auto'
  }
};

const variantFilled: PartsStyleObject<typeof parts> = {
  field: {
    border: '1px solid',
    bg: 'purple.800',
    borderColor: 'purple.600',
    color: 'white',
    _hover: {
      bg: 'purple.700',
      borderColor: 'purple.500'
    },
    _focus: {
      zIndex: 1,
      bg: 'purple.600',
      color: 'white',
      borderColor: 'purple.600',
      boxShadow: 'outline'
    },
    _placeholder: {
      color: 'white'
    }
  }
};

const variants = {
  outline: variantOutline,
  unstyled: variantUnstyled,
  filled: variantFilled
};

const defaultProps = {
  size: 'md',
  variant: 'outline'
};

export default {
  parts: parts.keys,
  baseStyle,
  sizes,
  variants,
  defaultProps
};
