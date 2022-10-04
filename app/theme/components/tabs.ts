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
					color: 'teal.500',
					borderColor: 'teal.500',
				},
				_focus: {
					boxShadow: 'none',
				},
				_focusVisible: {
					outline: '2px solid',
					outlineColor: 'teal.500',
				},
				_hover: {
					color: 'teal.500',
				},
				_active: {
					bg: 'transparent',
				},
				_disabled: {
					opacity: 0.4,
					cursor: 'not-allowed',
				},
			},
			tablist: {
				borderColor: 'transparent',
			},
			tabpanel: {
				p: 0,
			},
		},
	},
};
