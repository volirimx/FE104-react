import React from 'react';
import styles from './templateBody.module.css';

interface TemplateBodyProps {
  thems: string;
  title: string;
  children?: React.ReactNode;
}

export function TemplateBody(props: TemplateBodyProps) {
  return (
    <div className={`${styles.container} ${styles[props.thems]}`}>
      <h2>{props.title}</h2>
      {props.children}
    </div>
  );
}
