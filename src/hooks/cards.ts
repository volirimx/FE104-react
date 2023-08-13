import { useState, useEffect } from 'react';
import axios from 'axios'
import { CardDataResult } from '../models'




export function useCardData() {
    const [element, setElement] = useState<CardDataResult>([]);
    const [formattedDate, setFormattedDate] = useState<string>("");

    async function fetchData() {
        const response = await axios.get<CardDataResult>('https://studapi.teachmeskills.by/blog/posts/8/');
        setElement(response.data);

        const date = new Date(response.data.date);
        const formattedDate = date.toLocaleDateString("en-EN", {
            year: "numeric",
            month: "short",
            day: "numeric"
        });
        setFormattedDate(formattedDate);
    }

    useEffect(() => {
        fetchData();
    }, []);
    return { element, formattedDate }
}