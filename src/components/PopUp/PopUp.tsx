import { SetStateAction } from "react";
import { useAppSelector } from "../../redux/hook";

import styles from "./popup.module.css";

const PopUp = ({
  active,
  setActive,
  id,
  setId,
}: {
  active: boolean;
  setActive: (arg: boolean) => void;
  id: number | null;
  setId: React.Dispatch<SetStateAction<number>>;
}) => {
  const posts = useAppSelector((state) => state.posts.posts);
  const postIndex = posts.findIndex((post) => post.id === id);
  if (!postIndex && postIndex !== 0) {
    return;
  }

  const nextImage = () => {
    if (postIndex === posts.length - 1) return;
    setId((old) => old + 1);
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
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z" />
            </svg>
          </div>
          <div className={styles.navRight} onClick={nextImage}>
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
