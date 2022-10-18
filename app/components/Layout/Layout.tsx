import { Box, Container } from "@chakra-ui/react";
import LogoMark from "../LogoMark/LogoMark.component";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box width={"100%"} overflow="hidden">
      <Container maxW={"container.2xl"} as="main" position="relative">
        {children}
      </Container>
      <LogoMark />
    </Box>
  );
}
