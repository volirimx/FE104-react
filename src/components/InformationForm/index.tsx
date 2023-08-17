import { Button } from '../Button';
type InfoForm = {
    content: string;
    buttonContent: string;
}

export const InformationForm = ({ content, buttonContent }: InfoForm) => {
    return (
        <div>
            <p>{content}</p>
            <Button mode='primary' content={buttonContent} />
        </div>
    )
}