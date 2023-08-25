import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { Root } from 'react-dom/client';

// Define a type for the slice state
interface UserState {
  name: string;
  email: string;
  age: number;
}

// Define the initial state using that type
const initialState: UserState = {
  name: 'Dave',
  email: 'abc@',
  age: 21,
}

export const userSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state = action.payload;
    }
  },
})

export const { setUser } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (store: RootState) => store.user;
export const selectUserEmail = (store: RootState) => store.user.email;

export default userSlice.reducer