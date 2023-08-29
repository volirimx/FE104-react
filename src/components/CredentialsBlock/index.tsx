import React from "react";
import styles from "./index.module.css";

export const CredentialsBlock = React.memo(({ summ }: { summ: number }) => {
  return (
    <div className={styles.container}>
      <span className={styles.credentials}>DS</span>
      <span className={styles.credentials}>{summ}</span>
      <span className={styles.fullName}>Denis Smirnov</span>
    </div>
  );
});
