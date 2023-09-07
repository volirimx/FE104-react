import { useAppSelector } from "../../redux/hook";

import styles from "./popup.module.css";

const PopUp = ({
  active,
  setActive,
  id,
  setId,
}: {
  active: boolean;
  setActive: () => void;
  id: number | null;
  setId: () => number;
}) => {
  const posts = useAppSelector((state) => state.posts.posts);
  const postIndex = posts.findIndex((post) => post.id === id);
  if (!postIndex && postIndex !== 0) {
    return;
  }

  const nextImage = () => {
    if (postIndex === posts.length - 1) return;
    setId((old: number) => old + 1);
  };
  const prevImage = () => {
    if (postIndex === 0) return;
    setId((old: number) => old - 1);
  };

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
          src={id ? posts[postIndex].image : undefined}
          alt=""
        />
        <div className={styles.nav}>
          <div className={styles.navLeft} onClick={prevImage}>
            left
          </div>
          <div className={styles.navRight} onClick={nextImage}>
            right
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
