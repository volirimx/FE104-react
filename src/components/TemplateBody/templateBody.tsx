import React, { useContext } from 'react';
import styles from './templateBody.module.css';
import { UserTheme } from '../Theme/thems';

interface TemplateBodyProps {
  
  title: string;
  children?: React.ReactNode;
}

export function TemplateBody(props: TemplateBodyProps) {
  const myThem = useContext(UserTheme)
  return (
    <div className={`${styles.container} ${styles[myThem]}`}>
      <h2>{props.title}</h2>
      {props.children}
    </div>
  );
}
