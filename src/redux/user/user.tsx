import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { User, UserRequest } from "../../models";
import axios from "axios";

export const postUser = createAsyncThunk(
  "post/postUser",
  async (userData: UserRequest) => {
    try {
      // Отправляем данные на сервер
      const response = await axios.post(
        "https://studapi.teachmeskills.by/auth/users/",
        userData
      );

      // Верните данные ответа, если необходимо
      return response.data;
    } catch (error) {
      // Обработка ошибок
      throw error;
    }
  }
);
// http://studapi.teachmeskills.by//activate/Njk5OQ/bu2d0g-0a3674fd53e3cf4a4d509d25eba4e186
// Define the initial state using that type
const initialState: User = {
  name: "",
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      // console.log('Current state:', state); // Выводим state в консоль
      // console.log('action.payload:', action.payload); // Выводим action.payload в консоль
      state.name = action.payload.name;
      state.email = action.payload.email;
      // state.password = action.payload.password;
      // state.confirmPassword = action.payload.confirmPassword;
      // return { ...state, ...action.payload };
    },
    clearUser: (state) => {
      state.name = "";
      state.email = "";
      // state.password = '';
      // state.confirmPassword = '';
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
