import React, { useEffect, useState } from "react";
import { useLanguageContext } from "../../context/LanguageContext";
import {
  Link,
  NavLink,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import axios from "axios";
import { Post } from "../../api/posts/types";
import { useSelector } from "react-redux";
import { selectCount } from "../../redux/counter/counter";

interface ForChildren {
  children?: React.ReactNode;
}

export const Wrapper = ({ children }: ForChildren) => {
  const navigate = useNavigate();
  const count = useSelector(selectCount);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://studapi.teachmeskills.by/blog/posts/?limit=10&offset=10"
      );
      if (Array.isArray(response.data.results)) {
        setPosts(response.data.results);
      }
    })();
  }, []);

  const redirectToPostPage = (id: number) => {
    navigate(`${id}`);
  };

  return (
    <div>
      {count}
      <Link to="/">home</Link>
    </div>
  );
};
