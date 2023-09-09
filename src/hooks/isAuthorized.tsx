import { selectAccessToken } from "../redux/tokens/tokens";
import { useAppSelector } from "../redux/hooks";

export function isAuthorized(){
    const accessToken = useAppSelector(selectAccessToken);
    if (!accessToken || accessToken === "") {
        return false;
    }  
    else{
        return true;
    }  
}
