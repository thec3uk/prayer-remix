import { Button } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as RemixLink } from "@remix-run/react";
import type { ILinkProps } from "./Link.definition";

function Link({ href, text, useButton, isExternal, buttonProps }: ILinkProps) {
  const externalLinkProps = isExternal
    ? {
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {};

  return (
    <>
      {useButton ? (
        <ChakraLink
          as={RemixLink}
          to={href}
          _hover={{ textDecoration: "none" }}
        >
          <Button {...externalLinkProps} {...buttonProps}>
            {text}
          </Button>
        </ChakraLink>
      ) : (
        <ChakraLink
          color="gray.500"
          fontWeight="bold"
          href={href}
          textDecoration="underline"
          _hover={{ color: "gray.600", textDecoration: "none" }}
          _active={{ color: "gray.700" }}
          isExternal={isExternal}
        >
          {text}
        </ChakraLink>
      )}
    </>
  );
}

export default Link;
