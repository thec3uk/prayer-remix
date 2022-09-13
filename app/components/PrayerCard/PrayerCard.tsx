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
	return (
		<Card title={data.title} classes={cardClasses}>
			<div className="flex flex-col justify-start w-full space-y-2 font-sans">
				<div className="whitespace-pre-line md:h-20 md:overflow-y-scroll">
					{data.prayer}
				</div>
				<div className="flex flex-row items-end justify-between">
					<div className="flex flex-row">{data.name}</div>
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
				</div>
			</div>
		</Card>
	);
};

export default PrayerCard;
