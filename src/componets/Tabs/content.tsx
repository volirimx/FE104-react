// import styles from './tabs.module.css';
// import { useState } from 'react';
// import { User } from '../UserName/userName';

// // type ContentMode = 'all' | 'myFavorites' | 'popular';

// interface Tab {
//   text: string;
//   //   plug: ;

//   //   mode: ContentMode;
// }

// export const Tab = ({ text }: Tab) => {
//   const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

//   const toggleIsMenuOpened = () => {
//     setIsMenuOpened(!isMenuOpened);
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.burger} onClick={toggleIsMenuOpened}>
//         <div
//           className={`${styles.burgerLine} ${
//             isMenuOpened ? styles.opennedLine : ''
//           }`}
//         ></div>
//         <div
//           className={`${styles.burgerLine} ${
//             isMenuOpened ? styles.closedLine : ''
//           }`}
//         ></div>
//         <div
//           className={`${styles.burgerLine} ${
//             isMenuOpened ? styles.closedLine : ''
//           }`}
//         ></div>
//       </div>
//       {text}
//     </div>
//   );
// };
