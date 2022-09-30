import type { SystemStyleObject } from '@chakra-ui/theme-tools';

const baseStyle: SystemStyleObject = {
	fontFamily: 'heading',
	fontWeight: 'bold',
	color: 'white',
};

const sizes: Record<string, SystemStyleObject> = {
	xl: {
		fontSize: ['4xl', null, null, '5xl', '6xl'],
		lineHeight: [3, null, null, 4, 5],
	},
	lg: {
		fontSize: ['3xl', null, null, '4xl', '5xl'],
		lineHeight: ['1.14285714286', null, null, 3, 4],
	},
	md: {
		fontSize: ['2xl', null, null, '3xl', '4xl'],
		lineHeight: ['1.16666666667', null, null, '1.14285714286', '3'],
	},
	sm: {
		fontSize: ['xl', null, null, '2xl', '3xl'],
		lineHeight: ['1.4', null, '1.16666666667', '1.14285714286'],
	},
	xs: {
		fontSize: ['lg', null, null, 'xl', '2xl'],
		lineHeight: ['1.33333333333', null, null, '1.4', '1.16666666667'],
	},
	xxs: {
		fontSize: ['md', null, null, 'lg', 'xl'],
		lineHeight: ['base', null, null, '1.33333333333', '1.4'],
	},
};

const defaultProps = {
	size: 'xl',
};

export default {
	baseStyle,
	sizes,
	defaultProps,
};
