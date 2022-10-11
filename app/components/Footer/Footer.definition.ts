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
				link_url: `${baseUrl}/our-leaders`,
				link_title: 'leaders',
			},
			{
				link_url: `${baseUrl}/locations`,
				link_title: 'locations',
			},
			{
				link_url: `${baseUrl}/join-us`,
				link_title: 'join us',
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
			{
				link_url: `${baseUrl}/terms`,
				link_title: 'terms',
			},
			{
				link_url: `${baseUrl}/copyright`,
				link_title: 'copyright',
			},
			{
				link_url: `${baseUrl}/safeguarding`,
				link_title: 'safeguarding',
			},
			{
				link_url: `${baseUrl}/cookies`,
				link_title: 'cookies',
			},
		],
	},
	{
		primary: {
			title: 'Our Network',
		},
		fields: [
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
				link_url: 'https://prayer.thec3.uk/',
				link_title: 'Tim Creamer Prayer Room',
			},
			{
				link_url: 'https://store.thec3.uk/',
				link_title: 'The C3 Store',
			},
		],
	},
];
