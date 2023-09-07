import { useState, ChangeEvent, FormEvent, useContext } from "react";
import { useDispatch } from "react-redux";
import styles from "./formforlogin.module.css";
import { UserTheme } from "../Theme/thems";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { UserLogin } from "../../models";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { UserAfterLogin } from "../../models";
import type { RootState } from "../../redux/store";

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
      password: formData.password,
    };

    // dispatch(postUser(userX));

    if (user.email) {
      if (fromPage === "/mylogin") {
        dispatch(postToTokens(formData));
        signin(user, () => navigate(fromPage, { replace: true }));
      } else {
        dispatch(postToTokens(formData));
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

  
  
  // Later, dispatch the thunk as needed in the app

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

export const postToTokens = createAsyncThunk("post/postToTokens", async (formData) => {
  try {
    const response = await axios.post(
      "https://studapi.teachmeskills.by/auth/jwt/create/",
      formData
    );
    console.log(response.data);
    localStorage.setItem('refreshToken', `${response.data.refresh}`);
    return response;
  } catch (error) {
      console.error("Ошибка при выполнении Axios-запроса:", error);
      throw error;
  }    
});

const initialState: UserAfterLogin = {
  email: "",
  loginUser: null,
  accessToken: '',
};

export const postSlice = createSlice({
  name: 'loginUser',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(postToTokens.fulfilled, (state, action) => {
      // Add user to the state array
      console.log("OKKKKKKK");
      
      state.accessToken = action.payload.data.access; 
      
      
      
    })
  },
})

export const userLoginData = (state: RootState) => state;

export default postSlice.reducer;
