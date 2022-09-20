import { useState } from 'react';
import { incrementPrayerCount } from '~/api/airTableApi';
import Card from '../card';
import type { IPrayerCardProps } from './PrayerCard.definition';

const PrayerCard = ({ data, id }: IPrayerCardProps) => {
	const cardClasses = data.type === 'praise' ? 'bg-blue-400' : 'bg-blue-700';
	const buttonClasses =
		data.type === 'praise' ? 'bg-blue-700' : 'bg-blue-400';
	const [counter, setCounter] = useState(data.count);

	const onClick = async () => {
		if (data.id) {
			const resp = await incrementPrayerCount(data.id, counter);
			setCounter(resp);
		}
	};
	const report = async () => {
		window.location.href = 'mailto:prayer@thec3.uk';
	};
	return (
		<div
			className={`${cardClasses} text-gray-50 shadow p-4 rounded flex flex-col font-sans justify-between`}
		>
			<h3 className="text-xl">{data.title}</h3>
			<div className="mt-4">{data.prayer}</div>
			<div className="mt-4">
				{`${data.name} ${data.location ? ` (${data.location})` : ''}`}
			</div>
			<div className="flex flex-row justify-between mt-4">
				<button
					className={`capitalize p-2 border text-gray-100 rounded hover:bg-blue-500 font-sans flex flex-row ${buttonClasses}`}
					onClick={onClick}
				>
					{data.type === 'praise' ? (
						<span
							role="img"
							aria-label="party popper"
							className="pr-2"
						>
							🎉
						</span>
					) : (
						<span
							role="img"
							aria-label="folded hands"
							className="pr-2"
						>
							🙏
						</span>
					)}
					{counter > 0 ? counter : ''}
				</button>
				<button onClick={report}>
					<span role="img" aria-label="red flag" className="pr-2">
						🚩
					</span>
				</button>
			</div>
		</div>
	);
};

export default PrayerCard;
