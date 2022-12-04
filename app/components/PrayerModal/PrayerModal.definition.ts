export interface IPrayerModalProps {
	prayer: string;
	name: string;
	location: string;
	bgColor: string;
	isOpen: boolean;
	onClose: () => void;
}
