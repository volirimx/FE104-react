import styles from './PostPage.module.css'
import { useEffect, useState } from "react"
import axios from 'axios'
import { useParams } from 'react-router-dom';

export function PostPage() {
    const [post , setPost] = useState();
    const {id} = useParams();

    useEffect(() => {
        (async () => {
            const response = await axios.get(
                `https://studapi.teachmeskills.by/blog/posts/${id}`
            )
            setPost(response.data);
        })();
    }, [id]);
    console.log(post);
    
    return (
        <div>
            <div>{}</div>
            <img src="" alt="cat" />
            <div>{}</div>
            <div>{}</div>
        </div>
    );
}