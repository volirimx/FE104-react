import styles from './magnifier.module.css'
import magnifier from '../../../assets/images/magnifier.svg'

export const Magnifier = (props: any) => {
   return (
      <img src={magnifier} className={`${styles.magnifier} ${props.className}`}/>
   )
}