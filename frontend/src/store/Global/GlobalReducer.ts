import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { LocalStorageKeys } from "../../common/constants/LocalStorageKeys";
import { initialGlobalState } from "./GlobalState";

const GlobalSlice = createSlice({
  name: "global",
  initialState: initialGlobalState,
  reducers: {
    setUsername(state, action: PayloadAction<string | undefined>) {
      if (action.payload) {
        localStorage.setItem(LocalStorageKeys.Username, action.payload);
      } else {
        localStorage.removeItem(LocalStorageKeys.Username);
      }

      state.username = action.payload;
    },
  },
});

export const GlobalReducer = GlobalSlice.reducer;
export const GlobalActions = GlobalSlice.actions;
