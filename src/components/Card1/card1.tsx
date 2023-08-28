import React, { useState, ChangeEvent, FormEvent, useContext, MouseEventHandler, MouseEvent } from 'react';
import styles from './card1.module.css'
import image_like from '..//..//assets/like.png'
import image_dislike from '..//..//assets/dislike.png'
import image_symbol from '..//..//assets/symbol.png'
import image_dots from '..//..//assets/dots_three_icon.png'
import { Post } from '../../models'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites } from "..//..//redux/favorites/favorites";
import { useCardData } from "..//..//hooks/cards";


interface CardProps {
    card: Post,
    
}

export const Card1 = ({ card }: CardProps) => {
    const cards = useCardData();
    const dispatch = useDispatch();
    
    const btnAddToFavorites = (e: MouseEvent<HTMLDivElement, MouseEvent>) => {
        const myid = e.target.id;
        console.log(myid);
        
        const arrOFCards = cards.cards;     
        const elem = arrOFCards.find(({id}) => id == myid);  
        console.log(elem);
                 
        dispatch(addToFavorites(elem))
    }


    return (
      
            <div className={styles.column}>
                <div>
                    <img className={styles.image} src={card.image} alt="" />
                    <div>{card.date}</div>
                    <h1 className={styles.title}> {card.title} </h1>
                   
                    <h3 className={styles.text}> <Link to={`/posts/${card.id}`}>{card.description}</Link> </h3>
                </div>    
                
                <div className={styles.block_icon}>
                        <div className={styles.block_icon}>
                            <img className={styles.icon} src={image_like} alt="" />
                            <img className={styles.icon}src={image_dislike} alt="" />
                            
                        </div>

                        <div className={styles.block_icon}>
                            <div onClick={btnAddToFavorites}>
                                <img className={styles.icon} src={image_symbol} id={`${card.id}`} alt="" />
                            </div>
                            
                            <img className={styles.icon}src={image_dots} alt="" />
                        </div>
                       

                    
                    
                </div>
                
                
                


            </div>

            
           
       
    );
}

