import type {
  ButtonOptions,
  HTMLChakraProps,
  ThemingProps,
} from "@chakra-ui/react";

export interface ILinkProps {
  /** Label for the link */
  text?: string;
  /** URL that the link will point to */
  href: string;
  /** Open the link in a new tab? */
  isExternal?: boolean;
  /** Render the link with the appearance of a button (still uses an <a> tag) */
  useButton?: boolean;
  /** Pass additional props to the Chakra button to override variant, size, style props etc. */
  buttonProps?: HTMLChakraProps<"button"> &
    ThemingProps<"Button"> &
    ButtonOptions;
}
