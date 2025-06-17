import type { User } from '~/services/User.definition';
import type { IUserProfile } from "~/types/global.definition";

export interface IManagePreferencesProps {
    profile: IUserProfile,
    user: User,
}
