import {
	Flex,
	Box,
	Image,
	HStack,
	Heading,
	IconButton,
	VStack,
} from '@chakra-ui/react';
import { Link } from '@remix-run/react';
import { useState } from 'react';
import { use100vh } from 'react-div-100vh';
import HamburgerIcon from '../HamburgerIcon';

function Header() {
	// TODO: use https://github.com/kaimallea/isMobile
	const [menuVisible, setMenuVisible] = useState(false);
	const viewportHeight = use100vh();

	return (
		<Box
			position="sticky"
			top="0"
			zIndex="sticky"
			height={{ base: '3.5rem', md: '5rem' }}
			as="header"
			flex="0 0 auto"
			bgColor="white"
			color={'gray.500'}
		>
			<HStack justifyContent={'space-between'}>
				<HStack gap={2}>
					<Link to="/">
						<Image
							src="/LogoGrey.png"
							alt="The C3 Church Logo"
							height={{ base: '1.5rem', md: '3rem' }}
						/>
					</Link>
					<Link to="/list">
						<Heading
							color={'black'}
							as="h1"
							size={{ base: 'sm', md: 'md' }}
						>
							Prayer Wall
						</Heading>
					</Link>
				</HStack>
				<Flex
					gap={2}
					alignSelf="end"
					ml={{ md: '4vw', xl: '8vw' }}
					display={{ base: 'none', md: 'flex' }}
				>
					<Link to="/request">Submit prayer or praise</Link>
					<Link to="/about">About</Link>
				</Flex>
				<HStack
					display={{
						base: 'flex',
						md: 'none',
					}}
				>
					<IconButton
						bg="white"
						color="gray.500"
						_hover={{ bg: 'white' }}
						_active={{ bg: 'white' }}
						size="md"
						mr="2"
						aria-label="Open navigation menu"
						onClick={() => setMenuVisible(!menuVisible)}
						icon={<HamburgerIcon active={menuVisible} />}
						_focusVisible={{
							outlineColor: 'green.500',
						}}
					/>
				</HStack>
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
					top={{ base: '3.5rem', md: '5rem' }}
					zIndex="dropdown"
					py={8}
					left={0}
					right={0}
					transition="transform 0.5s ease-in-out"
					transform={
						menuVisible
							? 'translate3d(0,0,0)'
							: 'translate3d(0, -100%, 0)'
					}
				>
					<Link to="/request" onClick={() => setMenuVisible(false)}>
						Submit prayer or praise
					</Link>
					<Link to="/about" onClick={() => setMenuVisible(false)}>
						About
					</Link>
				</VStack>
			</HStack>
		</Box>
	);
}

export default Header;
