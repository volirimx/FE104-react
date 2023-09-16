import { useState, useEffect } from "react";
import axios from "axios";
import { Post } from "../models";
import { useParams } from "react-router-dom";

export function useSingleCard() {
  const [card, setCard] = useState<Post | null>(null);
  const { id } = useParams();

  async function fetchData() {
    try {
      const response = await axios.get<Post>(
        `https://studapi.teachmeskills.by/blog/posts/${id}`
      );
      const gettedCard: Post = response.data;
      const date = new Date(gettedCard.date);
      const formattedDate = date.toLocaleDateString("en-EN", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });

      setCard({ ...gettedCard, date: formattedDate }); // Обновляем состояние card
    } catch (error) {
      console.error("Error fetching data:", error);
      setCard(null);
    }
  }

  useEffect(() => {
    fetchData();
  }, [id]);

  return { card };
}
