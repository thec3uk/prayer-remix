export type IInputProps = {
	label: string;
	name: string;
	onChange: (e: unknown) => void;
	required?: boolean;
};

export const Input = ({
	label,
	name,
	onChange,
	required = false,
}: IInputProps) => {
	return (
		<div>
			<label
				htmlFor="email"
				className="block text-sm font-medium text-gray-700 capitalize"
			>
				{label}
			</label>
			<div className="mt-1">
				<input
					type="text"
					name={name}
					required={required}
					id={`id_${name}`}
					onChange={onChange}
					className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
				/>
			</div>
		</div>
	);
};
