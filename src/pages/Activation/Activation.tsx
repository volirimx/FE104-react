import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from 'react';
import axios from "axios";

export const Activation = () => {
    const { uid, token } = useParams();
    const navigate = useNavigate();

    type ActivationParams = {
        uid: string;
        token: string;
    };

    useEffect(() => {
        if (uid && token) {
            (async () => {
                const response = await axios.post('https://studapi.teachmeskills.by/auth/users/activation/',{
                    uid,
                    token,
                });
                if (response.status === 204) {
                    navigate('/success');
                } else {
                    alert('Something went wrong...')
                }
                // return response.data;
            })();
        };    
    }, [uid,token]);
    return (
        <>
            <h1 className='text-[40px]'>Activation is processing right now.</h1>
            <p className='text-[26px]'>Please be patient.</p>
        </>
    )
}