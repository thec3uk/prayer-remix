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
import styles from './styles/app.css';

export const meta: MetaFunction = () => ({
	charset: 'utf-8',
	title: 'Tim Creamer Prayer Room',
	viewport: 'width=device-width,initial-scale=1',
});

export function links() {
	return [{ rel: 'stylesheet', href: styles }];
}

export default function App() {
	return (
		<html lang="en">
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload port={8002} />
			</body>
		</html>
	);
}

export function CatchBoundary() {
	return (
		<html lang="en">
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				<Layout title={'Not Found'}>
					<div className="md:h-screen md:flex md:flex-col md:justify-center md:items-start md:mx-32">
						<div className="md:bg-gray-50 rounded shadow md:p-4">
							<div className="w-screen md:w-full px-4 py-2 text-lg md:text-lg font-sans mb-8">
								<h2 className="font-serif text-xl mb-2">
									404 - Not Found
								</h2>
								<p>
									We couldn't find the page you were looking
									for.
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
				</Layout>
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
				<Layout title={'Something went wrong'}>
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
							</div>
						</div>
					</div>
				</Layout>
			</body>
		</html>
	);
}
