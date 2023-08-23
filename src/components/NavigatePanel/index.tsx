import { User } from '../User/index.tsx';
import styles from './index.module.css';
import dark from './../../assets/icons/dark.png';
import light from './../../assets/icons/light.svg';

export const NavigatePanel = (props: { name: string }) => {
    return (
        <div className={styles.container}>
            <div>
                {props.name.length > 0 ? <User name={props.name} /> : null}
            </div>
            <div className={styles.item}>Home</div>
            <div>Add post</div>
            <div className={styles.footer}>
                <div>
                    <div className={styles.imgContainer}>
                        <img src={light}></img>
                    </div>
                    <div className={styles.imgContainer}>
                        <img src={dark}></img>
                    </div>
                </div>
                <div></div>
            </div>
        </div>

    )
}