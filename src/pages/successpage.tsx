import { Title } from "../components/Title/title";
import { TemplateBody } from "../components/TemplateBody/templateBody";
import { Button } from "../components/Button_primary/button";



export const Successpage = () => {
    return (
        <>
        <Title title="Success"/>
        <TemplateBody title={`Email confirmed \nYour registration is completed`}>
            <Button content="Go to posts" mode="primary"/>

        </TemplateBody>
     
        </>
        
    )
}