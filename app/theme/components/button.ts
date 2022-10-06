import type { SystemStyleObject } from '@chakra-ui/theme-tools';

const baseStyle: SystemStyleObject = {
	fontWeight: '700',
	fontFamily: 'link',
	color: 'white',
	_focus: {
		boxShadow: 'none',
		outline: '1px solid',
		outlineOffset: '1px',
		outlineColor: 'teal.700',
	},
	textTransform: 'uppercase',
	borderRadius: '0px',
};

const sizes: Record<string, SystemStyleObject> = {
	lg: {
		fontSize: '2xl',
		lineHeight: '1',
		px: 5,
		py: 3,
		h: 'auto',
		minH: 12,
	},
	md: {
		fontSize: 'xl',
		lineHeight: '1.2',
		px: 4,
		py: 4,
		h: 'auto',
		minH: 10,
	},
	sm: {
		fontSize: 'lg',
		lineHeight: 1.333333,
		px: 3,
		py: 2,
		minH: 'auto',
		h: 9,
		minW: 9,
	},
	xs: {
		fontSize: 'md',
		lineHeight: 'base',
		px: 2.5,
		py: 1.5,
		h: 'auto',
		minH: 8,
		minW: 8,
	},
};

const variants: Record<string, SystemStyleObject> = {
	primary: {
		bg: 'gray.500',
		_hover: {
			bg: 'gray.600',
		},
		_active: {
			bg: 'gray.700',
		},
		_disabled: {
			opacity: 0.4,
		},
	},
	secondary: {
		bg: 'gray.400',
		_hover: {
			bg: 'gray.300',
		},
		_active: {
			bg: 'gray.500',
		},
		_disabled: {
			opacity: 0.4,
		},
	},
	tertiary: {
		bg: 'transparent',
		color: 'teal.500',
		_hover: {
			bg: 'teal.100',
		},
		_active: {
			bg: 'teal.200',
		},
	},
	link: {
		padding: 0,
		height: 'auto',
		lineHeight: 'normal',
		verticalAlign: 'baseline',
		color: 'yellow.500',
		_hover: {
			textDecoration: 'underline',
			_disabled: {
				textDecoration: 'none',
			},
		},
		_active: {
			color: 'teal.900',
		},
	},
	outline: {
		color: 'gray.500',
		bg: 'transparent',
		border: '1px solid',
		borderColor: 'teal.300',
		borderRadius: '10px',
		_hover: {
			bg: 'teal.50',
			borderColor: 'teal.500',
		},
		_active: {
			bg: 'teal.100',
		},
		textTransform: 'none',
	},
};

const defaultProps = {
	variant: 'primary',
	size: 'md',
};

export default {
	baseStyle,
	variants,
	sizes,
	defaultProps,
};
