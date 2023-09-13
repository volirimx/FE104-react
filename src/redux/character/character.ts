import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import axios from "axios";

type SingleCharacter = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

type CharacterState = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: SingleCharacter[];
};

const initialState: CharacterState = {
  info: {
    count: 0,
    pages: 0,
    next: null,
    prev: null,
  },
  results: [],
};

export const fetchCharacters = createAsyncThunk(
  "character/fetchCharacters",
  async (searchParams: string | undefined) => {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character?${searchParams || ""}`
    );
    console.log(response);

    return response.data;
  }
);

export const characterSlice = createSlice({
  name: "character",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const {} = characterSlice.actions;

export const selectAllCharacters = (store: RootState) => store.character;

export default characterSlice.reducer;
