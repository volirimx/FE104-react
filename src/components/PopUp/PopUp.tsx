import { useAppSelector } from "../../redux/hook";

import styles from "./popup.module.css";

const PopUp = ({
  active,
  setActive,
  id,
}: {
  active: boolean;
  setActive: () => void;
  id: number | null;
}) => {
  const posts = useAppSelector((state) => state.posts);
  return (
    <div
      className={styles.popUp}
      style={{
        opacity: active ? "1" : "0",
        pointerEvents: active ? "all" : "none",
      }}
      onClick={() => setActive(false)}
    >
      <div className={styles.popUpContent} onClick={(e) => e.stopPropagation()}>
        <img
          className={styles.img}
          src={id ? posts[id - 1].image : undefined}
          alt=""
        />
      </div>
    </div>
  );
};

export default PopUp;
