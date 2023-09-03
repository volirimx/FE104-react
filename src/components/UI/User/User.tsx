import styles from './user.module.css' 

type User = {
   userName: string;
   className?: string; 
}

export const User = ({userName, className}: User) => {
   const initials = getUserInitials({userName});
   return (
      <div className={`w-[200px] h-[70px] bg-[#2436a7] flex items-center justify-around ${className}`}>
         <div className={`w-[50px] h-[50px] bg-[#5463ca] text-[24px] text-[white] flex items-center justify-center`}>{initials}</div>
         <div className='text-[white] text-[18px]'>{userName}</div>
      </div>
   );
};

const getUserInitials = ({userName}: User) => {
   const arrOfUserName: string[] = userName.split(' ');
   const userInitialsArr: string[] = arrOfUserName.map(word => word[0]);
   const userInitials: string = userInitialsArr.join('')
   return userInitials;
}