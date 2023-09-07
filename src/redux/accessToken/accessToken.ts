import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export interface accessTokenState {
  accessToken: string;
};

const initialState: accessTokenState = {
  accessToken: "",
};

export const saveAccessTokenToStore = createAsyncThunk('accessToken/saveAccessTokenToStore',
    async (accessToken: string) => {
      return accessToken;
    }
);
export const accessTokenSlice = createSlice({
  name: "accessToken",
  initialState: initialState,
  reducers: {
        setAccess: (state, action: PayloadAction<accessTokenState>) => {
          state.accessToken = action.payload.accessToken;
        }
  },
  extraReducers: (builder) => {
    builder.addCase(saveAccessTokenToStore.fulfilled, (state, action) => {
      state.accessToken = action.payload;
    });
  },
})

export const { setAccess } = accessTokenSlice.actions

export const selectAccess = (store: RootState) => store.accessToken.accessToken;

export default accessTokenSlice.reducer;