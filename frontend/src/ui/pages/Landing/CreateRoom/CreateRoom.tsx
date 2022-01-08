import React from "react";
import { Button } from "@klarheit/button";

import { useUsername } from "../../../../store/Global/selectors/useUsername";
import { ChangeUsername } from "../../../components/ChangeUsername/ChangeUsername";

import styles from "./CreateRoom.css";

const CreateRoom: React.FC = () => {
  const username = useUsername();

  return (
    <div className={styles.container}>
      <ChangeUsername />
      <Button disabled={!username}>Create room</Button>
    </div>
  );
};

export { CreateRoom };
