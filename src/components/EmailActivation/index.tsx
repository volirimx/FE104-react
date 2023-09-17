import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { SuccessSignUp } from "../../pages/SuccesSignUp";

export const EmailActivation = () => {
    const {uid, token} = useParams();

    useEffect(() => {
        if(uid && token){
            (async () => {
                const response = await axios.post(
                    "https://studapi.teachmeskills.by/auth/users/activation/",
                    {uid, token}
                );
                console.log(response);
            })();
        }        
    }, [token, uid]);

    return (<SuccessSignUp/>);
}

export default EmailActivation;

