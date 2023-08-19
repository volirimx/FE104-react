import { Title } from "../components/Title/title";
import { TemplateBody } from "../components/TemplateBody/templateBody";
import { Button } from "../components/Button_primary/button";
import { useNavigate } from "react-router-dom";

export const Successpage = () => {
    const navigate = useNavigate();
    const goPosts = () => navigate('/posts');

    

    return (
        <>
        <Title title="Success"/>
        <TemplateBody title={`Email confirmed \nYour registration is completed`}>
            <Button content="Go to posts" mode="primary" onClick={goPosts}/> 
        </TemplateBody>
        </>
    );
};
