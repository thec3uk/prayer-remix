import * as React from 'react';
import './layout.css';
import { ChevronLeftIcon } from '@heroicons/react/solid';
import { Link } from '@remix-run/react';

export interface ILayoutProps {
	seoTitle?: string;
	title: string;
	showsubTitle: boolean;
	children: React.ReactNode;
	menu: React.ReactNode;
	isHome: boolean;
}

const Layout = ({
	seoTitle = 'Tim Creamer Prayer Room',
	title,
	showsubTitle,
	children,
	menu,
	isHome = false,
}: ILayoutProps) => {
	return (
		<>
			<div className="absolute flex flex-row w-screen font-serif insert-0 bg-gray-50 ">
				<div className="flex flex-col items-start justify-start w-screen h-screen min-h-screen overflow-y-hidden pt-28 md:min-w-min md:w-1/5 md:border-r md:shadow">
					<div className="px-4">
						<h1 className="mb-6 text-6xl text-gray-900">{title}</h1>
						{showsubTitle && (
							<Link
								to={'/about'}
								className="font-sans text-xl text-gray-900 underline uppercase"
							>
								The Tim Creamer Prayer Room
							</Link>
						)}
					</div>
					<div className="block overflow-y-scroll md:hidden">
						{children}
					</div>
					<div className="w-full my-auto md:block">{menu}</div>
					<p className="m-4 font-sans text-sm">
						If you have any issues using this site then please
						contact{' '}
						<a
							href="mailto:prayer@thec3.uk"
							className="text-blue-700 underline select-all"
						>
							prayer@thec3.uk
						</a>
					</p>
				</div>
				<div className="hidden md:block md:w-4/5 md:bg-pattern">
					<div className="h-screen overflow-scroll">{children}</div>
				</div>
			</div>
			{!isHome && (
				<Link to={'/'} className="fixed top-0 border shadow bg-gray-50">
					<ChevronLeftIcon className="w-12 h-12 text-gray-900" />
				</Link>
			)}
		</>
	);
};

export default Layout;
