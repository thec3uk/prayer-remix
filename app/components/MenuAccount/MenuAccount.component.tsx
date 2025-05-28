import type { IMenuAccountProps } from "./MenuAccount.definition";
import { Flex, Text, Link } from "@chakra-ui/react";
import ChurchSuiteMark from "../ChurchSuiteMark";

function MenuAccount({ loggedIn, name }: IMenuAccountProps) {
  return (
    <Flex gap={2} alignItems="center" flexWrap="wrap">
      <ChurchSuiteMark />
      <Text as="span" fontWeight="bold">
        {name}
      </Text>
      <Link textDecoration="underline" _hover={{ textDecoration: "none" }}>
        {loggedIn ? "Sign out" : "Sign in"}
      </Link>
    </Flex>
  );
}

export default MenuAccount;
