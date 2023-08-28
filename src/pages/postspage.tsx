import { Tabs } from "../components/Tabs/tabs";
import { Card1 } from "../components/Card1/card1";
import { Card2 } from "../components/Card2/card2";
import { useCardData } from '../hooks/cards';
import styles from './postspage.module.css';


export const Postspage = () => {
    const { cards } = useCardData();
    
     
    return (
        <>
            <Tabs title="BLOG"/>

            <div className={styles.bigBlock}>
                
                <div className={styles.containerStyle}>
                    {cards.map(card => (
                        <Card1 
                        card={card}
                        key={card.id}
                    />                   
                    ))}
                </div>

                
                <div className={styles.containerStyle2}>
                    {cards.map(card => (
                        <Card2 
                        card={card}
                        key={card.id}
                    />                   
                    ))}
                </div>
                    
                

            </div>

            
        </>
    );
};
