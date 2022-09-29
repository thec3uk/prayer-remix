export default {
  parts: ['tab', 'tablist', 'tabpanel'],
  variants: {
    line: {
      tab: {
        fontWeight: 'medium',
        fontSize: { base: 'md', md: 'xl' },
        fontFamily: 'link',
        borderBottom: '4px solid',
        borderColor: 'transparent',
        marginBottom: '-2px',
        _selected: {
          color: 'purple.500',
          borderColor: 'purple.500'
        },
        _focus: {
          boxShadow: 'none'
        },
        _focusVisible: {
          outline: '2px solid',
          outlineColor: 'purple.500'
        },
        _hover: {
          color: 'purple.500'
        },
        _active: {
          bg: 'transparent'
        },
        _disabled: {
          opacity: 0.4,
          cursor: 'not-allowed'
        }
      },
      tablist: {
        borderColor: 'transparent'
      },
      tabpanel: {
        p: 0
      }
    }
  }
};
