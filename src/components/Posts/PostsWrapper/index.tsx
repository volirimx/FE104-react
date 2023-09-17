import { Outlet } from 'react-router-dom';
import {isAuthorized} from "../../../hooks/isAuthorized"
import { Navigate } from 'react-router-dom';

export const PostsWrapper = () => {
    if (isAuthorized()){
        return(        
            <div>            
                <Outlet />
            </div>
        )
    }
    else{
        return <Navigate to="/signin" />; // Перенаправляем на страницу входа, если нет токена
    }
}