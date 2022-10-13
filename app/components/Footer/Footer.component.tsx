import { Box, Flex, Text, Link } from '@chakra-ui/react';
import { Link as RemixLink } from '@remix-run/react';
import type { ReactNode } from 'react';
import React from 'react';
import { footerItems } from './Footer.definition';

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
	return (
		<Box
			as="footer"
			w={'full'}
			my={6}
			px={{ base: 3, md: 4 }}
			maxWidth="container.2xl"
		>
			<Flex
				flexDir={{ base: 'column', md: 'row' }}
				justifyContent="space-between"
				borderTop="1px solid black"
				pt="4"
				gap={{ base: 4, md: 0 }}
			>
				{footerItems.map(({ primary, fields }, idx) => {
					return (
						<FooterList key={primary.title} title={primary.title}>
							{fields.map(link => {
								return (
									<React.Fragment key={link.link_title}>
										<Link
											key={link.link_title}
											href={link.link_url}
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
