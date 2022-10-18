import type { MetaFunction } from '@remix-run/node';
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useCatch,
} from '@remix-run/react';
import Layout from './components/Layout';
import styles from '~/styles/global.css';
import { ChakraProvider, VStack } from '@chakra-ui/react';
import { SkipNavLink } from '@chakra-ui/skip-nav';
import { useContext, useEffect } from 'react';
import ClientStyleContext from './context.client';
import ServerStyleContext from './context.server';
import { withEmotionCache } from '@emotion/react';
import C3Theme from './theme';
import Fonts from './fonts';
import ErrorLayout from './components/ErrorLayout';

export const meta: MetaFunction = () => ({
	charset: 'utf-8',
	title: 'Tim Creamer Prayer Room',
	viewport: 'width=device-width,initial-scale=1',
});

export function links() {
	return [{ rel: 'stylesheet', href: styles }];
}

export interface DocumentProps {
	children: React.ReactNode;
	title?: string;
}

export function ErrorBoundary(error: any) {
	return <ErrorLayout error={error} />;
}

export function CatchBoundary() {
	const caught = useCatch();
	return <ErrorLayout caught={caught} />;
}

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
			clientStyleData.reset();
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

export default function App() {
	return (
		<Document>
			<Layout>
				<Outlet />
			</Layout>
		</Document>
	);
}
