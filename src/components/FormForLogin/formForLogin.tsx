import { useState, ChangeEvent, FormEvent, useContext } from "react";
import { useDispatch } from "react-redux";
import styles from "./formforlogin.module.css";
import { UserTheme } from "../Theme/thems";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { postUser } from "../../redux/user/user";
import { UserLogin } from "../../models";


interface FormForDataProps {
  email: string;
  password: string;
  thems?: string;
}

export const FormForLogin = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<FormForDataProps>({
    email: "",
    password: "",
    
  });

  
  const addUserToStore = (e: FormEvent) => {
    e.preventDefault();

    if (!signin) {
      console.error("Function 'signin' is not defined.");
      return;
    }

       // Проверка сложности пароля (можно настраивать по желанию)
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{3,}$/;
    if (!passwordPattern.test(formData.password)) {
      alert(
        "Пароль должен содержать как минимум 3 символа, включая как минимум одну строчную и одну заглавную букву и одну цифру"
      );
      return;
    }
   
    const user: UserLogin = {      
      email: formData.email,
      password: formData.password
    };
    
    
    // dispatch(postUser(userX));   

    // if (user.name) {
    //   if (fromPage === "/posts") {
    //     signin(user, () => navigate(fromPage, { replace: true }));
    //   } else {
    //     signin(user, () => navigate("/success", { replace: true }));
    //   }
    // }
    
  };

  const myThem = useContext(UserTheme);
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || "/";
  const { signin } = useAuth() ?? {};

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form
      className={`${styles.form} ${styles[myThem]}`}
      onSubmit={addUserToStore}
    >
      <div className={styles.form__group}>
        <label htmlFor="email" className={styles.form__label}>
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={styles.form__input}
        />
      </div>
      <div className={styles.form__group}>
        <label htmlFor="password" className={styles.form__label}>
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className={styles.form__input}
        />
      </div>
      <button
        type="submit"
        className="bg-[#2436a7] w-full p-2.5 rounded cursor-pointer my-3"
      >
        Login
      </button>
    </form>
  );
};
