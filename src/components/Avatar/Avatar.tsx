import { useContext } from "react";
import styles from "./avatar.module.css";
import ContextTheme from "../../ContextTheme";

function Avatar(props: {
  username: string;
  disableBorder: boolean;
  disableBorderName: boolean;
}) {
  const { darkMode } = useContext(ContextTheme);
  return (
    <div
      className={styles.main}
      style={{
        color: darkMode ? "black" : "darkred",
        border: props.disableBorder
          ? "none"
          : darkMode
          ? "black solid 1px"
          : "darkred solid 1px",
      }}
    >
      <div>
        <div
          className={styles.icon}
          style={{
            border: props.disableBorderName
              ? "none"
              : darkMode
              ? "black solid 1px"
              : "darkred solid 1px",
          }}
        >
          {props.username.split(" ")[0][0].toUpperCase()}
          {props.username.split(" ")[1][0].toUpperCase()}
        </div>
      </div>
      <div className={styles.name}>
        <p>{props.username}</p>
      </div>
    </div>
  );
}

export default Avatar;
