import { formAnatomy as parts } from '@chakra-ui/anatomy';
import type { PartsStyleFunction } from '@chakra-ui/theme-tools';

const baseStyleRequiredIndicator = {
  marginStart: 1,
  color: 'red.500'
};

const baseStyleHelperText = {
  mb: 2,
  mt: 0,
  color: 'gray.400',
  lineHeight: '1.7142857143',
  fontSize: 'sm'
};

const baseStyle: PartsStyleFunction<typeof parts> = () => ({
  container: { width: '100%', position: 'relative' },
  requiredIndicator: baseStyleRequiredIndicator,
  helperText: baseStyleHelperText
});

export default {
  parts: parts.keys,
  baseStyle
};
