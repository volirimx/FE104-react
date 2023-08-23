// Ваш хук useCardData
import { useState, useEffect } from 'react';
import axios from 'axios';
import { CardDataResult, Post } from '../models';

export function useCardData() {
    const [cards, setCards] = useState<Post[]>([]);

    async function fetchData() {
        const response = await axios.get<CardDataResult>('https://studapi.teachmeskills.by/blog/posts/?limit=8&offset=6');

        const gettedArray: Post[] = response.data.results;
        const formattedArray = formatCardData(gettedArray); // Используем новую функцию для форматирования
        setCards(formattedArray);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return { cards };
}

// Новая функция для форматирования дат
function formatCardData(data: Post[]): Post[] {
    return data.map((el: Post) => {
        const date = new Date(el.date);
        const formattedDate = date.toLocaleDateString("en-EN", {
            year: "numeric",
            month: "short",
            day: "numeric"
        });
        return { ...el, date: formattedDate };
    });
}

