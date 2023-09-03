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
    toggleToDark: (state, action: PayloadAction<ThemeMode>) => {
      state.mode = 'dark'
    },
    toggleToLight: (state, action: PayloadAction<ThemeMode>) => {
      state.mode = 'light'
    }
  },
})

export const { toggleToDark, toggleToLight } = themeSlice.actions

export const selectTheme = (state: RootState) => state.theme

export default themeSlice.reducer