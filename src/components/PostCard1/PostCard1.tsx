import "./PostCard1.css";
import { useEffect, useState } from "react";

export function PostCard1() {
  const src = "https://studapi.teachmeskills.by/blog/posts/?limit=10&offset=0";
  const [articles, setArticles] = useState("asdsad");
  useEffect(() => {
    fetch(src)
      .then((dataTest) => {
        const data = dataTest.json();
        return data;
      })
      .then((data) => {
        setArticles(data);
      });
  }, []);

  return (
    <div>
      <h1>Ничего не работает</h1>
    </div>
    // <div>
    //   <h1>{articles.id}</h1>
    //   <h1>{articles.image}</h1>
    //   <h1>{articles.text}</h1>
    //   <h1>{articles.date}</h1>
    //   <h1>{articles.lesson_num}</h1>
    //   <h1>{articles.title}</h1>
    //   <h1>{articles.author}</h1>
    // </div>
  );
}
