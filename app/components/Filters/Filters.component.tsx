import {
	Flex,
	FormControl,
	FormLabel,
	Select,
	RadioGroup,
	Stack,
	Radio,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import type { IFilterOptions, IFiltersProps } from './Filters.definition';

function Filters({ locations, onChange, initialFilters }: IFiltersProps) {
	const [filters, setFilters] = useState<IFilterOptions>(initialFilters);
	useEffect(() => {
		onChange(filters);
	}, [onChange, filters]);
	return (
		<Flex flexDir={{ base: 'column', lg: 'row' }} gap={8}>
			<FormControl>
				<FormLabel>Location</FormLabel>
				<Select
					w={{ base: 'inherit', lg: 'sm' }}
					onChange={(e: any) =>
						setFilters({
							location: e.target.value,
							type: initialFilters.type,
						})
					}
					value={initialFilters.location}
				>
					<option key="all" value="all">
						All Locations
					</option>
					{locations.map(l => (
						<option key={l.name} value={l.name}>
							{l.name}
						</option>
					))}
				</Select>
			</FormControl>
			<FormControl>
				<FormLabel>Prayer / Praise</FormLabel>
				<RadioGroup
					value={initialFilters.type}
					onChange={(val: any) =>
						setFilters({ type: val, location: filters.location })
					}
				>
					<Stack direction={{ base: 'column', md: 'row' }}>
						<Radio size={'lg'} value={'prayer'}>
							Prayer
						</Radio>
						<Radio size={'lg'} value={'praise'}>
							Praise
						</Radio>
						<Radio size={'lg'} value={'both'}>
							Both
						</Radio>
					</Stack>
				</RadioGroup>
			</FormControl>
		</Flex>
	);
}

export default Filters;
