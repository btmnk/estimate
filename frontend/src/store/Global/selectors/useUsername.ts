import { useGlobalState } from "./useGlobalState";

export const useUsername = (): string | undefined => {
  return useGlobalState().username;
};
