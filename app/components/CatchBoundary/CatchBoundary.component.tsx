import { Links, Meta } from '@remix-run/react';

// TODO: Style this correctly.
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
