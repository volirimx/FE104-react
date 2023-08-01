import styles from './button.module.css';


export const Button = (props: any) => {
   const mode = styles[props.mode] || '';
  return (
      <button className={`${styles.button} ${mode}`} disabled={props.disabled}>{props.name}</button>
  );
}
