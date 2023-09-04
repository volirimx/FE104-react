import { useState, ChangeEvent, FormEvent, useContext } from "react";
import { useDispatch } from "react-redux";
import styles from "./signin.module.css";
import { UserTheme } from "../Theme/thems";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "..//../hooks/useAuth";
import { postUser } from "../../redux/user/user";
import { UserRequest } from "../../models";

export interface UserFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
interface ForDataProps {
  thems?: string;
}

export const Form = (props: ForDataProps) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<UserFormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  
  const addUserToStore = (e: FormEvent) => {
    e.preventDefault();

    if (!signin) {
      console.error("Function 'signin' is not defined.");
      return;
    }

    // Валидация формы
    if (formData.password !== formData.confirmPassword) {
      alert("Пароли не совпадают");
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
    const user = formData;
    const userX: UserRequest = {
      username: formData.name,
      email: formData.email,
      password: formData.password
    };
    console.log(userX);
    
    dispatch(postUser(userX));   

    if (user.name) {
      if (fromPage === "/posts") {
        signin(user, () => navigate(fromPage, { replace: true }));
      } else {
        signin(user, () => navigate("/success", { replace: true }));
      }
    }
    
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
        <label htmlFor="name" className={styles.form__label}>
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className={styles.form__input}
        />
      </div>
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
      <div className={styles.form__group}>
        <label htmlFor="confirmPassword" className={styles.form__label}>
          Confirm Password:
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          className={styles.form__input}
        />
      </div>
      <button
        type="submit"
        className="bg-[#2436a7] w-full p-2.5 rounded cursor-pointer my-3"
      >
        Sign up
      </button>
    </form>
  );
};
