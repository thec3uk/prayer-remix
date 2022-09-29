const shadows = {
  base: '2px 2px 4px rgba(0, 0, 0, 0.05), 4px 4px 10px rgba(0, 0, 0, 0.05)',
  outline: '0px 0px 0px 2px rgba(109, 24, 127, 0.15)'
};

/**
 * @deprecated
 * You can derive the Shadows type from the DefaultChakraTheme
 *
 * type Shadows = DefaultChakraTheme['shadows']
 */
export type Shadows = typeof shadows;

export default shadows;
