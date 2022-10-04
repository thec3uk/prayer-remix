import { Box } from '@chakra-ui/react';
import type { IBrandingProps, brandSizes } from './Branding.definition';

function Branding({ color, size = 'lg' }: IBrandingProps) {
	const brandSize: Record<brandSizes, [number | string, number | string]> = {
		lg: [100, 100],
		md: [80, 80],
		sm: [50, 50],
		fill: ['100%', '100%'],
	};

	return (
		<Box>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={brandSize[size][0]}
				height={brandSize[size][1]}
				fill={color === 'white' ? 'white' : '#393A4B'}
				version="1.1"
				viewBox="0 0 7874 7874"
			>
				<g id="__x0023_Layer_x0020_1">
					<metadata id="CorelCorpID_0Corel-Layer" />
					<polygon points="5189,3937 4563,5021 3311,5021 2685,3937 3311,2853 3779,2853 3650,3076 3440,3076 2943,3937 3440,4798 4434,4798 4931,3937 4672,3937 4305,4574 3569,4574 3202,3937 3569,3300 3779,3300 4167,2629 3182,2629 2426,3937 3182,5245 4692,5245 5318,4162 5577,4162 4822,5470 3052,5470 2167,3937 3052,2404 4561,2404 3915,3523 3698,3523 3459,3937 3698,4351 4176,4351 4415,3937 4157,3937 4047,4127 3827,4127 3717,3937 3827,3747 4047,3747 4047,3747 4952,2180 2922,2180 1908,3937 2923,5694 4952,5694 5966,3937 " />
				</g>
			</svg>
		</Box>
	);
}
export default Branding;
