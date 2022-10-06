import { Box, Flex, Text, Link } from '@chakra-ui/react';
import { Link as RemixLink } from '@remix-run/react';
import type { ReactNode } from 'react';
import React from 'react';

const FooterList = ({
	title,
	children,
}: {
	title: string;
	children: ReactNode;
}) => {
	return (
		<Flex columnGap={8}>
			<Text as="h4" fontWeight="bold" size="lg" minW="40%">
				{title}
			</Text>
			<Flex flexDir="column" mt="1">
				{children}
			</Flex>
		</Flex>
	);
};

function Footer() {
	const copyrightYear = new Date().getFullYear();
	const height = { base: '2.5rem', md: '2.5rem' };

	const data = [
		{
			primary: {
				title: 'Our Church',
			},
			fields: [
				{
					link_url: '',
					link_title: 'about',
				},
				{
					link_url: '',
					link_title: 'leaders',
				},
				{
					link_url: '',
					link_title: 'locations',
				},
				{
					link_url: '',
					link_title: 'join us',
				},
				{
					link_url: '',
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
					link_url: '',
					link_title: 'privacy',
				},
				{
					link_url: '',
					link_title: 'terms',
				},
				{
					link_url: '',
					link_title: 'copyright',
				},
				{
					link_url: '',
					link_title: 'safeguarding',
				},
				{
					link_url: '',
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
					link_url: '',
					link_title: 'Coldhams Coffee',
				},
				{
					link_url: '',
					link_title: 'C3 Impact',
				},
				{
					link_url: '',
					link_title: 'Breathe',
				},
				{
					link_url: '',
					link_title: 'The C3 Academy',
				},
				{
					link_url: '',
					link_title: 'Tim Creamer Prayer Room',
				},
				{
					link_url: '',
					link_title: 'The C3 Store',
				},
			],
		},
	];

	return (
		<Box as="footer" mt={4} px={{ base: 3, md: 4 }}>
			<Flex
				flexDir={{ base: 'column', md: 'row' }}
				justifyContent="space-between"
				borderTop="1px solid black"
				pt="4"
			>
				{data.map(({ primary, fields }, idx) => {
					return (
						<FooterList key={primary.title} title={primary.title}>
							{fields.map(link => {
								// const url = linkResolver(link.link_url);
								return (
									<React.Fragment key={link.link_title}>
										<Link
											key={link.link_title}
											as={RemixLink}
											to={link.link_url}
											color="gray.500"
											fontWeight="semibold"
											size={{ base: 'xs', md: 'm' }}
											_hover={{ color: 'red.500' }}
										>
											{link.link_title}
										</Link>
									</React.Fragment>
								);
							})}
						</FooterList>
					);
				})}
			</Flex>
		</Box>
	);
}

export default Footer;
