import type { MetaFunction } from '@remix-run/node';
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react';
import Layout from './components/Layout';
import styles from '~/styles/global.css';
import { ChakraProvider } from '@chakra-ui/react';
import { useContext, useEffect } from 'react';
import ClientStyleContext from './context.client';
import ServerStyleContext from './context.server';
import { withEmotionCache } from '@emotion/react';
import C3Theme from './theme';

export const meta: MetaFunction = () => ({
	charset: 'utf-8',
	title: 'Tim Creamer Prayer Room',
	viewport: 'width=device-width,initial-scale=1',
});

export function links() {
	return [{ rel: 'stylesheet', href: styles }];
}

export function CatchBoundary() {
	return (
		<html lang="en">
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				<div className="md:h-screen md:flex md:flex-col md:justify-center md:items-start md:mx-32">
					<div className="md:bg-gray-50 rounded shadow md:p-4">
						<div className="w-screen md:w-full px-4 py-2 text-lg md:text-lg font-sans mb-8">
							<h2 className="font-serif text-xl mb-2">
								404 - Not Found
							</h2>
							<p>
								We couldn't find the page you were looking for.
							</p>
							<p>
								Try going back to{' '}
								<a className="hover:underline" href="/">
									home
								</a>{' '}
								and trying again.
							</p>
						</div>
					</div>
				</div>
			</body>
		</html>
	);
}

export function ErrorBoundary({
	error,
}: {
	error: { message: string; stack: string };
}): JSX.Element {
	return (
		<html lang="en">
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				<div className="md:h-screen md:flex md:flex-col md:justify-center md:items-start md:mx-32">
					<div className="md:bg-gray-50 rounded shadow md:p-4">
						<div className="w-screen md:w-full px-4 py-2 text-lg md:text-lg font-sans mb-8">
							<h2 className="font-serif text-xl mb-2">
								500 - Error
							</h2>
							<p>We did not expect that to happen, sorry.</p>
							<p>
								Try going back to{' '}
								<a className="hover:underline" href="/">
									home
								</a>{' '}
								and trying again.
							</p>
							<code>{JSON.stringify(error)}</code>
						</div>
					</div>
				</div>
			</body>
		</html>
	);
}

interface DocumentProps {
	children: React.ReactNode;
	title?: string;
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
		}, [clientStyleData, serverSyleData, emotionCache]);

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
					<ChakraProvider theme={C3Theme}>{children}</ChakraProvider>
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
