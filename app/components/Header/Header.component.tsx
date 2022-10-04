import {
	Flex,
	Box,
	HStack,
	Heading,
	IconButton,
	VStack,
	Container,
} from '@chakra-ui/react';
import { Link } from '@remix-run/react';
import { useState } from 'react';
import { use100vh } from 'react-div-100vh';
import Branding from '../Branding';
import HamburgerIcon from '../HamburgerIcon';

function Header() {
	const [menuVisible, setMenuVisible] = useState(false);
	const viewportHeight = use100vh();
	const height = { base: '3.75rem', md: '5rem' };
	const isMobile = { base: 'flex', md: 'none' };
	const isDesktop = { base: 'none', md: 'flex' };

	return (
		<Box
			position="sticky"
			top="0"
			zIndex="sticky"
			height={height}
			py={2}
			as="header"
			flex="0 0 auto"
			bgColor="gray.500"
			color="white"
		>
			<Container maxW="none">
				<Flex justifyContent="space-between">
					<Flex alignItems="center">
						<Link to="/">
							<Branding color="white" size="sm" />
						</Link>
						<Link to="/prayerwall">
							<Heading
								color="white"
								as="h1"
								size={{ base: 'sm', md: 'md' }}
							>
								Prayer Wall
							</Heading>
						</Link>
					</Flex>
					<HStack
						display={isDesktop}
						spacing={4}
						py={{ base: 2.5, md: 5 }}
					>
						<Link to="/request">Submit prayer or praise</Link>
						<Link to="/about">About</Link>
						<Link to="/meetings">Meetings</Link>
					</HStack>
					<Flex display={isMobile}>
						<IconButton
							variant={'secondary'}
							color="white"
							size="md"
							mr="2"
							h={'80%'}
							aria-label="Open navigation menu"
							onClick={() => setMenuVisible(!menuVisible)}
							icon={<HamburgerIcon active={menuVisible} />}
							_focusVisible={{
								outlineColor: 'teal.500',
							}}
						/>
					</Flex>
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
						<Link
							to="/request"
							onClick={() => setMenuVisible(false)}
						>
							Submit prayer or praise
						</Link>
						<Link to="/about" onClick={() => setMenuVisible(false)}>
							About
						</Link>
						<Link
							to="/meetings"
							onClick={() => setMenuVisible(false)}
						>
							Meetings
						</Link>
					</VStack>
				</Flex>
			</Container>
		</Box>
	);
}

export default Header;
