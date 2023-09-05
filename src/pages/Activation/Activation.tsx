import { useParams } from "react-router-dom"
import { useEffect } from 'react';
import axios from "axios";

export const Activation = () => {

    const activate = async (uid: string,token: string) => {
        const response = await axios.post('https://studapi.teachmeskills.by/auth/users/activation/',{
            uid: uid,
            token: token,
        });
        return response.data;
    };

    const { uid, token } = useParams();

    console.log(`uid: ${uid}, token: ${token}`);
    

    useEffect(() => {
        activate(uid, token)        
    },[]);

    return (
        <div>Activation Page</div>
    )
}