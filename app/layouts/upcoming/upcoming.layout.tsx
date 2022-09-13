import Layout from '~/components/Layout';
import type { IPrayerMeetupPageProps } from './upcoming.definition';

const UpcomingLayout = ({
	groupCallEnabled,
	buttonText,
}: IPrayerMeetupPageProps) => {
	return (
		<Layout title={'join a meetup'}>
			<div>
				<div
					className={`w-screen px-4 py-2 ${
						groupCallEnabled ? 'mb-12' : 'mb-24'
					} font-sans text-lg bg-gray-600 shadow md:w-full text-gray-50`}
				>
					See upcoming prayer meetups
				</div>
				{groupCallEnabled && (
					<div className="flex justify-center">
						<div className="w-screen px-4 mb-8 text-lg font-extrabold text-center text-black md:w-full md:p-3 md:shadow md:m-4 md:bg-gray-50">
							<h2 className="w-full mb-4 text-2xl text-left underline">
								Group Prayer
							</h2>
							<a href="https://zoom.us/j/6218249928?pwd=MnhyenA2clIrS0IwNEZ5b3hGMldMZz09">
								<h3 className="block w-full p-4 text-gray-900 capitalize transform bg-blue-400 border border-gray-900 rounded shadow hover:border-gray-50 hover:translate-y-px hover:shadow-sm hover:bg-blue-500 hover:text-gray-100 ">
									{buttonText}
								</h3>
							</a>
						</div>
					</div>
				)}
			</div>
		</Layout>
	);
};

export default UpcomingLayout;
