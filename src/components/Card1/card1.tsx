import styles from './card1.module.css'
import image_like from '..//..//assets/like.png'
import image_dislike from '..//..//assets/dislike.png'
import image_symbol from '..//..//assets/symbol.png'
import image_dots from '..//..//assets/dots_three_icon.png'
import { Post } from '../../models'
import { Link } from 'react-router-dom';


interface CardProps {
    card: Post,
    
}

export const Card1 = ({ card }: CardProps) => {
   
      

    return (
      
            <div className={styles.column}>
                <div>
                    <div>{card.date}</div>
                    <h1 className={styles.title}> {card.title} </h1>
                    <img className={styles.image} src={card.image} alt="" />
                    <h3 className={styles.text}> <Link to={`/posts/${card.id}`}>{card.description}</Link> </h3>
                </div>    
                
                <div className={styles.block_icon}>
                        <div className={styles.block_icon}>
                            <img className={styles.icon} src={image_like} alt="" />
                            <img className={styles.icon}src={image_dislike} alt="" />
                            
                        </div>

                        <div className={styles.block_icon}>
                            <img className={styles.icon}src={image_symbol} alt="" />
                            <img className={styles.icon}src={image_dots} alt="" />
                        </div>
                       

                    
                    
                </div>
                
                
                


            </div>

            
           
       
    );
}

