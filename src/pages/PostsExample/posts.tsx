import {fetchPosts, selectAllPosts} from "../../redux/posts/posts"
import {useAppSelector, useAppDispatch} from "../../redux/hooks"
import Post from "./post"
import {PostGrade, ratePost} from "../../redux/posts/posts"

export const Posts = () => {
    const posts = useAppSelector(selectAllPosts);
    const dispatch = useAppDispatch();

    const handleRateButtonClick = (id: number, grade: PostGrade) => {
        dispatch(ratePost({id, grade}));
    };  

    return (
        <div>
            {posts.map((post) => (
                <Post 
                    post={post} 
                    key={post.id}
                    handleRatePost={handleRateButtonClick}
                />
            ))}
        </div>
    );
}
export default Posts;