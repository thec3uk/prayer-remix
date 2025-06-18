var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// server.js
import { createRequestHandler } from "@netlify/remix-adapter";

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  mode: () => mode4,
  publicPath: () => publicPath,
  routes: () => routes
});

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { renderToString } from "react-dom/server";
import { CacheProvider } from "@emotion/react";
import createEmotionServer from "@emotion/server/create-instance";
import { RemixServer } from "@remix-run/react";
import "dotenv/config";

// app/lib/emotion/context.ts
import * as React from "react";
var ServerStyleContext = React.createContext(null), ClientStyleContext = React.createContext(null);

// app/lib/emotion/createEmotionCache.ts
import createCache from "@emotion/cache";
function createEmotionCache() {
  return createCache({ key: "css" });
}

// app/entry.server.tsx
import { jsxDEV } from "react/jsx-dev-runtime";
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let cache = createEmotionCache(), { extractCriticalToChunks } = createEmotionServer(cache), html = renderToString(
    /* @__PURE__ */ jsxDEV(ServerStyleContext.Provider, { value: null, children: /* @__PURE__ */ jsxDEV(CacheProvider, { value: cache, children: /* @__PURE__ */ jsxDEV(RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 23,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 22,
      columnNumber: 4
    }, this) }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 21,
      columnNumber: 3
    }, this)
  ), chunks = extractCriticalToChunks(html), markup = renderToString(
    /* @__PURE__ */ jsxDEV(ServerStyleContext.Provider, { value: chunks.styles, children: /* @__PURE__ */ jsxDEV(CacheProvider, { value: cache, children: /* @__PURE__ */ jsxDEV(RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 33,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 32,
      columnNumber: 4
    }, this) }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 31,
      columnNumber: 3
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
import {
  ColorModeScript,
  cookieStorageManagerSSR,
  localStorageManager
} from "@chakra-ui/react";
import {
  Links as Links2,
  LiveReload as LiveReload2,
  Meta as Meta2,
  Outlet,
  Scripts as Scripts2,
  ScrollRestoration as ScrollRestoration2,
  useLoaderData,
  useRouteError
} from "@remix-run/react";
import { json } from "@remix-run/node";

// app/components/Layout/Layout.tsx
import { Box as Box2, Container } from "@chakra-ui/react";

// app/components/LogoMark/LogoMark.component.tsx
import { Box, useBreakpointValue, useColorModeValue } from "@chakra-ui/react";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
function LogoMark() {
  let display = useBreakpointValue({ base: "none", lg: "block" }), w = "1332", h = "1154", vb = `0 0 ${w} ${h}`;
  return /* @__PURE__ */ jsxDEV2(
    Box,
    {
      position: "absolute",
      zIndex: "-1",
      marginLeft: "50%",
      top: "200px",
      overflowX: "hidden",
      display,
      children: /* @__PURE__ */ jsxDEV2(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: w,
          height: h,
          fill: useColorModeValue("#EBECEC", "#222937"),
          version: "1.1",
          viewBox: vb,
          children: /* @__PURE__ */ jsxDEV2("path", { d: "M1076.93 577.011L871.479 933.019H460.513L255.043 577.011L460.513 220.981H614.03L571.633 294.389H502.906L339.78 577.011L502.906 859.633H829.09L992.193 577.011H907.311L786.671 786.084H545.373L424.663 577.011L545.325 367.938H614.048L741.468 147.432H418.076L170.161 577.011L418.076 1006.59H913.924L1119.25 650.797L1204.4 651.035L956.55 1080.45H375.446L84.9045 576.989L375.446 73.5532L870.96 73.5752L658.688 440.968L587.48 440.945L508.952 577.011L587.48 713.054H744.537L823.018 577.011L738.14 576.989L702.052 639.505H629.922L593.861 576.989L629.922 514.494H702.074L998.991 -0.00012207L332.982 0.0262451L0 576.989L333 1154H998.991L1332 576.989L1076.93 577.011Z" }, void 0, !1, {
            fileName: "app/components/LogoMark/LogoMark.component.tsx",
            lineNumber: 25,
            columnNumber: 9
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/LogoMark/LogoMark.component.tsx",
          lineNumber: 17,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/LogoMark/LogoMark.component.tsx",
      lineNumber: 9,
      columnNumber: 5
    },
    this
  );
}
var LogoMark_component_default = LogoMark;

// app/components/Layout/Layout.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
function Layout({ children }) {
  return /* @__PURE__ */ jsxDEV3(Box2, { width: "100%", overflow: "hidden", children: [
    /* @__PURE__ */ jsxDEV3(Container, { maxW: "container.2xl", as: "main", position: "relative", children }, void 0, !1, {
      fileName: "app/components/Layout/Layout.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3(LogoMark_component_default, {}, void 0, !1, {
      fileName: "app/components/Layout/Layout.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Layout/Layout.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/components/Layout/index.tsx
var Layout_default = Layout;

// app/styles/global.css
var global_default = "/build/_assets/global-CBF4WPEJ.css";

// app/root.tsx
import { ChakraProvider as ChakraProvider2, VStack as VStack3 } from "@chakra-ui/react";
import { SkipNavLink as SkipNavLink2 } from "@chakra-ui/skip-nav";
import { useContext as useContext2, useEffect as useEffect2 } from "react";
import { withEmotionCache as withEmotionCache2 } from "@emotion/react";

// app/theme/index.ts
import { extendTheme } from "@chakra-ui/react";

// app/theme/components/card.ts
var baseStyle = {
  padding: 8,
  boxShadow: "base",
  textAlign: "left"
}, variants = {
  default: {
    bg: "white"
  },
  muted: {
    bg: "gray.100",
    color: "gray.400"
  }
}, defaultProps = {
  variant: "default"
}, card_default = {
  baseStyle,
  variants,
  defaultProps
};

// app/theme/components/button.ts
var baseStyle2 = {
  fontWeight: "700",
  fontFamily: "link",
  color: "white",
  _focus: {
    boxShadow: "none",
    outline: "1px solid",
    outlineOffset: "1px",
    outlineColor: "teal.700"
  },
  textTransform: "uppercase",
  borderRadius: "0px"
}, sizes = {
  lg: {
    fontSize: "xl",
    lineHeight: "1",
    px: 5,
    py: 3,
    h: "auto",
    minH: 12
  },
  md: {
    fontSize: "lg",
    lineHeight: "1.2",
    px: 4,
    py: 4,
    h: "auto",
    minH: 10
  },
  sm: {
    fontSize: "md",
    lineHeight: 1.333333,
    px: 3,
    py: 2,
    minH: "auto",
    h: 9,
    minW: 9
  },
  xs: {
    fontSize: "md",
    lineHeight: "base",
    px: 2.5,
    py: 1.5,
    h: "auto",
    minH: 8,
    minW: 8
  }
}, variants2 = {
  primary: {
    bg: "gray.500",
    _hover: {
      bg: "gray.600"
    },
    _active: {
      bg: "gray.700"
    },
    _disabled: {
      opacity: 0.4
    }
  },
  secondary: {
    bg: "gray.400",
    _hover: {
      bg: "gray.300"
    },
    _active: {
      bg: "gray.500"
    },
    _disabled: {
      opacity: 0.4
    }
  },
  tertiary: {
    bg: "transparent",
    color: "teal.500",
    _hover: {
      bg: "teal.100"
    },
    _active: {
      bg: "teal.200"
    }
  },
  link: {
    padding: 0,
    height: "auto",
    lineHeight: "normal",
    verticalAlign: "baseline",
    color: "yellow.500",
    _hover: {
      textDecoration: "underline",
      _disabled: {
        textDecoration: "none"
      }
    },
    _active: {
      color: "teal.900"
    }
  },
  outline: {
    color: "gray.500",
    bg: "transparent",
    border: "1px solid",
    borderColor: "teal.300",
    borderRadius: "10px",
    _hover: {
      bg: "teal.50",
      borderColor: "teal.500"
    },
    _active: {
      bg: "teal.100"
    },
    textTransform: "none"
  }
}, defaultProps2 = {
  variant: "primary",
  size: "md"
}, button_default = {
  baseStyle: baseStyle2,
  variants: variants2,
  sizes,
  defaultProps: defaultProps2
};

// app/theme/components/form.ts
import { formAnatomy as parts } from "@chakra-ui/anatomy";
var baseStyleRequiredIndicator = {
  marginStart: 1,
  color: "red.500"
}, baseStyleHelperText = {
  mb: 2,
  mt: 0,
  color: "gray.400",
  lineHeight: "1.7142857143",
  fontSize: "sm"
}, baseStyle3 = () => ({
  container: { width: "100%", position: "relative" },
  requiredIndicator: baseStyleRequiredIndicator,
  helperText: baseStyleHelperText
}), form_default = {
  parts: parts.keys,
  baseStyle: baseStyle3
};

// app/theme/components/form-label.ts
var baseStyle4 = {
  fontSize: "sm",
  marginEnd: 3,
  mb: 1,
  fontWeight: "bold",
  transitionProperty: "common",
  transitionDuration: "normal",
  textTransform: "uppercase",
  opacity: 1,
  _disabled: {
    opacity: 0.4
  }
}, form_label_default = {
  baseStyle: baseStyle4
};

// app/theme/components/heading.ts
var baseStyle5 = {
  fontFamily: "heading",
  fontWeight: "bold",
  color: "gray.500"
}, sizes2 = {
  xl: {
    fontSize: ["4xl", null, null, "5xl", "6xl"],
    lineHeight: [3, null, null, 4, 5]
  },
  lg: {
    fontSize: ["3xl", null, null, "4xl", "5xl"],
    lineHeight: ["1.14285714286", null, null, 3, 4]
  },
  md: {
    fontSize: ["2xl", null, null, "3xl", "4xl"],
    lineHeight: ["1.16666666667", null, null, "1.14285714286", "3"]
  },
  sm: {
    fontSize: ["xl", null, null, "2xl", "3xl"],
    lineHeight: ["1.4", null, "1.16666666667", "1.14285714286"]
  },
  xs: {
    fontSize: ["lg", null, null, "xl", "2xl"],
    lineHeight: ["1.33333333333", null, null, "1.4", "1.16666666667"]
  },
  xxs: {
    fontSize: ["md", null, null, "lg", "xl"],
    lineHeight: ["base", null, null, "1.33333333333", "1.4"]
  }
}, defaultProps3 = {
  size: "xl"
}, heading_default = {
  baseStyle: baseStyle5,
  sizes: sizes2,
  defaultProps: defaultProps3
};

// app/theme/components/input.ts
import { inputAnatomy as parts2 } from "@chakra-ui/anatomy";
var baseStyle6 = {
  field: {
    width: "100%",
    minWidth: 0,
    outline: 0,
    position: "relative",
    appearance: "none",
    transitionProperty: "common",
    transitionDuration: "normal",
    color: "gray.500",
    borderRadius: "base",
    mt: 1
  }
}, size = {
  lg: {
    fontSize: "md",
    p: 3,
    borderRadius: "base"
  },
  md: {
    fontSize: "md",
    px: 3,
    py: 2,
    borderRadius: "base"
  },
  sm: {
    fontSize: "xs",
    px: 3,
    py: 1,
    borderRadius: "base"
  }
}, sizes3 = {
  lg: {
    field: size.lg,
    addon: size.lg
  },
  md: {
    field: size.md,
    addon: size.md
  },
  sm: {
    field: size.sm,
    addon: size.sm
  },
  xs: {
    field: size.xs,
    addon: size.xs
  }
}, variantOutline = () => ({
  field: {
    border: "1px solid",
    borderColor: "gray.300",
    bg: "white",
    _hover: {
      borderColor: "gray.400"
    },
    _readOnly: {
      boxShadow: "none !important",
      userSelect: "all",
      bg: "gray.100"
    },
    _disabled: {
      cursor: "not-allowed",
      bg: "gray.100",
      borderColor: "gray.200",
      color: "gray.300"
    },
    _invalid: {
      borderColor: "red.400",
      boxShadow: "none"
    },
    _focus: {
      zIndex: 1,
      borderColor: "teal.600",
      boxShadow: "outline"
    },
    _placeholder: {
      color: "gray.400"
    }
  },
  addon: {
    border: "1px solid",
    borderColor: "gray.300",
    bg: "gray.100"
  }
}), variantUnstyled = {
  field: {
    bg: "transparent",
    px: 0,
    height: "auto"
  },
  addon: {
    bg: "transparent",
    px: 0,
    height: "auto"
  }
}, variantFilled = {
  field: {
    border: "1px solid",
    bg: "teal.800",
    borderColor: "teal.600",
    color: "white",
    _hover: {
      bg: "teal.700",
      borderColor: "teal.500"
    },
    _focus: {
      zIndex: 1,
      bg: "teal.600",
      color: "white",
      borderColor: "teal.600",
      boxShadow: "outline"
    },
    _placeholder: {
      color: "white"
    }
  }
}, variants3 = {
  outline: variantOutline,
  unstyled: variantUnstyled,
  filled: variantFilled
}, defaultProps4 = {
  size: "md",
  variant: "outline"
}, input_default = {
  parts: parts2.keys,
  baseStyle: baseStyle6,
  sizes: sizes3,
  variants: variants3,
  defaultProps: defaultProps4
};

// app/theme/components/select.ts
import { selectAnatomy as parts3 } from "@chakra-ui/anatomy";
import { mergeWith } from "@chakra-ui/utils";
import { mode } from "@chakra-ui/theme-tools";
var baseStyleField = (props) => ({
  ...input_default.baseStyle.field,
  bg: "white",
  appearance: "none",
  paddingBottom: "1px",
  lineHeight: "normal",
  "> option, > optgroup": {
    bg: mode("white", "gray.500")(props)
  }
}), baseStyleIcon = {
  width: "1.5rem",
  height: "100%",
  insetEnd: "0.5rem",
  position: "relative",
  color: "currentColor",
  fontSize: "1.25rem",
  _disabled: {
    opacity: 0.5
  }
}, baseStyle7 = (props) => ({
  field: baseStyleField(props),
  icon: baseStyleIcon
}), iconSpacing = { paddingInlineEnd: "2rem" }, sizes4 = mergeWith(
  {},
  input_default.sizes,
  {
    lg: {
      field: iconSpacing
    },
    md: {
      field: iconSpacing
    },
    sm: {
      field: iconSpacing
    },
    xs: {
      field: iconSpacing,
      icon: { insetEnd: "0.25rem" }
    }
  }
), select_default = {
  parts: parts3.keys,
  baseStyle: baseStyle7,
  sizes: sizes4,
  variants: input_default.variants,
  defaultProps: input_default.defaultProps
};

// app/theme/components/text.ts
var baseStyle8 = {
  fontFamily: "body"
}, sizes5 = {
  xxl: {
    fontSize: ["xl", null, null, "2xl", "3xl"],
    lineHeight: ["base", null, null, "1.5", "1.8"]
  },
  xl: {
    fontSize: ["lg", null, null, "xl", "2xl"],
    lineHeight: ["base", null, null, "1.5", "1.6"]
  },
  lg: {
    fontSize: ["md", null, null, "lg", "xl"],
    lineHeight: ["base", null, null, "1.33333333333", "1.4"]
  },
  md: {
    fontSize: "md",
    lineHeight: "base"
  },
  sm: {
    fontSize: "sm",
    lineHeight: "1.71428571429"
  }
}, defaultProps5 = {
  size: "md"
}, text_default = {
  baseStyle: baseStyle8,
  sizes: sizes5,
  defaultProps: defaultProps5
};

// app/theme/components/checkbox.ts
import { checkboxAnatomy as parts4 } from "@chakra-ui/anatomy";
var baseStyleControl = () => ({
  w: "100%",
  transitionProperty: "box-shadow",
  transitionDuration: "normal",
  border: "2px solid",
  borderRadius: "base",
  borderColor: "gray.300",
  color: "white",
  bgColor: "white",
  alignSelf: "start",
  _checked: {
    bg: "transparent",
    borderColor: "gray.500",
    color: "gray.500",
    _hover: {
      bg: "transparent",
      borderColor: "gray.500"
    },
    _disabled: {
      borderColor: "gray.200",
      bg: "gray.100",
      color: "gray.200"
    }
  },
  _indeterminate: {
    bg: "green.500",
    borderColor: "green.500",
    color: "white"
  },
  _disabled: {
    bg: "gray.100",
    borderColor: "gray.200"
  },
  _hover: {
    borderColor: "gray.400"
  },
  _focus: {
    boxShadow: "outline",
    borderColor: "gray.500"
  },
  _invalid: {
    borderColor: "#E03A58"
  }
}), baseStyleLabel = {
  userSelect: "none",
  _disabled: { opacity: 0.4 }
}, baseStyleIcon2 = {
  transitionProperty: "transform",
  transitionDuration: "normal"
}, baseStyle9 = (props) => ({
  icon: baseStyleIcon2,
  control: baseStyleControl(props),
  label: baseStyleLabel
}), sizes6 = {
  sm: {
    control: { h: 3, w: 3, mt: 1.5 },
    label: { fontSize: "sm", ml: 2, fontWeight: "normal" },
    icon: { fontSize: "0.45rem" }
  },
  md: {
    control: { w: 4, h: 4, mt: 1 },
    label: { fontSize: "md", ml: 3 },
    icon: { fontSize: "0.625rem" }
  },
  lg: {
    control: { w: 5, h: 5, mt: 0.5 },
    label: { fontSize: "md", ml: 3 },
    icon: { fontSize: "0.625rem" }
  }
}, defaultProps6 = {
  size: "md"
}, checkbox_default = {
  parts: parts4.keys,
  baseStyle: baseStyle9,
  sizes: sizes6,
  defaultProps: defaultProps6
};

// app/theme/components/radio.ts
import { radioAnatomy as parts5 } from "@chakra-ui/anatomy";
var baseStyleControl2 = (props) => {
  let { control = {} } = checkbox_default.baseStyle(props);
  return {
    ...control,
    borderRadius: "full",
    _checked: {
      ...control._checked,
      _before: {
        content: '""',
        display: "inline-block",
        pos: "relative",
        w: "50%",
        h: "50%",
        borderRadius: "50%",
        bg: "currentColor"
      }
    }
  };
}, baseStyle10 = (props) => ({
  label: checkbox_default.baseStyle(props).label,
  control: baseStyleControl2(props)
}), sizes7 = {
  sm: {
    control: { width: 3, height: 3, mt: 1.5 },
    label: { fontSize: "sm", ml: 2 }
  },
  md: {
    control: { w: 4, h: 4, mt: 1 },
    label: { fontSize: "md", ml: 3 }
  },
  lg: {
    control: { w: 6, h: 6, mt: 1 },
    label: { fontSize: "lg", ml: 3 }
  }
}, defaultProps7 = {
  size: "md",
  colorScheme: "gray.500"
}, radio_default = {
  parts: parts5.keys,
  baseStyle: baseStyle10,
  sizes: sizes7,
  defaultProps: defaultProps7
};

// app/theme/components/container.ts
var baseStyle11 = {
  w: "100%",
  mx: "auto",
  maxW: "60ch",
  px: "clamp(1rem , 4vw, 2rem)"
}, container_default = {
  baseStyle: baseStyle11
};

// app/theme/components/textarea.ts
var baseStyle12 = {
  ...input_default.baseStyle.field,
  paddingY: "8px",
  minHeight: "7.5rem",
  lineHeight: "short",
  verticalAlign: "top"
}, variants4 = {
  outline: (props) => input_default.variants.outline(props).field ?? {},
  unstyled: input_default.variants.unstyled.field ?? {}
}, defaultProps8 = {
  size: "md",
  variant: "outline"
}, textarea_default = {
  baseStyle: baseStyle12,
  variants: variants4,
  defaultProps: defaultProps8
};

// app/theme/components/table.ts
import { tableAnatomy as parts6 } from "@chakra-ui/anatomy";
var baseStyle13 = {
  table: {
    fontVariantNumeric: "lining-nums tabular-nums",
    borderCollapse: "collapse",
    width: "full"
  },
  th: {
    fontFamily: "body",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "wider",
    textAlign: "start"
  },
  td: {
    textAlign: "start"
  },
  caption: {
    mt: 4,
    fontFamily: "heading",
    textAlign: "center",
    fontWeight: "medium"
  }
}, numericStyles = {
  "&[data-is-numeric=true]": {
    textAlign: "end"
  }
}, variantSimple = () => ({
  table: {
    borderCollapse: "separate",
    borderSpacing: "0 8px"
  },
  th: {
    color: "gray.600",
    borderBottom: "0 none",
    ...numericStyles
  },
  td: {
    bg: "gray.100",
    fontWeight: "medium",
    whiteSpace: "nowrap",
    borderBottom: "0 none",
    ...numericStyles,
    "&:first-of-type": {
      borderTopLeftRadius: "md",
      borderBottomLeftRadius: "md"
    },
    "&:last-of-type": {
      borderTopRightRadius: "md",
      borderBottomRightRadius: "md"
    }
  },
  tfoot: {
    tr: {
      "&:last-of-type": {
        th: { borderBottomWidth: 0 }
      }
    }
  }
}), variantBasic = () => ({
  th: {
    color: "gray.600",
    borderBottom: "1px",
    borderColor: "gray.200",
    ...numericStyles
  },
  td: {
    verticalAlign: "top",
    borderBottom: "1px",
    borderColor: "gray.200",
    ...numericStyles
  },
  caption: {
    color: "gray.600"
  },
  tfoot: {
    tr: {
      "&:last-of-type": {
        th: { borderBottomWidth: 0 }
      }
    }
  }
}), variants5 = {
  simple: variantSimple,
  basic: variantBasic,
  unstyled: {}
}, sizes8 = {
  sm: {
    th: {
      px: "4",
      py: "1",
      lineHeight: "taller",
      fontSize: "xs"
    },
    td: {
      px: "4",
      py: "2",
      fontSize: "sm",
      lineHeight: "1.71428571429"
    },
    caption: {
      px: "4",
      py: "2",
      fontSize: "sm",
      lineHeight: "1.71428571429"
    }
  },
  md: {
    th: {
      px: 4,
      pt: "3",
      pb: 0,
      lineHeight: "taller",
      fontSize: "xs",
      "&:first-of-type": {
        pl: 0
      }
    },
    td: {
      px: 4,
      py: 2,
      lineHeight: "taller"
    }
  }
}, defaultProps9 = {
  variant: "simple",
  size: "md"
}, table_default = {
  parts: parts6.keys,
  baseStyle: baseStyle13,
  variants: variants5,
  sizes: sizes8,
  defaultProps: defaultProps9
};

// app/theme/components/tabs.ts
var tabs_default = {
  parts: ["tab", "tablist", "tabpanel"],
  variants: {
    line: {
      tab: {
        fontWeight: "medium",
        fontSize: { base: "md", md: "xl" },
        fontFamily: "link",
        borderBottom: "4px solid",
        borderColor: "transparent",
        marginBottom: "-2px",
        _selected: {
          color: "teal.500",
          borderColor: "teal.500"
        },
        _focus: {
          boxShadow: "none"
        },
        _focusVisible: {
          outline: "2px solid",
          outlineColor: "teal.500"
        },
        _hover: {
          color: "teal.500"
        },
        _active: {
          bg: "transparent"
        },
        _disabled: {
          opacity: 0.4,
          cursor: "not-allowed"
        }
      },
      tablist: {
        borderColor: "transparent"
      },
      tabpanel: {
        p: 0
      }
    }
  }
};

// app/theme/components/modal.ts
import { modalAnatomy as parts7 } from "@chakra-ui/anatomy";
import { mode as mode2 } from "@chakra-ui/theme-tools";
var baseStyleOverlay = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, baseStyleDialogContainer = (props) => {
  let { isCentered, scrollBehavior } = props;
  return {
    display: "flex",
    zIndex: "modal",
    justifyContent: "center",
    alignItems: isCentered ? "center" : "flex-start",
    overflow: scrollBehavior === "inside" ? "hidden" : "auto"
  };
}, baseStyleDialog = (props) => {
  let { scrollBehavior } = props;
  return {
    borderRadius: "md",
    bg: mode2("white", "gray.700")(props),
    color: "inherit",
    my: "3.75rem",
    zIndex: "modal",
    maxH: scrollBehavior === "inside" ? "calc(100% - 7.5rem)" : void 0,
    boxShadow: mode2("lg", "dark-lg")(props)
  };
}, baseStyleHeader = {
  px: 6,
  py: 4,
  fontSize: "xl",
  fontWeight: "semibold"
}, baseStyleCloseButton = {
  position: "absolute",
  top: 2,
  insetEnd: 3
}, baseStyleBody = (props) => {
  let { scrollBehavior } = props;
  return {
    px: 6,
    py: 2,
    flex: 1,
    overflow: scrollBehavior === "inside" ? "auto" : void 0
  };
}, baseStyleFooter = {
  px: 6,
  py: 4,
  mt: 4,
  background: "gray.100",
  borderBottomLeftRadius: "md",
  borderBottomRightRadius: "md"
}, baseStyle14 = (props) => ({
  overlay: baseStyleOverlay,
  dialogContainer: baseStyleDialogContainer(props),
  dialog: baseStyleDialog(props),
  header: baseStyleHeader,
  closeButton: baseStyleCloseButton,
  body: baseStyleBody(props),
  footer: baseStyleFooter
});
function getSize(value) {
  return value === "full" ? {
    dialog: {
      maxW: "100vw",
      minH: "100vh",
      "@supports(min-height: -webkit-fill-available)": {
        minH: "-webkit-fill-available"
      },
      my: 0
    }
  } : {
    dialog: { maxW: value }
  };
}
var sizes9 = {
  xs: getSize("xs"),
  sm: getSize("sm"),
  md: getSize("md"),
  lg: getSize("lg"),
  xl: getSize("xl"),
  "2xl": getSize("2xl"),
  "3xl": getSize("3xl"),
  "4xl": getSize("4xl"),
  "5xl": getSize("5xl"),
  "6xl": getSize("6xl"),
  full: getSize("full")
}, defaultProps10 = {
  size: "md"
}, modal_default = {
  parts: parts7.keys,
  baseStyle: baseStyle14,
  sizes: sizes9,
  defaultProps: defaultProps10
};

// app/theme/components/index.ts
var components_default = {
  Card: card_default,
  Form: form_default,
  FormLabel: form_label_default,
  Heading: heading_default,
  Button: button_default,
  Input: input_default,
  Select: select_default,
  Text: text_default,
  Checkbox: checkbox_default,
  Radio: radio_default,
  Container: container_default,
  Textarea: textarea_default,
  Table: table_default,
  Tabs: tabs_default,
  Modal: modal_default
};

// app/theme/foundations/colors.ts
var colors = {
  transparent: "transparent",
  current: "currentColor",
  black: "#000000",
  white: "#FFFFFF",
  navy: {
    500: "#202945"
  },
  red: {
    500: "#F05356"
  },
  teal: {
    100: "#66bdc5",
    200: "#4db2bc",
    300: "#33a7b2",
    400: "#1a9ca9",
    500: "#00919F",
    600: "#00838f",
    700: "#00747f",
    800: "#00666f",
    900: "#00575f"
  },
  yellow: {
    500: "#F8C23D"
  },
  gray: {
    100: "#F5F5F5",
    150: "#EBEBEB",
    200: "#D9D9D9",
    500: "#3E4545"
  },
  blue: {
    500: "#DDF3F5"
  }
}, colors_default = colors;

// app/theme/foundations/typography.ts
var typography = {
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    //20 - unitless
    short: 1.375,
    //22 - unitless
    base: 1.5,
    //24 - unitless
    tall: 1.75,
    //28 - unitless
    taller: 2,
    //32 - unitless
    3: "2.5rem",
    //40
    4: "3rem",
    //48
    5: "4rem"
    //64
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700
  },
  fonts: {
    heading: "'Novecentosanswide', sans-serif",
    body: "'Montserrat', sans-serif",
    link: "'Montserrat', sans-serif"
  },
  fontSizes: {
    xs: "0.75rem",
    //12
    sm: "0.875rem",
    //14
    md: "1rem",
    //16
    lg: "1.125rem",
    //18
    xl: "1.25rem",
    //20
    "2xl": "1.5rem",
    //24
    "3xl": "1.75rem",
    //28
    "4xl": "2rem",
    //32
    "5xl": "2.5rem",
    //40
    "6xl": "3.5rem"
    //56
  }
}, typography_default = typography;

// app/theme/foundations/breakpoints.ts
var breakpoints = {
  sm: "30em",
  md: "48em",
  lg: "64em",
  xl: "80em",
  "2xl": "96em"
}, breakpoints_default = breakpoints;

// app/theme/foundations/shadows.ts
var shadows = {
  base: "2px 2px 4px rgba(0, 0, 0, 0.05), 4px 4px 10px rgba(0, 0, 0, 0.05)",
  outline: "0px 0px 0px 2px rgba(109, 24, 127, 0.15)"
}, shadows_default = shadows;

// app/theme/foundations/spacing.ts
var spacing = {
  px: "1px",
  0.5: "0.125rem",
  // 2px
  1: "0.25rem",
  // 4px
  1.5: "0.375rem",
  // 6px
  2: "0.5rem",
  // 8px
  2.5: "0.625rem",
  // 10px
  3: "0.75rem",
  // 12px
  3.5: "0.875rem",
  // 14px
  4: "1rem",
  // 16px
  5: "1.25rem",
  // 20px
  6: "1.5rem",
  // 24px
  7: "1.75rem",
  // 28px
  8: "2rem",
  // 32px
  9: "2.25rem",
  // 36px
  10: "2.5rem",
  // 40px
  12: "3rem",
  // 48px
  14: "3.5rem",
  // 56px
  16: "4rem",
  // 64px
  17: "4.375rem",
  // 70px
  18: "4.5rem",
  // 72px
  20: "5rem",
  // 80px
  21: "5.5rem",
  // 88px
  24: "6rem",
  // 96px
  28: "7rem",
  // 112px
  32: "8rem",
  // 128px
  33: "8.125rem",
  // 130px
  45: "11.25rem",
  // 180px
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem"
};

// app/theme/foundations/sizes.ts
var largeSizes = {
  max: "max-content",
  min: "min-content",
  full: "100%",
  "3xs": "14rem",
  "2xs": "16rem",
  xs: "20rem",
  sm: "24rem",
  md: "28rem",
  lg: "30rem",
  xl: "36rem",
  "2xl": "42rem",
  "3xl": "46rem",
  "4xl": "56rem",
  "5xl": "64rem",
  "6xl": "72rem",
  "7xl": "80rem",
  "8xl": "90rem"
}, container = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1440px"
}, sizes10 = {
  ...spacing,
  ...largeSizes,
  container
}, sizes_default = sizes10;

// app/theme/foundations/index.ts
var foundations = {
  colors: colors_default,
  breakpoints: breakpoints_default,
  shadows: shadows_default,
  sizes: sizes_default,
  space: spacing,
  ...typography_default
}, foundations_default = foundations;

// app/theme/styles.ts
import { mode as mode3 } from "@chakra-ui/theme-tools";
var styles = {
  global: (props) => ({
    body: {
      fontFamily: "body",
      color: mode3("gray.500", "gray.100")(props),
      bg: mode3("gray.100", "gray.500")(props),
      transitionProperty: "background-color",
      transitionDuration: "normal",
      lineHeight: "base",
      width: "100%",
      height: "100%",
      margin: 0,
      padding: 0,
      overflowX: "hidden",
      overflowY: "auto",
      maxW: "100vw"
    },
    label: {
      color: "gray.500",
      fontWeight: "medium"
    },
    "*::placeholder": {
      color: "gray.300"
    },
    "*, *::before, &::after": {
      borderColor: "gray.200",
      wordWrap: "break-word"
    }
  })
}, styles_default = styles;

// app/theme/index.ts
var config = {
  initialColorMode: "light",
  useSystemColorMode: !1
}, overrides = {
  ...foundations_default,
  components: components_default,
  styles: styles_default,
  config
}, C3Theme = extendTheme(overrides), theme_default = C3Theme;

// app/fonts.tsx
import { Global } from "@emotion/react";
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var Fonts = () => /* @__PURE__ */ jsxDEV4(
  Global,
  {
    styles: `
      /* latin */
      /* TODO: have I got the unicode range correct */
      @font-face {
        font-family: 'Novecentosanswide';
        font-weight: bold;
        src: url('/Novecentosanswide-Bold.otf') format('opentype');
      }
      @font-face {
        font-family: 'Novecentosanswide';
        font-weight: normal;
        src: url('/Novecentosanswide-Bold.otf') format('opentype');
      }
      @font-face {
        font-family: 'Montserrat';
        font-weight: normal;
        src: url('/Montserrat-Regular.ttf') format('truetype');
      }
      @font-face {
        font-family: 'Montserrat';
        font-weight: bold;
        src: url('/Montserrat-Bold.ttf') format('truetype');
      }
      `
  },
  void 0,
  !1,
  {
    fileName: "app/fonts.tsx",
    lineNumber: 4,
    columnNumber: 2
  },
  this
), fonts_default = Fonts;

// app/components/ErrorLayout/ErrorLayout.component.tsx
import { ChakraProvider, Heading, VStack as VStack2, Text as Text3, Box as Box7 } from "@chakra-ui/react";
import { SkipNavLink } from "@chakra-ui/skip-nav";
import { withEmotionCache } from "@emotion/react";
import { Links, LiveReload, Meta, Scripts, ScrollRestoration } from "@remix-run/react";
import { useContext, useEffect } from "react";

// app/components/Footer/Footer.component.tsx
import { Box as Box3, Flex, Text, Link } from "@chakra-ui/react";
import React2 from "react";

// app/components/Footer/Footer.definition.ts
var baseUrl = "https://thec3.uk", footerItems = [
  {
    primary: {
      title: "Our Church"
    },
    fields: [
      {
        link_url: `${baseUrl}/about`,
        link_title: "about"
      },
      {
        link_url: `${baseUrl}/we-use-cookies-to-help-improve-your-experience-of-our`,
        link_title: "contact us"
      }
    ]
  },
  {
    primary: {
      title: "Our Policies"
    },
    fields: [
      {
        link_url: `${baseUrl}/privacy`,
        link_title: "privacy"
      }
    ]
  },
  {
    primary: {
      title: "Our Network"
    },
    fields: [
      {
        link_url: baseUrl,
        link_title: "The C3 Church"
      },
      {
        link_url: "https://www.coldhamscoffee.co.uk/",
        link_title: "Coldhams Coffee"
      },
      {
        link_url: "https://c3impact.uk/",
        link_title: "C3 Impact"
      },
      {
        link_url: "https://breathe.thec3.uk/",
        link_title: "Breathe"
      },
      {
        link_url: "https://thec3.academy/",
        link_title: "The C3 Academy"
      },
      {
        link_url: "https://store.thec3.uk/",
        link_title: "The C3 Store"
      }
    ]
  }
];

// app/components/Footer/Footer.component.tsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var FooterList = ({
  title,
  children
}) => /* @__PURE__ */ jsxDEV5(Flex, { columnGap: 8, children: [
  /* @__PURE__ */ jsxDEV5(Text, { as: "h4", fontWeight: "bold", size: "lg", minW: "40%", children: title }, void 0, !1, {
    fileName: "app/components/Footer/Footer.component.tsx",
    lineNumber: 16,
    columnNumber: 4
  }, this),
  /* @__PURE__ */ jsxDEV5(Flex, { flexDir: "column", mt: "1", children }, void 0, !1, {
    fileName: "app/components/Footer/Footer.component.tsx",
    lineNumber: 19,
    columnNumber: 4
  }, this)
] }, void 0, !0, {
  fileName: "app/components/Footer/Footer.component.tsx",
  lineNumber: 15,
  columnNumber: 3
}, this);
function Footer() {
  return /* @__PURE__ */ jsxDEV5(
    Box3,
    {
      as: "footer",
      w: "full",
      my: 6,
      px: { base: 3, md: 4 },
      maxWidth: "container.2xl",
      children: /* @__PURE__ */ jsxDEV5(
        Flex,
        {
          flexDir: { base: "column", md: "row" },
          justifyContent: "space-between",
          borderTop: "1px solid black",
          pt: "4",
          gap: { base: 4, md: 0 },
          children: footerItems.map(({ primary, fields }, idx) => /* @__PURE__ */ jsxDEV5(FooterList, { title: primary.title, children: fields.map((link) => /* @__PURE__ */ jsxDEV5(React2.Fragment, { children: /* @__PURE__ */ jsxDEV5(
            Link,
            {
              href: link.link_url,
              color: "gray.500",
              fontWeight: "semibold",
              size: { base: "xs", md: "m" },
              _hover: { color: "red.500" },
              children: link.link_title
            },
            link.link_title,
            !1,
            {
              fileName: "app/components/Footer/Footer.component.tsx",
              lineNumber: 48,
              columnNumber: 11
            },
            this
          ) }, link.link_title, !1, {
            fileName: "app/components/Footer/Footer.component.tsx",
            lineNumber: 47,
            columnNumber: 10
          }, this)) }, primary.title, !1, {
            fileName: "app/components/Footer/Footer.component.tsx",
            lineNumber: 44,
            columnNumber: 7
          }, this))
        },
        void 0,
        !1,
        {
          fileName: "app/components/Footer/Footer.component.tsx",
          lineNumber: 35,
          columnNumber: 4
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/Footer/Footer.component.tsx",
      lineNumber: 28,
      columnNumber: 3
    },
    this
  );
}
var Footer_component_default = Footer;

// app/components/Footer/index.tsx
var Footer_default = Footer_component_default;

// app/components/Header/Header.component.tsx
import { Box as Box6, Flex as Flex3, HStack, Image, useColorModeValue as useColorModeValue2 } from "@chakra-ui/react";
import { NavLink as NavLink2, useNavigate } from "@remix-run/react";

// app/components/MenuLink/MenuLink.component.tsx
import { NavLink, PrefetchPageLinks } from "@remix-run/react";
import { Fragment, jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
function MenuLink({ text, to: href, onClick }) {
  let styles2 = (isActive) => {
    let styles3 = {
      fontWeight: "bold",
      textTransform: "uppercase"
    };
    return isActive && (styles3.color = "#F05356"), styles3;
  };
  return /* @__PURE__ */ jsxDEV6(Fragment, { children: [
    /* @__PURE__ */ jsxDEV6(
      NavLink,
      {
        to: href,
        style: ({ isActive }) => styles2(isActive),
        onClick,
        children: text
      },
      void 0,
      !1,
      {
        fileName: "app/components/MenuLink/MenuLink.component.tsx",
        lineNumber: 18,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV6(PrefetchPageLinks, { page: href }, void 0, !1, {
      fileName: "app/components/MenuLink/MenuLink.component.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/MenuLink/MenuLink.component.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}
var MenuLink_component_default = MenuLink;

// app/components/MenuLink/index.tsx
var MenuLink_default = MenuLink_component_default;

// app/components/MobileMenu/MobileMenu.component.tsx
import { IconButton, VStack, Box as Box5 } from "@chakra-ui/react";
import { useState } from "react";
import { use100vh } from "react-div-100vh";

// app/components/HamburgerIcon/HamburgerIcon.component.tsx
import { Box as Box4 } from "@chakra-ui/react";
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var HamburgerIcon = ({ active = !1 }) => {
  let commonStyleProps = {
    transitionDuration: ".5s",
    transitionTimingFunction: "cubic-bezier(.25,.46,.45,.94)",
    borderRadius: "8px",
    height: "4px",
    bg: "gray.500"
  };
  return /* @__PURE__ */ jsxDEV7(Box4, { width: "32px", height: "28px", position: "relative", children: [
    /* @__PURE__ */ jsxDEV7(
      Box4,
      {
        transform: active ? "rotate(45deg) translateY(7px) translateX(5px)" : "",
        pos: "absolute",
        w: "32px",
        top: "0",
        ...commonStyleProps
      },
      void 0,
      !1,
      {
        fileName: "app/components/HamburgerIcon/HamburgerIcon.component.tsx",
        lineNumber: 14,
        columnNumber: 4
      },
      this
    ),
    /* @__PURE__ */ jsxDEV7(
      Box4,
      {
        transform: active ? "rotate(-45deg) translateY(-3px) translateX(3px)" : "",
        pos: "absolute",
        w: "32px",
        top: "12px",
        ...commonStyleProps
      },
      void 0,
      !1,
      {
        fileName: "app/components/HamburgerIcon/HamburgerIcon.component.tsx",
        lineNumber: 25,
        columnNumber: 4
      },
      this
    ),
    /* @__PURE__ */ jsxDEV7(
      Box4,
      {
        pos: "absolute",
        right: "0px",
        w: "20px",
        opacity: active ? "0" : "1",
        bottom: "0px",
        ...commonStyleProps
      },
      void 0,
      !1,
      {
        fileName: "app/components/HamburgerIcon/HamburgerIcon.component.tsx",
        lineNumber: 36,
        columnNumber: 4
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/HamburgerIcon/HamburgerIcon.component.tsx",
    lineNumber: 13,
    columnNumber: 3
  }, this);
}, HamburgerIcon_component_default = HamburgerIcon;

// app/components/HamburgerIcon/index.tsx
var HamburgerIcon_default = HamburgerIcon_component_default;

// app/components/MenuAccount/MenuAccount.component.tsx
import { Flex as Flex2, Text as Text2, Link as Link2 } from "@chakra-ui/react";

// app/components/ChurchSuiteMark/ChurchSuiteMark.component.tsx
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
function ChurchSuiteMark() {
  return /* @__PURE__ */ jsxDEV8(
    "svg",
    {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsxDEV8(
        "path",
        {
          d: "M11.9859 1.72366e-06C9.61309 0.00279741 7.29441 0.708961 5.32288 2.02924C3.35135 3.34951 1.81548 5.22463 0.909398 7.41759C0.00331408 9.61055 -0.23231 12.0229 0.232308 14.3497C0.696926 16.6766 1.84093 18.8135 3.51972 20.4903C5.19851 22.1671 7.33673 23.3086 9.66411 23.7705C11.9915 24.2323 14.4036 23.9939 16.5955 23.0852C18.7874 22.1765 20.6607 20.6385 21.9786 18.6654C23.2966 16.6923 24 14.3728 24 12C23.998 8.81558 22.7311 5.76238 20.478 3.51198C18.225 1.26158 15.1703 -0.00170329 11.9859 1.72366e-06ZM3.25322 9.13496C3.72854 7.65184 4.58431 6.31921 5.73522 5.26993C6.70778 4.36989 7.86111 3.68761 9.11826 3.26864C9.20823 3.23651 9.24679 3.26864 9.27764 3.34319C9.47173 3.9216 9.68509 4.5 9.85604 5.10154C10.1709 6.23173 10.405 7.38288 10.5566 8.54627C10.6221 9.03728 10.6607 9.52828 10.7095 10.0193L10.6915 10.0257C10.6915 10.2288 10.7095 10.4332 10.7237 10.6362C10.7237 10.7198 10.7005 10.7519 10.617 10.7481C9.28858 10.7223 7.96543 10.5734 6.66453 10.3033C5.52791 10.045 4.41112 9.70612 3.32263 9.2892C3.23008 9.2545 3.23008 9.2108 3.25322 9.13496ZM10.7147 13.7391C10.6478 14.8784 10.5 16.0115 10.2725 17.1298C10.0576 18.2015 9.76771 19.2568 9.40489 20.2879C9.36119 20.41 9.30849 20.5309 9.26607 20.653C9.23651 20.7275 9.19923 20.7571 9.11183 20.7249C6.94959 20.0099 5.1298 18.5176 4.00515 16.5373C3.69801 16.0059 3.44975 15.4426 3.26479 14.8573C3.23265 14.7571 3.26479 14.7159 3.3509 14.6851C4.42804 14.2742 5.53219 13.9379 6.65553 13.6787C7.7038 13.4572 8.76797 13.3193 9.83805 13.2661C10.0951 13.2661 10.3599 13.2455 10.617 13.2275C10.7121 13.2275 10.7455 13.2571 10.7352 13.356C10.7249 13.455 10.7211 13.6157 10.7147 13.7391ZM13.6787 6.86376C13.8218 6.07591 14.015 5.29798 14.2571 4.53471C14.3933 4.1491 14.5463 3.7635 14.6735 3.37789C14.7082 3.27764 14.7661 3.25964 14.8612 3.29435C16.0395 3.68169 17.1267 4.30478 18.0566 5.12569C18.9864 5.94661 19.7395 6.94817 20.2699 8.06941C20.437 8.41645 20.5591 8.78921 20.6954 9.14653C20.7301 9.23651 20.6954 9.27507 20.617 9.31234C19.6424 9.6747 18.647 9.97859 17.6362 10.2224C16.4667 10.4965 15.2745 10.663 14.0746 10.7198V10.7571H13.3278C13.2404 10.7571 13.2095 10.7339 13.2147 10.6414C13.2662 9.37165 13.4214 8.10824 13.6787 6.86376ZM17.8445 19.0656C16.9629 19.7944 15.9547 20.3548 14.8702 20.7185C14.7635 20.7571 14.7224 20.7185 14.6877 20.6324C14.3624 19.8301 14.1002 19.0037 13.9036 18.1607C13.7249 17.2686 13.5424 16.3779 13.401 15.4794C13.3085 14.8805 13.2853 14.2738 13.2301 13.6735C13.2332 13.5652 13.2272 13.4569 13.2121 13.3496C13.1954 13.2429 13.2416 13.2391 13.3201 13.2391H13.9332C15.0187 13.2974 16.0982 13.4392 17.162 13.6632C17.946 13.8458 18.7185 14.0771 19.4936 14.3059C19.8792 14.4152 20.2378 14.563 20.6105 14.6915C20.7147 14.7262 20.7391 14.7751 20.7031 14.8818C20.1732 16.5226 19.1805 17.9755 17.8445 19.0656Z",
          fill: "#323B6E"
        },
        void 0,
        !1,
        {
          fileName: "app/components/ChurchSuiteMark/ChurchSuiteMark.component.tsx",
          lineNumber: 10,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/ChurchSuiteMark/ChurchSuiteMark.component.tsx",
      lineNumber: 3,
      columnNumber: 5
    },
    this
  );
}
var ChurchSuiteMark_component_default = ChurchSuiteMark;

// app/components/ChurchSuiteMark/index.tsx
var ChurchSuiteMark_default = ChurchSuiteMark_component_default;

// app/components/MenuAccount/MenuAccount.component.tsx
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
function MenuAccount({ loggedIn, name, handleAuthClick }) {
  return /* @__PURE__ */ jsxDEV9(Flex2, { gap: 2, alignItems: "center", flexWrap: "wrap", children: [
    /* @__PURE__ */ jsxDEV9(ChurchSuiteMark_default, {}, void 0, !1, {
      fileName: "app/components/MenuAccount/MenuAccount.component.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    loggedIn && name && /* @__PURE__ */ jsxDEV9(Text2, { as: "span", fontWeight: "bold", children: name }, void 0, !1, {
      fileName: "app/components/MenuAccount/MenuAccount.component.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV9(
      Link2,
      {
        textDecoration: "underline",
        _hover: { textDecoration: "none" },
        onClick: handleAuthClick,
        children: loggedIn ? "Sign out" : "Sign in"
      },
      void 0,
      !1,
      {
        fileName: "app/components/MenuAccount/MenuAccount.component.tsx",
        lineNumber: 14,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/MenuAccount/MenuAccount.component.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
var MenuAccount_component_default = MenuAccount;

// app/components/MenuAccount/index.tsx
var MenuAccount_default = MenuAccount_component_default;

// app/components/MobileMenu/MobileMenu.component.tsx
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
function MobileMenu({ loggedIn, name, handleAuthClick }) {
  let isMobile = { base: "block", md: "none" }, [menuVisible, setMenuVisible] = useState(!1), viewportHeight = use100vh();
  return /* @__PURE__ */ jsxDEV10(Box5, { display: isMobile, children: [
    /* @__PURE__ */ jsxDEV10(
      IconButton,
      {
        width: "32px",
        px: "0",
        variant: "ghost",
        "aria-label": "Open navigation menu",
        onClick: () => setMenuVisible(!menuVisible),
        icon: /* @__PURE__ */ jsxDEV10(HamburgerIcon_default, { active: menuVisible }, void 0, !1, {
          fileName: "app/components/MobileMenu/MobileMenu.component.tsx",
          lineNumber: 21,
          columnNumber: 15
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/MobileMenu/MobileMenu.component.tsx",
        lineNumber: 15,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV10(
      VStack,
      {
        display: {
          base: menuVisible ? "flex" : "none",
          md: "none"
        },
        height: `calc(${viewportHeight ? viewportHeight + "px" : "100vh"} - 3.5rem)`,
        overflowY: "auto",
        bg: "white",
        as: "nav",
        position: "fixed",
        top: { base: "99px", md: "5rem" },
        zIndex: "dropdown",
        py: 8,
        left: 0,
        right: 0,
        gap: 8,
        transition: "transform 0.5s ease-in-out",
        transform: menuVisible ? "translate3d(0,0,0)" : "translate3d(0, -100%, 0)",
        children: [
          /* @__PURE__ */ jsxDEV10(MenuLink_default, { to: "/", text: "Home", onClick: () => setMenuVisible(!1) }, void 0, !1, {
            fileName: "app/components/MobileMenu/MobileMenu.component.tsx",
            lineNumber: 47,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV10(
            MenuLink_default,
            {
              to: "/prayerwall",
              text: "Prayer Wall",
              onClick: () => setMenuVisible(!1)
            },
            void 0,
            !1,
            {
              fileName: "app/components/MobileMenu/MobileMenu.component.tsx",
              lineNumber: 48,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV10(
            MenuLink_default,
            {
              to: "/request",
              text: "Submit a request",
              onClick: () => setMenuVisible(!1)
            },
            void 0,
            !1,
            {
              fileName: "app/components/MobileMenu/MobileMenu.component.tsx",
              lineNumber: 53,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV10(
            MenuAccount_default,
            {
              loggedIn,
              name,
              handleAuthClick
            },
            void 0,
            !1,
            {
              fileName: "app/components/MobileMenu/MobileMenu.component.tsx",
              lineNumber: 58,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/MobileMenu/MobileMenu.component.tsx",
        lineNumber: 24,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/MobileMenu/MobileMenu.component.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}
var MobileMenu_component_default = MobileMenu;

// app/components/MobileMenu/index.tsx
var MobileMenu_default = MobileMenu_component_default;

// app/components/Header/Header.component.tsx
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
function Header({ user }) {
  let navigate = useNavigate(), isDesktop = { base: "none", md: "flex" }, loggedIn = !!user, name = user?.name || "", handleAuthClick = () => {
    navigate(user ? "/auth/logout" : "/auth/login");
  };
  return /* @__PURE__ */ jsxDEV11(
    Box6,
    {
      position: "sticky",
      top: "0",
      zIndex: "sticky",
      bgColor: useColorModeValue2("gray.100", "gray.800"),
      py: "1.5rem",
      px: { base: 3, md: 4 },
      as: "header",
      flex: "0 0 auto",
      w: "100%",
      children: /* @__PURE__ */ jsxDEV11(Flex3, { justifyContent: "space-between", children: [
        /* @__PURE__ */ jsxDEV11(NavLink2, { to: "/", children: /* @__PURE__ */ jsxDEV11(Image, { src: "/LogoBlack.png", h: "51px", w: "63px" }, void 0, !1, {
          fileName: "app/components/Header/Header.component.tsx",
          lineNumber: 41,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/components/Header/Header.component.tsx",
          lineNumber: 40,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV11(HStack, { display: isDesktop, gap: "8", fontSize: { base: "sm", lg: "md" }, children: [
          /* @__PURE__ */ jsxDEV11(MenuLink_default, { to: "/", text: "Home" }, void 0, !1, {
            fileName: "app/components/Header/Header.component.tsx",
            lineNumber: 44,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV11(MenuLink_default, { to: "/prayerwall", text: "Prayer Wall" }, void 0, !1, {
            fileName: "app/components/Header/Header.component.tsx",
            lineNumber: 45,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV11(MenuLink_default, { to: "/request", text: "Submit a request" }, void 0, !1, {
            fileName: "app/components/Header/Header.component.tsx",
            lineNumber: 46,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV11(
            MenuAccount_default,
            {
              loggedIn,
              name,
              handleAuthClick
            },
            void 0,
            !1,
            {
              fileName: "app/components/Header/Header.component.tsx",
              lineNumber: 47,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Header/Header.component.tsx",
          lineNumber: 43,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV11(
          MobileMenu_default,
          {
            loggedIn,
            name,
            handleAuthClick
          },
          void 0,
          !1,
          {
            fileName: "app/components/Header/Header.component.tsx",
            lineNumber: 53,
            columnNumber: 9
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/Header/Header.component.tsx",
        lineNumber: 39,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/Header/Header.component.tsx",
      lineNumber: 28,
      columnNumber: 5
    },
    this
  );
}
var Header_component_default = Header;

// app/components/Header/index.tsx
var Header_default = Header_component_default;

// app/components/ErrorLayout/ErrorLayout.component.tsx
import { jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
var Document = withEmotionCache(({ children, title }, emotionCache) => {
  let serverSyleData = useContext(ServerStyleContext), clientStyleData = useContext(ClientStyleContext);
  return useEffect(() => {
    emotionCache.sheet.container = document.head;
    let tags = emotionCache.sheet.tags;
    emotionCache.sheet.flush(), tags.forEach((tag) => {
      emotionCache.sheet._insertTag(tag);
    }), clientStyleData?.reset();
  }, []), /* @__PURE__ */ jsxDEV12("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV12("head", { children: [
      /* @__PURE__ */ jsxDEV12("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/components/ErrorLayout/ErrorLayout.component.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV12("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/components/ErrorLayout/ErrorLayout.component.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV12("meta", { name: "robots", content: "index, follow" }, void 0, !1, {
        fileName: "app/components/ErrorLayout/ErrorLayout.component.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      title ? /* @__PURE__ */ jsxDEV12("title", { children: title }, void 0, !1, {
        fileName: "app/components/ErrorLayout/ErrorLayout.component.tsx",
        lineNumber: 39,
        columnNumber: 18
      }, this) : null,
      /* @__PURE__ */ jsxDEV12(Meta, {}, void 0, !1, {
        fileName: "app/components/ErrorLayout/ErrorLayout.component.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV12(Links, {}, void 0, !1, {
        fileName: "app/components/ErrorLayout/ErrorLayout.component.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      serverSyleData?.map(({ key, ids, css }) => /* @__PURE__ */ jsxDEV12(
        "style",
        {
          "data-emotion": `${key} ${ids.join(" ")}`,
          dangerouslySetInnerHTML: { __html: css }
        },
        key,
        !1,
        {
          fileName: "app/components/ErrorLayout/ErrorLayout.component.tsx",
          lineNumber: 43,
          columnNumber: 11
        },
        this
      ))
    ] }, void 0, !0, {
      fileName: "app/components/ErrorLayout/ErrorLayout.component.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV12("body", { children: [
      /* @__PURE__ */ jsxDEV12(ChakraProvider, { theme: theme_default, children: [
        /* @__PURE__ */ jsxDEV12(fonts_default, {}, void 0, !1, {
          fileName: "app/components/ErrorLayout/ErrorLayout.component.tsx",
          lineNumber: 53,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV12(VStack2, { margin: "auto", minH: "100vh", minW: { base: "none", lg: "100ch" }, maxW: "150ch", children: [
          /* @__PURE__ */ jsxDEV12(SkipNavLink, { zIndex: "skipLink", children: "Skip to content" }, void 0, !1, {
            fileName: "app/components/ErrorLayout/ErrorLayout.component.tsx",
            lineNumber: 55,
            columnNumber: 13
          }, this),
          children
        ] }, void 0, !0, {
          fileName: "app/components/ErrorLayout/ErrorLayout.component.tsx",
          lineNumber: 54,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/ErrorLayout/ErrorLayout.component.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV12(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/components/ErrorLayout/ErrorLayout.component.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV12(Scripts, {}, void 0, !1, {
        fileName: "app/components/ErrorLayout/ErrorLayout.component.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV12(LiveReload, {}, void 0, !1, {
        fileName: "app/components/ErrorLayout/ErrorLayout.component.tsx",
        lineNumber: 61,
        columnNumber: 52
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ErrorLayout/ErrorLayout.component.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ErrorLayout/ErrorLayout.component.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
});
function ErrorLayout({ error, caught }) {
  let title = caught ? caught.statusText : "Sorry, something went wrong", text = caught?.status === 404 ? "We couldn't find what you were looking for." : "We weren't expecting this to happen";
  return console.error(error), /* @__PURE__ */ jsxDEV12(Document, { cookies: "", ENV: "", children: [
    /* @__PURE__ */ jsxDEV12(Header_default, {}, void 0, !1, {
      fileName: "app/components/ErrorLayout/ErrorLayout.component.tsx",
      lineNumber: 75,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV12(Box7, { h: "75vh", children: [
      /* @__PURE__ */ jsxDEV12(Heading, { mb: 6, children: title }, void 0, !1, {
        fileName: "app/components/ErrorLayout/ErrorLayout.component.tsx",
        lineNumber: 77,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV12(Text3, { mb: 2, children: text }, void 0, !1, {
        fileName: "app/components/ErrorLayout/ErrorLayout.component.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV12(Text3, { mb: 6, children: "Click on the link below to head home and try again." }, void 0, !1, {
        fileName: "app/components/ErrorLayout/ErrorLayout.component.tsx",
        lineNumber: 79,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV12(MenuLink_default, { to: "/", text: "Return home" }, void 0, !1, {
        fileName: "app/components/ErrorLayout/ErrorLayout.component.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ErrorLayout/ErrorLayout.component.tsx",
      lineNumber: 76,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV12(Footer_default, {}, void 0, !1, {
      fileName: "app/components/ErrorLayout/ErrorLayout.component.tsx",
      lineNumber: 82,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ErrorLayout/ErrorLayout.component.tsx",
    lineNumber: 74,
    columnNumber: 5
  }, this);
}
var ErrorLayout_component_default = ErrorLayout;

// app/components/ErrorLayout/index.tsx
var ErrorLayout_default = ErrorLayout_component_default;

// app/root.tsx
import { jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
var meta = () => [
  { charset: "utf-8" },
  { title: "Tim Creamer Prayer Room" },
  { name: "viewport", content: "width=device-width,initial-scale=1" }
];
function links() {
  return [
    { rel: "stylesheet", href: global_default },
    {
      rel: "preload",
      href: "/LogoBlack.png",
      as: "image",
      type: "image/png"
    },
    {
      rel: "preload",
      href: "/home-main.jpeg",
      as: "image",
      type: "image/jpeg"
    },
    {
      rel: "preload",
      href: "/home-card.jpeg",
      as: "image",
      type: "image/jpeg"
    },
    {
      rel: "preload",
      href: "/logomark-transparent.svg",
      as: "image",
      type: "image/svg+xml"
    }
  ];
}
function ErrorBoundary() {
  let error = useRouteError();
  return /* @__PURE__ */ jsxDEV13(ErrorLayout_default, { error }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 74,
    columnNumber: 10
  }, this);
}
var Document2 = withEmotionCache2(
  ({ children, title, cookies, ENV }, emotionCache) => {
    let serverSyleData = useContext2(ServerStyleContext), clientStyleData = useContext2(ClientStyleContext);
    useEffect2(() => {
      emotionCache.sheet.container = document.head;
      let tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush(), tags.forEach((tag) => {
        emotionCache.sheet._insertTag(tag);
      }), clientStyleData?.reset();
    }, []);
    let colorModeManager = typeof cookies == "string" ? cookieStorageManagerSSR(cookies) : localStorageManager;
    return /* @__PURE__ */ jsxDEV13("html", { lang: "en", children: [
      /* @__PURE__ */ jsxDEV13("head", { children: [
        /* @__PURE__ */ jsxDEV13("meta", { charSet: "utf-8" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 104,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV13("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 105,
          columnNumber: 11
        }, this),
        title ? /* @__PURE__ */ jsxDEV13("title", { children: title }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 106,
          columnNumber: 20
        }, this) : null,
        /* @__PURE__ */ jsxDEV13(Meta2, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 107,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV13(Links2, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 108,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV13("script", { src: "/masonryLayout.js" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 109,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV13(
          "script",
          {
            async: !0,
            defer: !0,
            "data-website-id": "c9061907-a82b-4a6b-b3e0-ced2cbe43c8f",
            src: "https://analytics.thec3.uk/script.js"
          },
          void 0,
          !1,
          {
            fileName: "app/root.tsx",
            lineNumber: 110,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV13(
          "script",
          {
            dangerouslySetInnerHTML: {
              __html: `window.ENV = ${JSON.stringify(ENV)}`
            }
          },
          void 0,
          !1,
          {
            fileName: "app/root.tsx",
            lineNumber: 116,
            columnNumber: 11
          },
          this
        ),
        serverSyleData?.map(
          ({ key, ids, css }) => /* @__PURE__ */ jsxDEV13(
            "style",
            {
              "data-emotion": `${key} ${ids.join(" ")}`,
              dangerouslySetInnerHTML: { __html: css }
            },
            key,
            !1,
            {
              fileName: "app/root.tsx",
              lineNumber: 122,
              columnNumber: 11
            },
            this
          )
        )
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 103,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV13("body", { children: [
        /* @__PURE__ */ jsxDEV13(ColorModeScript, { initialColorMode: theme_default.config.initialColorMode }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 131,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV13(ChakraProvider2, { theme: theme_default, colorModeManager, children: [
          /* @__PURE__ */ jsxDEV13(fonts_default, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 133,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV13(
            VStack3,
            {
              margin: "auto",
              minH: "100vh",
              minW: { base: "none", lg: "100ch" },
              maxW: "150ch",
              children: [
                /* @__PURE__ */ jsxDEV13(SkipNavLink2, { zIndex: "skipLink", children: "Skip to content" }, void 0, !1, {
                  fileName: "app/root.tsx",
                  lineNumber: 140,
                  columnNumber: 15
                }, this),
                children
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/root.tsx",
              lineNumber: 134,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 132,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV13(ScrollRestoration2, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 144,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV13(Scripts2, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 145,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV13(LiveReload2, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 146,
          columnNumber: 54
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 130,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 102,
      columnNumber: 7
    }, this);
  }
), loader = async ({ request }) => json({
  cookies: request.headers.get("cookie") ?? "",
  ENV: {
    AIRTABLE_PAT: process.env.AIRTABLE_PAT,
    API_URL: process.env.API_URL,
    AUTH_TOKEN: process.env.AUTH_TOKEN
  }
});
function App(props) {
  let { cookies, ENV } = useLoaderData();
  return /* @__PURE__ */ jsxDEV13(Document2, { cookies, ENV, children: /* @__PURE__ */ jsxDEV13(Layout_default, { children: /* @__PURE__ */ jsxDEV13(Outlet, {}, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 170,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 169,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 168,
    columnNumber: 5
  }, this);
}

// app/routes/prayers/index.tsx
var prayers_exports = {};
__export(prayers_exports, {
  default: () => prayers_default,
  loader: () => loader2
});
import { useLoaderData as useLoaderData2 } from "@remix-run/react";

// app/api/requestMapper.ts
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
function mapResponseToPrayerPraiseRequests(airTableRecords) {
  let requests = airTableRecords;
  return requests ? requests.map((r) => {
    let date = dayjs(r.created_at);
    return {
      name: r.name,
      prayer: r.content,
      type: r.type,
      title: r.title,
      id: r.id,
      response: r.response_comment,
      created_at: date.format("ddd DD MMM YYYY"),
      fromNow: date.fromNow(),
      count: r.prayer_count || 0,
      location: r.location_name || ""
    };
  }) : [];
}

// app/api/airTableApi.ts
async function fetchRequests({ location } = {}, AIRTABLE_PAT, API_URL) {
  let searchParams = new URLSearchParams({ location }), baseurl = `${API_URL}/prayer-requests/`, url = location ? `${baseurl}?${searchParams.toString()}` : baseurl, response = await (await fetch(url, {
    headers: {
      Authorization: `Token ${AIRTABLE_PAT}`
    }
  })).json();
  if (response.detail)
    throw Error(response.detail);
  return mapResponseToPrayerPraiseRequests(response);
}
async function fetchSettings(AIRTABLE_PAT, API_URL) {
  return (await (await fetch(`${API_URL}/settings/`)).json()).map((setting) => ({
    enabled: setting.is_enabled,
    text: setting.button_text,
    name: setting.name
  }));
}
async function fetchUserProfile(AIRTABLE_PAT, API_URL) {
  let res = await fetch(`${API_URL}/user-profile/`, {
    headers: {
      // Authorization: `Token ${token}`,
      Authorization: `Token ${AIRTABLE_PAT}`
    }
  });
  if (!res.ok)
    return null;
  let data = await res.json();
  if (!Array.isArray(data) || data.length === 0)
    throw new Error("User profile not found.");
  let profile = data[0];
  return {
    user: profile.user,
    digestNotifications: profile.enable_digest_notifications,
    responseNotifications: profile.enable_repsonse_notifications
  };
}
async function updateUserProfile(profile, AIRTABLE_PAT, API_URL) {
  let res = await fetch(`${API_URL}/preferences/update/`, {
    method: "POST",
    headers: {
      Authorization: `Token ${AIRTABLE_PAT}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(profile)
  });
  if (!res.ok)
    throw new Error(`Failed to save settings: ${res.status}`);
  return res.json();
}
async function fetchVerses(AIRTABLE_PAT, API_URL) {
  return await (await fetch(`${API_URL}/prayer-inspiration/`)).json();
}
async function submitRequest(request, AIRTABLE_PAT, API_URL) {
  return request ? await fetch(`${API_URL}/prayer-requests/`, {
    method: "POST",
    headers: {
      Authorization: `Token ${AIRTABLE_PAT}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: request?.title,
      type: request.type,
      name: request?.name || "Anon",
      content: request?.prayer,
      location: request?.location
    })
  }) : !1;
}
async function incrementPrayerCount(id, currentCount, AIRTABLE_PAT, API_URL) {
  return (await (await fetch(
    `${API_URL}/prayer-requests/${id}/increment_prayer_count/`,
    {
      method: "POST",
      headers: {
        Authorization: `Token ${AIRTABLE_PAT}`,
        "Content-Type": "application/json"
      }
    }
  )).json()).prayer_count;
}
async function fetchLocations(AIRTABLE_PAT, API_URL) {
  let locations = await (await fetch(`${API_URL}/locations/`)).json();
  return locations ? locations.map((location) => ({
    name: location.name,
    id: location.id
  })) : [];
}
async function flagRequest(id, AIRTABLE_PAT, API_URL) {
  return (await (await fetch(`${API_URL}/prayer-requests/${id}/mark_flagged/`, {
    method: "POST",
    headers: {
      Authorization: `Token ${AIRTABLE_PAT}`,
      "Content-Type": "application/json"
    }
  })).json()).flagged_at;
}
async function fetchHomePageContent(AIRTABLE_PAT, API_URL) {
  let keyValuePairs = (await (await fetch(`${API_URL}/content/`)).json()).map(
    (record) => record
  );
  return {
    subTitle: getValue(keyValuePairs, "page_subtitle"),
    card: {
      title: getValue(keyValuePairs, "card_title"),
      subTitle: getValue(keyValuePairs, "card_subtitle"),
      href: getValue(keyValuePairs, "card_link"),
      text: getValue(keyValuePairs, "card_description"),
      img: ""
    }
  };
}
function getValue(values, key, defaultVal = "") {
  return values.find((f) => f.key === key)?.value || defaultVal;
}

// app/layouts/full-screen-prayers/full-screen-prayers.layout.tsx
import { useEffect as useEffect3, useState as useState2 } from "react";
import { Flex as Flex5, Switch } from "@chakra-ui/react";

// app/components/FeaturePrayerCard/FeaturePrayerCard.component.tsx
import { Flex as Flex4, Text as Text5, useColorModeValue as useColorModeValue4, useDisclosure } from "@chakra-ui/react";

// app/components/Praise/Praise.component.tsx
import { createIcon } from "@chakra-ui/react";
import { Fragment as Fragment2, jsxDEV as jsxDEV14 } from "react/jsx-dev-runtime";
var Praise = createIcon({
  displayName: "Praise",
  path: /* @__PURE__ */ jsxDEV14(Fragment2, { children: /* @__PURE__ */ jsxDEV14(
    "path",
    {
      fill: "none",
      d: "M4.19561 25V22.8483C2.67389 22.4621 1 19.1738 1 17.7172C1 16.3864 1 12.0987 1 6.571C1 5.68856 1.71536 4.97241 2.59781 4.97241V4.97241C3.48025 4.97241 4.19561 5.68778 4.19561 6.57022V12.2552V4.48123C4.19561 3.47273 5.01317 2.65517 6.02167 2.65517V2.65517C7.03018 2.65517 7.84774 3.47273 7.84774 4.48123V11.2621V2.94019C7.84774 1.86866 8.71639 1 9.78793 1H10.0729C10.9871 1 11.7281 1.74105 11.7281 2.65517V2.65517V11.2621M13.3259 25V23.3448C13.3259 23.3448 15.3802 21.1931 16.065 20.6966C18.0874 19.2301 17.6628 17.0552 18.3476 15.8966C19.0324 14.7379 19.7171 14.0759 21.9997 13.0828C23.3693 12.4869 23.3693 11.0966 21.7715 11.0966C19.1689 11.0966 17.1302 12.6414 15.3802 13.5793V4.24976C15.3802 3.33633 14.7053 2.56341 13.8002 2.44034V2.44034C12.704 2.2913 11.7281 3.14348 11.7281 4.24976V5.63448",
      stroke: "#3E4545",
      strokeWidth: "2",
      strokeLinejoin: "round"
    },
    void 0,
    !1,
    {
      fileName: "app/components/Praise/Praise.component.tsx",
      lineNumber: 7,
      columnNumber: 4
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/Praise/Praise.component.tsx",
    lineNumber: 6,
    columnNumber: 3
  }, this)
}), Praise_component_default = Praise;

// app/components/Praise/index.tsx
var Praise_default = Praise_component_default;

// app/components/PrayerHands/PrayerHands.component.tsx
import { createIcon as createIcon2 } from "@chakra-ui/react";
import { Fragment as Fragment3, jsxDEV as jsxDEV15 } from "react/jsx-dev-runtime";
var PrayerHands = createIcon2({
  displayName: "PrayerHands",
  path: /* @__PURE__ */ jsxDEV15(Fragment3, { children: [
    /* @__PURE__ */ jsxDEV15(
      "path",
      {
        fill: "none",
        d: "M1 22.1636L3.16669 20.0909V14.3091C3.11114 13.9455 3.36669 12.4982 4.83338 9.61818C6.10748 7.11633 7.76729 3.93943 9.0917 1.86103C9.42669 1.33532 10.0661 1.10456 10.6692 1.26244V1.26244C11.4879 1.47681 11.9661 2.32698 11.7241 3.13801L10.0834 8.63636M6.50006 14.3091L8.80376 9.43073C9.11292 8.77604 9.83657 8.42532 10.542 8.58829V8.58829C11.4175 8.79055 11.9344 9.69666 11.6628 10.5532L10.3334 14.7455L11.1115 18.0326C11.7449 20.7083 10.6341 23.4941 8.33342 25V25",
        stroke: "#3E4545",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      void 0,
      !1,
      {
        fileName: "app/components/PrayerHands/PrayerHands.component.tsx",
        lineNumber: 7,
        columnNumber: 4
      },
      this
    ),
    /* @__PURE__ */ jsxDEV15(
      "path",
      {
        fill: "none",
        d: "M23 22.1636L20.8333 20.0909V14.3091C20.8889 13.9455 20.6333 12.4982 19.1666 9.61818C17.8925 7.11633 16.2327 3.93943 14.9083 1.86103C14.5733 1.33532 13.9339 1.10456 13.3308 1.26244V1.26244C12.5121 1.47681 12.0339 2.32698 12.2759 3.13801L13.9166 8.63636M17.4999 14.3091L15.1962 9.43073C14.8871 8.77604 14.1634 8.42532 13.458 8.58829V8.58829C12.5825 8.79055 12.0656 9.69666 12.3372 10.5532L13.6666 14.7455L12.9773 17.5343C12.2845 20.3376 13.3453 23.2825 15.6666 25V25",
        stroke: "#3E4545",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      void 0,
      !1,
      {
        fileName: "app/components/PrayerHands/PrayerHands.component.tsx",
        lineNumber: 15,
        columnNumber: 4
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/PrayerHands/PrayerHands.component.tsx",
    lineNumber: 6,
    columnNumber: 3
  }, this)
}), PrayerHands_component_default = PrayerHands;

// app/components/PrayerHands/index.tsx
var PrayerHands_default = PrayerHands_component_default;

// app/components/PrayerModal/PrayerModal.component.tsx
import {
  Modal,
  Text as Text4,
  ModalOverlay,
  ModalContent,
  useColorModeValue as useColorModeValue3,
  ModalBody
} from "@chakra-ui/react";
import { jsxDEV as jsxDEV16 } from "react/jsx-dev-runtime";
function PrayerModal({
  prayer,
  name,
  location,
  bgColor,
  isOpen,
  onClose
}) {
  let textColor = useColorModeValue3("inherit", "whiteAlpha.900");
  return /* @__PURE__ */ jsxDEV16(
    Modal,
    {
      blockScrollOnMount: !1,
      isOpen,
      onClose,
      isCentered: !0,
      size: "xl",
      motionPreset: "slideInBottom",
      children: [
        /* @__PURE__ */ jsxDEV16(ModalOverlay, {}, void 0, !1, {
          fileName: "app/components/PrayerModal/PrayerModal.component.tsx",
          lineNumber: 30,
          columnNumber: 4
        }, this),
        /* @__PURE__ */ jsxDEV16(
          ModalContent,
          {
            bgColor: useColorModeValue3("gray.100", "gray.800"),
            borderTop: "0.25em solid",
            borderColor: bgColor,
            py: 10,
            px: 10,
            maxW: "75vw",
            children: /* @__PURE__ */ jsxDEV16(ModalBody, { children: [
              /* @__PURE__ */ jsxDEV16(Text4, { color: textColor, size: "xxl", mb: 5, children: prayer }, void 0, !1, {
                fileName: "app/components/PrayerModal/PrayerModal.component.tsx",
                lineNumber: 40,
                columnNumber: 6
              }, this),
              /* @__PURE__ */ jsxDEV16(
                Text4,
                {
                  fontWeight: "bold",
                  size: "xl",
                  color: textColor,
                  mb: 2,
                  children: `${name} ${location ? ` (${location})` : ""}`
                },
                void 0,
                !1,
                {
                  fileName: "app/components/PrayerModal/PrayerModal.component.tsx",
                  lineNumber: 43,
                  columnNumber: 6
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/PrayerModal/PrayerModal.component.tsx",
              lineNumber: 39,
              columnNumber: 5
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/PrayerModal/PrayerModal.component.tsx",
            lineNumber: 31,
            columnNumber: 4
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/PrayerModal/PrayerModal.component.tsx",
      lineNumber: 22,
      columnNumber: 3
    },
    this
  );
}
var PrayerModal_component_default = PrayerModal;

// app/components/PrayerModal/index.tsx
var PrayerModal_default = PrayerModal_component_default;

// app/components/FeaturePrayerCard/FeaturePrayerCard.component.tsx
import { jsxDEV as jsxDEV17 } from "react/jsx-dev-runtime";
var FeaturePrayerCard = ({ data }) => {
  let bgColor = data.type == "praise" ? "yellow.500" : "teal.500", textColor = useColorModeValue4("inherit", "whiteAlpha.900"), { isOpen, onClose, onOpen } = useDisclosure();
  return /* @__PURE__ */ jsxDEV17(
    Flex4,
    {
      bgColor: useColorModeValue4("white", "gray.800"),
      boxShadow: useColorModeValue4(
        "0px 0px 2px rgba(0, 0, 0, 0.25)",
        "0px 0px 2px rgba(255, 255, 255, 0.25)"
      ),
      p: 5,
      alignContent: "space-between",
      borderTop: "0.25em solid",
      borderColor: bgColor,
      _hover: {
        cursor: "pointer"
      },
      w: "100%",
      flexDirection: "column",
      justifyContent: "space-between",
      children: [
        /* @__PURE__ */ jsxDEV17(Flex4, { justifyContent: "flex-end", children: data.type == "praise" ? /* @__PURE__ */ jsxDEV17(Praise_default, { w: "24px", h: "26px" }, void 0, !1, {
          fileName: "app/components/FeaturePrayerCard/FeaturePrayerCard.component.tsx",
          lineNumber: 31,
          columnNumber: 6
        }, this) : /* @__PURE__ */ jsxDEV17(PrayerHands_default, { w: "24px", h: "26px" }, void 0, !1, {
          fileName: "app/components/FeaturePrayerCard/FeaturePrayerCard.component.tsx",
          lineNumber: 33,
          columnNumber: 6
        }, this) }, void 0, !1, {
          fileName: "app/components/FeaturePrayerCard/FeaturePrayerCard.component.tsx",
          lineNumber: 29,
          columnNumber: 4
        }, this),
        /* @__PURE__ */ jsxDEV17(Text5, { color: textColor, size: "xl", mb: 2, mt: 2, onClick: onOpen, children: data.prayer }, void 0, !1, {
          fileName: "app/components/FeaturePrayerCard/FeaturePrayerCard.component.tsx",
          lineNumber: 36,
          columnNumber: 4
        }, this),
        /* @__PURE__ */ jsxDEV17(Flex4, { direction: "row", justifyContent: "space-between", children: /* @__PURE__ */ jsxDEV17(Text5, { fontWeight: "bold", color: textColor, mb: 2, children: `${data.name} ${data.location ? ` (${data.location})` : ""}` }, void 0, !1, {
          fileName: "app/components/FeaturePrayerCard/FeaturePrayerCard.component.tsx",
          lineNumber: 40,
          columnNumber: 5
        }, this) }, void 0, !1, {
          fileName: "app/components/FeaturePrayerCard/FeaturePrayerCard.component.tsx",
          lineNumber: 39,
          columnNumber: 4
        }, this),
        /* @__PURE__ */ jsxDEV17(
          PrayerModal_default,
          {
            prayer: data.prayer,
            name: data.name,
            location: data.location,
            bgColor,
            isOpen,
            onClose
          },
          void 0,
          !1,
          {
            fileName: "app/components/FeaturePrayerCard/FeaturePrayerCard.component.tsx",
            lineNumber: 46,
            columnNumber: 4
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/FeaturePrayerCard/FeaturePrayerCard.component.tsx",
      lineNumber: 12,
      columnNumber: 3
    },
    this
  );
}, FeaturePrayerCard_component_default = FeaturePrayerCard;

// app/components/FeaturePrayerCard/MasonryGridItem/MasonryGridItem.component.tsx
import { jsxDEV as jsxDEV18 } from "react/jsx-dev-runtime";
var MasonryGridItem = ({ request }) => /* @__PURE__ */ jsxDEV18("div", { className: `grid-item grid-item-${request.id}`, children: /* @__PURE__ */ jsxDEV18(FeaturePrayerCard_component_default, { data: request }, void 0, !1, {
  fileName: "app/components/FeaturePrayerCard/MasonryGridItem/MasonryGridItem.component.tsx",
  lineNumber: 6,
  columnNumber: 3
}, this) }, request.id, !1, {
  fileName: "app/components/FeaturePrayerCard/MasonryGridItem/MasonryGridItem.component.tsx",
  lineNumber: 5,
  columnNumber: 2
}, this), MasonryGridItem_component_default = MasonryGridItem;

// app/components/FeaturePrayerCard/MasonryGridItem/index.tsx
var MasonryGridItem_default = MasonryGridItem_component_default;

// app/layouts/full-screen-prayers/masonry.tsx
function initialiseMasonry() {
  let grid = document.querySelector(".grid");
  return {
    msnry: new window.Masonry(grid, {
      // options...
      itemSelector: ".grid-item",
      columnWidth: ".grid-sizer",
      percentPosition: !0,
      horizontalOrder: !0,
      transitionDuration: "1s",
      gutter: ".gutter-sizer",
      stamp: ".stamp",
      fitWidth: !0,
      initLayout: !1
    }),
    grid
  };
}
function masonryPrependElements(masonry, grid, elems) {
  !masonry || !grid || !masonry.layout || !masonry.prepended || !masonry.reloadItems || (elems.map((elem) => grid?.prepend(elem)), masonry.prepended(elems), masonry.layout());
}

// app/layouts/full-screen-prayers/full-screen-prayers.layout.tsx
import { Fragment as Fragment4, jsxDEV as jsxDEV19 } from "react/jsx-dev-runtime";
var AUTO_UPDATE_INTERVAL = 7500, AUTO_UPDATE_REQUESTS = 3, DEFAULT_REQUESTS_DISPLAYED = 15, FullScreenPrayerLayout = ({ requests }) => {
  let [autoUpdate, setAutoUpdate] = useState2(!1), toggleAutoUpdate = () => setAutoUpdate(!autoUpdate), masonry, gridElement;
  if (typeof document < "u" && typeof window < "u") {
    let { msnry, grid } = initialiseMasonry();
    gridElement = grid, masonry = msnry;
  }
  let [buffer] = useState2([...requests]);
  function addRequestsToGrid(countToAdd) {
    if (buffer.length === 0)
      return;
    let requestsToAdd = selectNextRequestsFromBuffer(countToAdd || (autoUpdate ? AUTO_UPDATE_REQUESTS : 0)), elems = [];
    requestsToAdd?.forEach((req) => {
      let elem = document.querySelector(
        `.requestsBuffer .grid-item-${req.id}`
      );
      elem && elems.push(elem);
    }), masonryPrependElements(masonry, gridElement, elems);
  }
  function selectNextRequestsFromBuffer(countToAdd) {
    let requestsToDisplay = [];
    for (let i = 1; i <= countToAdd; i++) {
      let request = buffer.shift();
      request && requestsToDisplay.push(request);
    }
    return requestsToDisplay;
  }
  return useEffect3(() => {
    addRequestsToGrid(DEFAULT_REQUESTS_DISPLAYED);
  }, []), useEffect3(() => {
    let interval = setInterval(() => {
      addRequestsToGrid();
    }, AUTO_UPDATE_INTERVAL);
    return () => {
      clearInterval(interval);
    };
  }), /* @__PURE__ */ jsxDEV19(Fragment4, { children: [
    /* @__PURE__ */ jsxDEV19(Flex5, { mb: 33, direction: "row-reverse", children: /* @__PURE__ */ jsxDEV19(Switch, { onChange: toggleAutoUpdate }, void 0, !1, {
      fileName: "app/layouts/full-screen-prayers/full-screen-prayers.layout.tsx",
      lineNumber: 96,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/layouts/full-screen-prayers/full-screen-prayers.layout.tsx",
      lineNumber: 95,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ jsxDEV19("div", { className: "grid-container", children: /* @__PURE__ */ jsxDEV19("div", { className: "grid", children: [
      /* @__PURE__ */ jsxDEV19("div", { className: "grid-sizer" }, void 0, !1, {
        fileName: "app/layouts/full-screen-prayers/full-screen-prayers.layout.tsx",
        lineNumber: 100,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ jsxDEV19("div", { className: "gutter-sizer" }, void 0, !1, {
        fileName: "app/layouts/full-screen-prayers/full-screen-prayers.layout.tsx",
        lineNumber: 101,
        columnNumber: 6
      }, this)
    ] }, void 0, !0, {
      fileName: "app/layouts/full-screen-prayers/full-screen-prayers.layout.tsx",
      lineNumber: 99,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/layouts/full-screen-prayers/full-screen-prayers.layout.tsx",
      lineNumber: 98,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ jsxDEV19("div", { className: "requestsBuffer", style: { display: "none" }, children: requests.map((request) => /* @__PURE__ */ jsxDEV19(
      MasonryGridItem_default,
      {
        request
      },
      request.id,
      !1,
      {
        fileName: "app/layouts/full-screen-prayers/full-screen-prayers.layout.tsx",
        lineNumber: 106,
        columnNumber: 6
      },
      this
    )) }, void 0, !1, {
      fileName: "app/layouts/full-screen-prayers/full-screen-prayers.layout.tsx",
      lineNumber: 104,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/layouts/full-screen-prayers/full-screen-prayers.layout.tsx",
    lineNumber: 94,
    columnNumber: 3
  }, this);
}, full_screen_prayers_layout_default = FullScreenPrayerLayout;

// app/get-env.ts
function isBrowser() {
  return typeof window < "u";
}
function getEnv() {
  return isBrowser() ? window.ENV : {
    API_URL: process.env.API_URL,
    AIRTABLE_PAT: process.env.AIRTABLE_PAT,
    AUTH_TOKEN: process.env.AUTH_TOKEN
  };
}
var get_env_default = getEnv;

// app/routes/prayers/index.tsx
import { jsxDEV as jsxDEV20 } from "react/jsx-dev-runtime";
var loader2 = async () => {
  let env2 = get_env_default();
  return { requests: await fetchRequests({}, env2.AIRTABLE_PAT, env2.API_URL) };
}, PrayerWall = () => {
  let { requests } = useLoaderData2();
  return /* @__PURE__ */ jsxDEV20(full_screen_prayers_layout_default, { requests }, void 0, !1, {
    fileName: "app/routes/prayers/index.tsx",
    lineNumber: 19,
    columnNumber: 10
  }, this);
}, prayers_default = PrayerWall;

// app/routes/__main.tsx
var main_exports = {};
__export(main_exports, {
  default: () => main_default,
  loader: () => loader3
});
import { useLoaderData as useLoaderData3 } from "@remix-run/react";
import { SkipNavContent } from "@chakra-ui/skip-nav";
import { Outlet as Outlet2 } from "@remix-run/react";

// node_modules/remix-auth/build/index.js
var Authenticator = class {
  /**
   * A map of the configured strategies, the key is the name of the strategy
   * @private
   */
  strategies = /* @__PURE__ */ new Map();
  /**
   * Call this method with the Strategy, the optional name allows you to setup
   * the same strategy multiple times with different names.
   * It returns the Authenticator instance for concatenation.
   * @example
   * auth.use(new SomeStrategy((user) => Promise.resolve(user)));
   * auth.use(new SomeStrategy((user) => Promise.resolve(user)), "another");
   */
  use(strategy, name) {
    return this.strategies.set(name ?? strategy.name, strategy), this;
  }
  /**
   * Call this method with the name of the strategy you want to remove.
   * It returns the Authenticator instance for concatenation.
   * @example
   * auth.unuse("another").unuse("some");
   */
  unuse(name) {
    return this.strategies.delete(name), this;
  }
  /**
   * Call this method with the name of a strategy you want to get.
   * It returns the Strategy instance or null if the strategy is not found.
   * @param name
   * @returns
   */
  get(name) {
    return this.strategies.get(name) ?? null;
  }
  /**
   * Call this to authenticate a request using some strategy. You pass the name
   * of the strategy you want to use and the request to authenticate.
   * @example
   * async function action({ request }: ActionFunctionArgs) {
   *   let user = await auth.authenticate("strategy-name", request);
   * };
   */
  authenticate(strategy, request) {
    let instance = this.get(strategy);
    if (!instance)
      throw new ReferenceError(`Strategy ${strategy} not found.`);
    return instance.authenticate(new Request(request.url, request));
  }
};

// app/services/auth.server.ts
import { createCookieSessionStorage } from "@remix-run/node";

// node_modules/remix-auth-oauth2/build/index.js
import { ObjectParser } from "@edgefirst-dev/data/parser";
import "@mjackson/headers";

// node_modules/arctic/dist/request.js
import * as encoding2 from "@oslojs/encoding";

// node_modules/arctic/dist/oauth2.js
import * as encoding from "@oslojs/encoding";
import * as sha2 from "@oslojs/crypto/sha2";
var OAuth2Tokens = class {
  data;
  constructor(data) {
    this.data = data;
  }
  tokenType() {
    if ("token_type" in this.data && typeof this.data.token_type == "string")
      return this.data.token_type;
    throw new Error("Missing or invalid 'token_type' field");
  }
  accessToken() {
    if ("access_token" in this.data && typeof this.data.access_token == "string")
      return this.data.access_token;
    throw new Error("Missing or invalid 'access_token' field");
  }
  accessTokenExpiresInSeconds() {
    if ("expires_in" in this.data && typeof this.data.expires_in == "number")
      return this.data.expires_in;
    throw new Error("Missing or invalid 'expires_in' field");
  }
  accessTokenExpiresAt() {
    return new Date(Date.now() + this.accessTokenExpiresInSeconds() * 1e3);
  }
  hasRefreshToken() {
    return "refresh_token" in this.data && typeof this.data.refresh_token == "string";
  }
  refreshToken() {
    if ("refresh_token" in this.data && typeof this.data.refresh_token == "string")
      return this.data.refresh_token;
    throw new Error("Missing or invalid 'refresh_token' field");
  }
  hasScopes() {
    return "scope" in this.data && typeof this.data.scope == "string";
  }
  scopes() {
    if ("scope" in this.data && typeof this.data.scope == "string")
      return this.data.scope.split(" ");
    throw new Error("Missing or invalid 'scope' field");
  }
  idToken() {
    if ("id_token" in this.data && typeof this.data.id_token == "string")
      return this.data.id_token;
    throw new Error("Missing or invalid field 'id_token'");
  }
};
function createS256CodeChallenge(codeVerifier) {
  let codeChallengeBytes = sha2.sha256(new TextEncoder().encode(codeVerifier));
  return encoding.encodeBase64urlNoPadding(codeChallengeBytes);
}
function generateCodeVerifier() {
  let randomValues = new Uint8Array(32);
  return crypto.getRandomValues(randomValues), encoding.encodeBase64urlNoPadding(randomValues);
}
function generateState() {
  let randomValues = new Uint8Array(32);
  return crypto.getRandomValues(randomValues), encoding.encodeBase64urlNoPadding(randomValues);
}

// node_modules/arctic/dist/request.js
function createOAuth2Request(endpoint, body) {
  let bodyBytes = new TextEncoder().encode(body.toString()), request = new Request(endpoint, {
    method: "POST",
    body: bodyBytes
  });
  return request.headers.set("Content-Type", "application/x-www-form-urlencoded"), request.headers.set("Accept", "application/json"), request.headers.set("User-Agent", "arctic"), request.headers.set("Content-Length", bodyBytes.byteLength.toString()), request;
}
function encodeBasicCredentials(username, password) {
  let bytes = new TextEncoder().encode(`${username}:${password}`);
  return encoding2.encodeBase64(bytes);
}
async function sendTokenRequest(request) {
  let response;
  try {
    response = await fetch(request);
  } catch (e) {
    throw new ArcticFetchError(e);
  }
  if (response.status === 400 || response.status === 401) {
    let data;
    try {
      data = await response.json();
    } catch {
      throw new UnexpectedResponseError(response.status);
    }
    if (typeof data != "object" || data === null)
      throw new UnexpectedErrorResponseBodyError(response.status, data);
    let error;
    try {
      error = createOAuth2RequestError(data);
    } catch {
      throw new UnexpectedErrorResponseBodyError(response.status, data);
    }
    throw error;
  }
  if (response.status === 200) {
    let data;
    try {
      data = await response.json();
    } catch {
      throw new UnexpectedResponseError(response.status);
    }
    if (typeof data != "object" || data === null)
      throw new UnexpectedErrorResponseBodyError(response.status, data);
    return new OAuth2Tokens(data);
  }
  throw response.body !== null && await response.body.cancel(), new UnexpectedResponseError(response.status);
}
async function sendTokenRevocationRequest(request) {
  let response;
  try {
    response = await fetch(request);
  } catch (e) {
    throw new ArcticFetchError(e);
  }
  if (response.status === 400 || response.status === 401) {
    let data;
    try {
      data = await response.json();
    } catch {
      throw new UnexpectedErrorResponseBodyError(response.status, null);
    }
    if (typeof data != "object" || data === null)
      throw new UnexpectedErrorResponseBodyError(response.status, data);
    let error;
    try {
      error = createOAuth2RequestError(data);
    } catch {
      throw new UnexpectedErrorResponseBodyError(response.status, data);
    }
    throw error;
  }
  if (response.status === 200) {
    response.body !== null && await response.body.cancel();
    return;
  }
  throw response.body !== null && await response.body.cancel(), new UnexpectedResponseError(response.status);
}
function createOAuth2RequestError(result) {
  let code;
  if ("error" in result && typeof result.error == "string")
    code = result.error;
  else
    throw new Error("Invalid error response");
  let description = null, uri = null, state = null;
  if ("error_description" in result) {
    if (typeof result.error_description != "string")
      throw new Error("Invalid data");
    description = result.error_description;
  }
  if ("error_uri" in result) {
    if (typeof result.error_uri != "string")
      throw new Error("Invalid data");
    uri = result.error_uri;
  }
  if ("state" in result) {
    if (typeof result.state != "string")
      throw new Error("Invalid data");
    state = result.state;
  }
  return new OAuth2RequestError(code, description, uri, state);
}
var ArcticFetchError = class extends Error {
  constructor(cause) {
    super("Failed to send request", {
      cause
    });
  }
}, OAuth2RequestError = class extends Error {
  code;
  description;
  uri;
  state;
  constructor(code, description, uri, state) {
    super(`OAuth request error: ${code}`), this.code = code, this.description = description, this.uri = uri, this.state = state;
  }
}, UnexpectedResponseError = class extends Error {
  status;
  constructor(responseStatus) {
    super("Unexpected error response"), this.status = responseStatus;
  }
}, UnexpectedErrorResponseBodyError = class extends Error {
  status;
  data;
  constructor(status, data) {
    super("Unexpected error response body"), this.status = status, this.data = data;
  }
};

// node_modules/arctic/dist/client.js
var OAuth2Client = class {
  clientId;
  clientPassword;
  redirectURI;
  constructor(clientId, clientPassword, redirectURI) {
    this.clientId = clientId, this.clientPassword = clientPassword, this.redirectURI = redirectURI;
  }
  createAuthorizationURL(authorizationEndpoint, state, scopes) {
    let url = new URL(authorizationEndpoint);
    return url.searchParams.set("response_type", "code"), url.searchParams.set("client_id", this.clientId), this.redirectURI !== null && url.searchParams.set("redirect_uri", this.redirectURI), url.searchParams.set("state", state), scopes.length > 0 && url.searchParams.set("scope", scopes.join(" ")), url;
  }
  createAuthorizationURLWithPKCE(authorizationEndpoint, state, codeChallengeMethod, codeVerifier, scopes) {
    let url = new URL(authorizationEndpoint);
    if (url.searchParams.set("response_type", "code"), url.searchParams.set("client_id", this.clientId), this.redirectURI !== null && url.searchParams.set("redirect_uri", this.redirectURI), url.searchParams.set("state", state), codeChallengeMethod === CodeChallengeMethod.S256) {
      let codeChallenge = createS256CodeChallenge(codeVerifier);
      url.searchParams.set("code_challenge_method", "S256"), url.searchParams.set("code_challenge", codeChallenge);
    } else
      codeChallengeMethod === CodeChallengeMethod.Plain && (url.searchParams.set("code_challenge_method", "plain"), url.searchParams.set("code_challenge", codeVerifier));
    return scopes.length > 0 && url.searchParams.set("scope", scopes.join(" ")), url;
  }
  async validateAuthorizationCode(tokenEndpoint, code, codeVerifier) {
    let body = new URLSearchParams();
    body.set("grant_type", "authorization_code"), body.set("code", code), this.redirectURI !== null && body.set("redirect_uri", this.redirectURI), codeVerifier !== null && body.set("code_verifier", codeVerifier), this.clientPassword === null && body.set("client_id", this.clientId);
    let request = createOAuth2Request(tokenEndpoint, body);
    if (this.clientPassword !== null) {
      let encodedCredentials = encodeBasicCredentials(this.clientId, this.clientPassword);
      request.headers.set("Authorization", `Basic ${encodedCredentials}`);
    }
    return await sendTokenRequest(request);
  }
  async refreshAccessToken(tokenEndpoint, refreshToken, scopes) {
    let body = new URLSearchParams();
    body.set("grant_type", "refresh_token"), body.set("refresh_token", refreshToken), this.clientPassword === null && body.set("client_id", this.clientId), scopes.length > 0 && body.set("scope", scopes.join(" "));
    let request = createOAuth2Request(tokenEndpoint, body);
    if (this.clientPassword !== null) {
      let encodedCredentials = encodeBasicCredentials(this.clientId, this.clientPassword);
      request.headers.set("Authorization", `Basic ${encodedCredentials}`);
    }
    return await sendTokenRequest(request);
  }
  async revokeToken(tokenRevocationEndpoint, token) {
    let body = new URLSearchParams();
    body.set("token", token), this.clientPassword === null && body.set("client_id", this.clientId);
    let request = createOAuth2Request(tokenRevocationEndpoint, body);
    if (this.clientPassword !== null) {
      let encodedCredentials = encodeBasicCredentials(this.clientId, this.clientPassword);
      request.headers.set("Authorization", `Basic ${encodedCredentials}`);
    }
    await sendTokenRevocationRequest(request);
  }
}, CodeChallengeMethod;
(function(CodeChallengeMethod2) {
  CodeChallengeMethod2[CodeChallengeMethod2.S256 = 0] = "S256", CodeChallengeMethod2[CodeChallengeMethod2.Plain = 1] = "Plain";
})(CodeChallengeMethod || (CodeChallengeMethod = {}));

// node_modules/arctic/dist/providers/apple.js
import * as jwt from "@oslojs/jwt";

// node_modules/arctic/dist/oidc.js
import * as jwt2 from "@oslojs/jwt";

// node_modules/remix-auth/build/strategy.js
var Strategy = class {
  verify;
  constructor(verify) {
    this.verify = verify;
  }
};

// node_modules/remix-auth-oauth2/build/lib/redirect.js
function redirect(url, init = 302) {
  let responseInit = init;
  typeof responseInit == "number" ? responseInit = { status: responseInit } : typeof responseInit.status > "u" && (responseInit.status = 302);
  let headers = new Headers(responseInit.headers);
  return headers.set("Location", url), new Response(null, { ...responseInit, headers });
}

// node_modules/remix-auth-oauth2/build/lib/store.js
import { Cookie, SetCookie } from "@mjackson/headers";
var StateStore = class {
  states = /* @__PURE__ */ new Set();
  codeVerifiers = /* @__PURE__ */ new Map();
  state;
  codeVerifier;
  constructor(params = new URLSearchParams()) {
    for (let [state, verifier] of params)
      state !== "state" && (this.states.add(state), this.codeVerifiers.set(state, verifier));
  }
  /**
   * Append a new state and code verifier to the store
   */
  set(state, verifier) {
    this.state = state, this.codeVerifier = verifier, this.states.add(state), verifier && this.codeVerifiers.set(state, verifier);
  }
  /**
   * Check if the store has the given state
   */
  has(state) {
    return state ? this.states.has(state) : this.states.size > 0;
  }
  /**
   * Get the code verifier for the given state
   */
  get(state) {
    return this.codeVerifiers.get(state);
  }
  /**
   * Convert the store to a string
   *
   * This is useful when we need to store the store in a cookie
   */
  toString() {
    if (!this.state || !this.codeVerifier)
      return "";
    let params = new URLSearchParams();
    return params.set("state", this.state), params.set(this.state, this.codeVerifier), params.toString();
  }
  toSetCookie(cookieName = "oauth2", options = {}) {
    let id = crypto.randomUUID();
    return new SetCookie({
      value: this.toString(),
      httpOnly: !0,
      // Prevents JavaScript from accessing the cookie
      maxAge: 60 * 5,
      // 5 minutes
      path: "/",
      // Allow the cookie to be sent to any path
      sameSite: "Lax",
      // Prevents it from being sent in cross-site requests
      ...options,
      name: `${cookieName}:${id}`
    });
  }
  /**
   * Create a new instance from a Request object by getting the store from a
   * cookie with the given name.
   */
  static fromRequest(request, cookieName = "oauth2") {
    let cookie = new Cookie(request.headers.get("cookie") ?? ""), params = new URLSearchParams();
    for (let name of cookie.names)
      if (name.startsWith(cookieName)) {
        let cookieInstance = cookie.get(name);
        if (!cookieInstance)
          continue;
        for (let [key, value] of new URLSearchParams(cookieInstance))
          params.append(key, value);
      }
    return new StateStore(params);
  }
};

// node_modules/remix-auth-oauth2/build/index.js
var WELL_KNOWN = ".well-known/openid-configuration";
var OAuth2Strategy = class extends Strategy {
  options;
  name = "oauth2";
  client;
  constructor(options, verify) {
    super(verify), this.options = options, this.client = new OAuth2Client(options.clientId, options.clientSecret, options.redirectURI?.toString() ?? null);
  }
  get cookieName() {
    return typeof this.options.cookie == "string" ? this.options.cookie || "oauth2" : this.options.cookie?.name ?? "oauth2";
  }
  get cookieOptions() {
    return typeof this.options.cookie != "object" ? {} : this.options.cookie ?? {};
  }
  async authenticate(request) {
    let url = new URL(request.url), stateUrl = url.searchParams.get("state");
    if (!stateUrl) {
      let { state, codeVerifier: codeVerifier2, url: url2 } = this.createAuthorizationURL();
      if (this.options.audience)
        if (Array.isArray(this.options.audience))
          for (let audience of this.options.audience)
            url2.searchParams.append("audience", audience);
        else
          url2.searchParams.append("audience", this.options.audience);
      url2.search = this.authorizationParams(url2.searchParams, request).toString();
      let store2 = StateStore.fromRequest(request, this.cookieName);
      throw store2.set(state, codeVerifier2), redirect(url2.toString(), {
        headers: {
          "Set-Cookie": store2.toSetCookie(this.cookieName, this.cookieOptions).toString()
        }
      });
    }
    let store = StateStore.fromRequest(request, this.cookieName);
    if (!store.has())
      throw new ReferenceError("Missing state on cookie.");
    if (!store.has(stateUrl))
      throw new RangeError("State in URL doesn't match state in cookie.");
    let error = url.searchParams.get("error");
    if (error) {
      let description = url.searchParams.get("error_description"), uri = url.searchParams.get("error_uri");
      throw new OAuth2RequestError(error, description, uri, stateUrl);
    }
    let code = url.searchParams.get("code");
    if (!code)
      throw new ReferenceError("Missing code in the URL");
    let codeVerifier = store.get(stateUrl);
    if (!codeVerifier)
      throw new ReferenceError("Missing code verifier on cookie.");
    let tokens = await this.validateAuthorizationCode(code, codeVerifier);
    return await this.verify({ request, tokens });
  }
  createAuthorizationURL() {
    let state = generateState(), codeVerifier = generateCodeVerifier(), url = this.client.createAuthorizationURLWithPKCE(this.options.authorizationEndpoint.toString(), state, this.options.codeChallengeMethod ?? CodeChallengeMethod.S256, codeVerifier, this.options.scopes ?? []);
    return { state, codeVerifier, url };
  }
  validateAuthorizationCode(code, codeVerifier) {
    return this.client.validateAuthorizationCode(this.options.tokenEndpoint.toString(), code, codeVerifier);
  }
  /**
   * Return extra parameters to be included in the authorization request.
   *
   * Some OAuth 2.0 providers allow additional, non-standard parameters to be
   * included when requesting authorization.  Since these parameters are not
   * standardized by the OAuth 2.0 specification, OAuth 2.0-based authentication
   * strategies can override this function in order to populate these
   * parameters as required by the provider.
   */
  authorizationParams(params, request) {
    return new URLSearchParams(params);
  }
  /**
   * Get a new OAuth2 Tokens object using the refresh token once the previous
   * access token has expired.
   * @param refreshToken The refresh token to use to get a new access token
   * @returns The new OAuth2 tokens object
   * @example
   * ```ts
   * let tokens = await strategy.refreshToken(refreshToken);
   * console.log(tokens.accessToken());
   * ```
   */
  refreshToken(refreshToken) {
    return this.client.refreshAccessToken(this.options.tokenEndpoint.toString(), refreshToken, this.options.scopes ?? []);
  }
  /**
   * Users the token revocation endpoint of the identity provider to revoke the
   * access token and make it invalid.
   *
   * @param token The access token to revoke
   * @example
   * ```ts
   * // Get it from where you stored it
   * let accessToken = await getAccessToken();
   * await strategy.revokeToken(tokens.access_token);
   * ```
   */
  revokeToken(token) {
    let endpoint = this.options.tokenRevocationEndpoint;
    if (!endpoint)
      throw new Error("Token revocation endpoint is not set.");
    return this.client.revokeToken(endpoint.toString(), token);
  }
  /**
   * Discover the OAuth2 issuer and create a new OAuth2Strategy instance from
   * the OIDC configuration that is returned.
   *
   * This method will fetch the OIDC configuration from the issuer and create a
   * new OAuth2Strategy instance with the provided options and verify function.
   *
   * @param uri The URI of the issuer, this can be a full URL or just the domain
   * @param options The rest of the options to pass to the OAuth2Strategy constructor, clientId, clientSecret, redirectURI, and scopes are required.
   * @param verify The verify function to use with the OAuth2Strategy instance
   * @returns A new OAuth2Strategy instance
   * @example
   * ```ts
   * let strategy = await OAuth2Strategy.discover(
   *   "https://accounts.google.com",
   *   {
   *     clientId: "your-client-id",
   *     clientSecret: "your-client-secret",
   *     redirectURI: "https://your-app.com/auth/callback",
   *     scopes: ["openid", "email", "profile"],
   *   },
   *   async ({ tokens }) => {
   *     return getUserProfile(tokens.access_token);
   *   },
   * );
   */
  static async discover(uri, options, verify) {
    let url = new URL(uri);
    url.pathname.includes("well-known") || (url.pathname = url.pathname.endsWith("/") ? `${url.pathname}${WELL_KNOWN}` : `${url.pathname}/${WELL_KNOWN}`);
    let response = await fetch(url, {
      headers: { Accept: "application/json" }
    });
    if (!response.ok)
      throw new Error(`Failed to discover issuer at ${url}`);
    let parser = new ObjectParser(await response.json());
    return new this({
      authorizationEndpoint: new URL(parser.string("authorization_endpoint")),
      tokenEndpoint: new URL(parser.string("token_endpoint")),
      tokenRevocationEndpoint: parser.has("revocation_endpoint") ? new URL(parser.string("revocation_endpoint")) : void 0,
      codeChallengeMethod: parser.has("code_challenge_methods_supported") ? parser.array("code_challenge_methods_supported").includes("S256") ? CodeChallengeMethod.S256 : CodeChallengeMethod.Plain : void 0,
      ...options
    }, verify);
  }
};

// app/services/auth.server.ts
var sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__c3pw",
    httpOnly: !0,
    path: "/",
    sameSite: "lax",
    secrets: ["s3pwc3!"],
    secure: !1
  }
}), authenticator = new Authenticator();
authenticator.use(
  new OAuth2Strategy(
    {
      cookie: "oauth2",
      // Optional, can also be an object with more options
      clientId: process.env.OAUTH_CLIENT_ID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      authorizationEndpoint: process.env.OAUTH_URL + "/authorize",
      tokenEndpoint: process.env.OAUTH_URL + "/oauth/token",
      redirectURI: process.env.OAUTH_REDIRECT_URL,
      // tokenRevocationEndpoint: process.env.OAUTH_URL + "/oauth2/revoke", // optional
      scopes: ["openid", "email", "profile"],
      // optional
      codeChallengeMethod: CodeChallengeMethod.S256
      // optional
    },
    async ({ tokens, request }) => await getUser(tokens, request)
  ),
  // this is optional, but if you setup more than one OAuth2 instance you will
  // need to set a custom name to each one
  "prayer-provider"
);
var auth_server_default = authenticator;
async function getUser(tokens, request) {
  let access_token = tokens.data?.access_token || "";
  if (!access_token)
    throw new Error("Access token is missing");
  let response = await fetch(process.env.OAUTH_URL + "/userinfo", {
    headers: {
      Authorization: `Bearer ${access_token}`,
      Accept: "application/json"
    }
  });
  if (!response.ok)
    throw new Error("Failed to fetch user info");
  let profile = await response.json();
  return {
    id: profile.sub || profile.id,
    email: profile.email,
    name: profile.name
    // add other fields as needed
  };
}

// app/routes/__main.tsx
import { Fragment as Fragment5, jsxDEV as jsxDEV21 } from "react/jsx-dev-runtime";
var loader3 = async ({ request }) => (await sessionStorage.getSession(request.headers.get("cookie"))).get("user") ?? null, Main = () => {
  let user = useLoaderData3();
  return /* @__PURE__ */ jsxDEV21(Fragment5, { children: [
    /* @__PURE__ */ jsxDEV21(Header_default, { user }, void 0, !1, {
      fileName: "app/routes/__main.tsx",
      lineNumber: 19,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ jsxDEV21(SkipNavContent, { flexGrow: 1, children: /* @__PURE__ */ jsxDEV21(Outlet2, {}, void 0, !1, {
      fileName: "app/routes/__main.tsx",
      lineNumber: 21,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/routes/__main.tsx",
      lineNumber: 20,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ jsxDEV21(Footer_default, {}, void 0, !1, {
      fileName: "app/routes/__main.tsx",
      lineNumber: 23,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/__main.tsx",
    lineNumber: 18,
    columnNumber: 3
  }, this);
}, main_default = Main;

// app/routes/prayers/$location.tsx
var location_exports = {};
__export(location_exports, {
  default: () => location_default,
  loader: () => loader4
});
import { useLoaderData as useLoaderData4 } from "@remix-run/react";
import invariant from "tiny-invariant";
import { jsxDEV as jsxDEV22 } from "react/jsx-dev-runtime";
var loader4 = async ({ params }) => {
  let env2 = get_env_default();
  return invariant(params.location, "Expected params"), { requests: await fetchRequests(
    { location: params.location },
    env2.AIRTABLE_PAT,
    env2.API_URL
  ) };
}, PrayerWall2 = () => {
  let { requests } = useLoaderData4();
  return /* @__PURE__ */ jsxDEV22(full_screen_prayers_layout_default, { requests }, void 0, !1, {
    fileName: "app/routes/prayers/$location.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}, location_default = PrayerWall2;

// app/routes/auth/callback.tsx
var callback_exports = {};
__export(callback_exports, {
  loader: () => loader5
});
import { redirect as redirect2 } from "@remix-run/node";
var loader5 = async ({ request }) => {
  try {
    let user = await auth_server_default.authenticate("prayer-provider", request), session = await sessionStorage.getSession(
      request.headers.get("cookie")
    );
    return session.set("user", user), redirect2("/prayerwall", {
      headers: {
        "Set-Cookie": await sessionStorage.commitSession(session)
      }
    });
  } catch (error) {
    return console.error("Callback error:", error), redirect2("/");
  }
  return redirect2("/");
};

// app/routes/auth/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  loader: () => loader6
});
import { redirect as redirect3 } from "@remix-run/node";
var loader6 = async ({ request }) => {
  let session = await sessionStorage.getSession(request.headers.get("cookie"));
  return redirect3("/", {
    headers: { "Set-Cookie": await sessionStorage.destroySession(session) }
  });
};

// app/routes/auth/login.tsx
var login_exports = {};
__export(login_exports, {
  loader: () => loader7
});
var loader7 = async ({ request }) => {
  console.log("Authenticating user...");
  let user = await authenticator.authenticate("prayer-provider", request);
};

// app/routes/__main/prayerwall/$location.tsx
var location_exports2 = {};
__export(location_exports2, {
  default: () => location_default2,
  loader: () => loader8
});
import { useLoaderData as useLoaderData5 } from "@remix-run/react";

// app/layouts/prayer-wall/prayer-wall.layout.tsx
import { AddIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box as Box10,
  Heading as Heading2,
  Flex as Flex9,
  useBreakpointValue as useBreakpointValue2,
  Drawer,
  useDisclosure as useDisclosure2,
  Button as Button3,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Text as Text8,
  useToast
} from "@chakra-ui/react";
import { useEffect as useEffect5, useState as useState5 } from "react";

// app/components/Filters/Filters.component.tsx
import {
  Flex as Flex6,
  FormControl,
  FormLabel,
  Select,
  RadioGroup,
  Stack,
  Radio
} from "@chakra-ui/react";
import { useState as useState3, useEffect as useEffect4 } from "react";
import { jsxDEV as jsxDEV23 } from "react/jsx-dev-runtime";
function Filters({ locations, onChange, initialFilters }) {
  let [filters, setFilters] = useState3(initialFilters);
  return useEffect4(() => {
    onChange(filters);
  }, [onChange, filters]), /* @__PURE__ */ jsxDEV23(Flex6, { flexDir: { base: "column", lg: "row" }, gap: 8, children: [
    /* @__PURE__ */ jsxDEV23(FormControl, { children: [
      /* @__PURE__ */ jsxDEV23(FormLabel, { children: "Location" }, void 0, !1, {
        fileName: "app/components/Filters/Filters.component.tsx",
        lineNumber: 21,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV23(
        Select,
        {
          w: { base: "inherit", lg: "sm" },
          onChange: (e) => setFilters({
            location: e.target.value,
            type: initialFilters.type
          }),
          value: initialFilters.location,
          children: [
            /* @__PURE__ */ jsxDEV23("option", { value: "all", children: "All Locations" }, "all", !1, {
              fileName: "app/components/Filters/Filters.component.tsx",
              lineNumber: 32,
              columnNumber: 6
            }, this),
            locations.map((l) => /* @__PURE__ */ jsxDEV23("option", { value: l.name, children: l.name }, l.name, !1, {
              fileName: "app/components/Filters/Filters.component.tsx",
              lineNumber: 36,
              columnNumber: 7
            }, this))
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/Filters/Filters.component.tsx",
          lineNumber: 22,
          columnNumber: 5
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/Filters/Filters.component.tsx",
      lineNumber: 20,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ jsxDEV23(FormControl, { children: [
      /* @__PURE__ */ jsxDEV23(FormLabel, { children: "Prayer / Praise" }, void 0, !1, {
        fileName: "app/components/Filters/Filters.component.tsx",
        lineNumber: 43,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV23(
        RadioGroup,
        {
          value: initialFilters.type,
          onChange: (val) => setFilters({ type: val, location: filters.location }),
          children: /* @__PURE__ */ jsxDEV23(Stack, { direction: { base: "column", md: "row" }, children: [
            /* @__PURE__ */ jsxDEV23(Radio, { size: "lg", value: "prayer", children: "Prayer" }, void 0, !1, {
              fileName: "app/components/Filters/Filters.component.tsx",
              lineNumber: 51,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ jsxDEV23(Radio, { size: "lg", value: "praise", children: "Praise" }, void 0, !1, {
              fileName: "app/components/Filters/Filters.component.tsx",
              lineNumber: 54,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ jsxDEV23(Radio, { size: "lg", value: "both", children: "Both" }, void 0, !1, {
              fileName: "app/components/Filters/Filters.component.tsx",
              lineNumber: 57,
              columnNumber: 7
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Filters/Filters.component.tsx",
            lineNumber: 50,
            columnNumber: 6
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/Filters/Filters.component.tsx",
          lineNumber: 44,
          columnNumber: 5
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/Filters/Filters.component.tsx",
      lineNumber: 42,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Filters/Filters.component.tsx",
    lineNumber: 19,
    columnNumber: 3
  }, this);
}
var Filters_component_default = Filters;

// app/components/Filters/index.tsx
var Filters_default = Filters_component_default;

// app/components/FiltersIcon/FiltersIcon.component.tsx
import { createIcon as createIcon3 } from "@chakra-ui/react";
import { Fragment as Fragment6, jsxDEV as jsxDEV24 } from "react/jsx-dev-runtime";
var FiltersIcon = createIcon3({
  displayName: "FiltersIcon",
  path: /* @__PURE__ */ jsxDEV24(Fragment6, { children: [
    /* @__PURE__ */ jsxDEV24(
      "line",
      {
        x1: "1.5",
        y1: "4.14254",
        x2: "22.5",
        y2: "4.14254",
        stroke: "#3E4545",
        strokeWidth: "3",
        strokeLinecap: "round"
      },
      void 0,
      !1,
      {
        fileName: "app/components/FiltersIcon/FiltersIcon.component.tsx",
        lineNumber: 7,
        columnNumber: 4
      },
      this
    ),
    /* @__PURE__ */ jsxDEV24(
      "line",
      {
        x1: "1.5",
        y1: "12.4904",
        x2: "22.5",
        y2: "12.4904",
        stroke: "#3E4545",
        strokeWidth: "3",
        strokeLinecap: "round"
      },
      void 0,
      !1,
      {
        fileName: "app/components/FiltersIcon/FiltersIcon.component.tsx",
        lineNumber: 16,
        columnNumber: 4
      },
      this
    ),
    /* @__PURE__ */ jsxDEV24(
      "line",
      {
        x1: "1.5",
        y1: "21.4128",
        x2: "22.5",
        y2: "21.4128",
        stroke: "#3E4545",
        strokeWidth: "3",
        strokeLinecap: "round"
      },
      void 0,
      !1,
      {
        fileName: "app/components/FiltersIcon/FiltersIcon.component.tsx",
        lineNumber: 25,
        columnNumber: 4
      },
      this
    ),
    /* @__PURE__ */ jsxDEV24(
      "path",
      {
        d: "M17.5 2L17.5 6.01514",
        stroke: "#3E4545",
        strokeWidth: "3",
        strokeLinecap: "round"
      },
      void 0,
      !1,
      {
        fileName: "app/components/FiltersIcon/FiltersIcon.component.tsx",
        lineNumber: 34,
        columnNumber: 4
      },
      this
    ),
    /* @__PURE__ */ jsxDEV24(
      "path",
      {
        d: "M6.5 10.4998L6.5 14.4998",
        stroke: "#3E4545",
        strokeWidth: "3",
        strokeLinecap: "round"
      },
      void 0,
      !1,
      {
        fileName: "app/components/FiltersIcon/FiltersIcon.component.tsx",
        lineNumber: 40,
        columnNumber: 4
      },
      this
    ),
    /* @__PURE__ */ jsxDEV24(
      "line",
      {
        x1: "12.5",
        y1: "19.4998",
        x2: "12.5",
        y2: "23.4998",
        stroke: "#3E4545",
        strokeWidth: "3",
        strokeLinecap: "round"
      },
      void 0,
      !1,
      {
        fileName: "app/components/FiltersIcon/FiltersIcon.component.tsx",
        lineNumber: 46,
        columnNumber: 4
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/FiltersIcon/FiltersIcon.component.tsx",
    lineNumber: 6,
    columnNumber: 3
  }, this)
}), FiltersIcon_component_default = FiltersIcon;

// app/components/FiltersIcon/index.tsx
var FiltersIcon_default = FiltersIcon_component_default;

// app/components/Link/Link.component.tsx
import { Button } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as RemixLink } from "@remix-run/react";
import { Fragment as Fragment7, jsxDEV as jsxDEV25 } from "react/jsx-dev-runtime";
function Link3({ href, text, useButton, isExternal, buttonProps }) {
  return /* @__PURE__ */ jsxDEV25(Fragment7, { children: useButton ? /* @__PURE__ */ jsxDEV25(
    ChakraLink,
    {
      as: RemixLink,
      to: href,
      _hover: { textDecoration: "none" },
      children: /* @__PURE__ */ jsxDEV25(Button, { ...isExternal ? {
        target: "_blank",
        rel: "noopener noreferrer"
      } : {}, ...buttonProps, children: text }, void 0, !1, {
        fileName: "app/components/Link/Link.component.tsx",
        lineNumber: 22,
        columnNumber: 11
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/Link/Link.component.tsx",
      lineNumber: 17,
      columnNumber: 9
    },
    this
  ) : /* @__PURE__ */ jsxDEV25(
    ChakraLink,
    {
      color: "gray.500",
      fontWeight: "bold",
      href,
      textDecoration: "underline",
      _hover: { color: "gray.600", textDecoration: "none" },
      _active: { color: "gray.700" },
      isExternal,
      children: text
    },
    void 0,
    !1,
    {
      fileName: "app/components/Link/Link.component.tsx",
      lineNumber: 27,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/Link/Link.component.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}
var Link_component_default = Link3;

// app/components/Link/index.tsx
var Link_default = Link_component_default;

// app/layouts/prayer-wall/prayer-wall.layout.tsx
import Masonry from "react-masonry-css";

// app/components/PrayerCard/PrayerCard.tsx
import { Flex as Flex8, Grid, GridItem, Image as Image2, Text as Text7 } from "@chakra-ui/react";

// app/components/PrayerCard/PrayerCardActions/PrayerCardActions.component.tsx
import { Flex as Flex7, Button as Button2, Circle, Text as Text6, Box as Box9 } from "@chakra-ui/react";
import { useState as useState4 } from "react";

// app/components/Flag/Flag.component.tsx
import { createIcon as createIcon4 } from "@chakra-ui/react";
import { Fragment as Fragment8, jsxDEV as jsxDEV26 } from "react/jsx-dev-runtime";
var Flag = createIcon4({
  displayName: "Flag",
  viewBox: "0 0 15 15",
  path: /* @__PURE__ */ jsxDEV26(Fragment8, { children: [
    /* @__PURE__ */ jsxDEV26(
      "line",
      {
        fill: "currentColor",
        x1: "1",
        y1: "14.5",
        x2: "0.999999",
        y2: "0.5",
        stroke: "black",
        strokeWidth: "2",
        strokeLinejoin: "round"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Flag/Flag.component.tsx",
        lineNumber: 8,
        columnNumber: 4
      },
      this
    ),
    /* @__PURE__ */ jsxDEV26(
      "path",
      {
        fill: "currentColor",
        d: "M2 2.07495H14L9.74419 6.27495L14 10.475H2",
        stroke: "black",
        strokeWidth: "2",
        strokeLinejoin: "round"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Flag/Flag.component.tsx",
        lineNumber: 18,
        columnNumber: 4
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Flag/Flag.component.tsx",
    lineNumber: 7,
    columnNumber: 3
  }, this)
}), Flag_component_default = Flag;

// app/components/Flag/index.tsx
var Flag_default = Flag_component_default;

// app/components/PrayerCard/PrayerCardActions/PrayerCardActions.component.tsx
import { jsxDEV as jsxDEV27 } from "react/jsx-dev-runtime";
function PrayerCardActions({ data, onAmen, onReport }) {
  let [counter, setCounter] = useState4(data.count), circleColor = data.type == "praise" ? "#FDF0CE" : "#DDF3F5", borderColor = data.type == "praise" ? "#DA9B00" : "#00919F";
  return /* @__PURE__ */ jsxDEV27(
    Flex7,
    {
      flexDir: { base: "column", md: "row" },
      flexWrap: "wrap",
      gap: { base: 2 },
      justifyContent: "space-between",
      alignItems: "baseline",
      children: [
        /* @__PURE__ */ jsxDEV27(Flex7, { justifyContent: "flex-start", gap: 2, alignItems: "baseline", children: [
          /* @__PURE__ */ jsxDEV27(Text6, { title: data.created_at, children: data.fromNow }, void 0, !1, {
            fileName: "app/components/PrayerCard/PrayerCardActions/PrayerCardActions.component.tsx",
            lineNumber: 21,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV27(Box9, { w: 0.5, h: 4, bgColor: "gray.200" }, void 0, !1, {
            fileName: "app/components/PrayerCard/PrayerCardActions/PrayerCardActions.component.tsx",
            lineNumber: 22,
            columnNumber: 9
          }, this),
          onReport && /* @__PURE__ */ jsxDEV27(
            Flex7,
            {
              gap: "inherit",
              alignItems: "baseline",
              as: "button",
              onClick: () => onReport(data.id),
              children: [
                /* @__PURE__ */ jsxDEV27(Flag_default, { color: data.flagged ? "gray.500" : "white" }, void 0, !1, {
                  fileName: "app/components/PrayerCard/PrayerCardActions/PrayerCardActions.component.tsx",
                  lineNumber: 30,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ jsxDEV27(Text6, { textDecor: "underline", children: "Report" }, void 0, !1, {
                  fileName: "app/components/PrayerCard/PrayerCardActions/PrayerCardActions.component.tsx",
                  lineNumber: 31,
                  columnNumber: 13
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/PrayerCard/PrayerCardActions/PrayerCardActions.component.tsx",
              lineNumber: 24,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/PrayerCard/PrayerCardActions/PrayerCardActions.component.tsx",
          lineNumber: 20,
          columnNumber: 7
        }, this),
        onAmen && /* @__PURE__ */ jsxDEV27(
          Button2,
          {
            leftIcon: data.type == "praise" ? /* @__PURE__ */ jsxDEV27(Praise_default, { w: "24px", h: "26px" }, void 0, !1, {
              fileName: "app/components/PrayerCard/PrayerCardActions/PrayerCardActions.component.tsx",
              lineNumber: 39,
              columnNumber: 15
            }, this) : /* @__PURE__ */ jsxDEV27(PrayerHands_default, { w: "24px", h: "26px" }, void 0, !1, {
              fileName: "app/components/PrayerCard/PrayerCardActions/PrayerCardActions.component.tsx",
              lineNumber: 41,
              columnNumber: 15
            }, this),
            variant: "outline",
            borderColor,
            fontSize: "sm",
            display: "flex",
            justifyContent: "space-between",
            onClick: () => {
              onAmen(data.id, counter), setCounter(counter + 1);
            },
            w: 33,
            h: 12,
            px: 2,
            py: 4,
            children: [
              data.type === "prayer" ? "Pray" : "Praise",
              /* @__PURE__ */ jsxDEV27(Circle, { p: "10px", bg: circleColor, borderRadius: "50%", size: 6, children: counter }, void 0, !1, {
                fileName: "app/components/PrayerCard/PrayerCardActions/PrayerCardActions.component.tsx",
                lineNumber: 59,
                columnNumber: 11
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/PrayerCard/PrayerCardActions/PrayerCardActions.component.tsx",
            lineNumber: 36,
            columnNumber: 9
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/PrayerCard/PrayerCardActions/PrayerCardActions.component.tsx",
      lineNumber: 13,
      columnNumber: 5
    },
    this
  );
}
var PrayerCardActions_component_default = PrayerCardActions;

// app/components/PrayerCard/PrayerCardActions/index.tsx
var PrayerCardActions_default = PrayerCardActions_component_default;

// app/components/PrayerCard/PrayerCard.tsx
import { jsxDEV as jsxDEV28 } from "react/jsx-dev-runtime";
var PrayerCard = ({ data, onAmen, onReport }) => {
  let bgColor = data.type == "praise" ? "yellow.500" : "teal.500";
  return /* @__PURE__ */ jsxDEV28(
    Grid,
    {
      bgColor: "gray.100",
      boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
      rowGap: 4,
      alignContent: "space-between",
      borderTop: "0.25em solid",
      borderColor: bgColor,
      children: [
        /* @__PURE__ */ jsxDEV28(GridItem, { children: /* @__PURE__ */ jsxDEV28(Text7, { children: data.prayer }, void 0, !1, {
          fileName: "app/components/PrayerCard/PrayerCard.tsx",
          lineNumber: 18,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/components/PrayerCard/PrayerCard.tsx",
          lineNumber: 17,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV28(GridItem, { children: [
          /* @__PURE__ */ jsxDEV28(Text7, { fontWeight: "bold", mb: 2, children: `${data.name} ${data.location ? ` (${data.location})` : ""}` }, void 0, !1, {
            fileName: "app/components/PrayerCard/PrayerCard.tsx",
            lineNumber: 21,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV28(PrayerCardActions_default, { data, onAmen, onReport }, void 0, !1, {
            fileName: "app/components/PrayerCard/PrayerCard.tsx",
            lineNumber: 24,
            columnNumber: 9
          }, this),
          data.response && /* @__PURE__ */ jsxDEV28(
            Flex8,
            {
              flexDirection: "column",
              gap: 4,
              py: 6,
              px: 4,
              mt: 3.5,
              bgColor: "gray.150",
              borderRadius: 8,
              children: [
                /* @__PURE__ */ jsxDEV28(Image2, { src: "/LogoBlack.png", h: "30px", w: "35px" }, void 0, !1, {
                  fileName: "app/components/PrayerCard/PrayerCard.tsx",
                  lineNumber: 35,
                  columnNumber: 13
                }, this),
                data.response
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/PrayerCard/PrayerCard.tsx",
              lineNumber: 26,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/PrayerCard/PrayerCard.tsx",
          lineNumber: 20,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/PrayerCard/PrayerCard.tsx",
      lineNumber: 9,
      columnNumber: 5
    },
    this
  );
}, PrayerCard_default = PrayerCard;

// app/components/PrayerCard/index.tsx
var PrayerCard_default2 = PrayerCard_default;

// app/layouts/prayer-wall/prayer-wall.layout.tsx
import { jsxDEV as jsxDEV29 } from "react/jsx-dev-runtime";
var env = get_env_default(), makeToast = (title, description, status) => ({
  title,
  description,
  status,
  duration: 1e4,
  isClosable: !0
}), PrayerWallLayout = ({ requests, locations }) => {
  let toast = useToast(), text = useBreakpointValue2({
    base: "Add a request",
    md: "Add a prayer request"
  }), { isOpen, onOpen, onClose } = useDisclosure2(), [filteredRequests, setFilteredRequests] = useState5(requests), [filters, setFilters] = useState5({
    location: "all",
    type: "both"
  });
  useEffect5(() => {
    let reqs = requests.filter(
      (r) => (r.location === filters.location || filters.location === "all") && (r.type === filters.type || filters.type === "both")
    );
    setFilteredRequests(reqs);
  }, [filters, requests]);
  let applyFilters = (opts) => {
    setFilters(opts);
  }, Shared = ({ initialFilters, onChange, locations: locations2 }) => /* @__PURE__ */ jsxDEV29(
    Filters_default,
    {
      initialFilters,
      onChange,
      locations: locations2
    },
    void 0,
    !1,
    {
      fileName: "app/layouts/prayer-wall/prayer-wall.layout.tsx",
      lineNumber: 77,
      columnNumber: 5
    },
    this
  ), amen = async (id, count) => {
    await incrementPrayerCount(
      id,
      count,
      env.AIRTABLE_PAT,
      env.API_URL
    );
  }, report = async (id) => {
    let resp = await flagRequest(
      id,
      env.AIRTABLE_PAT,
      env.API_URL
    );
    toast(
      resp ? makeToast(
        "Thank you",
        "We have flagged the request and will review shortly.",
        "success"
      ) : makeToast(
        "Sorry",
        "Something went wrong, please try again or contact us.",
        "error"
      )
    );
  }, breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };
  return /* @__PURE__ */ jsxDEV29(Box10, { px: { base: 3, md: 4 }, minH: "75vh", children: [
    /* @__PURE__ */ jsxDEV29(
      Heading2,
      {
        as: "h1",
        size: "2xl",
        mb: { base: 6, md: 8 },
        textTransform: "uppercase",
        children: "Prayer Wall"
      },
      void 0,
      !1,
      {
        fileName: "app/layouts/prayer-wall/prayer-wall.layout.tsx",
        lineNumber: 125,
        columnNumber: 7
      },
      this
    ),
    locations && /* @__PURE__ */ jsxDEV29(Flex9, { flexDir: "row", justifyContent: "space-between", alignItems: "center", children: [
      /* @__PURE__ */ jsxDEV29(Flex9, { display: { base: "block", lg: "none" }, flexDir: "column", children: [
        /* @__PURE__ */ jsxDEV29(FiltersIcon_default, { h: "23px", w: "24px", onClick: onOpen }, void 0, !1, {
          fileName: "app/layouts/prayer-wall/prayer-wall.layout.tsx",
          lineNumber: 136,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV29(Drawer, { isOpen, onClose, placement: "left", children: [
          /* @__PURE__ */ jsxDEV29(DrawerOverlay, {}, void 0, !1, {
            fileName: "app/layouts/prayer-wall/prayer-wall.layout.tsx",
            lineNumber: 138,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV29(DrawerContent, { children: [
            /* @__PURE__ */ jsxDEV29(DrawerCloseButton, {}, void 0, !1, {
              fileName: "app/layouts/prayer-wall/prayer-wall.layout.tsx",
              lineNumber: 140,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV29(DrawerHeader, { children: "Filters" }, void 0, !1, {
              fileName: "app/layouts/prayer-wall/prayer-wall.layout.tsx",
              lineNumber: 141,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV29(DrawerBody, { children: /* @__PURE__ */ jsxDEV29(
              Shared,
              {
                initialFilters: filters,
                onChange: applyFilters,
                locations
              },
              void 0,
              !1,
              {
                fileName: "app/layouts/prayer-wall/prayer-wall.layout.tsx",
                lineNumber: 143,
                columnNumber: 19
              },
              this
            ) }, void 0, !1, {
              fileName: "app/layouts/prayer-wall/prayer-wall.layout.tsx",
              lineNumber: 142,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV29(DrawerFooter, { children: [
              /* @__PURE__ */ jsxDEV29(
                Button3,
                {
                  variant: "outline",
                  mr: 3,
                  onClick: () => {
                    setFilters({
                      location: "all",
                      type: "both"
                    });
                  },
                  children: "Clear"
                },
                void 0,
                !1,
                {
                  fileName: "app/layouts/prayer-wall/prayer-wall.layout.tsx",
                  lineNumber: 150,
                  columnNumber: 19
                },
                this
              ),
              /* @__PURE__ */ jsxDEV29(Button3, { onClick: onClose, children: "Close" }, void 0, !1, {
                fileName: "app/layouts/prayer-wall/prayer-wall.layout.tsx",
                lineNumber: 162,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/layouts/prayer-wall/prayer-wall.layout.tsx",
              lineNumber: 149,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/layouts/prayer-wall/prayer-wall.layout.tsx",
            lineNumber: 139,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/layouts/prayer-wall/prayer-wall.layout.tsx",
          lineNumber: 137,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/layouts/prayer-wall/prayer-wall.layout.tsx",
        lineNumber: 135,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV29(Box10, { display: { base: "none", lg: "flex" }, children: /* @__PURE__ */ jsxDEV29(
        Shared,
        {
          initialFilters: filters,
          onChange: applyFilters,
          locations
        },
        void 0,
        !1,
        {
          fileName: "app/layouts/prayer-wall/prayer-wall.layout.tsx",
          lineNumber: 168,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/layouts/prayer-wall/prayer-wall.layout.tsx",
        lineNumber: 167,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV29(
        Link_default,
        {
          href: "/request",
          useButton: !0,
          text,
          "aria-label": text,
          buttonProps: {
            leftIcon: /* @__PURE__ */ jsxDEV29(AddIcon, {}, void 0, !1, {
              fileName: "app/layouts/prayer-wall/prayer-wall.layout.tsx",
              lineNumber: 180,
              columnNumber: 25
            }, this),
            size: { base: "xs", md: "md" }
          }
        },
        void 0,
        !1,
        {
          fileName: "app/layouts/prayer-wall/prayer-wall.layout.tsx",
          lineNumber: 174,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/layouts/prayer-wall/prayer-wall.layout.tsx",
      lineNumber: 134,
      columnNumber: 9
    }, this),
    filteredRequests.length ? /* @__PURE__ */ jsxDEV29(
      Masonry,
      {
        breakpointCols: breakpointColumnsObj,
        className: "masonry-grid",
        columnClassName: "masonry-grid_column",
        children: filteredRequests.map((request) => /* @__PURE__ */ jsxDEV29(
          PrayerCard_default2,
          {
            data: request,
            onAmen: amen,
            onReport: report
          },
          request.id,
          !1,
          {
            fileName: "app/layouts/prayer-wall/prayer-wall.layout.tsx",
            lineNumber: 193,
            columnNumber: 13
          },
          this
        ))
      },
      void 0,
      !1,
      {
        fileName: "app/layouts/prayer-wall/prayer-wall.layout.tsx",
        lineNumber: 187,
        columnNumber: 9
      },
      this
    ) : /* @__PURE__ */ jsxDEV29(Box10, { mt: 8, children: [
      /* @__PURE__ */ jsxDEV29(Text8, { mb: 2, children: "Looks like we couldn't find any requests that matched your filter." }, void 0, !1, {
        fileName: "app/layouts/prayer-wall/prayer-wall.layout.tsx",
        lineNumber: 203,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV29(Text8, { mb: 4, children: "Why not click the button below to submit your request and get us started?" }, void 0, !1, {
        fileName: "app/layouts/prayer-wall/prayer-wall.layout.tsx",
        lineNumber: 206,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV29(
        Link_default,
        {
          href: "/request",
          useButton: !0,
          text: "Add a prayer request",
          "aria-label": "Add a prayer request",
          buttonProps: {
            rightIcon: /* @__PURE__ */ jsxDEV29(ArrowForwardIcon, {}, void 0, !1, {
              fileName: "app/layouts/prayer-wall/prayer-wall.layout.tsx",
              lineNumber: 216,
              columnNumber: 26
            }, this),
            size: { base: "xs", md: "md" }
          }
        },
        void 0,
        !1,
        {
          fileName: "app/layouts/prayer-wall/prayer-wall.layout.tsx",
          lineNumber: 210,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/layouts/prayer-wall/prayer-wall.layout.tsx",
      lineNumber: 202,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/layouts/prayer-wall/prayer-wall.layout.tsx",
    lineNumber: 124,
    columnNumber: 5
  }, this);
}, prayer_wall_layout_default = PrayerWallLayout;

// app/routes/__main/prayerwall/$location.tsx
import invariant2 from "tiny-invariant";
import { jsxDEV as jsxDEV30 } from "react/jsx-dev-runtime";
var loader8 = async ({ params }) => {
  let env2 = get_env_default();
  return invariant2(params.location, "Expected params"), { requests: await fetchRequests({ location: params.location }, env2.AIRTABLE_PAT, env2.API_URL) };
}, LocationPrayerWall = () => {
  let data = useLoaderData5();
  return /* @__PURE__ */ jsxDEV30(prayer_wall_layout_default, { requests: data.requests }, void 0, !1, {
    fileName: "app/routes/__main/prayerwall/$location.tsx",
    lineNumber: 21,
    columnNumber: 10
  }, this);
}, location_default2 = LocationPrayerWall;

// app/routes/__main/manage-preferences.tsx
var manage_preferences_exports = {};
__export(manage_preferences_exports, {
  default: () => AboutPage,
  loader: () => loader9
});
import { json as json2 } from "@remix-run/node";
import { useLoaderData as useLoaderData6 } from "@remix-run/react";

// app/layouts/manage-preferences/manage-preferences.layout.tsx
import {
  Box as Box11,
  Button as Button4,
  Checkbox,
  Flex as Flex10,
  FormControl as FormControl2,
  FormLabel as FormLabel2,
  Heading as Heading3,
  Text as Text9,
  useToast as useToast2,
  VStack as VStack4
} from "@chakra-ui/react";
import { Form } from "@remix-run/react";
import { useForm } from "react-hook-form";
import { Fragment as Fragment9, jsxDEV as jsxDEV31 } from "react/jsx-dev-runtime";
var ManagePreferences = ({ user, profile }) => {
  let loggedIn = !!user, env2 = get_env_default(), toast = useToast2(), { register, handleSubmit } = useForm({
    defaultValues: {
      user: user?.id,
      digestNotifications: profile?.digestNotifications || !0,
      responseNotifications: profile?.responseNotifications || !0
    }
  }), onSubmit = async (data) => {
    try {
      await updateUserProfile(
        data,
        env2.AIRTABLE_PAT,
        env2.API_URL
      ), toast({
        title: "Save",
        description: "Your preferences have been updated.",
        status: "success",
        duration: 5e3,
        isClosable: !0
      });
    } catch (error) {
      console.error(error), toast({
        title: "Sorry",
        description: "Something went wrong, please try again.",
        status: "error",
        duration: 1e4,
        isClosable: !0
      });
    }
  };
  return /* @__PURE__ */ jsxDEV31(
    Box11,
    {
      px: { base: 4, md: 8 },
      maxWidth: { base: "full", md: "container.lg" },
      children: [
        /* @__PURE__ */ jsxDEV31(
          Heading3,
          {
            as: "h1",
            size: "2xl",
            mb: { base: 8, md: 12 },
            textTransform: "uppercase",
            children: "Manage your notification preferences"
          },
          void 0,
          !1,
          {
            fileName: "app/layouts/manage-preferences/manage-preferences.layout.tsx",
            lineNumber: 65,
            columnNumber: 7
          },
          this
        ),
        loggedIn ? /* @__PURE__ */ jsxDEV31(Fragment9, { children: [
          /* @__PURE__ */ jsxDEV31(Box11, { mb: 10, children: [
            /* @__PURE__ */ jsxDEV31(Text9, { mb: { base: 2, md: 3 }, children: [
              "Hi",
              " ",
              /* @__PURE__ */ jsxDEV31(Text9, { as: "span", fontWeight: "bold", children: user.name }, void 0, !1, {
                fileName: "app/layouts/manage-preferences/manage-preferences.layout.tsx",
                lineNumber: 78,
                columnNumber: 15
              }, this),
              ","
            ] }, void 0, !0, {
              fileName: "app/layouts/manage-preferences/manage-preferences.layout.tsx",
              lineNumber: 76,
              columnNumber: 13
            }, this),
            "Update your notification preferences below."
          ] }, void 0, !0, {
            fileName: "app/layouts/manage-preferences/manage-preferences.layout.tsx",
            lineNumber: 75,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV31(Form, { name: "update-notifications", onSubmit: handleSubmit(onSubmit), children: /* @__PURE__ */ jsxDEV31(
            VStack4,
            {
              mb: 10,
              py: 10,
              spacing: 6,
              align: "flex-start",
              borderBottom: "1px solid",
              borderTop: "1px solid",
              borderColor: "gray.200",
              children: [
                /* @__PURE__ */ jsxDEV31(FormControl2, { children: /* @__PURE__ */ jsxDEV31(
                  Checkbox,
                  {
                    autoComplete: "off",
                    size: "lg",
                    ...register("responseNotifications"),
                    defaultChecked: profile?.responseNotifications || !0,
                    children: /* @__PURE__ */ jsxDEV31(
                      FormLabel2,
                      {
                        textTransform: "none",
                        fontWeight: "regular",
                        fontSize: "md",
                        children: "Send me an email when The C3 Church responds to my requests"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/layouts/manage-preferences/manage-preferences.layout.tsx",
                        lineNumber: 102,
                        columnNumber: 19
                      },
                      this
                    )
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/layouts/manage-preferences/manage-preferences.layout.tsx",
                    lineNumber: 96,
                    columnNumber: 17
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/layouts/manage-preferences/manage-preferences.layout.tsx",
                  lineNumber: 95,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV31(FormControl2, { children: /* @__PURE__ */ jsxDEV31(
                  Checkbox,
                  {
                    autoComplete: "off",
                    size: "lg",
                    ...register("digestNotifications"),
                    defaultChecked: profile?.digestNotifications || !0,
                    children: /* @__PURE__ */ jsxDEV31(
                      FormLabel2,
                      {
                        textTransform: "none",
                        fontWeight: "regular",
                        fontSize: "md",
                        children: "Send me a daily email to let me know how many people are engaging with my requests"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/layouts/manage-preferences/manage-preferences.layout.tsx",
                        lineNumber: 119,
                        columnNumber: 19
                      },
                      this
                    )
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/layouts/manage-preferences/manage-preferences.layout.tsx",
                    lineNumber: 113,
                    columnNumber: 17
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/layouts/manage-preferences/manage-preferences.layout.tsx",
                  lineNumber: 112,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV31(Button4, { type: "submit", children: "UPDATE MY NOTIFICATION SETTINGS" }, void 0, !1, {
                  fileName: "app/layouts/manage-preferences/manage-preferences.layout.tsx",
                  lineNumber: 130,
                  columnNumber: 15
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/layouts/manage-preferences/manage-preferences.layout.tsx",
              lineNumber: 86,
              columnNumber: 13
            },
            this
          ) }, void 0, !1, {
            fileName: "app/layouts/manage-preferences/manage-preferences.layout.tsx",
            lineNumber: 85,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV31(Box11, { mb: 10, children: /* @__PURE__ */ jsxDEV31(
            Link_default,
            {
              href: "/prayerwall",
              useButton: !0,
              text: "RETURN TO THE PRAYER WALL",
              "aria-label": "Return to the prayer wall"
            },
            void 0,
            !1,
            {
              fileName: "app/layouts/manage-preferences/manage-preferences.layout.tsx",
              lineNumber: 134,
              columnNumber: 13
            },
            this
          ) }, void 0, !1, {
            fileName: "app/layouts/manage-preferences/manage-preferences.layout.tsx",
            lineNumber: 133,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/layouts/manage-preferences/manage-preferences.layout.tsx",
          lineNumber: 74,
          columnNumber: 9
        }, this) : /* @__PURE__ */ jsxDEV31(Flex10, { gap: 2, mb: 40, children: [
          /* @__PURE__ */ jsxDEV31(Box11, { children: /* @__PURE__ */ jsxDEV31(ChurchSuiteMark_default, {}, void 0, !1, {
            fileName: "app/layouts/manage-preferences/manage-preferences.layout.tsx",
            lineNumber: 145,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/layouts/manage-preferences/manage-preferences.layout.tsx",
            lineNumber: 144,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV31(Text9, { children: [
            /* @__PURE__ */ jsxDEV31(
              Link_default,
              {
                href: "/auth/login?redirect=/manage-preferences",
                isExternal: !0,
                text: "Sign into your ChurchSuite account",
                "aria-label": "Sign into your ChurchSuite account"
              },
              void 0,
              !1,
              {
                fileName: "app/layouts/manage-preferences/manage-preferences.layout.tsx",
                lineNumber: 148,
                columnNumber: 13
              },
              this
            ),
            " ",
            "to manage your notification preferences"
          ] }, void 0, !0, {
            fileName: "app/layouts/manage-preferences/manage-preferences.layout.tsx",
            lineNumber: 147,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/layouts/manage-preferences/manage-preferences.layout.tsx",
          lineNumber: 143,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/layouts/manage-preferences/manage-preferences.layout.tsx",
      lineNumber: 61,
      columnNumber: 5
    },
    this
  );
}, manage_preferences_layout_default = ManagePreferences;

// app/routes/__main/manage-preferences.tsx
import { jsxDEV as jsxDEV32 } from "react/jsx-dev-runtime";
var loader9 = async ({ request }) => {
  let user = (await sessionStorage.getSession(request.headers.get("cookie"))).get("user") ?? null, env2 = get_env_default(), profile = await fetchUserProfile(
    env2.AIRTABLE_PAT,
    env2.API_URL
  );
  return json2({ profile, user });
};
function AboutPage() {
  let { user, profile } = useLoaderData6();
  return /* @__PURE__ */ jsxDEV32(manage_preferences_layout_default, { profile, user }, void 0, !1, {
    fileName: "app/routes/__main/manage-preferences.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}

// app/routes/__main/prayerwall/index.tsx
var prayerwall_exports = {};
__export(prayerwall_exports, {
  default: () => prayerwall_default,
  loader: () => loader10
});
import { useLoaderData as useLoaderData7 } from "@remix-run/react";
import { jsxDEV as jsxDEV33 } from "react/jsx-dev-runtime";
var loader10 = async () => {
  let env2 = get_env_default(), requests = await fetchRequests(
    {},
    env2.AIRTABLE_PAT,
    env2.API_URL
  ), locations = await fetchLocations(
    env2.AIRTABLE_PAT,
    env2.API_URL
  );
  return { requests, locations };
}, PrayerWall3 = () => {
  let data = useLoaderData7();
  return /* @__PURE__ */ jsxDEV33(
    prayer_wall_layout_default,
    {
      requests: data.requests,
      locations: data.locations
    },
    void 0,
    !1,
    {
      fileName: "app/routes/__main/prayerwall/index.tsx",
      lineNumber: 29,
      columnNumber: 5
    },
    this
  );
}, prayerwall_default = PrayerWall3;

// app/routes/__main/request.tsx
var request_exports = {};
__export(request_exports, {
  default: () => request_default,
  loader: () => loader11
});
import { json as json3 } from "@remix-run/node";
import { useLoaderData as useLoaderData8 } from "@remix-run/react";

// app/layouts/request/request.layout.tsx
import { useState as useState6 } from "react";
import { Form as Form2 } from "@remix-run/react";
import {
  Button as Button5,
  Flex as Flex11,
  FormErrorMessage,
  FormHelperText,
  FormControl as FormControl3,
  FormLabel as FormLabel3,
  Grid as Grid2,
  Heading as Heading4,
  Input,
  Radio as Radio2,
  RadioGroup as RadioGroup2,
  VStack as VStack5,
  StackDivider,
  Textarea,
  useToast as useToast3,
  Box as Box12,
  Text as Text10,
  Checkbox as Checkbox2
} from "@chakra-ui/react";
import { useForm as useForm2, useWatch } from "react-hook-form";
import { jsxDEV as jsxDEV34 } from "react/jsx-dev-runtime";
import { createElement } from "react";
var RequestLayout = ({ locations, user }) => {
  let loggedIn = !!user, [showSuccess, setShowSuccess] = useState6(!1), env2 = get_env_default(), {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm2(), prayer = useWatch({ control, name: "prayer" }), toast = useToast3();
  return showSuccess ? /* @__PURE__ */ jsxDEV34(
    Box12,
    {
      px: { base: 4, md: 8 },
      maxWidth: { base: "full", md: "container.lg" },
      children: [
        /* @__PURE__ */ jsxDEV34(
          Heading4,
          {
            as: "h1",
            size: "2xl",
            mb: { base: 8, md: 12 },
            textTransform: "uppercase",
            children: "THANK YOU"
          },
          void 0,
          !1,
          {
            fileName: "app/layouts/request/request.layout.tsx",
            lineNumber: 71,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV34(Text10, { mb: 10, children: "Your request has been submitted successfully." }, void 0, !1, {
          fileName: "app/layouts/request/request.layout.tsx",
          lineNumber: 79,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV34(Box12, { py: 10, borderTop: "1px solid", borderColor: "gray.200", children: [
          /* @__PURE__ */ jsxDEV34(Text10, { as: "h2", size: "sm", mb: 6, fontWeight: "bold", children: "DO YOU WANT TO RECEIVE NOTIFICATIONS?" }, void 0, !1, {
            fileName: "app/layouts/request/request.layout.tsx",
            lineNumber: 81,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV34(Text10, { mb: 8, children: "If you choose, we can send you email notifications when your request receives a response from The C3 Church. We can also send you a daily email to update you on how many people are engaging with your request." }, void 0, !1, {
            fileName: "app/layouts/request/request.layout.tsx",
            lineNumber: 84,
            columnNumber: 9
          }, this),
          loggedIn ? /* @__PURE__ */ jsxDEV34(
            Link_default,
            {
              href: "/manage-preferences",
              text: "Manage your notification preferences",
              "aria-label": "Manage your notification preferences"
            },
            void 0,
            !1,
            {
              fileName: "app/layouts/request/request.layout.tsx",
              lineNumber: 90,
              columnNumber: 11
            },
            this
          ) : /* @__PURE__ */ jsxDEV34(Flex11, { gap: 2, children: [
            /* @__PURE__ */ jsxDEV34(Box12, { children: /* @__PURE__ */ jsxDEV34(ChurchSuiteMark_default, {}, void 0, !1, {
              fileName: "app/layouts/request/request.layout.tsx",
              lineNumber: 98,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/layouts/request/request.layout.tsx",
              lineNumber: 97,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV34(Text10, { children: [
              /* @__PURE__ */ jsxDEV34(
                Link_default,
                {
                  href: "/auth/login?redirect=/manage-preferences",
                  text: "Sign into your ChurchSuite account",
                  "aria-label": "Sign into your ChurchSuite account"
                },
                void 0,
                !1,
                {
                  fileName: "app/layouts/request/request.layout.tsx",
                  lineNumber: 101,
                  columnNumber: 15
                },
                this
              ),
              " ",
              "to manage your notification preferences"
            ] }, void 0, !0, {
              fileName: "app/layouts/request/request.layout.tsx",
              lineNumber: 100,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/layouts/request/request.layout.tsx",
            lineNumber: 96,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/layouts/request/request.layout.tsx",
          lineNumber: 80,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV34(Box12, { py: 10, borderTop: "1px solid", borderColor: "gray.200", children: /* @__PURE__ */ jsxDEV34(
          Link_default,
          {
            href: "/prayerwall",
            useButton: !0,
            text: "Return to the prayer wall",
            "aria-label": "Return to the prayer wall"
          },
          void 0,
          !1,
          {
            fileName: "app/layouts/request/request.layout.tsx",
            lineNumber: 112,
            columnNumber: 9
          },
          this
        ) }, void 0, !1, {
          fileName: "app/layouts/request/request.layout.tsx",
          lineNumber: 111,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/layouts/request/request.layout.tsx",
      lineNumber: 67,
      columnNumber: 5
    },
    this
  ) : /* @__PURE__ */ jsxDEV34(
    Box12,
    {
      px: { base: 4, md: 8 },
      maxWidth: { base: "full", md: "container.lg" },
      children: [
        /* @__PURE__ */ jsxDEV34(
          Heading4,
          {
            as: "h1",
            size: "2xl",
            mb: { base: 8, md: 12 },
            textTransform: "uppercase",
            children: "Submit a request"
          },
          void 0,
          !1,
          {
            fileName: "app/layouts/request/request.layout.tsx",
            lineNumber: 125,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV34(Text10, { mb: { base: 2, md: 3 }, children: "Thank you for bringing your prayer requests and praise reports." }, void 0, !1, {
          fileName: "app/layouts/request/request.layout.tsx",
          lineNumber: 134,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV34(Text10, { mb: { base: 2, md: 3 }, children: "These will be visible to anyone who views our online prayer wall and shown at our Sunday services during our prayer time. Please only use names if you have permission from the individual to do so." }, void 0, !1, {
          fileName: "app/layouts/request/request.layout.tsx",
          lineNumber: 137,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV34(Text10, { mb: { base: 4, md: 6 }, children: [
          "If you wish to send a private prayer, please email",
          " ",
          /* @__PURE__ */ jsxDEV34(
            Link_default,
            {
              isExternal: !0,
              href: "mailto:prayer@thec3.uk",
              text: "prayer@thec3.uk",
              "aria-label": "prayer@thec3.uk"
            },
            void 0,
            !1,
            {
              fileName: "app/layouts/request/request.layout.tsx",
              lineNumber: 144,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/layouts/request/request.layout.tsx",
          lineNumber: 142,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV34(Form2, { name: "prayer-request", onSubmit: handleSubmit(async (data) => {
          try {
            await submitRequest(
              data,
              env2.AIRTABLE_PAT,
              env2.API_URL
            ), setShowSuccess(!0);
          } catch (error) {
            console.error(error), toast({
              title: "Sorry",
              description: "Something went wrong, please try again.",
              status: "error",
              duration: 1e4,
              isClosable: !0
            });
          }
        }), children: /* @__PURE__ */ jsxDEV34(
          VStack5,
          {
            mb: 16,
            spacing: 6,
            align: "flex-start",
            divider: /* @__PURE__ */ jsxDEV34(StackDivider, { borderColor: "#D9D9D9" }, void 0, !1, {
              fileName: "app/layouts/request/request.layout.tsx",
              lineNumber: 156,
              columnNumber: 20
            }, this),
            children: [
              /* @__PURE__ */ jsxDEV34(FormControl3, { maxWidth: "container.sm", children: [
                /* @__PURE__ */ jsxDEV34(FormLabel3, { children: "Your name (optional)" }, void 0, !1, {
                  fileName: "app/layouts/request/request.layout.tsx",
                  lineNumber: 159,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ jsxDEV34(
                  Input,
                  {
                    ...register("name", {
                      required: !1
                    }),
                    autoComplete: "name",
                    type: "text",
                    value: user?.name || ""
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/layouts/request/request.layout.tsx",
                    lineNumber: 160,
                    columnNumber: 13
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/layouts/request/request.layout.tsx",
                lineNumber: 158,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ jsxDEV34(FormControl3, { isRequired: !0, isInvalid: !!errors.location, children: [
                /* @__PURE__ */ jsxDEV34(FormLabel3, { children: "Location" }, void 0, !1, {
                  fileName: "app/layouts/request/request.layout.tsx",
                  lineNumber: 170,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ jsxDEV34(RadioGroup2, { children: /* @__PURE__ */ jsxDEV34(Grid2, { templateColumns: "repeat(2, 1fr)", gap: 2, children: locations.map((l) => /* @__PURE__ */ createElement(Radio2, { ...register("location"), value: l.id + "", key: "k" + l.id, size: "lg" }, l.name)) }, void 0, !1, {
                  fileName: "app/layouts/request/request.layout.tsx",
                  lineNumber: 172,
                  columnNumber: 15
                }, this) }, void 0, !1, {
                  fileName: "app/layouts/request/request.layout.tsx",
                  lineNumber: 171,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ jsxDEV34(FormErrorMessage, { children: "Please select your location" }, void 0, !1, {
                  fileName: "app/layouts/request/request.layout.tsx",
                  lineNumber: 180,
                  columnNumber: 13
                }, this)
              ] }, void 0, !0, {
                fileName: "app/layouts/request/request.layout.tsx",
                lineNumber: 169,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ jsxDEV34(FormControl3, { isRequired: !0, isInvalid: !!errors.type, children: [
                /* @__PURE__ */ jsxDEV34(FormLabel3, { htmlFor: "type", children: "Prayer or praise?" }, void 0, !1, {
                  fileName: "app/layouts/request/request.layout.tsx",
                  lineNumber: 185,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ jsxDEV34(RadioGroup2, { children: /* @__PURE__ */ jsxDEV34(Grid2, { templateColumns: "repeat(2, 1fr)", gap: 2, children: [
                  /* @__PURE__ */ jsxDEV34(Radio2, { ...register("type"), value: "prayer", size: "lg", children: [
                    "Prayer ",
                    /* @__PURE__ */ jsxDEV34(PrayerHands_default, { ml: 1, w: "24px", h: "26px" }, void 0, !1, {
                      fileName: "app/layouts/request/request.layout.tsx",
                      lineNumber: 189,
                      columnNumber: 26
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/layouts/request/request.layout.tsx",
                    lineNumber: 188,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV34(Radio2, { ...register("type"), value: "praise", size: "lg", children: [
                    "Praise ",
                    /* @__PURE__ */ jsxDEV34(Praise_default, { ml: 1, w: "22px", h: "26px" }, void 0, !1, {
                      fileName: "app/layouts/request/request.layout.tsx",
                      lineNumber: 192,
                      columnNumber: 26
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/layouts/request/request.layout.tsx",
                    lineNumber: 191,
                    columnNumber: 17
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/layouts/request/request.layout.tsx",
                  lineNumber: 187,
                  columnNumber: 15
                }, this) }, void 0, !1, {
                  fileName: "app/layouts/request/request.layout.tsx",
                  lineNumber: 186,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ jsxDEV34(FormErrorMessage, { children: "Please select" }, void 0, !1, {
                  fileName: "app/layouts/request/request.layout.tsx",
                  lineNumber: 196,
                  columnNumber: 13
                }, this)
              ] }, void 0, !0, {
                fileName: "app/layouts/request/request.layout.tsx",
                lineNumber: 184,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ jsxDEV34(Flex11, { flexDir: "column", w: "100%", alignItems: "flex-end", gap: 4, children: [
                /* @__PURE__ */ jsxDEV34(FormControl3, { isInvalid: !!errors.prayer, children: [
                  /* @__PURE__ */ jsxDEV34(FormLabel3, { children: "Request" }, void 0, !1, {
                    fileName: "app/layouts/request/request.layout.tsx",
                    lineNumber: 202,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ jsxDEV34(
                    Textarea,
                    {
                      ...register("prayer", {
                        required: !0,
                        maxLength: 500
                      }),
                      required: !0,
                      autoComplete: "off",
                      size: "md",
                      maxLength: 500
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/layouts/request/request.layout.tsx",
                      lineNumber: 203,
                      columnNumber: 15
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV34(FormErrorMessage, { children: "Please keep the request to 500 characters." }, void 0, !1, {
                    fileName: "app/layouts/request/request.layout.tsx",
                    lineNumber: 213,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ jsxDEV34(FormHelperText, { color: "gray.500", children: [
                    prayer?.length || 0,
                    " of 500 characters"
                  ] }, void 0, !0, {
                    fileName: "app/layouts/request/request.layout.tsx",
                    lineNumber: 216,
                    columnNumber: 15
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/layouts/request/request.layout.tsx",
                  lineNumber: 201,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ jsxDEV34(FormControl3, { isInvalid: !!errors.prayer, children: /* @__PURE__ */ jsxDEV34(Checkbox2, { required: !0, autoComplete: "off", size: "md", children: /* @__PURE__ */ jsxDEV34(FormLabel3, { children: [
                  "I consent to this prayer information to be visible on our online prayer wall and during our Sunday services. See our",
                  " ",
                  /* @__PURE__ */ jsxDEV34(
                    Link_default,
                    {
                      isExternal: !0,
                      href: "https://thec3.uk/privacy",
                      text: "prayer@thec3.uk",
                      "aria-label": "prayer@thec3.uk"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/layouts/request/request.layout.tsx",
                      lineNumber: 225,
                      columnNumber: 19
                    },
                    this
                  ),
                  " ",
                  "for more information"
                ] }, void 0, !0, {
                  fileName: "app/layouts/request/request.layout.tsx",
                  lineNumber: 222,
                  columnNumber: 17
                }, this) }, void 0, !1, {
                  fileName: "app/layouts/request/request.layout.tsx",
                  lineNumber: 221,
                  columnNumber: 15
                }, this) }, void 0, !1, {
                  fileName: "app/layouts/request/request.layout.tsx",
                  lineNumber: 220,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ jsxDEV34(Button5, { type: "submit", children: "Add Request" }, void 0, !1, {
                  fileName: "app/layouts/request/request.layout.tsx",
                  lineNumber: 237,
                  columnNumber: 13
                }, this)
              ] }, void 0, !0, {
                fileName: "app/layouts/request/request.layout.tsx",
                lineNumber: 200,
                columnNumber: 11
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/layouts/request/request.layout.tsx",
            lineNumber: 152,
            columnNumber: 9
          },
          this
        ) }, void 0, !1, {
          fileName: "app/layouts/request/request.layout.tsx",
          lineNumber: 151,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/layouts/request/request.layout.tsx",
      lineNumber: 121,
      columnNumber: 5
    },
    this
  );
}, request_layout_default = RequestLayout;

// app/routes/__main/request.tsx
import { jsxDEV as jsxDEV35 } from "react/jsx-dev-runtime";
var loader11 = async ({ request }) => {
  let user = (await sessionStorage.getSession(request.headers.get("cookie"))).get("user") ?? null, env2 = get_env_default(), locations = await fetchLocations(
    env2.AIRTABLE_PAT,
    env2.API_URL
  );
  return json3({ user, locations });
}, PrayerRequestPage = () => {
  let { user, locations } = useLoaderData8();
  return /* @__PURE__ */ jsxDEV35(request_layout_default, { locations, user }, void 0, !1, {
    fileName: "app/routes/__main/request.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}, request_default = PrayerRequestPage;

// app/routes/__main/index.tsx
var main_exports2 = {};
__export(main_exports2, {
  default: () => Index,
  loader: () => loader12
});
import { useLoaderData as useLoaderData9 } from "@remix-run/react";

// app/layouts/home/home.layout.tsx
import { ArrowForwardIcon as ArrowForwardIcon2 } from "@chakra-ui/icons";
import { Box as Box14, Flex as Flex13, Grid as Grid5, Heading as Heading5, Image as Image4, Text as Text13 } from "@chakra-ui/react";

// app/components/Card/Card.component.tsx
import { Text as Text11, Image as Image3, Flex as Flex12, Grid as Grid3, GridItem as GridItem2, Link as Link4 } from "@chakra-ui/react";
import { jsxDEV as jsxDEV36 } from "react/jsx-dev-runtime";
function Card({ title, subTitle, text, img, href }) {
  return /* @__PURE__ */ jsxDEV36(
    Link4,
    {
      href,
      target: "_blank",
      textTransform: "none",
      _visited: { textTransform: "none" },
      _focus: { textTransform: "none" },
      _hover: { textTransform: "none" },
      color: "white",
      children: /* @__PURE__ */ jsxDEV36(
        Grid3,
        {
          templateColumns: { base: "1fr", md: "repeat(5,1fr)" },
          bgColor: "teal.500",
          children: [
            /* @__PURE__ */ jsxDEV36(GridItem2, { colSpan: { base: 1, md: 3 }, children: /* @__PURE__ */ jsxDEV36(
              Flex12,
              {
                h: "100%",
                ml: { base: 4, md: 6 },
                flexDir: "column",
                justifyContent: "center",
                py: 12,
                children: [
                  /* @__PURE__ */ jsxDEV36(
                    Text11,
                    {
                      color: "white",
                      fontWeight: "bold",
                      as: "h2",
                      fontSize: { base: "3xl", md: "5xl" },
                      mb: { base: 4, md: 6 },
                      children: title
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/Card/Card.component.tsx",
                      lineNumber: 27,
                      columnNumber: 7
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV36(
                    Text11,
                    {
                      fontWeight: "bold",
                      color: "white",
                      as: "h3",
                      fontSize: { base: "xl", md: "2xl" },
                      children: subTitle
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/Card/Card.component.tsx",
                      lineNumber: 36,
                      columnNumber: 7
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV36(
                    Text11,
                    {
                      color: "white",
                      fontSize: { base: "xl", md: "2xl" },
                      children: text
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/Card/Card.component.tsx",
                      lineNumber: 44,
                      columnNumber: 7
                    },
                    this
                  )
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/components/Card/Card.component.tsx",
                lineNumber: 20,
                columnNumber: 6
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/Card/Card.component.tsx",
              lineNumber: 19,
              columnNumber: 5
            }, this),
            /* @__PURE__ */ jsxDEV36(GridItem2, { h: "full", w: "full", colSpan: { base: 1, md: 2 }, children: /* @__PURE__ */ jsxDEV36(Image3, { src: img, objectFit: "cover" }, void 0, !1, {
              fileName: "app/components/Card/Card.component.tsx",
              lineNumber: 53,
              columnNumber: 6
            }, this) }, void 0, !1, {
              fileName: "app/components/Card/Card.component.tsx",
              lineNumber: 52,
              columnNumber: 5
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/Card/Card.component.tsx",
          lineNumber: 15,
          columnNumber: 4
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/Card/Card.component.tsx",
      lineNumber: 6,
      columnNumber: 3
    },
    this
  );
}
var Card_component_default = Card;

// app/components/Card/index.tsx
var Card_default = Card_component_default;

// app/components/Carousel/Carousel.component.tsx
import { Stack as Stack2, Text as Text12, Box as Box13, IconButton as IconButton2, GridItem as GridItem3, Grid as Grid4 } from "@chakra-ui/react";
import Nuka from "nuka-carousel";

// app/components/CaretLeftIcon/CaretLeftIcon.component.tsx
import { createIcon as createIcon5 } from "@chakra-ui/react";
var CaretLeftIcon = createIcon5({
  displayName: "CaretLeftIcon",
  viewBox: "0 0 40 36",
  defaultProps: {
    color: "#00919F",
    h: "36px",
    w: "36px"
  },
  d: "M0.839285 15.9695C-0.276785 17.0926 -0.276785 18.9164 0.839284 20.0394L15.125 34.4144C16.2411 35.5375 18.0536 35.5375 19.1696 34.4144C20.2857 33.2914 20.2857 31.4676 19.1696 30.3445L9.75 20.875L37.1429 20.875C38.7232 20.875 40 19.5902 40 18C40 16.4097 38.7232 15.125 37.1429 15.125L9.75893 15.125L19.1607 5.65545C20.2768 4.5324 20.2768 2.70857 19.1607 1.58552C18.0446 0.462473 16.2321 0.462473 15.1161 1.58552L0.830358 15.9605L0.839285 15.9695Z"
}), CaretLeftIcon_component_default = CaretLeftIcon;

// app/components/CaretLeftIcon/index.tsx
var CaretLeftIcon_default = CaretLeftIcon_component_default;

// app/components/CaretRightIcon/CaretRightIcon.component.tsx
import { createIcon as createIcon6 } from "@chakra-ui/react";
var CaretRightIcon = createIcon6({
  displayName: "CaretRightIcon",
  viewBox: "0 0 40 36",
  defaultProps: {
    color: "#00919F",
    h: "36px",
    w: "36px"
  },
  d: "M39.1607 20.0305C40.2768 18.9074 40.2768 17.0836 39.1607 15.9606L24.875 1.58557C23.7589 0.462524 21.9464 0.462524 20.8304 1.58557C19.7143 2.70862 19.7143 4.53245 20.8304 5.65549L30.25 15.125H2.85714C1.27679 15.125 0 16.4098 0 18C0 19.5903 1.27679 20.875 2.85714 20.875H30.2411L20.8393 30.3446C19.7232 31.4676 19.7232 33.2914 20.8393 34.4145C21.9554 35.5375 23.7679 35.5375 24.8839 34.4145L39.1696 20.0395L39.1607 20.0305Z"
}), CaretRightIcon_component_default = CaretRightIcon;

// app/components/CaretRightIcon/index.tsx
var CaretRightIcon_default = CaretRightIcon_component_default;

// app/components/Carousel/Carousel.component.tsx
import { jsxDEV as jsxDEV37 } from "react/jsx-dev-runtime";
function Carousel({ items }) {
  return /* @__PURE__ */ jsxDEV37(
    Grid4,
    {
      templateColumns: { base: "1fr", md: "repeat(5, 1fr)" },
      w: "full",
      minHeight: "xs",
      children: [
        /* @__PURE__ */ jsxDEV37(GridItem3, { colSpan: 2, children: /* @__PURE__ */ jsxDEV37(
          Text12,
          {
            mt: { base: 4, md: 8 },
            ml: { base: 4, md: 6 },
            fontWeight: "bold",
            as: "h2",
            color: "gray.500",
            fontSize: { base: "3xl", md: "5xl" },
            children: "Be inspired..."
          },
          void 0,
          !1,
          {
            fileName: "app/components/Carousel/Carousel.component.tsx",
            lineNumber: 17,
            columnNumber: 5
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/Carousel/Carousel.component.tsx",
          lineNumber: 16,
          columnNumber: 4
        }, this),
        /* @__PURE__ */ jsxDEV37(GridItem3, { colSpan: 3, borderLeft: { base: "none", md: "1px solid #A3A3A3" }, children: /* @__PURE__ */ jsxDEV37(Box13, { mr: { base: 4, md: 8 }, mb: 2, children: /* @__PURE__ */ jsxDEV37(
          Nuka,
          {
            slidesToShow: 1,
            wrapAround: !0,
            renderBottomRightControls: ({
              nextSlide,
              previousSlide
            }) => /* @__PURE__ */ jsxDEV37(Box13, { children: [
              /* @__PURE__ */ jsxDEV37(
                IconButton2,
                {
                  variant: "link",
                  _focus: {
                    boxShadow: "none",
                    outline: "none",
                    outlineOffset: "0px",
                    outlineColor: "none"
                  },
                  onClick: previousSlide,
                  icon: /* @__PURE__ */ jsxDEV37(
                    CaretLeftIcon_default,
                    {
                      h: { base: 4, md: "auto" }
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/Carousel/Carousel.component.tsx",
                      lineNumber: 48,
                      columnNumber: 11
                    },
                    this
                  ),
                  "aria-label": "Show the previous set of resources in the resource carousel"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Carousel/Carousel.component.tsx",
                  lineNumber: 38,
                  columnNumber: 9
                },
                this
              ),
              /* @__PURE__ */ jsxDEV37(
                IconButton2,
                {
                  variant: "link",
                  _focus: {
                    boxShadow: "none",
                    outline: "none",
                    outlineOffset: "0px",
                    outlineColor: "none"
                  },
                  onClick: nextSlide,
                  ml: { base: "none", md: 4 },
                  icon: /* @__PURE__ */ jsxDEV37(
                    CaretRightIcon_default,
                    {
                      h: { base: 4, md: "auto" }
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/Carousel/Carousel.component.tsx",
                      lineNumber: 65,
                      columnNumber: 11
                    },
                    this
                  ),
                  "aria-label": "Show the next set of resources in the resource carousel"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Carousel/Carousel.component.tsx",
                  lineNumber: 54,
                  columnNumber: 9
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/Carousel/Carousel.component.tsx",
              lineNumber: 37,
              columnNumber: 8
            }, this),
            renderBottomCenterControls: null,
            renderCenterLeftControls: null,
            renderCenterRightControls: null,
            children: items.map((item, idx) => /* @__PURE__ */ jsxDEV37(
              Stack2,
              {
                mb: { base: 10 },
                mt: { base: 4, md: 8 },
                ml: 4,
                gap: 1,
                children: [
                  /* @__PURE__ */ jsxDEV37(Text12, { color: "gray.500", fontSize: "2xl", children: item.title }, void 0, !1, {
                    fileName: "app/components/Carousel/Carousel.component.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                  }, this),
                  /* @__PURE__ */ jsxDEV37(Text12, { fontWeight: "bold", color: "teal.500", children: item.subTitle }, void 0, !1, {
                    fileName: "app/components/Carousel/Carousel.component.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                  }, this)
                ]
              },
              idx,
              !0,
              {
                fileName: "app/components/Carousel/Carousel.component.tsx",
                lineNumber: 78,
                columnNumber: 8
              },
              this
            ))
          },
          void 0,
          !1,
          {
            fileName: "app/components/Carousel/Carousel.component.tsx",
            lineNumber: 30,
            columnNumber: 6
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/Carousel/Carousel.component.tsx",
          lineNumber: 29,
          columnNumber: 5
        }, this) }, void 0, !1, {
          fileName: "app/components/Carousel/Carousel.component.tsx",
          lineNumber: 28,
          columnNumber: 4
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Carousel/Carousel.component.tsx",
      lineNumber: 11,
      columnNumber: 3
    },
    this
  );
}
var Carousel_component_default = Carousel;

// app/components/Carousel/index.tsx
var Carousel_default = Carousel_component_default;

// app/layouts/home/home.layout.tsx
import { jsxDEV as jsxDEV38 } from "react/jsx-dev-runtime";
var HomeLayout = ({ link, verses, card, subTitle }) => {
  let sectionMargin = { base: 6, md: 12 };
  return /* @__PURE__ */ jsxDEV38(Box14, { px: { base: 3, md: 4 }, children: [
    /* @__PURE__ */ jsxDEV38(
      Grid5,
      {
        as: "section",
        templateColumns: { base: "1fr", md: "repeat(2, 1fr)" },
        mb: sectionMargin,
        children: [
          /* @__PURE__ */ jsxDEV38(Flex13, { alignItems: "center", mr: 5, children: /* @__PURE__ */ jsxDEV38(Box14, { maxW: { md: "xl" }, children: /* @__PURE__ */ jsxDEV38(Box14, { children: [
            /* @__PURE__ */ jsxDEV38(
              Heading5,
              {
                as: "h1",
                size: "3xl",
                mb: { base: 4, md: 6 },
                textTransform: "uppercase",
                children: [
                  "The",
                  " ",
                  /* @__PURE__ */ jsxDEV38(Box14, { as: "span", color: "teal", children: "Tim Creamer" }, void 0, !1, {
                    fileName: "app/layouts/home/home.layout.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                  }, this),
                  " ",
                  "Prayer Room"
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/layouts/home/home.layout.tsx",
                lineNumber: 20,
                columnNumber: 8
              },
              this
            ),
            /* @__PURE__ */ jsxDEV38(
              Text13,
              {
                fontWeight: "bold",
                size: "lg",
                mb: { base: 4, md: 6 },
                children: "a time to be silent and a time to speak"
              },
              void 0,
              !1,
              {
                fileName: "app/layouts/home/home.layout.tsx",
                lineNumber: 32,
                columnNumber: 8
              },
              this
            ),
            /* @__PURE__ */ jsxDEV38(Text13, { size: "md", mb: { base: 4, md: 6 }, children: subTitle || "This space was created in honour of Tim Creamer. A man of passionate faith who was always first to pray. Sadly missed but an inspiration to us all to run the race with perseverance'." }, void 0, !1, {
              fileName: "app/layouts/home/home.layout.tsx",
              lineNumber: 39,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ jsxDEV38(
              Link_default,
              {
                href: "/prayerwall",
                useButton: !0,
                text: "Go to prayer wall",
                "aria-label": "Go to Prayer Wall",
                buttonProps: {
                  rightIcon: /* @__PURE__ */ jsxDEV38(ArrowForwardIcon2, {}, void 0, !1, {
                    fileName: "app/layouts/home/home.layout.tsx",
                    lineNumber: 49,
                    columnNumber: 21
                  }, this)
                }
              },
              void 0,
              !1,
              {
                fileName: "app/layouts/home/home.layout.tsx",
                lineNumber: 43,
                columnNumber: 8
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/layouts/home/home.layout.tsx",
            lineNumber: 19,
            columnNumber: 7
          }, this) }, void 0, !1, {
            fileName: "app/layouts/home/home.layout.tsx",
            lineNumber: 18,
            columnNumber: 6
          }, this) }, void 0, !1, {
            fileName: "app/layouts/home/home.layout.tsx",
            lineNumber: 17,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ jsxDEV38(
            Image4,
            {
              display: { base: "none", md: "block" },
              src: "/home-main.jpeg",
              alt: "People praying"
            },
            void 0,
            !1,
            {
              fileName: "app/layouts/home/home.layout.tsx",
              lineNumber: 55,
              columnNumber: 5
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/layouts/home/home.layout.tsx",
        lineNumber: 12,
        columnNumber: 4
      },
      this
    ),
    /* @__PURE__ */ jsxDEV38(Box14, { as: "section", maxW: { md: "1028px" }, mb: sectionMargin, children: /* @__PURE__ */ jsxDEV38(
      Card_default,
      {
        title: card?.title || "Weekly Prayer meetings",
        subTitle: card?.subTitle || "Join us on Zoom",
        text: card?.text || "Daily at 7.30am & 7.30pm",
        img: "/home-card.jpeg",
        href: card?.href || link?.text
      },
      void 0,
      !1,
      {
        fileName: "app/layouts/home/home.layout.tsx",
        lineNumber: 62,
        columnNumber: 5
      },
      this
    ) }, void 0, !1, {
      fileName: "app/layouts/home/home.layout.tsx",
      lineNumber: 61,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ jsxDEV38(
      Box14,
      {
        as: "section",
        maxW: { md: "1028px" },
        mb: sectionMargin,
        overflowX: "hidden",
        bgColor: "white",
        bgImage: "url(/logomark-transparent.svg)",
        bgRepeat: "no-repeat",
        bgSize: "450px 405px",
        bgPosition: "right",
        filter: "drop-shadow(0px 5px 15px rgba(0, 0, 0, 0.1))",
        children: /* @__PURE__ */ jsxDEV38(
          Carousel_default,
          {
            items: verses.map((v) => ({
              title: v.content,
              subTitle: v.verse
            }))
          },
          void 0,
          !1,
          {
            fileName: "app/layouts/home/home.layout.tsx",
            lineNumber: 82,
            columnNumber: 5
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/layouts/home/home.layout.tsx",
        lineNumber: 70,
        columnNumber: 4
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/layouts/home/home.layout.tsx",
    lineNumber: 11,
    columnNumber: 3
  }, this);
}, home_layout_default = HomeLayout;

// app/routes/__main/index.tsx
import { jsxDEV as jsxDEV39 } from "react/jsx-dev-runtime";
var WeeklyPrayerLink = "Weekly Meeting Link", loader12 = async () => {
  let env2 = get_env_default(), upcomingMeeting = (await fetchSettings(env2.AIRTABLE_PAT, env2.API_URL)).find(
    (setting) => setting.name === WeeklyPrayerLink
  ), verses = await fetchVerses(env2.AIRTABLE_PAT, env2.API_URL), home = await fetchHomePageContent(env2.AIRTABLE_PAT, env2.API_URL);
  return { upcomingMeeting, verses, home };
};
function Index() {
  let { upcomingMeeting, verses, home } = useLoaderData9();
  return /* @__PURE__ */ jsxDEV39(
    home_layout_default,
    {
      link: upcomingMeeting,
      verses,
      card: home.card,
      subTitle: home.subTitle
    },
    void 0,
    !1,
    {
      fileName: "app/routes/__main/index.tsx",
      lineNumber: 36,
      columnNumber: 5
    },
    this
  );
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-MPLEQPCC.js", imports: ["/build/_shared/chunk-O4BRYNJ4.js", "/build/_shared/chunk-ZXDQJNBF.js", "/build/_shared/chunk-WVVVYJTX.js", "/build/_shared/chunk-AYKGIE7S.js", "/build/_shared/chunk-YVPWXSF7.js", "/build/_shared/chunk-U4FRFQSK.js", "/build/_shared/chunk-XGOTYLZ5.js", "/build/_shared/chunk-7M6SC7J5.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-2UYY3LAQ.js", imports: ["/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-ECBFODBG.js", "/build/_shared/chunk-ECP3JPWP.js", "/build/_shared/chunk-YP5YFSNC.js", "/build/_shared/chunk-B43JI2TA.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !0 }, "routes/__main": { id: "routes/__main", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/__main-BVVRDHTT.js", imports: ["/build/_shared/chunk-BZ5ICFE4.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/__main/index": { id: "routes/__main/index", parentId: "routes/__main", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/__main/index-G3ECVTR3.js", imports: ["/build/_shared/chunk-C6XFJ76I.js", "/build/_shared/chunk-4CUOIBR3.js", "/build/_shared/chunk-SZPWGJVP.js", "/build/_shared/chunk-YP5YFSNC.js", "/build/_shared/chunk-B43JI2TA.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/__main/manage-preferences": { id: "routes/__main/manage-preferences", parentId: "routes/__main", path: "manage-preferences", index: void 0, caseSensitive: void 0, module: "/build/routes/__main/manage-preferences-OSQ6AQKA.js", imports: ["/build/_shared/chunk-RPXY636K.js", "/build/_shared/chunk-4CUOIBR3.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-ECP3JPWP.js", "/build/_shared/chunk-SZPWGJVP.js", "/build/_shared/chunk-YP5YFSNC.js", "/build/_shared/chunk-B43JI2TA.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/__main/prayerwall/$location": { id: "routes/__main/prayerwall/$location", parentId: "routes/__main", path: "prayerwall/:location", index: void 0, caseSensitive: void 0, module: "/build/routes/__main/prayerwall/$location-AEPGNKDW.js", imports: ["/build/_shared/chunk-44OSXAAK.js", "/build/_shared/chunk-C6XFJ76I.js", "/build/_shared/chunk-4CUOIBR3.js", "/build/_shared/chunk-AUYLHJJM.js", "/build/_shared/chunk-EB3M5DX3.js", "/build/_shared/chunk-SZPWGJVP.js", "/build/_shared/chunk-YP5YFSNC.js", "/build/_shared/chunk-B43JI2TA.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/__main/prayerwall/index": { id: "routes/__main/prayerwall/index", parentId: "routes/__main", path: "prayerwall", index: !0, caseSensitive: void 0, module: "/build/routes/__main/prayerwall/index-WGFNRQKP.js", imports: ["/build/_shared/chunk-44OSXAAK.js", "/build/_shared/chunk-C6XFJ76I.js", "/build/_shared/chunk-4CUOIBR3.js", "/build/_shared/chunk-EB3M5DX3.js", "/build/_shared/chunk-SZPWGJVP.js", "/build/_shared/chunk-YP5YFSNC.js", "/build/_shared/chunk-B43JI2TA.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/__main/request": { id: "routes/__main/request", parentId: "routes/__main", path: "request", index: void 0, caseSensitive: void 0, module: "/build/routes/__main/request-QALTEDD4.js", imports: ["/build/_shared/chunk-RPXY636K.js", "/build/_shared/chunk-4CUOIBR3.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-ECP3JPWP.js", "/build/_shared/chunk-EB3M5DX3.js", "/build/_shared/chunk-SZPWGJVP.js", "/build/_shared/chunk-YP5YFSNC.js", "/build/_shared/chunk-B43JI2TA.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/auth/callback": { id: "routes/auth/callback", parentId: "root", path: "auth/callback", index: void 0, caseSensitive: void 0, module: "/build/routes/auth/callback-XZXSMMHE.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/auth/login": { id: "routes/auth/login", parentId: "root", path: "auth/login", index: void 0, caseSensitive: void 0, module: "/build/routes/auth/login-FRFJFHTK.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/auth/logout": { id: "routes/auth/logout", parentId: "root", path: "auth/logout", index: void 0, caseSensitive: void 0, module: "/build/routes/auth/logout-VBYYXGPQ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/prayers": { id: "routes/prayers", parentId: "root", path: "prayers", index: void 0, caseSensitive: void 0, module: "/build/routes/prayers-E7KA2EUE.js", imports: ["/build/_shared/chunk-BJ7HU4IS.js", "/build/_shared/chunk-RS5J5J2F.js", "/build/_shared/chunk-EB3M5DX3.js", "/build/_shared/chunk-SZPWGJVP.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/prayers/$location": { id: "routes/prayers/$location", parentId: "root", path: "prayers/:location", index: void 0, caseSensitive: void 0, module: "/build/routes/prayers/$location-N6X4MNBZ.js", imports: ["/build/_shared/chunk-AUYLHJJM.js", "/build/_shared/chunk-RS5J5J2F.js", "/build/_shared/chunk-EB3M5DX3.js", "/build/_shared/chunk-SZPWGJVP.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/prayers/index": { id: "routes/prayers/index", parentId: "root", path: "prayers", index: !0, caseSensitive: void 0, module: "/build/routes/prayers/index-HVCNJNJ3.js", imports: ["/build/_shared/chunk-BJ7HU4IS.js", "/build/_shared/chunk-RS5J5J2F.js", "/build/_shared/chunk-EB3M5DX3.js", "/build/_shared/chunk-SZPWGJVP.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "d024e9f2", hmr: { runtime: "/build/_shared\\chunk-YVPWXSF7.js", timestamp: 1750244919218 }, url: "/build/manifest-D024E9F2.js" };

// server-entry-module:@remix-run/dev/server-build
var mode4 = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/prayers": {
    id: "routes/prayers",
    parentId: "root",
    path: "prayers",
    index: void 0,
    caseSensitive: void 0,
    module: prayers_exports
  },
  "routes/__main": {
    id: "routes/__main",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: main_exports
  },
  "routes/prayers/$location": {
    id: "routes/prayers/$location",
    parentId: "root",
    path: "prayers/:location",
    index: void 0,
    caseSensitive: void 0,
    module: location_exports
  },
  "routes/auth/callback": {
    id: "routes/auth/callback",
    parentId: "root",
    path: "auth/callback",
    index: void 0,
    caseSensitive: void 0,
    module: callback_exports
  },
  "routes/prayers/index": {
    id: "routes/prayers/index",
    parentId: "root",
    path: "prayers",
    index: !0,
    caseSensitive: void 0,
    module: prayers_exports
  },
  "routes/auth/logout": {
    id: "routes/auth/logout",
    parentId: "root",
    path: "auth/logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/auth/login": {
    id: "routes/auth/login",
    parentId: "root",
    path: "auth/login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/__main/prayerwall/$location": {
    id: "routes/__main/prayerwall/$location",
    parentId: "routes/__main",
    path: "prayerwall/:location",
    index: void 0,
    caseSensitive: void 0,
    module: location_exports2
  },
  "routes/__main/manage-preferences": {
    id: "routes/__main/manage-preferences",
    parentId: "routes/__main",
    path: "manage-preferences",
    index: void 0,
    caseSensitive: void 0,
    module: manage_preferences_exports
  },
  "routes/__main/prayerwall/index": {
    id: "routes/__main/prayerwall/index",
    parentId: "routes/__main",
    path: "prayerwall",
    index: !0,
    caseSensitive: void 0,
    module: prayerwall_exports
  },
  "routes/__main/request": {
    id: "routes/__main/request",
    parentId: "routes/__main",
    path: "request",
    index: void 0,
    caseSensitive: void 0,
    module: request_exports
  },
  "routes/__main/index": {
    id: "routes/__main/index",
    parentId: "routes/__main",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: main_exports2
  }
};

// server.js
function getLoadContext(event, context) {
  let rawAuthorizationString, netlifyGraphToken;
  event.authlifyToken != null && (netlifyGraphToken = event.authlifyToken);
  let authHeader = event.headers.authorization, graphSignatureHeader = event.headers["x-netlify-graph-signature"];
  authHeader != null && /Bearer /gi.test(authHeader) && (rawAuthorizationString = authHeader.split(" ")[1]);
  let loadContext = {
    clientNetlifyGraphAccessToken: rawAuthorizationString,
    netlifyGraphToken,
    netlifyGraphSignature: graphSignatureHeader
  };
  return Object.keys(loadContext).forEach((key) => {
    loadContext[key] == null && delete loadContext[key];
  }), loadContext;
}
var handler = createRequestHandler({
  build: server_build_exports,
  getLoadContext,
  mode: "development"
});
export {
  handler
};
//# sourceMappingURL=index.js.map
