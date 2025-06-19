import { Box, Flex, HStack, Image, useColorModeValue } from "@chakra-ui/react";
import { NavLink, useNavigate } from "@remix-run/react";
import MenuLink from "../MenuLink";
import MobileMenu from "../MobileMenu";
import MenuAccount from "../MenuAccount";
import type { User } from "~/services/User.definition";

type HeaderProps = {
  user: User;
};

function Header({ user }: HeaderProps) {
  let navigate = useNavigate();
  const isDesktop = { base: "none", md: "flex" };

  const loggedIn = !!user;
  const name = user?.name || "";

  const handleAuthClick = () => {
    if (user) {
      navigate("/auth/logout");
    } else {
      navigate("/auth/login");
    }
  };

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
        <HStack
          display={isDesktop}
          gap={8}
          ml={8}
          fontSize={{ base: "sm", lg: "md" }}
        >
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
