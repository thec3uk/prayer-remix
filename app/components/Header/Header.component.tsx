import {
	Flex,
	Box,
	HStack,
	IconButton,
	VStack,
	Image,
	Text,
} from '@chakra-ui/react';
import { NavLink } from '@remix-run/react';
import { useState } from 'react';
import { use100vh } from 'react-div-100vh';
import HamburgerIcon from '../HamburgerIcon';

function MobileMenu() {
	const isMobile = { base: 'block', md: 'none' };
	const [menuVisible, setMenuVisible] = useState(false);
	const viewportHeight = use100vh();
	return (
		<Box display={isMobile}>
			<IconButton
				width="32px"
				px="0"
				variant="ghost"
				aria-label="Open navigation menu"
				onClick={() => setMenuVisible(!menuVisible)}
				icon={<HamburgerIcon active={menuVisible} />}
			/>

			<VStack
				display={{
					base: menuVisible ? 'flex' : 'none',
					md: 'none',
				}}
				height={`calc(${
					viewportHeight ? viewportHeight + 'px' : '100vh'
				} - 3.5rem)`}
				overflowY="auto"
				bg="white"
				as="nav"
				position="fixed"
				top={{ base: '99px', md: '5rem' }}
				zIndex="dropdown"
				py={8}
				left={0}
				right={0}
				gap={8}
				transition="transform 0.5s ease-in-out"
				transform={
					menuVisible
						? 'translate3d(0,0,0)'
						: 'translate3d(0, -100%, 0)'
				}
			>
				<NavLink to="/" onClick={() => setMenuVisible(false)}>
					<Text
						fontWeight="bold"
						textTransform="uppercase"
						color="red.500"
					>
						Home
					</Text>
				</NavLink>
				<NavLink to="/prayerwall" onClick={() => setMenuVisible(false)}>
					<Text fontWeight="bold" textTransform="uppercase">
						Prayer wall
					</Text>
				</NavLink>
				<NavLink to="/request" onClick={() => setMenuVisible(false)}>
					<Text fontWeight="bold" textTransform="uppercase">
						Submit a request
					</Text>
				</NavLink>
			</VStack>
		</Box>
	);
}

function Header() {
	const isDesktop = { base: 'none', md: 'flex' };

	return (
		<Box
			position="sticky"
			top="0"
			zIndex="sticky"
			bgColor="gray.100"
			py="1.5rem"
			px={{ base: 3, md: 4 }}
			as="header"
			flex="0 0 auto"
			w="100%"
		>
			<Flex justifyContent="space-between">
				<NavLink to="/">
					<Image src="/LogoBlack.png" h="51px" w="63px"></Image>
				</NavLink>
				<HStack display={isDesktop} gap="8">
					<NavLink to="/">
						<Text
							fontWeight="bold"
							textTransform="uppercase"
							color="red.500"
						>
							Home
						</Text>
					</NavLink>
					<NavLink to="/prayerwall">
						<Text fontWeight="bold" textTransform="uppercase">
							Prayer wall
						</Text>
					</NavLink>
					<NavLink to="/request">
						<Text fontWeight="bold" textTransform="uppercase">
							Submit a request
						</Text>
					</NavLink>
				</HStack>
				<MobileMenu />
			</Flex>
		</Box>
	);
}

export default Header;
