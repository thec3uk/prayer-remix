import type { IHamburgerIconProps } from './HamburgerIcon.definition';
import { Box } from '@chakra-ui/react';

const HamburgerIcon: React.FC<IHamburgerIconProps> = ({ active = false }) => {
	const commonStyleProps = {
		transitionDuration: '.5s',
		transitionTimingFunction: 'cubic-bezier(.25,.46,.45,.94)',
		borderRadius: '8px',
		height: '4px',
		bg: 'gray.500',
	};
	return (
		<Box width="32px" height="28px" position="relative">
			<Box
				transform={
					active
						? 'rotate(45deg) translateY(7px) translateX(5px)'
						: ''
				}
				pos="absolute"
				w="32px"
				top={'0'}
				{...commonStyleProps}
			></Box>
			<Box
				transform={
					active
						? 'rotate(-45deg) translateY(-3px) translateX(3px)'
						: ''
				}
				pos="absolute"
				w="32px"
				top="12px"
				{...commonStyleProps}
			></Box>
			<Box
				pos="absolute"
				right="0px"
				w="20px"
				opacity={active ? '0' : '1'}
				bottom="0px"
				{...commonStyleProps}
			></Box>
		</Box>
	);
};

export default HamburgerIcon;
