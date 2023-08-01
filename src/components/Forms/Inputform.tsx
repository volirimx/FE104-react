import styles from './inputform.module.css'

interface InputformProps {
    type: string;
}

export const InputForm = (props: InputformProps) => {
    return (
        <div>
            <div>
                Title
            </div>
            <input className={styles.input} type={props.type} placeholder='Placeholder'/>

        </div>
      
    
            
    )
}