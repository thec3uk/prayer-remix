import type { Styles } from "@chakra-ui/theme-tools";
import { mode } from "@chakra-ui/theme-tools";
const styles: Styles = {
  global: (props) => ({
    body: {
      fontFamily: "body",
      color: mode("gray.500", "gray.100")(props),
      bg: mode("gray.100", "gray.500")(props),
      transitionProperty: "background-color",
      transitionDuration: "normal",
      lineHeight: "base",
      width: "100%",
      height: "100%",
      margin: 0,
      padding: 0,
      overflowX: "hidden",
      overflowY: "auto",
      maxW: "100vw",
    },
    label: {
      color: "gray.500",
      fontWeight: "medium",
    },
    "*::placeholder": {
      color: "gray.300",
    },
    "*, *::before, &::after": {
      borderColor: "gray.200",
      wordWrap: "break-word",
    },
  }),
};

export default styles;
