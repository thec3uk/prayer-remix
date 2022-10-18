import { NavLink } from '@remix-run/react';
import type { CSSProperties } from 'react';
import type { IMenuLinkProps } from './MenuLink.definition';

function MenuLink({ text, to: href, onClick }: IMenuLinkProps) {
	const styles = (isActive: boolean): CSSProperties => {
		let styles: CSSProperties = {
			fontWeight: 'bold',
			textTransform: 'uppercase',
		};
		if (isActive) {
			styles.color = '#F05356';
		}
		return styles;
	};
	return (
		<NavLink
			to={href}
			style={({ isActive }) => styles(isActive)}
			onClick={onClick}
		>
			{text}
		</NavLink>
	);
}

export default MenuLink;
