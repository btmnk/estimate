import { LocalStorageKeys } from "../../common/constants/LocalStorageKeys";

export interface GlobalState {
  username: string | undefined;
}

export const initialGlobalState: GlobalState = {
  username: localStorage.getItem(LocalStorageKeys.Username) ?? undefined,
};
