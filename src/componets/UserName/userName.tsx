import styles from './userName.module.css';

type UserProps = {
  userName: string;
  isMenuOpened?: boolean;
};

export const User = ({ userName, isMenuOpened }: UserProps) => {
  return isMenuOpened ? (
    <div className={styles.username}>
      <div className={styles.shortName}>
        <p>{getInitials(userName)}</p>
      </div>{' '}
      {userName}
    </div>
  ) : (
    <></>
  );
};

//функция првых 2-х букв
const getInitials = (username: string) =>
  username
    .split(' ')
    .map((item) => item[0].toUpperCase())
    .join('');

export default User;
