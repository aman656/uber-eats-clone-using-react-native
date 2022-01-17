import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], restName: "" },
  reducers: {
    addItem: (state, action) => {
      if (action.payload.item.checked) {
        state.items.push(action.payload.item);
        state.restName = action.payload.name;
        console.log("Added");
      } else {
        state.items = state.items.filter(
          (f) => f.name !== action.payload.item.name
        );
        console.log("Removed");
      }
    },
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice;
