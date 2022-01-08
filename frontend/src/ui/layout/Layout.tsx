import React from "react";

import { Profile } from "../components/Profile/Profile";

import styles from "./Layout.css";

const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Profile className={styles.headerItem} />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export { Layout };
