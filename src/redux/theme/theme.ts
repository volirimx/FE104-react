import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface ThemeMode {
  mode: 'dark' | 'light'
}

const initialState: ThemeMode = {
  mode: 'light',
}
  
export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state, action: PayloadAction<ThemeMode>) => {
      state.mode === 'light' ? state.mode = 'dark' : state.mode = 'light'
      // state.mode = state.mode === 'light' ? 'dark' : 'light'; 
    }
  },
})

export const { toggleTheme } = themeSlice.actions

export const selectTheme = (state: RootState) => state.theme

export default themeSlice.reducer