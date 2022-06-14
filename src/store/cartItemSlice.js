/*
* 작성자 : 김소영
* 장바구니 상품의 정보를 담고있는 slice 파일입니다.
* 업데이트 : 2022-06-14
*/

import { createSlice } from "@reduxjs/toolkit";

// cartItem : 장바구니 아이템의 정보를 담고있는 어레이

let cartItem = createSlice({
  name: 'cartItem',
  initialState: [

  ],
  reducers: {

    // Cart.js 파일에서 장바구니 아이템의 수량을 변경하는 함수입니다.
    // action.payload로 장바구니 아이템의 id값을 전달받습니다.

    plus(state, action) {
      state[action.payload].count++;
    },
    minus(state, action) {
      if (state[action.payload].count > 1) {
        state[action.payload].count--;
      }
    },

    // ProductInfo.js 파일에서 장바구니 담기 버튼 클릭시 동작합니다.
    // action.payload로 { id, title, price, count } 값을 가지고 있는 오브젝트를 전달받습니다.
    // 동일 제품이 담겼을 경우 수량만 +1 됩니다.

    addItem(state, action) {
      const checkItem = state.findIndex((item) => item.id === action.payload.id);
      if (checkItem === -1) {
        state.push(action.payload);
      } else {
        state[checkItem].count++;
      }
    },

    // Cart.js 파일에서 삭제 버튼 클릭시 동작합니다.
    // action.payload로 해당 아이템의 id값을 전달받습니다.

    deleteItem(state, action) {
      const index = state.findIndex((item) => item.id === action.payload)
      state.splice(index, 1);
    }
  }
})

export let { plus, minus, addItem, deleteItem } = cartItem.actions;


export default cartItem;