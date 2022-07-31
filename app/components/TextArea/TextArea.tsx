export type ITextAreaProps = {
	label: string;
	name: string;
	onChange: (e: unknown) => void;
};

export const TextArea = ({ label, name, onChange }: ITextAreaProps) => {
	return (
		<div>
			<label
				htmlFor="email"
				className="block text-sm font-medium text-gray-700 capitalize"
			>
				{label}
			</label>
			<div className="mt-1">
				<textarea
					name={name}
					id={`id_${name}`}
					required
					rows={7}
					onChange={onChange}
					className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
				/>
			</div>
		</div>
	);
};
