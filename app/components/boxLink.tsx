import { Link } from '@remix-run/react';

export interface IBoxLinksProps {
	to: string;
	title: string;
	alignment?: 'left' | 'right';
}

const BoxLink = ({ to, title, alignment }: IBoxLinksProps) => {
	return (
		<>
			{alignment === 'right' ? (
				<div className="bg-blue-400 right-0 ml-auto mr-0 rounded-tl rounded-bl h-6 hover:h-auto hover:bg-blue-700 transition-colors duration-300 my-4 w-max">
					<Link
						to={to}
						className="text-2xl font-sans px-4 transform -translate-y-4 block text-gray-900"
					>
						{title}
					</Link>
				</div>
			) : (
				<div className="bg-blue-400 left-0 rounded-tr rounded-br h-6 hover:h-auto hover:bg-blue-700 transition-colors duration-300 my-4 w-max">
					<Link
						to={to}
						className="text-2xl font-sans px-4 transform -translate-y-4 block text-gray-900"
					>
						{title}
					</Link>
				</div>
			)}
		</>
	);
};

export default BoxLink;
