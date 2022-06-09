import * as React from 'react';
import './layout.css';
import { ChevronLeftIcon } from '@heroicons/react/solid';
import { useLayoutContext, LayoutContextProvider } from '../context/layout';
import { Link } from '@remix-run/react';

const InnerLayout = ({ children }: { children: React.ReactNode }) => {
	const { layout } = useLayoutContext();
	return (
		<>
			<div className="absolute insert-0 h-screen font-serif flex flex-col justify-between items-start pt-28 pb-32 bg-gray-50">
				<div className="mx-4">
					<h1 className="text-6xl mb-6">{layout?.title}</h1>
					{layout?.showsubTitle && (
						<Link
							to={'/about'}
							className="text-xl underline uppercase font-sans"
						>
							The Tim Creamer Prayer Room
						</Link>
					)}
				</div>
				{children}
			</div>
			{!layout?.isHome && (
				<Link
					to={'/'}
					className="fixed bottom-0 shadow border bg-gray-50 z-50"
				>
					<ChevronLeftIcon className="h-12 w-12 text-gray-900" />
				</Link>
			)}
		</>
	);
};

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<LayoutContextProvider>
			<InnerLayout>{children}</InnerLayout>
		</LayoutContextProvider>
	);
};

export default Layout;
