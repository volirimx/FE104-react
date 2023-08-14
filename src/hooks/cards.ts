import { useState, useEffect } from 'react';
import axios from 'axios'
import { CardDataResult } from '../models'



export function useCardData() {
    const [cards, setCards] = useState<CardDataResult[]>([]);
    const [formattedDate, setFormattedDate] = useState<string>("");

    async function fetchData() {
        const response = await axios.get<CardDataResult[]>('https://studapi.teachmeskills.by/blog/posts/?limit=2');

        const gettedArray:CardDataResult[] = response.data.results;
        gettedArray.map((el:CardDataResult) => {
            const date = new Date(el.date);
            const formattedDate = date.toLocaleDateString("en-EN", {
            year: "numeric",
            month: "short",
            day: "numeric"
                         });
            el.date = formattedDate;
            return el;
        })
        
        setCards(gettedArray);

        
    }

    useEffect(() => {
        fetchData();
        
        
    }, []);
    return { cards }
}
