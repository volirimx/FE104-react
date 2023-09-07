import { ThemeContext } from "../providers/ThemeProvider"
import { useContext } from "react";
import { useAppDispatch } from "../redux/hooks";
import { PostGrade } from "../redux/posts/posts";
import { BookmarkedGrade } from "../redux/posts/posts";
import { ratePost } from "../redux/posts/posts";
import { handleBookmark } from "../redux/posts/posts";



export const useTheme = () => {
    const value = useContext(ThemeContext);
    return value;
}
// export const handleRateButtonClick = (id: number, grade: PostGrade) => {
//     dispatch(ratePost({id, grade}));
// };  
// export const handleRateBookmarksClick = (id: number, isFavorite: BookmarkedGrade) => {
//     dispatch(handleBookmark({id, isFavorite}));
// };  