import type { Styles } from '@chakra-ui/theme-tools';
const styles: Styles = {
	global: () => ({
		body: {
			fontFamily: 'body',
			color: 'white',
			bg: 'gray.500',
			transitionProperty: 'background-color',
			transitionDuration: 'normal',
			lineHeight: 'base',
			width: '100%',
			height: '100%',
			margin: 0,
			padding: 0,
			overflowX: 'hidden',
			overflowY: 'auto',
			maxW: '100vw',
		},
		label: {
			color: 'gray.600',
			fontWeight: 'medium',
		},
		'*::placeholder': {
			color: 'gray.300',
		},
		'*, *::before, &::after': {
			borderColor: 'gray.200',
			wordWrap: 'break-word',
		},
	}),
};

export default styles;
