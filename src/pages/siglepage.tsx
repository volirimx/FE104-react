import { Button } from "../components/Button_primary/button";
import { useSingleCard } from "../hooks/singlecard";
import style from "./singlepage.module.css";
import { useNavigate } from "react-router-dom";

export const Singlepage = () => {
  const card = useSingleCard();
  const navigate = useNavigate();
  const goPosts = () => navigate("/posts");

  return (
    <>
      <div className={style.container}>
        <div>
          <div>{card.card?.date}</div>
          <div>{card.card?.author}</div>
          <div>{card.card?.description}</div>
          <div>{card.card?.id}</div>
          <div>{card.card?.lesson_num}</div>
          <div>{card.card?.text}</div>
          <div>{card.card?.title}</div>
        </div>
        <div>
          <img className={style.image} src={card.card?.image} alt="" />
        </div>
      </div>
      <div className={style.button}>
        <Button content="Go to posts" mode="primary" onClick={goPosts} />
      </div>
    </>
  );
};
