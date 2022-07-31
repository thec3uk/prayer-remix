import { useState, useEffect } from 'react';
import type { IPrayer } from '~/routes';
import Card from '../components/card';

export interface IPrayerCardProps {
	data: IPrayer;
	id: string;
}
const PrayerCard = ({ data, id }: IPrayerCardProps) => {
	const [hasPrayed, setHasPrayed] = useState(0);

	const cardClasses = data.type === 'praise' ? 'bg-blue-400' : 'bg-blue-700';
	const buttonClasses =
		data.type === 'praise' ? 'bg-blue-700' : 'bg-blue-400';

	useEffect(() => {
		const pData = JSON.parse(
			window.localStorage.getItem(data.type) as string
		);
		setHasPrayed(pData && pData[id] ? pData[id] : 0);
	}, [data, id]);

	const onClick = () => {
		const newCount = Number(hasPrayed) + 1;
		setHasPrayed(newCount);
		const pData = JSON.parse(
			window.localStorage.getItem(data.type) as string
		);

		window.localStorage.setItem(
			data.type,
			JSON.stringify({
				...pData,
				[id]: newCount as unknown as string,
			})
		);
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
						)}{' '}
						{hasPrayed}
					</button>
				</div>
			</div>
		</Card>
	);
};

export default PrayerCard;
