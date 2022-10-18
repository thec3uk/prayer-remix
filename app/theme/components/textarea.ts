import type {
  SystemStyleInterpolation,
  SystemStyleObject
} from '@chakra-ui/theme-tools';
import Input from './input';

const baseStyle: SystemStyleObject = {
  ...Input.baseStyle.field,
  paddingY: '8px',
  minHeight: '7.5rem',
  lineHeight: 'short',
  verticalAlign: 'top'
};

const variants: Record<string, SystemStyleInterpolation> = {
  outline: (props) => Input.variants.outline(props).field ?? {},
  unstyled: Input.variants.unstyled.field ?? {}
};

const defaultProps = {
  size: 'md',
  variant: 'outline'
};

export default {
  baseStyle,
  variants,
  defaultProps
};
