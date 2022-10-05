const typography = {
	lineHeights: {
		normal: 'normal',
		none: 1,
		shorter: 1.25, //20 - unitless
		short: 1.375, //22 - unitless
		base: 1.5, //24 - unitless
		tall: 1.75, //28 - unitless
		taller: 2, //32 - unitless
		'3': '2.5rem', //40
		'4': '3rem', //48
		'5': '4rem', //64
	},

	fontWeights: {
		normal: 400,
		medium: 500,
		semibold: 600,
		bold: 700,
	},

	fonts: {
		heading: `'Novecentosanswide', sans-serif`,
		body: `'Montserrat', sans-serif`,
		link: `'Montserrat', sans-serif`,
	},

	fontSizes: {
		xs: '0.75rem', //12
		sm: '0.875rem', //14
		md: '1rem', //16
		lg: '1.125rem', //18
		xl: '1.25rem', //20
		'2xl': '1.5rem', //24
		'3xl': '1.75rem', //28
		'4xl': '2rem', //32
		'5xl': '2.5rem', //40
		'6xl': '3.5rem', //56
	},
};

export type Typography = typeof typography;

export default typography;
