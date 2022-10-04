export type brandSizes = 'sm' | 'md' | 'lg' | 'fill';

export interface IBrandingProps {
	/** Set the colour of the logo */
	color?: 'white' | 'brand';
	/** Set the size of the logo */
	size?: brandSizes;
}
