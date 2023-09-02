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
    setTheme: (state, action) => action.payload,
  },
})

export const { setTheme } = themeSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectThemeMode = (state: RootState) => state.theme.mode

export default themeSlice.reducer