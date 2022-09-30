import type { IHamburgerIconProps } from './HamburgerIcon.definition';
import { Box } from '@chakra-ui/react';

const HamburgerIcon: React.FC<IHamburgerIconProps> = ({ active = false }) => {
	const commonStyleProps = {
		transitionDuration: '.5s',
		transitionTimingFunction: 'cubic-bezier(.25,.46,.45,.94)',
		borderRadius: '1px',
		height: '2px',
		bg: 'gray.500',
		width: '100%',
		top: '50%',
	};
	return (
		<Box width="20px" height="20px" position="relative">
			<Box
				transform={active ? 'rotate(45deg)' : 'translateY(-7px)'}
				pos="absolute"
				{...commonStyleProps}
			></Box>
			<Box
				opacity={active ? '0' : '1'}
				pos="absolute"
				{...commonStyleProps}
			></Box>
			<Box
				transform={active ? 'rotate(-45deg)' : 'translateY(7px)'}
				pos="absolute"
				{...commonStyleProps}
			></Box>
		</Box>
	);
};

export default HamburgerIcon;
