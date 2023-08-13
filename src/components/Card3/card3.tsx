import styles from './card3.module.css'
import image_like from '..//..//assets/like.png'
import image_dislike from '..//..//assets/dislike.png'
import image_symbol from '..//..//assets/symbol.png'
import image_dots from '..//..//assets/dots_three_icon.png'
import { useCardData } from '../../hooks/cards'





export const Card3 = () => {

    const { element, formattedDate} = useCardData();

    return (
        <div className={styles.block}>
            <div className={styles.column}>
                <div>
                    <div>{formattedDate}</div>
                    <h1 className={styles.title}> {element.title} </h1>
                </div>
                
                
                <div>
                    <img className={styles.icon} src={image_like} alt="" />
                    <img className={styles.icon}src={image_dislike} alt="" />
                </div>


            </div>

            <div className={`${styles.column} ${styles.view}`}>

                <img className={styles.image} src={element.image} alt="" />

                <div className={styles.elements}>

                    <img className={styles.icon}src={image_symbol} alt="" />
                    <img className={styles.icon}src={image_dots} alt="" />

                </div>

                
            </div>
           
        </div>
    );
}

