import { useNavigate } from "react-router-dom"
import { Post } from "../../api/posts/types";
import { useState, useEffect} from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

interface ForChildren {
    children: React.ReactNode;
}

export const Wrapper = () => {
const navigate = useNavigate();
const [posts, setPosts] = useState<Post[]>([]);
const params = useParams();
    console.log(params);
useEffect(() => {
    (async () => {
        const response = await axios.get(
            "https://studapi.teachmeskills.by/blog/posts/?limit=10&offset=10"
        );
        if(Array.isArray(response.data.results)){
            setPosts(response.data.results);
        }
    })();
}, []); 

const redirectToPostPage = (id:number) => {
    navigate(`/posts/${id}`);
    console.log("В redirectToPostPage")
};
return (
        <div>
        {posts.map((post:Post) => ( 
            <div
                style={{cursor: "pointer"}}
                key = {post.id}
                onClick={()=>{
                    redirectToPostPage(post.id);
                }}
            >
                {post.title}
            </div>
        ))}
    </div>
)
}