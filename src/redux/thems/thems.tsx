import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store';


export const themSlice = createSlice({
  name: 'them',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: {
    currentThem: 'light'
  },
  reducers: {     
    changeThemToDark: (state) => {      
      state.currentThem = 'dark';       
    },  
    changeThemToLight: (state) => {      
      state.currentThem = 'light';       
    },     
  },
})

export const { changeThemToLight, changeThemToDark } = themSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUserThem = (state: RootState) => state.them.currentThem;

export default themSlice.reducer