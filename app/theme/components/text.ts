import type { SystemStyleObject } from '@chakra-ui/theme-tools';

const baseStyle: SystemStyleObject = {
	fontFamily: 'body',
	color: 'black',
};

const sizes: Record<string, SystemStyleObject> = {
	'2xl': {
		fontSize: ['xl', null, null, '2xl', '3xl'],
		lineHeight: ['base', null, null, '1.33333333333', '1.4'],
	},
	xl: {
		fontSize: ['lg', null, null, 'xl', '2xl'],
		lineHeight: ['base', null, null, '1.33333333333', '1.4'],
	},
	lg: {
		fontSize: ['md', null, null, 'lg', 'xl'],
		lineHeight: ['base', null, null, '1.33333333333', '1.4'],
	},
	md: {
		fontSize: 'md',
		lineHeight: 'base',
	},
	sm: {
		fontSize: 'sm',
		lineHeight: '1.71428571429',
	},
	xs: {
		fontSize: 'xs',
		lineHeight: '1.6',
	},
};

const defaultProps = {
	size: 'md',
};

export default {
	baseStyle,
	sizes,
	defaultProps,
};
