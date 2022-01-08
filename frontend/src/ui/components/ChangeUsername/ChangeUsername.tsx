import { TextField } from "@klarheit/textfield";
import React from "react";

import { GlobalActions } from "../../../store/Global/GlobalReducer";
import { useUsername } from "../../../store/Global/selectors/useUsername";
import { useAppDispatch } from "../../../store/store";

const ChangeUsername: React.FC = () => {
  const username = useUsername();
  const dispatch = useAppDispatch();

  const changeUsername = (value: string) => {
    const newUsername = value === "" ? undefined : value;
    dispatch(GlobalActions.setUsername(newUsername));
  };

  return (
    <div>
      <TextField label="Username" value={username} onChange={changeUsername} />
    </div>
  );
};

export { ChangeUsername };
