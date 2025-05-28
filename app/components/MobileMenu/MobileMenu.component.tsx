import type { IMobileMenuProps } from "./MobileMenu.definition";
import { IconButton, VStack, Box } from "@chakra-ui/react";
import { useState } from "react";
import { use100vh } from "react-div-100vh";
import HamburgerIcon from "../HamburgerIcon";
import MenuLink from "../MenuLink";
import MenuAccount from "../MenuAccount";

function MobileMenu({ loggedIn }: IMobileMenuProps) {
  const isMobile = { base: "block", md: "none" };
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
          base: menuVisible ? "flex" : "none",
          md: "none",
        }}
        height={`calc(${
          viewportHeight ? viewportHeight + "px" : "100vh"
        } - 3.5rem)`}
        overflowY="auto"
        bg="white"
        as="nav"
        position="fixed"
        top={{ base: "99px", md: "5rem" }}
        zIndex="dropdown"
        py={8}
        left={0}
        right={0}
        gap={8}
        transition="transform 0.5s ease-in-out"
        transform={
          menuVisible ? "translate3d(0,0,0)" : "translate3d(0, -100%, 0)"
        }
      >
        <MenuLink to="/" text="Home" onClick={() => setMenuVisible(false)} />
        <MenuLink
          to="/prayerwall"
          text="Prayer Wall"
          onClick={() => setMenuVisible(false)}
        />
        <MenuLink
          to="/request"
          text="Submit a request"
          onClick={() => setMenuVisible(false)}
        />
        <MenuAccount loggedIn={loggedIn} name="Joe Bloggs" />
      </VStack>
    </Box>
  );
}

export default MobileMenu;
