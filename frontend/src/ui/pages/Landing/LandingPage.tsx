import React from "react";

import { CreateRoom } from "./CreateRoom/CreateRoom";

import styles from "./LandingPage.css";

const LandingPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <CreateRoom />
    </div>
  );
};

export default LandingPage;
