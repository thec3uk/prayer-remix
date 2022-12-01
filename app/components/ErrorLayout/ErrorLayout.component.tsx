import { ChakraProvider, Heading, VStack, Text, Box } from '@chakra-ui/react';
import { SkipNavLink } from '@chakra-ui/skip-nav';
import { withEmotionCache } from '@emotion/react';
import {
	Links,
	LiveReload,
	Meta,
	Scripts,
	ScrollRestoration,
	useLoaderData,
} from '@remix-run/react';
import { useContext, useEffect } from 'react';
import Fonts from '~/fonts';
import { ClientStyleContext, ServerStyleContext } from '~/lib/emotion/context';
import type { DocumentProps } from '~/root';
import C3Theme from '~/theme';
import Footer from '../Footer';
import Header from '../Header';
import MenuLink from '../MenuLink';
import type { IErrorLayoutProps } from './ErrorLayout.definition';

const Document = withEmotionCache(
	({ children, title }: DocumentProps, emotionCache) => {
		const serverSyleData = useContext(ServerStyleContext);
		const clientStyleData = useContext(ClientStyleContext);

		// Only executed on client
		useEffect(() => {
			// re-link sheet container
			emotionCache.sheet.container = document.head;
			// re-inject tags
			const tags = emotionCache.sheet.tags;
			emotionCache.sheet.flush();
			tags.forEach(tag => {
				(emotionCache.sheet as any)._insertTag(tag);
			});
			// reset cache to reapply global styles
			clientStyleData?.reset();
		}, []);

		return (
			<html lang="en">
				<head>
					<meta charSet="utf-8" />
					<meta
						name="viewport"
						content="width=device-width,initial-scale=1"
					/>
					<meta name="robots" content="index, follow" />
					{title ? <title>{title}</title> : null}
					<Meta />
					<Links />
					{serverSyleData?.map(({ key, ids, css }) => (
						<style
							key={key}
							data-emotion={`${key} ${ids.join(' ')}`}
							// eslint-disable-next-line react/no-danger
							dangerouslySetInnerHTML={{ __html: css }}
						/>
					))}
				</head>
				<body>
					<ChakraProvider theme={C3Theme}>
						<Fonts />
						<VStack
							margin={'auto'}
							minH="100vh"
							minW={{ base: 'none', lg: '100ch' }}
							maxW={'150ch'}
						>
							<SkipNavLink zIndex="skipLink">
								Skip to content
							</SkipNavLink>
							{children}
						</VStack>
					</ChakraProvider>
					<ScrollRestoration />
					<Scripts />
					{process.env.NODE_ENV === 'development' && <LiveReload />}
				</body>
			</html>
		);
	}
);

function ErrorLayout({ error, caught }: IErrorLayoutProps) {
	const title = caught ? caught.statusText : 'Sorry, something went wrong';
	const text =
		caught?.status === 404
			? "We couldn't find what you were looking for."
			: "We weren't expecting this to happen";
	const cookies = useLoaderData();
	return (
		<Document cookies={cookies}>
			<Header />
			<Box h={'75vh'}>
				<Heading mb={6}>{title}</Heading>
				<Text mb={2}>{text}</Text>
				<Text mb={6}>
					Click on the link below to head home and try again.
				</Text>
				<MenuLink to="/" text="Return home"></MenuLink>
			</Box>
			<Footer />
		</Document>
	);
}

export default ErrorLayout;
