import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import axios from "axios";

// Define a type for the slice state
interface UserState {
  username: string;
  email: string;
  age: number;
}

// Define the initial state using that type
const initialState: UserState = {
  username: "",
  email: "",
  age: 21,
};

type RegisterPayload = {
  email: string;
  password: string;
  username: string;
};

// type RegisterResponse = {
//   email: string;
//   id: number;
//   username: string;
// };

//http://localhost:5137/activate/Njk4MA/btt4k4-2b87797f066a750e44f7e72899dce20d

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (data: RegisterPayload) => {
    const response = await axios.post(
      "https://studapi.teachmeskills.by/auth/users/",
      data
    );
    return response.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.email = action.payload.email;
      state.username = action.payload.username;
    });
  },
});

export const { setUser } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (store: RootState) => store.user;
export const selectUserEmail = (store: RootState) => store.user.email;

export default userSlice.reducer;
