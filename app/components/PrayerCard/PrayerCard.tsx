import { useState } from 'react';
import { flagRequest, incrementPrayerCount } from '~/api/airTableApi';
import type { IPrayerCardProps } from './PrayerCard.definition';

const PrayerCard = ({ data, id }: IPrayerCardProps) => {
	const cardClasses = data.type === 'praise' ? 'bg-blue-400' : 'bg-blue-700';
	const buttonClasses =
		data.type === 'praise' ? 'bg-blue-700' : 'bg-blue-400';
	const [counter, setCounter] = useState(data.count);
	const [feedback, setFeedback] = useState('');

	const onClick = async () => {
		if (data.id) {
			const resp = await incrementPrayerCount(data.id, counter);
			setCounter(resp);
		}
	};
	const report = async () => {
		const resp = await flagRequest(data.id);
		setFeedback(
			resp
				? 'This request has been flagged.'
				: 'Something went wrong, please contact us at prayer@thec3.uk'
		);
	};
	return (
		<>
			<div
				className={`${cardClasses} text-gray-50 shadow p-4 rounded flex flex-col font-sans justify-between`}
			>
				<h3 className="text-xl">{data.title}</h3>
				<div className="mt-4">{data.prayer}</div>
				<div className="mt-4">
					{`${data.name} ${
						data.location ? ` (${data.location})` : ''
					}`}
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
					<button disabled={!!feedback} onClick={report}>
						<span
							role="img"
							aria-label="red flag"
							title="Report this request as inappropriate"
							className="pr-2"
						>
							🚩
						</span>
					</button>
				</div>
				{feedback && (
					<p className="text-sm mt-2 bg-amber-100 text-gray-700 rounded shadow p-2">
						Thank you, we will review this request
					</p>
				)}
			</div>
		</>
	);
};

export default PrayerCard;
