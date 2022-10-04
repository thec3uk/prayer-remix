export type IMeetup = {
	start_time: string;
	end_time: string;
	name: string;
	location: {
		join_url: string;
		type: string;
	};
	event_type: {
		scheduling_url: string;
	};
};
export type IMeetupCardProps = {
	node: IMeetup;
};
