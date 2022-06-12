import { createSlice } from "@reduxjs/toolkit";


let cartItem = createSlice({
  name : 'cartItem',
  initialState : [
    
  ],
  reducers : {
    plus(state, action){
      state[action.payload].count++ ;
    },
    minus(state, action){
      if(state[action.payload].count > 1){
        state[action.payload].count--;
      }
    },
    newItem(state, action){
      state.push(action.payload)
    },

  } 
})

export let { plus, minus, newItem } = cartItem.actions;


export default cartItem;