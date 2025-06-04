import { Box, Flex, HStack, Image, useColorModeValue } from "@chakra-ui/react";
import { NavLink } from "@remix-run/react";
import MenuLink from "../MenuLink";
import MobileMenu from "../MobileMenu";
import MenuAccount from "../MenuAccount";

function Header() {
  const isDesktop = { base: "none", md: "flex" };
  const loggedIn = false;
  const name = "Joe Bloggs";

  function handleAuthClick() {
    const backendUrl = "http://localhost:8001";
    if (loggedIn) {
      window.location.assign(`${backendUrl}/auth/logout/`);
    } else {
      window.location.assign(`${backendUrl}/auth/churchsuite/login/`);
    }
  }

  return (
    <Box
      position="sticky"
      top="0"
      zIndex="sticky"
      bgColor={useColorModeValue("gray.100", "gray.800")}
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
        <HStack display={isDesktop} gap="8" fontSize={{ base: "sm", lg: "md" }}>
          <MenuLink to="/" text="Home" />
          <MenuLink to="/prayerwall" text="Prayer Wall" />
          <MenuLink to="/request" text="Submit a request" />
          <MenuAccount
            loggedIn={loggedIn}
            name={name}
            handleAuthClick={handleAuthClick}
          />
        </HStack>
        <MobileMenu
          loggedIn={loggedIn}
          name={name}
          handleAuthClick={handleAuthClick}
        />
      </Flex>
    </Box>
  );
}

export default Header;
