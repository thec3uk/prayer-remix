import { Flex, Box, HStack, Image, Text } from '@chakra-ui/react';
import { NavLink } from '@remix-run/react';
import MobileMenu from '../MobileMenu';

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
