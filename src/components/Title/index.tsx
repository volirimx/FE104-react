import styles from "./title.module.css";
export const Title = ({ titleText }: { titleText: string }) =>{
    return(
        <div className={styles.title_container}>
            <a><h4>Back to home</h4></a>
            <div><h1>{titleText}</h1></div>
        </div>
    )
}