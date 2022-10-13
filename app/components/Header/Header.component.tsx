import { Flex, Box, HStack, Image } from '@chakra-ui/react';
import { NavLink } from '@remix-run/react';
import MenuLink from '../MenuLink';
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
					<MenuLink to="/" text="Home" />
					<MenuLink to="/prayerwall" text="Prayer Wall" />
					<MenuLink to="/request" text="Submit a request" />
				</HStack>
				<MobileMenu />
			</Flex>
		</Box>
	);
}

export default Header;
