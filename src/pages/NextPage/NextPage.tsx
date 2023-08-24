import { Button } from "../../components/Button";
import { useNavigate } from 'react-router-dom'
import styles from './NextPage.module.css'
import { HamburgerBtn } from "../../components/HamburgerBtn";
import { Username } from "../../components/Username";
import { useEffect, useState } from "react";
import axios from 'axios'
import { Post } from "../../api/posts/types";

const Lupa = ({styles}: {styles: string}) => (
    <svg className={styles} fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 512 512" xmlSpace="preserve">
<g>
	<g>
		<path d="M278.718,0C150.086,0,45.435,104.65,45.435,233.282c0,55.642,19.592,106.789,52.228,146.928L0,477.872L34.128,512
			l97.663-97.663c40.137,32.635,91.284,52.228,146.926,52.228C407.35,466.565,512,361.914,512,233.282S407.35,0,278.718,0z
			 M278.718,418.299c-102.018,0-185.017-82.999-185.017-185.017S176.699,48.265,278.718,48.265s185.017,82.999,185.017,185.017
			S380.736,418.299,278.718,418.299z"/>
	</g>
</g>
</svg>);

export function NextPage() {
    const navigate = useNavigate();
    const [post, setPost] = useState<Post[]>([]);

    useEffect(() => {
        (async () => {
            const response = await axios.get(
                'https://studapi.teachmeskills.by/blog/posts/?limit=10&offset=10'
            );
            if(Array.isArray(response.data.results)) {
                setPost(response.data.results);
            }
        })();
    }, []);

    return (
        <div>
            <div className={styles.header}>
                <HamburgerBtn />
                <div className={styles.search}>
                    <div className={styles.searchImg}>
                        <Lupa styles={styles.lupa}/>
                    </div>
                </div>
                <Username className={styles.user} user='Artem Malkin'/>
            </div>
            <h1 className={styles.result}>Search results for " "</h1>
            <div className={styles.cardMenu}>
                {post.map((post) => (
                    <div className={styles.card} onClick={() => {navigate(`/nextPage/${post.id}`)}}>
                        <h2>{post.author}</h2>
                        <img className={styles.image} src={post.image} alt="n" />
                    </div>
                ))}
            </div>
            <Button mode='Primary' text='Back' isDisabled={false} onClick={() => {navigate('/')}} />
        </div>
    );
}