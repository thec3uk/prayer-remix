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
		<Flex flexDir={{ base: 'column', md: 'row' }} gap={8}>
			<FormControl>
				<FormLabel>Location</FormLabel>
				<Select
					w={{ base: 'inherit', md: 'sm' }}
					onChange={e =>
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
					onChange={val =>
						setFilters({ type: val, location: filters.location })
					}
				>
					<Stack direction={{ base: 'column', md: 'row' }}>
						<Radio value={'prayer'}>Prayer</Radio>
						<Radio value={'praise'}>Praise</Radio>
						<Radio value={'both'}>Both</Radio>
					</Stack>
				</RadioGroup>
			</FormControl>
		</Flex>
	);
}

export default Filters;
