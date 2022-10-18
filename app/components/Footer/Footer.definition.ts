export interface IFooterProps {
	isMobile: boolean | undefined;
}

const baseUrl = 'https://thec3.uk';

export const footerItems = [
	{
		primary: {
			title: 'Our Church',
		},
		fields: [
			{
				link_url: `${baseUrl}/about`,
				link_title: 'about',
			},
			{
				link_url: `${baseUrl}/we-use-cookies-to-help-improve-your-experience-of-our`,
				link_title: 'contact us',
			},
		],
	},
	{
		primary: {
			title: 'Our Policies',
		},
		fields: [
			{
				link_url: `${baseUrl}/privacy`,
				link_title: 'privacy',
			},
		],
	},
	{
		primary: {
			title: 'Our Network',
		},
		fields: [
			{
				link_url: baseUrl,
				link_title: 'The C3 Church',
			},
			{
				link_url: 'https://www.coldhamscoffee.co.uk/',
				link_title: 'Coldhams Coffee',
			},
			{
				link_url: 'https://c3impact.uk/',
				link_title: 'C3 Impact',
			},
			{
				link_url: 'https://breathe.thec3.uk/',
				link_title: 'Breathe',
			},
			{
				link_url: 'https://thec3.academy/',
				link_title: 'The C3 Academy',
			},
			{
				link_url: 'https://store.thec3.uk/',
				link_title: 'The C3 Store',
			},
		],
	},
];
