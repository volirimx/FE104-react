import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store';
import { User } from "../../models";


// Define the initial state using that type
const initialState: User = {
  name: '',
  email: '',
 
}

export const postUser = createAsyncThunk("post/postUser", async () => {
  const response = await axios.post('https://studapi.teachmeskills.by/auth/users/')
}


)

export const userSlice = createSlice({
  name: 'user',
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
      state.name = '';
      state.email = '';
      // state.password = '';
      // state.confirmPassword = '';
    }    
  },
})

export const { setUser, clearUser } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer