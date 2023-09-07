import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import { useNavigate } from "react-router-dom";

export interface User {
  username: string;
  email: string;
  password: string;
}

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [],
};

export const thunkSendRequest = createAsyncThunk(
  "users/sendrequest",
  async (payload: User) => {
    const response = await axios.post(
      "https://studapi.teachmeskills.by/auth/users/",
      payload
    );
    const navigate = useNavigate();
    if (response.status == 201) {
      navigate("/activation");
    }
    return response.data;
  }
);

export const thunkSwitchAccessToken = createAsyncThunk(
  "users/switchAccessToken",
  async (refreshToken: string | null) => {
    const response = await axios.post(
      "https://studapi.teachmeskills.by/auth/jwt/refresh/",
      {
        refresh: refreshToken,
      }
    );
    localStorage.setItem("accessToken", response.data.access);
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        thunkSendRequest.fulfilled,
        (state, action: PayloadAction<User>) => {
          action.payload;
        }
      )
      .addCase(thunkSwitchAccessToken.fulfilled, (state, action) => {
        {
          action.payload;
        }
      });
  },
});

export default userSlice.reducer;
