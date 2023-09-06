export const checkPasswordsEquality = (password: string , confirmPassword: string) => {
    if (password === confirmPassword) {
       return true;
    };
    return false; 
 }