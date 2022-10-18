import { tableAnatomy as parts } from '@chakra-ui/anatomy';

import type {
  PartsStyleFunction,
  PartsStyleObject,
  SystemStyleObject
} from '@chakra-ui/theme-tools';

const baseStyle: PartsStyleObject<typeof parts> = {
  table: {
    fontVariantNumeric: 'lining-nums tabular-nums',
    borderCollapse: 'collapse',
    width: 'full'
  },
  th: {
    fontFamily: 'body',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 'wider',
    textAlign: 'start'
  },
  td: {
    textAlign: 'start'
  },
  caption: {
    mt: 4,
    fontFamily: 'heading',
    textAlign: 'center',
    fontWeight: 'medium'
  }
};

const numericStyles: SystemStyleObject = {
  '&[data-is-numeric=true]': {
    textAlign: 'end'
  }
};

const variantSimple: PartsStyleFunction<typeof parts> = () => {
  return {
    table: {
      borderCollapse: 'separate',
      borderSpacing: '0 8px'
    },
    th: {
      color: 'gray.600',
      borderBottom: '0 none',
      ...numericStyles
    },
    td: {
      bg: 'gray.100',
      fontWeight: 'medium',
      whiteSpace: 'nowrap',
      borderBottom: '0 none',
      ...numericStyles,
      '&:first-of-type': {
        borderTopLeftRadius: 'md',
        borderBottomLeftRadius: 'md'
      },
      '&:last-of-type': {
        borderTopRightRadius: 'md',
        borderBottomRightRadius: 'md'
      }
    },
    tfoot: {
      tr: {
        '&:last-of-type': {
          th: { borderBottomWidth: 0 }
        }
      }
    }
  };
};

const variantBasic: PartsStyleFunction<typeof parts> = () => {
  return {
    th: {
      color: 'gray.600',
      borderBottom: '1px',
      borderColor: 'gray.200',
      ...numericStyles
    },
    td: {
      verticalAlign: 'top',
      borderBottom: '1px',
      borderColor: 'gray.200',
      ...numericStyles
    },
    caption: {
      color: 'gray.600'
    },
    tfoot: {
      tr: {
        '&:last-of-type': {
          th: { borderBottomWidth: 0 }
        }
      }
    }
  };
};

const variants = {
  simple: variantSimple,
  basic: variantBasic,
  unstyled: {}
};

const sizes: Record<string, PartsStyleObject<typeof parts>> = {
  sm: {
    th: {
      px: '4',
      py: '1',
      lineHeight: 'taller',
      fontSize: 'xs'
    },
    td: {
      px: '4',
      py: '2',
      fontSize: 'sm',
      lineHeight: '1.71428571429'
    },
    caption: {
      px: '4',
      py: '2',
      fontSize: 'sm',
      lineHeight: '1.71428571429'
    }
  },
  md: {
    th: {
      px: 4,
      pt: '3',
      pb: 0,
      lineHeight: 'taller',
      fontSize: 'xs',
      '&:first-of-type': {
        pl: 0
      }
    },
    td: {
      px: 4,
      py: 2,
      lineHeight: 'taller'
    }
  }
};

const defaultProps = {
  variant: 'simple',
  size: 'md'
};

export default {
  parts: parts.keys,
  baseStyle,
  variants,
  sizes,
  defaultProps
};
