// TODO: migrate to layouts structure
import BoxLink from '../components/boxLink';

const Menu = () => {
	return (
		<div className="hidden md:block">
			<BoxLink title="View prayers" alignment="right" to="/list" />
			<BoxLink
				title="Request another prayer"
				alignment="right"
				to="/request"
			/>
		</div>
	);
};

const PrayerSubmittedPage = () => {
	return (
		<div>
			<div className="w-screen md:w-full bg-gray-600 text-gray-50 px-4 py-2 text-lg font-sans shadow mb-24">
				Your prayer has been stored
			</div>
			<div className="relative md:hidden">
				<BoxLink title="View prayers" alignment="right" to="/list" />
				<BoxLink
					title="Request another prayer"
					alignment="right"
					to="/request"
				/>
			</div>
		</div>
	);
};

export default PrayerSubmittedPage;
