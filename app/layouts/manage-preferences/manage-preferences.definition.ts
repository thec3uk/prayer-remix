import type { User } from '~/services/User.definition';
import type { ISetting } from "~/types/global.definition";

export interface IManagePreferencesProps {
    settings: ISetting[],
    user: User,
}
