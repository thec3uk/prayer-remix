import type { IMenuAccountProps } from "./MenuAccount.definition";
import { Flex, Text, Link } from "@chakra-ui/react";
import ChurchSuiteMark from "../ChurchSuiteMark";

function MenuAccount({ loggedIn, name, handleAuthClick }: IMenuAccountProps) {
  return (
    <Flex gap={2} alignItems="center" flexWrap="wrap">
      <ChurchSuiteMark />
      {loggedIn && name && (
        <Link href="/manage-preferences" fontWeight="bold">
          {/* <Text as="span" fontWeight="bold"> */}
          {name}
          {/* </Text> */}
        </Link>
      )}
      <Link
        textDecoration="underline"
        _hover={{ textDecoration: "none" }}
        onClick={handleAuthClick}
      >
        {loggedIn ? "Sign out" : "Sign in"}
      </Link>
    </Flex>
  );
}

export default MenuAccount;
