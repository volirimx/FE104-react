import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import axios from 'axios';

interface SignInData {
  email: string;
  password: string;
}

export interface tokensState {
  accessToken: string;
}

const initialState: tokensState = {
  accessToken: "",
};

const saveRefreshTokenToLocalStorage = (refreshToken: string) => {
  localStorage.setItem('refreshToken', refreshToken);
}

export const saveTokens = createAsyncThunk('tokens/saveTokens', async (data: SignInData) => {
  const response = await axios.post(
    "https://studapi.teachmeskills.by/auth/jwt/create/",
    data,
  );
  const tokens = response.data;
  saveRefreshTokenToLocalStorage(tokens.refresh);
  return tokens.access; // Возвращаем только accessToken
});

export const updateToken = createAsyncThunk("tokens/updateToken", async (refreshTokenFromLS: string) => {
  try {
    const response = await axios.post(
      "https://studapi.teachmeskills.by/auth/jwt/refresh/",
      {
        refresh: `${refreshTokenFromLS}`,
      }
    );
    console.log(response.data.access);
    return response.data.access; // Обновляем только accessToken
  } 
  catch (error) {
    console.error("Ошибка при выполнении Axios-запроса:", error);
    throw error;
  }
});

export const accessTokenSlice = createSlice({
  name:  "accessToken",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(saveTokens.fulfilled, (state, action) => {
      state.accessToken = action.payload;
    });
    builder.addCase(updateToken.fulfilled, (state, action) => {
      state.accessToken = action.payload;
    });
  },
});

export const selectAccessToken = (store: RootState) => store.accessToken.accessToken;

export default accessTokenSlice.reducer;
