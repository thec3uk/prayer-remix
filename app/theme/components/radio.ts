import { radioAnatomy as parts } from '@chakra-ui/anatomy';
import {
  PartsStyleFunction,
  PartsStyleObject,
  SystemStyleFunction
} from '@chakra-ui/theme-tools';
import Checkbox from './checkbox';

const baseStyleControl: SystemStyleFunction = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { control = {} }: any = Checkbox.baseStyle(props);

  return {
    ...control,
    borderRadius: 'full',
    _checked: {
      ...control['_checked'],
      _before: {
        content: `""`,
        display: 'inline-block',
        pos: 'relative',
        w: '50%',
        h: '50%',
        borderRadius: '50%',
        bg: 'currentColor'
      }
    }
  };
};

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  label: Checkbox.baseStyle(props).label,
  control: baseStyleControl(props)
});

const sizes: Record<string, PartsStyleObject<typeof parts>> = {
  sm: {
    control: { width: 3, height: 3, mt: 1.5 },
    label: { fontSize: 'sm', ml: 2 }
  },
  md: {
    control: { w: 4, h: 4, mt: 1 },
    label: { fontSize: 'md', ml: 3 }
  },
  lg: {
    control: { w: 5, h: 5, mt: 0.5 },
    label: { fontSize: 'lg', ml: 3 }
  }
};

const defaultProps = {
  size: 'md',
  colorScheme: 'purple.600'
};

export default {
  parts: parts.keys,
  baseStyle,
  sizes,
  defaultProps
};
