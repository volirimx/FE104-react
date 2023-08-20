import { Button } from "../components/Button_primary/button";
import { TemplateBody } from "../components/TemplateBody/templateBody";
import { Title } from "../components/Title/title";
import { useNavigate } from "react-router-dom";



export const Homepage = () => {
    const navigate = useNavigate();
    const goSignIn = () => navigate('/login')
    return (
        <>
        <Title title=""/>
        <TemplateBody title="Welcome to our site" >
            <Button content="Sign In" mode='primary' onClick={goSignIn}/>
        </TemplateBody>
        </>
        
    )
}