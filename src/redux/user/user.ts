import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import axios from 'axios';

interface UserState {
  username: string;
  email: string;
  age: number;
};

interface RegisterPayload {
  email: string;
  password: string;
  username: string;
};

const initialState: UserState = {
  username: "",
  email: "",
  age: 21,
};

export const registerUser = createAsyncThunk("user/registerUser", async (data: RegisterPayload) => {
    const response = await axios.post(
      "https://studapi.teachmeskills.by/auth/users/", 
      data,
    );

    // const fetchResponse = fetch("https://studapi.teachmeskills.by/auth/users/", 
    //   {
    //     method: "POST",
    //     body: JSON.stringify(data),
    //     headers: {
    //       Authorization: "",
    //     }
    //   }
    // );
    return response.data
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state = action.payload;
    }
    // setUser: (
    //     state,
    //     action: PayloadAction<UserState>
    // ) => {
    //     state.age=action.payload.age;
    //     state.email=action.payload.email;
    // }    
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.email = action.payload.email;
      state.username = action.payload.username;
    });
  },
})

export const { setUser } = userSlice.actions

export const selectUser = (store: RootState) => store.user;
export const selectUserEmail = (store: RootState) => store.user.email;

export default userSlice.reducer;