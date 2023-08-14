import styles from './card1.module.css'
import image_like from '..//..//assets/like.png'
import image_dislike from '..//..//assets/dislike.png'
import image_symbol from '..//..//assets/symbol.png'
import image_dots from '..//..//assets/dots_three_icon.png'
import { useCardData } from '../../hooks/cards'
import { CardDataResult } from '../../models'

interface CardProps {
    card: CardDataResult
}

export const Card1 = ({ card }: CardProps) => {

    return (
        <div className={styles.block}>
            <div className={styles.column}>
                <div>
                    <div>{card.date}</div>
                    <h1 className={styles.title}> {card.title} </h1>
                    <h3 className={styles.text}> {card.description} </h3>
                </div>
                
                
                <div>
                    <img className={styles.icon} src={image_like} alt="" />
                    <img className={styles.icon}src={image_dislike} alt="" />
                </div>


            </div>

            <div className={`${styles.column} ${styles.view}`}>

                <img className={styles.image} src={card.image} alt="" />

                <div className={styles.elements}>

                    <img className={styles.icon}src={image_symbol} alt="" />
                    <img className={styles.icon}src={image_dots} alt="" />

                </div>

                
            </div>
           
        </div>
    );
}

