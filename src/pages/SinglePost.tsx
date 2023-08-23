import React, { useState, useEffect } from "react";
import { Post } from "../api/posts/types";
import { getPostById } from "../api/posts/requests";
import { useParams } from "react-router-dom";

export const SinglePost = () => {
    const { postId } = useParams();
    console.log(postId);
    const [post, setPost] = useState<Post>();

    useEffect(() => {
        const parsedPostId = parseInt(`${postId}`);
        console.log("dnoidboi")
        if (!isNaN(parsedPostId)) { 
            getPostById({
                postId: parsedPostId,
                onSuccess: (data) => {
                    setPost(data);
                },
            });
        }
    }, []);
    

    console.log(post);

    if (!post) return null;
    return (
        <div>
            <h1>{post?.title}</h1>
            <p>{post?.text}</p>
        </div>
    );
}
