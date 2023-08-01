import styles from './userName.module.css';

interface UserProps {
  userName: string;
}

export const User = ({ userName }: UserProps) => {
  return (
    <div className={styles.username}>
      <div className={styles.shortName}>
        <p>{getInitials(userName)}</p>
      </div>{' '}
      {userName}
    </div>
  );
};

//функция првых 2-х букв
const getInitials = (username: string) =>
  username
    .split(' ')
    .map((item) => item[0].toUpperCase())
    .join('');
