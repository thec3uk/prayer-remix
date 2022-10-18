import type { SystemStyleObject } from '@chakra-ui/theme-tools';

const baseStyle: SystemStyleObject = {
	fontSize: 'sm',
	marginEnd: 3,
	mb: 1,
	fontWeight: 'bold',
	transitionProperty: 'common',
	transitionDuration: 'normal',
	textTransform: 'uppercase',
	opacity: 1,
	_disabled: {
		opacity: 0.4,
	},
};

export default {
	baseStyle,
};
