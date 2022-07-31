import BoxLink from '../boxLink';

export type ILink = {
	label: string;
	url: string;
};
export type IMenuProps = {
	links: Array<ILink>;
};

export const Menu = ({ links }: IMenuProps) => {
	return (
		<div className="block md:block">
			{links.map((link, idx) => (
				<BoxLink
					key={idx}
					title={link.label}
					alignment="right"
					to={link.url}
				/>
			))}
		</div>
	);
};
