import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addItem: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.items.push(action.payload);
    },
    increamentQuantity: (state, action) => {
      state.items.forEach((elem) => {
        elem.id === action.payload.id ? (elem.quantity += 1) : "";
      });
    },
    decrementQuantity: (state, action) => {
      let quantityFlag = false; // to check if the item has quantity 1 or not
      state.items.map((elem) => {
        if (elem.quantity > 1) {
          elem.id === action.payload.id ? (elem.quantity -= 1) : elem;
        } else {
          quantityFlag = true;
        }
      });
      if (quantityFlag) {
        state.items = state.items.filter(
          (elem) => elem.id !== action.payload.id
        );
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((elem) => elem.id !== action.payload.id);
    },
    removeAllItems: (state, action) => {
      state.items = [];
    },
    increaseQuantityCart: (state, action) => {
      state.items.forEach((elem) => {
        if (elem.id === action.payload.id) {
          elem.quantity = action.payload.quantity;
        }
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addItem,
  increamentQuantity,
  decrementQuantity,
  removeItem,
  increaseQuantityCart,
  removeAllItems,
} = cartSlice.actions;

export default cartSlice.reducer;
