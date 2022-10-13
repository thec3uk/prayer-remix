import { Box, useBreakpointValue } from '@chakra-ui/react';

function LogoMark() {
	const display = useBreakpointValue({ base: 'none', lg: 'block' });
	const w = '1332';
	const h = '1154';
	const vb = `0 0 ${w} ${h}`;
	return (
		<Box
			position="absolute"
			zIndex="-1"
			marginLeft="50%"
			top="200px"
			overflowX={'hidden'}
			display={display}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={w}
				height={h}
				fill="#EBECEC"
				version="1.1"
				viewBox={vb}
			>
				<path d="M1076.93 577.011L871.479 933.019H460.513L255.043 577.011L460.513 220.981H614.03L571.633 294.389H502.906L339.78 577.011L502.906 859.633H829.09L992.193 577.011H907.311L786.671 786.084H545.373L424.663 577.011L545.325 367.938H614.048L741.468 147.432H418.076L170.161 577.011L418.076 1006.59H913.924L1119.25 650.797L1204.4 651.035L956.55 1080.45H375.446L84.9045 576.989L375.446 73.5532L870.96 73.5752L658.688 440.968L587.48 440.945L508.952 577.011L587.48 713.054H744.537L823.018 577.011L738.14 576.989L702.052 639.505H629.922L593.861 576.989L629.922 514.494H702.074L998.991 -0.00012207L332.982 0.0262451L0 576.989L333 1154H998.991L1332 576.989L1076.93 577.011Z" />
			</svg>
		</Box>
	);
}
export default LogoMark;
