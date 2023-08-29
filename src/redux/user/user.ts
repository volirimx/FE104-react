import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { act } from 'react-dom/test-utils';

// Define a type for the slice state
interface UserState {
    username: string;
    email: string;
    age: number;
}

// Define the initial state using that type
const initialState: UserState = {
    username: "Bob",
    email: "ozelini15@mail.ru",
    age: 21,
};

export const userSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: initialState,
  reducers: {
    // setUser: (
    //     state,
    //     action: PayloadAction<UserState>
    // ) => {
    //     state.age=action.payload.age;
    //     state.email=action.payload.email;
    //     state.username=action.payload.username;
    // }
    setUser: (state, action: PayloadAction<UserState>) => {
        state = action.payload;
    }
  },
})

export const { setUser } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (store: RootState) => store.user;
export const selectUserEmail = (store: RootState) => store.user.email;


export default userSlice.reducer;