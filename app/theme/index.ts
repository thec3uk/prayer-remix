import type { ThemeConfig } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import components from './components';
import foundations from './foundations';
import styles from './styles';

const config: ThemeConfig = {
	initialColorMode: 'light',
	useSystemColorMode: false,
};

const overrides = {
	...foundations,
	components,
	styles,
	config,
};

const C3Theme = extendTheme(overrides);
export default C3Theme;
