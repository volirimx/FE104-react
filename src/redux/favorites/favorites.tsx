import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store';
import { Post } from "..//../models";


// Define the initial state using that type
const initialState: Post[] = [];

export const favoritesSlice = createSlice({
  name: 'favorites',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {     
    addToFavorites: (state, action: PayloadAction<Post>) => {
      const card = action.payload;
      console.log(card);
      console.log(state.length);
      
      
      // начинаем с проверки на длину массива
      if (state.length) {
        // создаем переменную для проверки элемента в массиве избранного
        const isExist = state.some(r => r.id === card.id);
        // если существует, то находим индекс
        if (isExist) {
          const index = state.findIndex(item => item.id === card.id)
          
          

          // если индекс не минус 1, то есть элемент существует, то удаляем его
          // если же элемента нет, то пушим
          if (index !== -1) {
            state.splice(index, 1)
            } else {
              state.push(card)
           }   
          } else {
            state.push(card)
          }  
      }
       else {
        state.push(card)
      }     
    },
    
  },
})

export const { addToFavorites } = favoritesSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectFavorites = (state: RootState): Post[] => state.favorites;

export default favoritesSlice.reducer